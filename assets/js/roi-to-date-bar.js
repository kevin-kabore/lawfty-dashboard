var roiToDateBar = document.getElementById("roi-to-date-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cPCBar = new Chart(roiToDateBar, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'],
        datasets: [{
          // label: 'ROI',
          data: [1.2, 1.5, 1.5,1.6, 1.7,1.8,1.9,2.0,2.0,2.5,2.61,2.8,2.9,3.2, 3.5, 3.7, 3.8, 4, 4.1, 4.3, 4.45, 4.40, 4.5, 4.6, 4.8, 5],
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
                scaleLabel: {
                  display: true,
                  labelString: 'ROI'
                },
                ticks: {
                  beginAtZero: true,
                  // callback: function(value, index, values) {
                  //     return '$' + value;
                  // }
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
