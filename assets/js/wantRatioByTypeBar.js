var wantRatioByTypeBar = document.getElementById("want-ratio-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var wRBTBar = new Chart(wantRatioByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA',
            data: [50],
            backgroundColor: '#6fd598'
        },{
            label: 'Premises',
            data: [19],
            backgroundColor: '#f2c94c'
        },{
            label: 'WC',
            data: [17],
            backgroundColor: '#f2c94c'
        },{
            label: 'Other',
            data: [14],
            backgroundColor: '#f2c94c'
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
