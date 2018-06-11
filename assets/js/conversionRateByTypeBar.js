var conversionRateByTypeBar = document.getElementById("conversion-rate-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cRBTBar = new Chart(conversionRateByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (18/37)',
            data: [80],
            backgroundColor: '#6fd598'
        },{
            label: 'Premises (7/37)',
            data: [68],
            backgroundColor: '#6fd598'
        },{
            label: 'WC (6/27)',
            data: [22],
            backgroundColor: '#ed6863'
        },{
            label: 'Other (5/19)',
            data: [17],
            backgroundColor: '#ed6863'
        }
      ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              ticks: {
                // display: true,
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
