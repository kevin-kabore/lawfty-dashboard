var avgFeePerCaseByTypeBar = document.getElementById("avg-fee-per-case-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cPCBTBar = new Chart(avgFeePerCaseByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (90 cases)',
            data: [41722],
            backgroundColor: '#6fcf97'
        },{
            label: 'Premises (34 cases)',
            data: [29175],
            backgroundColor: '#6fcf97'
        },{
            label: 'WC (31 cases)',
            data: [11050],
            backgroundColor: '#ed6863'
        },{
            label: 'Other (20 cases)',
            data: [22090],
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
