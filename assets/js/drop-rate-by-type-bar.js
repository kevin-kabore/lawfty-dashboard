var dropRateByTypeBar = document.getElementById("drop-rate-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var dRBTBar = new Chart(dropRateByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (0 dropped)',
            data: [0],
            // backgroundColor: '#6fd598'
        },{
            label: 'Premises (2 dropped / 14 signed)',
            data: [14],
            backgroundColor: '#f2c94c'
        },{
            label: 'WC (3 dropped / 21 signed)',
            data: [14],
            backgroundColor: '#f2c94c'
        },{
            label: 'Other (0 dropped)',
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
                max: 25,
                beginAtZero: true,
                callback: function(value, index, values) {
                    return value + '%';
                }
              },
              gridLines: {
                // display: false
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
