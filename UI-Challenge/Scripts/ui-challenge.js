var programsData;

window.onload = function () {
    $.ajaxSetup({
        async: false
    });

    // Getting programs data
    $.getJSON("https://api.myjson.com/bins/5bdb3", function (data) {
        programsData = data;
    });

    var months = ["Jan", "Feb", "Mar", "Äpr", "May", "Jun", "Jul"];

    CanvasJS.addColorSet("chartColors",
        [
        "#CCBCDD",
        "#B6D8B9"
        ]);
    var chart1 = new CanvasJS.Chart("chartYogaClasses", {
        colorSet: "chartColors",
        title: { text: "Yoga classes" },
        axisX: {

            lineThickness: 0,
            tickThickness: 0,
            gridThickness: 0,

        },
        axisY: {
            lineThickness: 0,
            tickThickness: 0,
            gridThickness: 0,
            valueFormatString: " "
        },
        data: [{
            type: "column",
            dataPoints: [
              { label: months[0], y: programsData[0].Sales.PreviousYear[0] },
              { label: months[1], y: programsData[0].Sales.PreviousYear[1] },
              { label: months[2], y: programsData[0].Sales.PreviousYear[2] },
              { label: months[3], y: programsData[0].Sales.PreviousYear[3] },
              { label: months[4], y: programsData[0].Sales.PreviousYear[4] },
              { label: months[5], y: programsData[0].Sales.PreviousYear[5] },
              { label: months[6], y: programsData[0].Sales.PreviousYear[6] },

            ]
        }, {
            type: "column",
            dataPoints: [
              { label: months[0], y: programsData[0].Sales.CurrentYear[0] },
              { label: months[1], y: programsData[0].Sales.CurrentYear[1] },
              { label: months[2], y: programsData[0].Sales.CurrentYear[2] },
              { label: months[3], y: programsData[0].Sales.CurrentYear[3] },
              { label: months[4], y: programsData[0].Sales.CurrentYear[4] },
              { label: months[5], y: programsData[0].Sales.CurrentYear[5] },
              { label: months[6], y: programsData[0].Sales.CurrentYear[6] },
            ]
        }]
    });
    var chart2 = new CanvasJS.Chart("chartYogaPrivates", {
        colorSet: "chartColors",
        title: { text: "Yoga Privates" },
        axisX: {

            lineThickness: 0,
            tickThickness: 0,
            gridThickness: 0,

        },
        axisY: {
            lineThickness: 0,
            tickThickness: 0,
            gridThickness: 0,
            valueFormatString: " "
        },
        data: [{
            type: "column",
            dataPoints: [
              { label: months[0], y: programsData[1].Sales.PreviousYear[0] },
              { label: months[1], y: programsData[1].Sales.PreviousYear[1] },
              { label: months[2], y: programsData[1].Sales.PreviousYear[2] },
              { label: months[3], y: programsData[1].Sales.PreviousYear[3] },
              { label: months[4], y: programsData[1].Sales.PreviousYear[4] },
              { label: months[5], y: programsData[1].Sales.PreviousYear[5] },
              { label: months[6], y: programsData[1].Sales.PreviousYear[6] },

            ]
        }, {
            type: "column",
            dataPoints: [
              { label: months[0], y: programsData[1].Sales.CurrentYear[0] },
              { label: months[1], y: programsData[1].Sales.CurrentYear[1] },
              { label: months[2], y: programsData[1].Sales.CurrentYear[2] },
              { label: months[3], y: programsData[1].Sales.CurrentYear[3] },
              { label: months[4], y: programsData[1].Sales.CurrentYear[4] },
              { label: months[5], y: programsData[1].Sales.CurrentYear[5] },
              { label: months[6], y: programsData[1].Sales.CurrentYear[6] },

            ]
        }]
    });
    var chart3 = new CanvasJS.Chart("chartYogaDuets", {
        colorSet: "chartColors",
        title: { text: "Yoga Duets" },
        axisX: {

            lineThickness: 0,
            tickThickness: 0,
            gridThickness: 0,

        },
        axisY: {
            lineThickness: 0,
            tickThickness: 0,
            gridThickness: 0,
            valueFormatString: " "
        },
        data: [{
            type: "column",
            dataPoints: [
              { label: months[0], y: programsData[2].Sales.PreviousYear[0] },
              { label: months[1], y: programsData[2].Sales.PreviousYear[1] },
              { label: months[2], y: programsData[2].Sales.PreviousYear[2] },
              { label: months[3], y: programsData[2].Sales.PreviousYear[3] },
              { label: months[4], y: programsData[2].Sales.PreviousYear[4] },
              { label: months[5], y: programsData[2].Sales.PreviousYear[5] },
              { label: months[6], y: programsData[2].Sales.PreviousYear[6] },

            ]
        }, {
            type: "column",
            dataPoints: [
              { label: months[0], y: programsData[2].Sales.CurrentYear[0] },
              { label: months[1], y: programsData[2].Sales.CurrentYear[1] },
              { label: months[2], y: programsData[2].Sales.CurrentYear[2] },
              { label: months[3], y: programsData[2].Sales.CurrentYear[3] },
              { label: months[4], y: programsData[2].Sales.CurrentYear[4] },
              { label: months[5], y: programsData[2].Sales.CurrentYear[5] },
              { label: months[6], y: programsData[2].Sales.CurrentYear[6] },

            ]
        }]
    });
    chart1.render();
    chart2.render();
    chart3.render();

    // Loding middle data
    loadData();

}


//Function for getting table values in more link button click
function GetMore(divCtr) {
    $.getJSON("https://api.myjson.com/bins/47axv", function (data) {
        if ($(data).length > 0) {
            var tablehtml = '<table><tr><th>Price Name</th><th>Current</th><th>1- Year</th></tr>';

            var objectSearched = getObjects(data, 'Name', 'Monthly Unlimited');
            if (objectSearched.length > 0) {
                tablehtml = tablehtml + '<tr><td> Monthly Unlimited </td><td> $' +ReplaceNumberWithCommas(parseInt(objectSearched[0]['Sales'])) + '</td><td><div id="' + divCtr + '_MonthlyChart" class="lineChart" ></div>  </td></tr>';
            }

            objectSearched = getObjects(data, 'Name', 'Student 1 Month')
            if (objectSearched.length > 0) {
                tablehtml = tablehtml + '<tr><td> Student 1 Month </td><td> $' + ReplaceNumberWithCommas(parseInt(objectSearched[0]['Sales'])) + '</td><td><div id="' + divCtr + '_StudentOneMonth" class="lineChart"></div> </td></tr>';
            }

            objectSearched = getObjects(data, 'Name', 'Single Visit')
            if (objectSearched.length > 0) {
                tablehtml = tablehtml + '<tr><td> Single Visit </td><td> $' + ReplaceNumberWithCommas(parseInt(objectSearched[0]['Sales'])) + '</td><td> <div id="' + divCtr + '_SingleVisit"  class="lineChart"></div> </td></tr>';
            }

            objectSearched = getObjects(data, 'Name', '10 Class Pass')
            if (objectSearched.length > 0) {
                tablehtml = tablehtml + '<tr><td> 10 Class Pass </td><td> $' + ReplaceNumberWithCommas(parseInt(objectSearched[0]['Sales'])) + '</td><td> <div id="' + divCtr + '_TenClassPass"  class="lineChart"></div> </td></tr>';
            }

            objectSearched = getObjects(data, 'Name', 'Student Single Visit')
            if (objectSearched.length > 0) {
                tablehtml = tablehtml + '<tr><td> Student Single Visit </td><td> $' + ReplaceNumberWithCommas(parseInt(objectSearched[0]['Sales'])) + '</td><td><div id="' + divCtr + '_StudentSingleVisit"  class="lineChart"></div>  </td></tr>';
            }

            objectSearched = getObjects(data, 'Name', '20 Class Pass')
            if (objectSearched.length > 0) {
                tablehtml = tablehtml + '<tr><td> 20 Class Pass </td><td> $' + ReplaceNumberWithCommas(parseInt(objectSearched[0]['Sales'])) + '</td><td> <div id="' + divCtr + '_TwentyClassPass"  class="lineChart"></div> </td></tr>';
            }

            objectSearched = getObjects(data, 'Name', '5 Class Pass')
            if (objectSearched.length > 0) {
                tablehtml = tablehtml + '<tr><td> 5 Class Pass </td><td> $' + ReplaceNumberWithCommas(parseInt(objectSearched[0]['Sales'])) + '</td><td>  <div id="' + divCtr + '_FiveClassPass"  class="lineChart"></div></td></tr>';
            }
            tablehtml = tablehtml + '<tr><td colspan="3"> <a href="javascript:void(0)" onclick="GetLess(\'' + divCtr + '\')">less</a> </td></tr>';
            $('#' + divCtr).html(tablehtml);


            //Rendering line charts for more click
            renderChart(divCtr + "_MonthlyChart");
            renderChart(divCtr + "_StudentOneMonth");
            renderChart(divCtr + "_SingleVisit");
            renderChart(divCtr + "_TenClassPass");
            renderChart(divCtr + "_StudentSingleVisit");
            renderChart(divCtr + "_TwentyClassPass");
            renderChart(divCtr + "_FiveClassPass");

        }

    });
}

//Function for rendering line chart in more link click
function renderChart(divContainer) {
    var chart = new CanvasJS.Chart(divContainer, {
        axisX: {

            lineThickness: 0,
            tickThickness: 0,
            gridThickness: 0,
            valueFormatString: " "
        },
        axisY: {
            lineThickness: 0,
            tickThickness: 0,
            gridThickness: 0,
            valueFormatString: " "
        },
        data: [{
            type: "line",
            dataPoints: [
              { x: 10, y: 45 },
              { x: 20, y: 14 },
              { x: 30, y: 20 },
              { x: 40, y: 60 },
              { x: 50, y: 50 },
              { x: 60, y: 80 },
              { x: 70, y: 40 },
              { x: 80, y: 60 },
              { x: 90, y: 10 },
              { x: 100, y: 50 },
              { x: 110, y: 40 },
              { x: 120, y: 14 },
              { x: 130, y: 70 },
              { x: 140, y: 40 },
              { x: 150, y: 90 },
            ]
        }]
    });
    chart.render();
}

//Function for less link click
function GetLess(divCtr) {
    $('#' + divCtr).html('<a href="javascript:void(0)" onclick="GetMore(\'' + divCtr + '\')">more</a>');
}

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

//Function to load middle data
function loadData() {
    var htmlMiddle = ' <div><div style="display:inline-block;width:100px">Total Monthly </div><div style="display:inline-block; width:80px">Current</div><div style="display:inline-block">1- Year</div></div><div><div style="display:inline-block;width:100px">Sales</div><div style="display:inline-block;width:80px""><b>$' + ReplaceNumberWithCommas(23483) + '</b></div><div style="display:inline-block"><div id="###divMiddleChart###" style="height: 40px;width:70px"></div></div></div>';

    $('#divMiddleClasses').html(htmlMiddle.replace("###divMiddleChart###", "divChartClasses"));
    $('#divMiddlePrivates').html(htmlMiddle.replace("###divMiddleChart###", "divChartPrivates"));
    $('#divMiddleDuets').html(htmlMiddle.replace("###divMiddleChart###", "divChartDuets"));

    //Rendering charts in the middle section
    renderChart("divChartClasses");
    renderChart("divChartPrivates");
    renderChart("divChartDuets");
}


//Function is for converting normal number to currencey format
function ReplaceNumberWithCommas(yourNumber) {
    //Seperates the components of the number
    var n = yourNumber.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(".");
}