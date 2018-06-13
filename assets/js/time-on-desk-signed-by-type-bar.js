var timeOnDeskSignedByTypeBar = document.getElementById("time-on-desk-signed-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var tODSBTBar = new Chart(timeOnDeskSignedByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (90 cases)',
            data: [211],
            backgroundColor: '#ed6863'
        },{
            label: 'Premises (34 cases)',
            data: [64],
            backgroundColor: '#6fcf97'
        },{
            label: 'WC (31 cases)',
            data: [61],
            backgroundColor: '#6fcf97'
        },{
            label: 'Other (25 cases)',
            data: [105],
            backgroundColor: '#f9d350'
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
                    return value + ' days';
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
