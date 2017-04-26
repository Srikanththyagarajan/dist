// Module for the OMX Link service

angular.module("webcoreModule", ["config"])

    .service("omxLinkService", ["$http", "$q", "commonConfig", function ($http, $q, config) {
        var self = this;
        /**
         * Generic method for fetching data from OMXLink
         * @param conf the $http configuration
         * @param successCallback the callback passed from the directive or whatever
         */


        /**
         * Private method to us in transformResponse if needed to remove the '@' sign from the attributes in the json
         * @param instruments an array with instruments.
         * @returns {*} the modified array of instruments.
         */
        this.removeAtSign = function (instruments) {
            function removeS(ins) {
                if (angular.isArray(ins)) {
                    for (var i in ins) {
                        removeS(ins[i]);
                    }
                } else {
                    for (var attr2 in ins) {
                        if (angular.isObject(ins[attr2])) {
                            removeS(ins[attr2]);
                        }
                        var obj2 = ins[attr2];
                        delete ins[attr2];
                        var key = attr2.substr(1);    // remove @
                        ins[key] = obj2;
                    }
                }
            }
            removeS(instruments);
            return instruments;
        };

        self.getData = function (query) {
            var defer = $q.defer();
            var fullQuery = {
                "method": "GET",
                "json" : 1,
                "callback": 'JSON_CALLBACK'
            };
            angular.extend(fullQuery, query);
            $http.jsonp(config.proxyURLRealtime, { params: fullQuery })
                .then(function (response) {
                    defer.resolve(response);
                })["catch"](function() {
                    defer.reject("Something went wrong while receiving data");
                });
            return defer.promise;
        };

    }])

    //------------------------------
    // COMMON FACTORY
    .factory("webcore", ["$q", "$http", "commonConfig", function ($q, $http, config) {

        function getXmlParams(data) {
            var xml = "<post>\n";
            for (var i in data) {
                if (typeof (data[i]) == "object") {
                    if ("Instrument" == i || "InstrumentISIN" == i || "List" == i || "Lang" == i || "MarketCode" == i || "LegalEntity" == i || "InstrumentType" == i) {
                        xml += '<param name="' + i + '" value="' + data[i] + '"/>\n';
                    }
                    if ("Market" == i || "Unit" == i) {
                        jQuery.each(data[i], function (key, val) {
                            xml += '<param name="' + i + '" value="' + val + '"/>\n';
                        });
                    }
                } else {
                    xml += '<param name="' + i + '" value="' + data[i] + '"/>\n';
                }
            }
            if (!data["ext_source"]) {
                xml += '<param name="app" value="' + location["hostname"] + "/" + location["pathname"] + '"/>\n';
            }
            xml += "</post>";
            return xml;
        }

        return {
            postRequestProxy: function (url, params) {
                if (!params)
                    params = {};
                // redirect request to a local proxy if specified
                if (config.useLocalProxy) {
                    // add url param for a local proxy
                    angular.extend(params, { url: url });
                    url = config.localProxyUrl;
                }
                var deferred = $q.defer();
                $http({
                    method: "POST",
                    url: url,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    data: $.param(params)
                }).then(function (response) {
                    deferred.resolve(response);
                })
                ["catch"](function (e) {
                    deferred.reject(e);
                });
                return deferred.promise;
            },

            /* Gets the current date in iso format and adds the values if exists.
              usage: getISODate(); - todays date in format yyyy-mm-dd
              getISODate(0,-3,0); - todays date subtracting 3 month in format as above
              getISODate(0,0,-1,true); - Get latest working day, mon-fri.
            */
            getISODate: function( yearAdd, monthAdd, dateAdd, lastWeekDay ) {
                var dateString = "";
                var date = new Date();
                if ( yearAdd != null || yearAdd != undefined ) {
                    date.setFullYear( date.getFullYear() + yearAdd );
                }
                if ( monthAdd != null || monthAdd != undefined ) {
                    date.setMonth( date.getMonth() + monthAdd );
                }
                if ( dateAdd != null || dateAdd != undefined ) {
                    date.setDate( date.getDate() + dateAdd );
                }
                if ( lastWeekDay == true ) {
                    if ( date.getDay() == 0 ) { //sunday
                        date.setDate( date.getDate() -2 );
                    } else if ( date.getDay() == 6 ) {	//satday
                        date.setDate( date.getDate() -1 );
                    }
                }
                dateString += date.getFullYear() + "-";
                dateString += ((date.getMonth()+1) < 10 )?"0":"";
                dateString += (date.getMonth()+1) + "-";
                dateString += (date.getDate() < 10 )?"0":"";
                dateString += date.getDate();
                return dateString;
            },

            createQuery: function (actionInput, marketInput, localInput) {
                var resultObject = {};
                for (var i in actionInput) {
                    resultObject[i] = actionInput[i];
                }
                for (var j in marketInput) {
                    resultObject[j] = marketInput[j];
                }
                for (var k in localInput) {
                    resultObject[k] = localInput[k];
                }
                return getXmlParams(resultObject);
            },

            createJSONQuery: function (action, market, local) {
                var resultObject = {};
                for (var i in action) {
                    resultObject[i] = action[i];
                }
                for (var j in market) {
                    resultObject[j] = market[j];
                }
                for (var k in local) {
                    resultObject[k] = local[k];
                }
                resultObject.json = 1;
                return getXmlParams(resultObject);
            },

            formatISODate: function (date) {
                var dateString = "";
                dateString += date.getFullYear() + "-";
                dateString += ((date.getMonth() + 1) < 10) ? "0" : "";
                dateString += (date.getMonth() + 1) + "-";
                dateString += (date.getDate() < 10) ? "0" : "";
                dateString += date.getDate();
                return dateString;
            },

            getUTCIntradayMorning: function () {
                var date = new Date();
                return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 7, 0, 0, 0);
            },

            getUTCIntradayEvening: function () {
                var date = new Date();
                return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 19, 0, 0, 0);
            },

            getDateFromString: function (dateString, isDateTime) {
                if (isDateTime && dateString.substr(11, 2) != "" && dateString.substr(14, 2) != "" && dateString.substr(17, 2) != "") {
                    return new Date(parseInt(dateString.substr(0, 4)), parseInt(this.removeLeadingZero(dateString.substr(5, 2))) - 1, parseInt(this.removeLeadingZero(dateString.substr(8, 2))), parseInt(this.removeLeadingZero(dateString.substr(11, 2))), parseInt(this.removeLeadingZero(dateString.substr(14, 2))), parseInt(this.removeLeadingZero(dateString.substr(17, 2))), 0);
                } else {
                    return new Date(parseInt(dateString.substr(0, 4)), parseInt(this.removeLeadingZero(dateString.substr(5, 2))) - 1, parseInt(this.removeLeadingZero(dateString.substr(8, 2))));
                }
            },

            fixInstrument: function(instr) {
                return instr.replace('+','%2B');
            },

            removeLeadingZero: function (str) {
                if (str.substr(0, 1) == "0") {
                    return str.substr(1);
                }
                return str;
            },

            marketAction: function () {
                return {
                    avista: {
                        SubSystem: "Prices",
                        Action: "GetInstrument",
                        inst__a: "0,1,2,5,21,23",
                        ext_xslt: "avista_table.xsl"
                    },
                    getInstrument: {
                        SubSystem: "Prices",
                        Action: "GetInstrument",
                        inst__a: "0,1,2,5,21,23",
                        Exception: "false",
                        ext_xslt: "inst_table.xsl"
                    },
                    getChangeData: {
                        SubSystem: "History",
                        Action: "GetChangeData",
                        Instrument: null,
                        ext_xslt: "hi_changedata_table.xsl"
                    },
                    getIndexInstrument: {
                        SubSystem: "Prices",
                        Action: "GetIndexInstruments",
                        inst__a: "0,1,2,5,21,23",
                        ext_xslt: "inst_table.xsl"
                    },
                    getDerivates: {
                        SubSystem: "Prices",
                        Action: "GetDerivatives",
                        inst__a: "0,1,2,5,21,23",
                        ext_xslt: "inst_table.xsl"
                    },
                    search: {
                        SubSystem: "Prices",
                        Action: "Search",
                        inst__a: "0,1,2,21,23",
                        ext_xslt: "inst_table.xsl"
                    },
                    getMarket: {
                        Exchange: "NMF",
                        SubSystem: "Prices",
                        Action: "GetMarket",
                        inst__a: "0,1,2,5,21,23",
                        ext_xslt: "inst_table.xsl"
                    },
                    risersAndFallers: {
                        SubSystem: "Prices",
                        Action: "WinnersAndLosers",
                        Max: 4,
                        inst__a: "0,1,2,5,21,23,10",
                        ext_xslt: "inst_table.xsl"
                    },
                    risers: {
                        SubSystem: "Prices",
                        Action: "Winners",
                        Max: 8,
                        inst__a: "0,1,2,5,21,37,10",
                        ext_xslt: "inst_table.xsl"
                    },
                    fallers: {
                        SubSystem: "Prices",
                        Action: "Losers",
                        Max: 8,
                        inst__a: "0,1,2,5,21,37,10",
                        ext_xslt: "inst_table.xsl"
                    },
                    getHighestTurnover: {
                        SubSystem: "Prices",
                        Action: "GetHighestTurnover",
                        Max: 8,
                        inst__a: "0,1,2,5,21,109,108,34,141,10",
                        ext_xslt: "inst_table.xsl"
                    },
                    mostTraded: {
                        SubSystem: "Prices",
                        Action: "GetMostTraded",
                        Max: 8,
                        inst__a: "0,1,2,21,5,34,33,23,10,108",
                        ext_xslt: "inst_table.xsl"
                    },
                    unusualVolume: {
                        SubSystem: "Prices",
                        Action: "GetUnusualVolume",
                        Max: 8,
                        inst__a: "0,1,2,5,37,34,140,23,10",
                        ext_xslt: "inst_table.xsl"
                    },
                    getIssuers: {
                        SubSystem: "OMXWeb",
                        Action: "GetIssuers"
                    },
                    getIndexInstruments: {
                        SubSystem: "Prices",
                        Action: "GetIndexInstruments",
                        inst__a: "0,1,2,5,21,23",
                        ext_xslt: "inst_table.xsl"
                    },
                    getIssuer: {
                        SubSystem: "Issuer",
                        Action: "GetIssuer",
                        source: 'OMX',
                        issuer__e: "0"
                    },
                    getOrderDepth: {
                        SubSystem: "Prices",
                        Action: "GetInstrument",
                        Exchange: "NMF",
                        trd__a: "7,8",
                        inst__e: "1,3,6,7,8",
                        inst__a: "0,1,2,3,5,6,7,10,12,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,86,87,88,91,97,98,99,100,108,72,51,68,82,54,115,90,66,84,119,120",
                        ext_xslt: "inst_orderdepth_table.xsl"
                    },
                    getTrades: {
                        SubSystem: "Prices",
                        Action: "GetTrades",
                        Exchange: "NMF"
                    },
                    getInstrumentByISIN: {
                        SubSystem: "Prices",
                        Action: "GetInstrumentByISIN",
                        Exchange: "NMF",
                        inst__a: "1,2,3,104,23,24,37,21,34,52,5,114",
                        inst__e: "7",
                        ext_xslt: "inst_table.xsl"
                    },
                    getInstrumentByName: {
                        SubSystem: "Prices",
                        Action: "GetInstrumentByName",
                        Exchange: "NMF",
                        inst__a: "1,2,3,104,23,24,37,21,34,52,5,114",
                        inst__e: "7",
                        ext_xslt: "inst_table.xsl"
                    },
                    getDataSeries: {
                        SubSystem: "History",
                        Action: "GetDataSeries",
                        AppendIntraDay: "no",
                        Instrument: null,
                        FromDate: null,
                        ToDate: null,
                        hi__a: "0,1,2,4,21,8,10,11,12",
                        ext_xslt: "hi_table.xsl"
                    },
                    searchNews: {
                        SubSystem: "News",
                        Action: "Search",
                        NewsFeed: "OMXLINK",
                        Lang: "en",
                        LegalEntity: "1",
                        Max: "25",
                        msg__a: "0,1,2,3,4,5,6,7,8,9,10,11",
                        msg__e: "0,2,3,",
                        Issuer: null,
                        Instrument: null,
                        Type: "11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,142,145,146,147,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,50,51,52,53,54,143,148,149,150,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,75,76,77,78,79,144,151,152,153,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248"
                    },
                    getCurrency: {
                        SubSystem: "Prices",
                        Action: "GetMarket",
                        Market: "CURRENCY",
                        Exchange: "NMF",
                        inst__a: "0,1,2,37,10,86",
                        ext_xslt: "inst_table.xsl"
                    }
                }
            }()
        }
    }]);