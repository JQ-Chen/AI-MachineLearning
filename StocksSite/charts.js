$(function () {
    //Obviously there will be more than one of these, and I will probably generate them dynamically using JS
    $('#graph1').highcharts({
        title: {
            text: 'Market Return vs Strategy Return',
            x: -20
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            title: {
                text: 'Investments Made'
            }
            //looks like it will automagically figure out scale for us, but we can specify if needed
        },
        yAxis: {
            title: {
                text: 'Total Return (USD)'
            }
        },
        tooltip: {
            valueSuffix: 'USD'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Market Return',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Strategy Return',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
});
