  var referralRateLine = document.getElementById("referral-rate-line").getContext('2d');
  // pieCTB.canvas.height = 1000;
  // pieCTB.canvas.width = 1000;

  /*** Gradient ***/
  var gradient = referralRateLine.createLinearGradient(0,0,0,300);
      gradient.addColorStop(0, 'rgba(249, 211, 80, 1)');
      gradient.addColorStop(0.4, 'rgba(249, 211, 80, 0.5)');
      // gradient.addColorStop(0, 'rgba(237, 104, 99, 0.6)');
      gradient.addColorStop(1, 'rgba(111, 213, 152, 1)');

  /***************/

  var wRLine = new Chart(referralRateLine, {
      type: 'line',
      data: {
          labels: ["Dec", "Jan", "Feb", "March", "April"],
          datasets: [{
              data: [9, 5, 7, 5, 3],
              backgroundColor: gradient,
              fillColor : gradient,
              strokeColor : gradient,
              borderWidth: 5
          }]
      },
      options: {
          datasetStrokeWidth : 3,
          pointDotStrokeWidth : 4,
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                    // display: false
                    beginAtZero: true,
                    // max: 100,
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
