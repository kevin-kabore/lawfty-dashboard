var referralRateByTypeBar = document.getElementById("referral-rate-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var rRBTBar = new Chart(referralRateByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (3 referred / 100 passed)',
            data: [3],
            backgroundColor: '#6fd598'
        },{
            label: 'Premises (0 referred)',
            data: [0],
            backgroundColor: '#f2c94c'
        },{
            label: 'WC (0 referred)',
            data: [0],
            backgroundColor: '#f2c94c'
        },{
            label: 'Other (0 referred)',
            data: [0],
            // backgroundColor: '#f2c94c'
        }
      ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              ticks: {
                // display: true,
                max: 5,
                beginAtZero: true,
                callback: function(value, index, values) {
                    return value + '%';
                }
              },
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
                ticks: {
                  beginAtZero: true,
                  // callback: function(value, index, values) {
                  //     return value + '%';
                  // }
                },
                gridLines: {
                  // display: false
                }
            }]
        },
        legend: {
          display: true
        }
    }
});
