  var costPerCaseLine = document.getElementById("cost-per-case-line").getContext('2d');
  // pieCTB.canvas.height = 1000;
  // pieCTB.canvas.width = 1000;

  /*** Gradient ***/
  var gradient = costPerCaseLine.createLinearGradient(0,0,0,200);
      gradient.addColorStop(1, 'rgba(111, 213, 152, 1)');
      // gradient.addColorStop(0.3, 'rgba(111, 213, 152, 0.8)');
      gradient.addColorStop(0.4, 'rgba(249, 211, 80, 0.7)');
      gradient.addColorStop(0, 'rgba(249, 211, 80, 1)');

  /***************/

  var cPCLine = new Chart(costPerCaseLine, {
      type: 'line',
      data: {
          labels: ["Dec", "Jan", "Feb", "March", "April"],
          datasets: [{
              data: [599, 633, 633, 475, 588],
              backgroundColor: gradient,
              borderWidth: 5
          },{
              data: [467, 501, 501, 343, 458],
              borderWidth: 5,
              borderColor: 'black'
          }]
      },
      options: {
          datasetStrokeWidth : 3,
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
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
