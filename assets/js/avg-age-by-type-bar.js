var avgAgeByTypeBar = document.getElementById("avg-age-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var aABTBar = new Chart(avgAgeByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (90 cases)',
            data: [103],
            backgroundColor: '#6fcf97'
        },{
            label: 'Premises (34 cases)',
            data: [110],
            backgroundColor: '#6fcf97'
        },{
            label: 'WC (31 cases)',
            data: [175],
            backgroundColor: '#ed6863'
        },{
            label: 'Other (25 cases)',
            data: [138],
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
                    return '$'+value;
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
