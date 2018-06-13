var timeOnDeskDroppedByTypeBar = document.getElementById("time-on-desk-dropped-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var tODDBTBar = new Chart(timeOnDeskDroppedByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (90 cases)',
            data: [103],
            backgroundColor: '#ed6863'
        },{
            label: 'Premises (34 cases)',
            data: [28],
            backgroundColor: '#6fcf97'
        },{
            label: 'WC (31 cases)',
            data: [26],
            backgroundColor: '#6fcf97'
        },{
            label: 'Other (25 cases)',
            data: [75],
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
