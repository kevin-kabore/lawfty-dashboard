var costPerSignedBar = document.getElementById("cost-per-signed-bar").getContext('2d');
// ctx.height = 200px;

var cPSBar = new Chart(costPerSignedBar, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'],
        datasets: [{
          label: 'Want Ratio',
          data: [1240, 1272, 1272,1280, 1300,1320,1350,1370,1380,1450,1455,1460,1480,1500, 1535, 1550, 1590, 1650, 1690, 1720, 1790, 1840, 1900, 1960, 2090, 2120, 2190],
          backgroundColor: [
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)'
          ],
          borderWidth: 1
        }],
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              ticks: {
                display: false
                // beginAtZero: false
              },
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
                ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                      return '$' + value;
                  }
                },
                gridLines: {
                  display: false
                }
            }]
        },
        legend: {
          display: false
        }
    }
});
