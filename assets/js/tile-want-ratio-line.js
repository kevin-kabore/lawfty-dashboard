console.log('tile want ratio js file')
  var tileWantRatioLine = document.getElementById("tile-want-ratio-line").getContext('2d');



  var tileWRLine = new Chart(tileWantRatioLine, {
      type: 'line',
      data: {
          labels: ["June","July","August","Sept","Oct", "Nov","Dec", "Jan", "Feb", "March", "April","May"],
          datasets: [{
              data: [56, 56, 58, 60, 62, 66, 67, 68, 66, 63, 62.5, 50],
          }]
      },
      options: {
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    max: 100,
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                  },
                  gridLines: {
                    display: false
                  }
              }],
              xAxes: [{
                ticks: {
                  beginsAtZero: true,
                  // display: false
                },
                gridLines: {
                  // display: false
                }
              }]
          },
          legend: {
            display: false
          }
      }
  });
