var costPerCaseBar = document.getElementById("cost-per-case-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cPCBar = new Chart(costPerCaseBar, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'],
        datasets: [{
          label: 'Want Ratio',
          data: [459, 466, 466,466, 467,468,469,470, 470,500,501,502,503,505, 505, 510, 515, 515, 520, 523, 525, 599, 600, 620, 620, 633, 633],
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
