
function oAreaChartPrice() {
  if ($(".oAreaChart").length) {
    var dateFormat = "MM/DD/YYYY";
    var dateFormat2 = "YYYY-MM-DD";

    var seriePrice = {
      turboThreshold: '3000',
      name: 'Price',
      type: 'area',
      lineWidth: 1,
      lineColor: '#129ec2',
      gapSize: 0,
      tooltip: {
        valueDecimals: 2
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, "#009fc4"],
          [1, "#c5e3e7"]
        ]
      },
      threshold: null
    };

    /*var seriePrice = {
            name: 'Price',
            type: 'area',
            color: '#129ec2',
            data: [],
            gapSize: 5
        };*/

    var weekNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    var settings = {
      title: {
        text: ''
      },
      yAxis: {
        endOnTick: true,
        labels: {
          align: 'right',
          x: 35,
          y: 0,
          formatter: function(){
            return this.value.toFixed(2);
          }
        },
        title: {
          text: "USD",
          align: "high",
          rotation: 0,
          offset: 0,
          x: 35,
          y: -20,
          style: {"font-size": "14px"}
        }
      },
      chart: {
		height: 370,
        spacingRight: 35,
        spacingTop: 35
      },
      tooltip: {
        shared: true,
        useHTML: true,
        followPointer: true,
        borderWidth: 0,
        valueDecimals: 2,
        formatter: function() {
          var date = new Date(this.x);
          var day = date.getDate();
          var dayOfWeek = date.getDay();
          var monthIndex = date.getMonth();
          var year = date.getFullYear();
          var dateFormatted = weekNames[dayOfWeek] + ", " + monthNames[monthIndex] + " " + day + ", " + year;
          var val1 = this.points[0].y != undefined ? this.points[0].y.toFixed(2) : 0;
          var val2 = this.points[0].x != undefined ? parseFloat(this.points[0].x.toString().substr(0, 5)).toFixed(2) : 0;

          var legendContainer =
              "<div class='chart-legend'>" +
              "<div style='padding: 5px 10px 2px 10px;'>PRICE: <b>" + val1 + " USD </b></div>" +
              "<div style='padding: 2px 10px 15px 10px; '>VOLUME: <b>" + val2 + "</b></div>" +
              "<div style='padding: 10px 20px; margin: 0 -10px -10px -10px; color: #fff; background-color: #00a0c4;'>"+dateFormatted+"</div>"+
              "</div>";
          return legendContainer;
        },
        /*positioner: function(labelWidth, labelHeight, point){
                    var tooltipX, tooltipY;
                    tooltipX = point.plotX + 40;
                    tooltipY = 150;

                    if (tooltipX > 480) {
                        tooltipX = tooltipX - labelWidth - 40;
                    }

                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                }*/
      },
      subtitle: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        gapGridLineWidth: 0
      },
      rangeSelector: {
        allButtonsEnabled: false,
        buttons: [],
        selected: 1,
        inputEnabled: false,
        enabled: false
      },
      navigator: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      series: null
    };

    var loadchart = function (chartElement, loadUrl, diffDays, dateFrom, dateTo) {

      $.getJSON(loadUrl, function (data) {
        if(typeof data.results != "undefined"){
          var set = transformData(data, diffDays, dateFrom, dateTo);
          for(var i = 0; i < set.series.length; i++){
            if(set.series[i].data.length == 0){
              showErrorMessage(chartElement, "<h3>Sorry, data is not available for this date range.<br>Please select another range.</h3>");
              return;
            }
          }
          if ($("#chart").hasClass("loading")){
            chartElement.find("#chart").highcharts("StockChart", set).removeClass("loading");
            return;
          }
        }

        showErrorMessage(chartElement, "<h3>Sorry, data is not available for this date range.<br>Please select another range.</h3>");

      })
        .fail(function () {
        showErrorMessage(chartElement, "<h3>Sorry, the information is not available.<br>Please try again later.</h3>");
        console.log("Error loading data");
      });
    };

    var showErrorMessage = function (chartElement, message) {
      var chartContainer = chartElement.find("#chart");
      if(chartContainer.find("h3").length > 0){
        chartContainer.children("h3").remove();
        chartContainer.removeClass("loading").html(message).addClass("not-available-chart");
      }else{
        chartContainer.removeClass("loading").html(message).addClass("not-available-chart");
      }
    };

    var hideErrorMessage = function (chartElement) {
      chartElement.find(".not-available-chart").removeClass("not-available-chart");
    };

    var createChart = function (chartElement, dateFrom, dateTo) {
      var loadUrl, diffDays;

      var companyId = getCompanyId(chartElement);

      if(dateFrom != "" && dateTo != ""){
        dateFrom = moment(dateFrom);
        dateTo = moment(dateTo);
        diffDays = dateTo.diff(dateFrom, "days");
        loadUrl = diffDays > 10 ?
          "/Refactor/QuoteMedia/History/"+ companyId +"/"+ dateFrom.format(dateFormat2) +"/"+ dateTo.format(dateFormat2) :
        "/Refactor/QuoteMedia/ChartData/"+ companyId;
      }else{
        dateTo = moment().format(dateFormat2);
        dateFrom = moment(dateTo).subtract(365, "days").format(dateFormat2);
        loadUrl = "/Refactor/QuoteMedia/History/"+ companyId +"/"+ dateFrom +"/"+ dateTo;
      }

      /*//TODO Remove below if statement when get data from api
            if(companyId == "QANT"){
                var json = diffDays > 10 ? "cttay-History.json" : "cttay-getChartData.json";
                loadUrl = 'js/controls/' + json;
            }*/

      chartElement.find(".highcharts-container").hide();
      hideErrorMessage(chartElement);
      chartElement.find("#chart").addClass("loading");

      loadchart(chartElement, loadUrl, diffDays, dateFrom, dateTo);
    };

    var initChartInfo = function (chartElement) {
      var filterCatId = "", days = null;
      var defaultRangeSelector = chartElement.attr("defaultRangeSelector");

      chartElement.find(".categories-container a").each(function () {
        var currentElement = $(this);
        filterCatId = currentElement.attr("filterCatId");
        if(defaultRangeSelector == filterCatId){
          days = currentElement.attr("days");
          return false;
        }
      });

      if(days == null){
        showErrorMessage(chartElement, "<h3>Sorry, data is not available for this date range.<br>Please select another range.</h3>");
        return;
      }

      var actualDate = moment();

      var dateTo = actualDate.format(dateFormat2);
      var dateFrom = actualDate.subtract(days, "days").format(dateFormat2);

      selectFilterCateg(chartElement, filterCatId);
      createChart(chartElement, dateFrom, dateTo);
    };

    var updateChartInfo2 = function (chartElement, days) {

      var currentDate = moment();

      var dateTo = moment(currentDate).format(dateFormat2);
      var dateFrom = days == -1 ?
          moment(currentDate).dayOfYear(1).format(dateFormat2) :
      moment(currentDate).subtract(days, "days").format(dateFormat2);

      createChart(chartElement, dateFrom, dateTo);

    };

    var transformData = function (orgData, diffDays, dateFrom, dateTo) {
      var valuesTransf = diffDays > 10 ? orgData.results.history[0].eoddata : orgData.results.intraday[0].interval;
      var seriePriceData = [];

      for (var i = valuesTransf.length-1; i > -1; i--) {
        var timeStamp = diffDays > 10 ? new Date(valuesTransf[i].date).getTime() : new Date(valuesTransf[i].startdatetime).getTime();

        if((moment(timeStamp) < dateFrom.startOf("day")) || (moment(timeStamp) > dateTo.endOf("day"))) continue;

        var priceObject = {x: timeStamp, y: valuesTransf[i].close, test: valuesTransf[i].sharevolume};

        seriePriceData.push(priceObject);
      }

      seriePrice.data = seriePriceData;

      settings.series = [];
      settings.series.push(seriePrice);

      return  settings;
    };

    var selectFilterCateg = function (chartElement, id) {
      chartElement.find(".period-filter-category").removeClass("active-filter");
      chartElement.find("#filter-categ-" + id).addClass("active-filter");
    };

    var getCompanyId = function (chartElement) {
      var companyId = chartElement.attr("companyId");
      if(companyId == ""){
        var fullUrl = window.location.href;
        var urlParameters = fullUrl.split("?")[1];
        var arrayParameters = urlParameters.split("&");
        for(var i = 0; i < arrayParameters.length; i++){
          var parameter = arrayParameters[i].split("=");
          if (parameter[0] != "companyId") continue;
          return parameter[1];
        }
      }

      return companyId;
    };

    var initAreaChart = function () {
      setTimeout(function () {
        $(".oAreaChart").each(function () {

          var chartElement = $(this);

          initChartInfo(chartElement);

          /*chartElement.find(".aButton:not(.rangeButton)").click(function (event) {
                        updateChartInfo1(chartElement);
                    });*/

          chartElement.find(".period-filter-category a").click(function (event) {
            var days = $(this).attr("days");
            var filterCatId = $(this).attr("filterCatId");

            updateChartInfo2(chartElement, days);
            selectFilterCateg(chartElement, filterCatId);
          });
        });
      }, 1000);
    };

    initAreaChart();
  }
};

/*Old Chart*/
function oAreaChartVolume() {
  if ($(".oAreaChart").length) {
    var dateFormat = "MM/DD/YYYY";
    var dateFormat2 = "YYYY-MM-DD";

    var serieVolume = {
      name: 'Volume',
      type: 'area',
      lineWidth: 1,
      lineColor: '#129ec2',
      gapSize: 0,
      tooltip: {
        valueDecimals: 2
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, "#009fc4"],
          [1, "#c5e3e7"]
        ]
      },
      threshold: null
    };

    var seriePrice = {
      name: 'Price',
      type: 'column',
      color: '#129ec2',
      data: [],
      gapSize: 5
    };

    var weekNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    //var dayRanges = [{filterCatId: "1", days: 1}, {filterCatId: "3", days: 30}, {filterCatId: "4", days: 180}, {filterCatId: "6", days: 365}, {filterCatId: "8", days: 1825}];

    var settings = {
      title: {
        text: ''
      },
      yAxis: {
        labels: {
          align: 'right',
          x: 35,
          y: 0
        },
        title: {
          text: "Volume",
          align: "high",
          rotation: 0,
          offset: 0,
          x: 35,
          y: -20,
          style: {"font-size": "14px"}
        }
      },
      chart: {
		height: 250,
        spacingRight: 10,
        spacingTop: 35,
        /*events: {
                    redraw: function(event) {
                        $(".highcharts-container").show();
                        $("#chartOld").removeClass("loading");
                    },
                    load: function(event) {
                        $(".highcharts-container").show();
                        $("#chartOld").removeClass("loading");
                    }
                }*/
      },
      tooltip: {
        shared: true,
        useHTML: true,
        followPointer: true,
        borderWidth: 0,
        valueDecimals: 2,
        formatter: function() {
          var date = new Date(this.x);
          var day = date.getDate();
          var dayOfWeek = date.getDay();
          var monthIndex = date.getMonth();
          var year = date.getFullYear();
          var dateFormatted = weekNames[dayOfWeek] + ", " + monthNames[monthIndex] + " " + day + ", " + year;
          var val1 = this.points[0].y != undefined ? this.points[0].y.toFixed(2) : 0;
          var val2 = this.points[1].y != undefined ? this.points[1].y.toFixed(2) : 0;

          var legendContainer =
              "<div class='chart-legend'>" +
              "<div style='padding: 5px 10px 2px 10px;'>PRICE: <b>" + val1 + " USD </b></div>" +
              "<div style='padding: 2px 10px 15px 10px; '>VOLUME: <b>" + val2 + "</b></div>" +
              "<div style='padding: 10px 20px; margin: 0 -10px -10px -10px; color: #fff; background-color: #00a0c4;'>"+dateFormatted+"</div>"+
              "</div>";
          return legendContainer;
        },
        /*positioner: function(labelWidth, labelHeight, point){
                    var tooltipX, tooltipY;
                    tooltipX = point.plotX + 40;
                    tooltipY = point.plotY - 180;

                    if (tooltipX > 480) {
                        tooltipX = tooltipX - labelWidth - 40;
                    }

                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                }*/
      },
      subtitle: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        gapGridLineWidth: 0
      },
      rangeSelector: {
        allButtonsEnabled: false,
        buttons: [],
        selected: 1,
        inputEnabled: false,
        enabled: false
      },
      navigator: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      series: null
    };

    var loadchart = function (chartElement, loadUrl, diffDays, dateFrom, dateTo) {

      $.getJSON(loadUrl, function (data) {
        if(typeof data.results != "undefined"){
          var set = transformData(data, diffDays, dateFrom, dateTo);
          for(var i = 0; i < set.series.length; i++){
            if(set.series[i].data.length == 0){
              showErrorMessage(chartElement, "<h3>Sorry, data is not available for this date range.<br>Please select another range.</h3>");
              return;
            }
          }
          if ($("#chartOld").hasClass("loading")){
            chartElement.find("#chartOld").highcharts("StockChart", set).removeClass("loading");
            return;
          }
        }

        showErrorMessage(chartElement, "<h3>Sorry, data is not available for this date range.<br>Please select another range.</h3>");

      })
        .fail(function () {
        showErrorMessage(chartElement, "<h3>Sorry, the information is not available.<br>Please try again later.</h3>");
        console.log("Error loading data");
      });
    };

    var showErrorMessage = function (chartElement, message) {
      var chartContainer = chartElement.find("#chartOld");
      if(chartContainer.find("h3").length > 0){
        chartContainer.children("h3").remove();
        chartContainer.removeClass("loading").html(message).addClass("not-available-chart");
      }else{
        chartContainer.removeClass("loading").html(message).addClass("not-available-chart");
      }
    };

    var hideErrorMessage = function (chartElement) {
      chartElement.find(".not-available-chart").removeClass("not-available-chart");
    };

    var createChart = function (chartElement, dateFrom, dateTo) {
      var loadUrl, diffDays;

      var companyId = getCompanyId(chartElement);

      if(dateFrom != "" && dateTo != ""){
        dateFrom = moment(dateFrom);
        dateTo = moment(dateTo);
        diffDays = dateTo.diff(dateFrom, "days");
        loadUrl = diffDays > 10 ?
          "/Refactor/QuoteMedia/History/"+ companyId +"/"+ dateFrom.format(dateFormat2) +"/"+ dateTo.format(dateFormat2) :
        "/Refactor/QuoteMedia/ChartData/"+ companyId;
      }else{
        dateTo = moment().format(dateFormat2);
        dateFrom = moment(dateTo).subtract(365, "days").format(dateFormat2);
        loadUrl = "/Refactor/QuoteMedia/History/"+ companyId +"/"+ dateFrom +"/"+ dateTo;
      }

      chartElement.find(".highcharts-container").hide();
      hideErrorMessage(chartElement);
      chartElement.find("#chartOld").addClass("loading");

      loadchart(chartElement, loadUrl, diffDays, dateFrom, dateTo);
    };

    var initChartInfo = function (chartElement) {
      var filterCatId = "", days = null;
      var defaultRangeSelector = chartElement.attr("defaultRangeSelector");

      chartElement.find(".categories-container a").each(function () {
        var currentElement = $(this);
        filterCatId = currentElement.attr("filterCatId");
        if(defaultRangeSelector == filterCatId){
          days = currentElement.attr("days");
          return false;
        }
      });

      if(days == null){
        showErrorMessage(chartElement, "<h3>Sorry, data is not available for this date range.<br>Please select another range.</h3>");
        return;
      }

      var actualDate = moment();

      var dateTo = actualDate.format(dateFormat2);
      var dateFrom = actualDate.subtract(days, "days").format(dateFormat2);

      selectFilterCateg(chartElement, filterCatId);
      createChart(chartElement, dateFrom, dateTo);
    };

    var updateChartInfo2 = function (chartElement, days) {

      var currentDate = moment();

      var dateTo = moment(currentDate).format(dateFormat2);
      var dateFrom = days == -1 ?
          moment(currentDate).dayOfYear(1).format(dateFormat2) :
      moment(currentDate).subtract(days, "days").format(dateFormat2);

      createChart(chartElement, dateFrom, dateTo);

    };

    var transformData = function (orgData, diffDays, dateFrom, dateTo) {
      var valuesTransf = diffDays > 10 ? orgData.results.history[0].eoddata : orgData.results.intraday[0].interval;
      var seriePriceData = [];
      var serieVolumeData = [];

      for (var i = valuesTransf.length-1; i > -1; i--) {
        var timeStamp = diffDays > 10 ? new Date(valuesTransf[i].date).getTime() : new Date(valuesTransf[i].startdatetime).getTime();

        if((moment(timeStamp) < dateFrom.startOf("day")) || (moment(timeStamp) > dateTo.endOf("day"))) continue;

        var priceElm = [];
        var volumElm = [];

        priceElm.push(timeStamp);
        priceElm.push(valuesTransf[i].close);

        volumElm.push(timeStamp);
        volumElm.push(valuesTransf[i].sharevolume);

        seriePriceData.push(priceElm);
        serieVolumeData.push(volumElm);
      }

      seriePrice.data = seriePriceData;
      serieVolume.data = serieVolumeData;

      settings.series = [];
      settings.series.push(seriePrice);
      settings.series.push(serieVolume);

      return  settings;
    };

    var selectFilterCateg = function (chartElement, id) {
      chartElement.find(".period-filter-category").removeClass("active-filter");
      chartElement.find("#filter-categ-" + id).addClass("active-filter");
    };

    var getCompanyId = function (chartElement) {
      var companyId = chartElement.attr("companyId");
      if(companyId == ""){
        var fullUrl = window.location.href;
        var urlParameters = fullUrl.split("?")[1];
        var arrayParameters = urlParameters.split("&");
        for(var i = 0; i < arrayParameters.length; i++){
          var parameter = arrayParameters[i].split("=");
          if (parameter[0] != "companyId") continue;
          return parameter[1];
        }
      }

      return companyId;
    };

    var initAreaChart = function () {
      setTimeout(function () {
        $(".oAreaChart").each(function () {

          var chartElement = $(this);

          initChartInfo(chartElement);

          /*chartElement.find(".aButton:not(.rangeButton)").click(function (event) {
                        updateChartInfo1(chartElement);
                    });*/

          chartElement.find(".period-filter-category a").click(function (event) {
            var days = $(this).attr("days");
            var filterCatId = $(this).attr("filterCatId");

            updateChartInfo2(chartElement, days);
            selectFilterCateg(chartElement, filterCatId);
          });
        });
      }, 1000);
    };

    initAreaChart();
  }
};

$(document).ready(function () {
  oAreaChartPrice();
  oAreaChartVolume();
});
