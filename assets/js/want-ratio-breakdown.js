var wantRatioBreakdown = document.getElementById("want-ratio-breakdown").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var wRBreakdown = new Chart(wantRatioBreakdown, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'Accepted',
            data: [50],
            backgroundColor: '#f9d350'
        },{
            label: 'Total',
            data: [100],
            backgroundColor: '#e0e0e0'
        }
      ]
    },
    options: {
        // responsive: false,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                // display: false
              },
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  // display: false,

                },
                gridLines: {
                  display: false
                }
            }]
        },
        legend: {
          // display: false;
        }
    }
});
