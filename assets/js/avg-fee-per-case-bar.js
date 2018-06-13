var avgFeePerCaseBar = document.getElementById("avg-fee-per-case-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cPCBar = new Chart(avgFeePerCaseBar, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'],
        datasets: [{
          label: 'Want Ratio',
          data: [17.2, 17.6, 17.6,17.8, 18.7,19.7,20,21,21.5,21.75,22,22,22.1,22.25, 22.5, 23.5, 23.5, 24.2, 24.5, 25, 26.4, 27, 28.5, 29],
          backgroundColor: [
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
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
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)'
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
                      return '$' + value +'k';
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
