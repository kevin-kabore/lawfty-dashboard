var costPerSignedByTypeBar = document.getElementById("cost-per-signed-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cPSBTBar = new Chart(costPerSignedByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (90 cases)',
            data: [1260],
            backgroundColor: '#6fcf97'
        },{
            label: 'Premises (34 cases)',
            data: [1500],
            backgroundColor: '#f2c94c'
        },{
            label: 'WC (31 cases)',
            data: [1450],
            backgroundColor: '#f2c94c'
        },{
            label: 'Other (20 cases)',
            data: [1180],
            backgroundColor: '#6fcf97'
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
                    return '$' + value;
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
