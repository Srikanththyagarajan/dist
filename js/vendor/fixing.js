angular.module("fixing", ["config", "webcoreModule"])

    .service("fetchFixing", ["$q", "omxLinkService", function ($q, omxLinkService) {
        var queries = {
            stibor: {
                "SubSystem": "Prices",
                "Action": "GetMarket",
                "Exchange": "NMF",
                "Market": "GITS:ST:STOFX",
                "inst.an": "id,nm,fnm,ltp,ltd,i",
                "inst.e": "1",
                "Aggregate": "false",
                "MaxLevels": "6"
            },
            bankCertificates: {
                "SubSystem": "Prices",
                "Action": "GetMarket",
                "Exchange": "NMF",
                "Market": "GITS:ST:STOFX",
                "inst.an": "id,nm,fnm,ap,updt,i",
                "Aggregate": "false",
                "ShowZero": true
            },
            swap: {
                "SubSystem": "Prices",
                "Action": "GetMarket",
                "Exchange": "NMF",
                "Market": "GITS:ST:STOFX", //"46",
                "inst.an": "id,nm,fnm,ltp,ltd,i",
                "inst.e": "1",
            },
            treasury: {
                "SubSystem": "Prices",
                "Action": "GetMarket",
                "Exchange": "NMF",
                "Market": "GITS:ST:STOFX", //"46",
                "inst.an": "id,nm,fnm,ltp,ltd,i"
            }
        };

        function processStibor(response) {
            var allInstruments = $(response.market.instruments);
            var filteredInstruments = [];
            for (var i = 0; i < allInstruments.length; i++) {
                var instrument = allInstruments[i];
                if (instrument["@i"] >= 7781 && instrument["@i"] <= 7786) {
                    filteredInstruments.push(instrument);
                }
            }
            var data = [];
            $(filteredInstruments).each(function (i) {
                var cName = filteredInstruments[i]["@fnm"];
                var cLast = filteredInstruments[i]["@ltp"];
                var cDate = filteredInstruments[i]["@ltd"].substr(0, 10);
                var stcon, lfbbc, stnor, stshb, stseb, stswb;
                if (filteredInstruments[i].pd.pl != 'undefined') {
                    $(filteredInstruments[i].pd.pl).each(function (x, pl) {
                        if (pl["@am"] == "st") {
                            stswb = pl["@a"];
                        } else if (pl["@am"] == "STSEBA") {
                            stseb = pl["@a"];
                        } else if (pl["@am"] == "STSHBA") {
                            stshb = pl["@a"];
                        } else if (pl["@am"] == "STNORA") {
                            stnor = pl["@a"];
                        } else if (pl["@am"] == "CODDBA") {
                            stcon = pl["@a"];
                        } else if (pl["@am"] == "STSWBA") {
                            stswb = pl["@a"];
                        } else if (pl["@am"] == "STLFBA") {
                            lfbbc = pl["@a"];
                        }
                    });
                }
                data.push({
                    cName: cName,
                    cLast: parseFloat(cLast),
                    cDate: cDate,
                    stcon: parseFloat(stcon),
                    lfbbc: parseFloat(lfbbc),
                    stnor: parseFloat(stnor),
                    stshb: parseFloat(stshb),
                    stseb: parseFloat(stseb),
                    stswb: parseFloat(stswb)
                });
            });
            return data;
        }

        function processSwap(data) {
            var res = [];
            var ins = data.market.instruments;
            angular.forEach(ins, function (item) {
                var row = {};
                if (!item['@nm'].startsWith("SEK SWAP"))
                    return;
                row['ltp'] = parseFloat(item['@ltp']);
                row['ltd'] = item['@ltd'].substr(0, 10);
                row['fnm'] = item['@fnm'];
                row['order'] = parseInt(item['@nm'].replace("SEK SWAP", ""));
                res.push(row);
            });
            return res;
        }

        function processTreasury(data) {
            var res = [];
            var ins = data.market.instruments;
            angular.forEach(ins, function (item) {
                var row = {};
                if (!(item['@nm'].startsWith("RGKB") || item['@nm'].startsWith("SSV")))
                    return;
                row['ltp'] = parseFloat(item['@ltp']);
                row['ltd'] = item['@ltd'].substr(0, 10);
                row['fnm'] = item['@fnm'];
                // define order
                switch (item['@id']) {
                    case "XSSESSV_90_GF":
                        row['order'] = 1;
                        break;
                    case "XSSESSV_180_GF":
                        row['order'] = 2;
                        break;
                    case "XSSERGKB_2YF_GF":
                        row['order'] = 3;
                        break;
                    case "XSSERGKB_3YF_GF":
                        row['order'] = 4;
                        break;
                    case "XSSERGKB_5YF_GF":
                        row['order'] = 5;
                        break;
                    case "XSSERGKB_10YF_GF":
                        row['order'] = 6;
                        break;
                }
                res.push(row);
            });
            return res;
        }

        function processBankCertificates(data) {
            var res = [];
            var allInstruments = data.market.instruments;
            var filteredInstruments = [];
            for (var i = 0; i < allInstruments.length; i++) {
                var instrument = allInstruments[i];
                if (instrument["@fnm"].indexOf("Bank Certificate") != -1) {
                    filteredInstruments.push(instrument);
                }
            }
            var one = [];
            var two = [];
            var three = [];
            var six = [];
            for (var i = 0; i < filteredInstruments.length; i++) {
                var instrument = filteredInstruments[i];
                if (instrument["@fnm"].indexOf("1M") != -1) {
                    one.push(instrument);
                }
                if (instrument["@fnm"].indexOf("2M") != -1) {
                    two.push(instrument);
                }
                if (instrument["@fnm"].indexOf("3M") != -1) {
                    three.push(instrument);
                }
                if (instrument["@fnm"].indexOf("6M") != -1) {
                    six.push(instrument);
                }
            }
            var grouped = [one, two, three, six];

            $(grouped).each(function (i, item) {
                var month = (i + 1);
                if (month === 4) {
                    month = 6;
                }
                var name = "Bank Certificates " + month + "M";
                var date, ddb, lfb, nor, seb, shb, swb;
                $(item).each(function (i, instr) {
                    if (instr["@nm"].indexOf("DDBBC") != -1) {
                        ddb = instr["@ap"];
                        if (instr["@updt"].length >= 10)
                            date = instr["@updt"].substr(0, 10);
                    }
                    if (instr["@nm"].indexOf("NORBC") != -1) {
                        nor = instr["@ap"];
                        if (instr["@updt"].length >= 10)
                            date = instr["@updt"].substr(0, 10);
                    }
                    if (instr["@nm"].indexOf("SEBBC") != -1) {
                        seb = instr["@ap"];
                        if (instr["@updt"].length >= 10)
                            date = instr["@updt"].substr(0, 10);
                    }
                    if (instr["@nm"].indexOf("SHBBC") != -1) {
                        shb = instr["@ap"];
                        if (instr["@updt"].length >= 10)
                            date = instr["@updt"].substr(0, 10);
                    }
                    if (instr["@nm"].indexOf("SWBBC") != -1) {
                        swb = instr["@ap"];
                        if (instr["@updt"].length >= 10)
                            date = instr["@updt"].substr(0, 10);
                    }
                    if (instr["@nm"].indexOf("LFBBC") != -1) {
                        lfb = instr["@ap"];
                        if (instr["@updt"].length >= 10)
                            date = instr["@updt"].substr(0, 10);
                    }
                });
                res.push({
                    name: name,
                    date: date,
                    ddb: parseFloat(ddb),
                    lfb: parseFloat(lfb),
                    nor: parseFloat(nor),
                    seb: parseFloat(seb),
                    shb: parseFloat(shb),
                    swb: parseFloat(swb)
                });
            });
            return res;
        }

        this.getData = function (type) {
            var deferred = $q.defer();
            omxLinkService.getData(queries[type]).then(function (res) {
                var data = null;
                switch (type) {
                    case "stibor":
                        data = processStibor(res.data);
                        break;
                    case "swap":
                        data = processSwap(res.data);
                        break;
                    case "treasury":
                        data = processTreasury(res.data);
                        break;
                    case "bankCertificates":
                        data = processBankCertificates(res.data);
                        break;
                    default:
                        data = res.data;
                }
                deferred.resolve(data);
            })
            ["catch"](function (reason) {
                console.log(reason);
            });
            return deferred.promise;
        }
    }])

    .directive("fixing", ["fetchFixing", function (fetch) {
        return {
            restrict: 'A',
            scope: {
                fixing: "@",
                query: "="
            },
            template: function (element) {
                return $(element).html();
            },
            link: function (scope) {
                fetch.getData(scope.fixing, scope.query).then(function (data) {
                    scope.data = data;
                })
                ["catch"](function (reason) {
                    console.log(reason);
                });
            }
        }
    }]);