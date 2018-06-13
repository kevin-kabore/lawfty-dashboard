var conversionRateBreakdown = document.getElementById("conversion-rate-breakdown").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cRBreakdown = new Chart(conversionRateBreakdown, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'Signed',
            data: [35],
            backgroundColor: '#f9d350'
        },{
            label: 'Total',
            data: [50],
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
