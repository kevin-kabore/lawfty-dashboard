var timeOnDeskSignedBar = document.getElementById("time-on-desk-signed-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var tODSBar = new Chart(timeOnDeskSignedBar, {
    type: 'bar',
    data: {
        datasets: [{
            label: '$0-$49,999',
            data: [{x: 25000, y:145}],
            backgroundColor: '#ed6863'
        },{
            label: '$50k-$99,999',
            data: [{x: 75000, y:93}],
            backgroundColor: '#6fcf97'
        },{
            label: '$100k+',
            data: [{x: 100000, y:124}],
            backgroundColor: '#f9d350'
        }
      ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Gross Settlement Value'
              },
              ticks: {
                display: true,
                beginAtZero: true
                // callback: function(value, index, values) {
                //     return '$'+value;
                // }
              },
              gridLines: {
                // display: false
              }
            }],
            yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Time on Desk'
                },
                ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                      return value + ' days';
                  }
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
