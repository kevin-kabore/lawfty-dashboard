var costPerCaseByTypeBar = document.getElementById("cost-per-case-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cPCBTBar = new Chart(costPerCaseByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (90 cases)',
            data: [588],
            backgroundColor: '#f2c94c'
        },{
            label: 'Premises (34 cases)',
            data: [643],
            backgroundColor: '#f2c94c'
        },{
            label: 'WC (31 cases)',
            data: [701],
            backgroundColor: '#ed6863'
        },{
            label: 'Other (20 cases)',
            data: [588],
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
