var caseTypeBreakdownByTypeBar = document.getElementById("case-type-breakdown-by-type-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var cTBBTBar = new Chart(caseTypeBreakdownByTypeBar, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'MVA (90 cases)',
            data: [50],
            backgroundColor: '#373f51'
        },{
            label: 'Premises (34 cases)',
            data: [19],
            backgroundColor: '#fff'
        },{
            label: 'WC (31 cases)',
            data: [17],
            backgroundColor: '#ccc'
        },{
            label: 'Other (25 cases)',
            data: [14],
            backgroundColor: '#7d8491'
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
