var ctx = document.getElementById("casePipeline").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;



var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        // labels: ['Pending','Signed','Referred','Rejected','Settled','Unconverted','Dropped'],
        datasets: [{
            label: 'Pending',
            data: [14],
            backgroundColor: '#a6c6e4'
        },{
            label: 'Signed',
            data: [36],
            backgroundColor: '#5587e1'
        },{
            label: 'Referred',
            data: [3],
            backgroundColor: '#a3dec3'
        },{
            label: 'Rejected',
            data: [23],
            backgroundColor: '#58a4b0'
        },{
            label: 'Settled',
            data: [2],
            backgroundColor: '#373f51'
        },{
            label: 'Unconverted',
            data: [10],
            backgroundColor: '#7d8491'
        },{
            label: 'Dropped',
            data: [14],
            backgroundColor: '#cccccc'
        }
      ]
    },
    options: {
        // responsive: false,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                max: 100,
                // beginAtZero: true,
                // display: false
              },
              gridLines: {
                display: false
              },
              angleLines: {
                display: false
              }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                  // beginAtZero: true,
                  // display: false,

                },
                gridLines: {
                  drawBorder: false,
                  display: false
                }
            }]
        },
        legend: {
          // display: false;
        }
    }
});
