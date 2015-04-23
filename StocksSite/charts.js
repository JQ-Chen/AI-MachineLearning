
$.ajax({
        type: "GET",
        url: "graph1.csv",
        dataType: "text",
        success: function(data) {processCSV(data);}
     });

function processCSV(data){
  var lines = data.split(/\r\n|\n/);
  var series = lines[0].split(',');
  lines.splice(0, 1);
  var values = [];
  for(var i = 0; i < series.length; i++){
    values.push([]);
  }

  lines.forEach(function (line, index){
    elements = line.split(',')
    elements.forEach(function (element, seriesIndex){
      if(element != ""){
        values[seriesIndex].push(Number(element));
      }
    });
  });
  buildGraph(series, values);
}

function buildGraph(titles, data){
  var series = []

  for(var i = 0; i < data.length; i++){
     series.push({
      name: titles[i],
      data: data[i]
     });
  }
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
      series: series
  });
}
