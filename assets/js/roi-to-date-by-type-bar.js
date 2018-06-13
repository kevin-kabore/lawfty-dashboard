var roiToDateByTypeBar = document.getElementById("roi-to-date-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var roiTDBTBar = new Chart(roiToDateByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (90 cases)',
            data: [5],
            backgroundColor: '#6fcf97'
        },{
            label: 'Premises (34 cases)',
            data: [1.2],
            backgroundColor: '#ed6863'
        },{
            label: 'WC (31 cases)',
            data: [1.1],
            backgroundColor: '#ed6863'
        },{
            label: 'Other (25 cases)',
            data: [0.5],
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
                    return value+'x';
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
