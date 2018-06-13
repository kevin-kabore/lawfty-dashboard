var referralRateBreakdown = document.getElementById("referral-rate-breakdown").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var rRBreakdown = new Chart(referralRateBreakdown, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'Referred',
            data: [3],
            backgroundColor: '#6fd598'
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
