var dropRateBreakdown = document.getElementById("drop-rate-breakdown").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var dRBreakdown = new Chart(dropRateBreakdown, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'Dropped',
            data: [5],
            backgroundColor: '#6fd598'
        },{
            label: 'Total',
            data: [36],
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
