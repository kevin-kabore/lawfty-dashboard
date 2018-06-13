  var costPerSignedLine = document.getElementById("cost-per-signed-line").getContext('2d');
  // pieCTB.canvas.height = 1000;
  // pieCTB.canvas.width = 1000;

  /*** Gradient ***/
  var gradient = costPerSignedLine.createLinearGradient(0,0,0,400);
  gradient.addColorStop(1, 'rgba(111, 213, 152, 1)');
  // gradient.addColorStop(0.5, 'rgba(111, 213, 152, 0.5)');
  gradient.addColorStop(0, 'rgba(249, 211, 80, 0.5)');
  // gradient.addColorStop(1, 'rgba(237, 104, 99, 1)');

  /***************/

  var cPSLine = new Chart(costPerSignedLine, {
      type: 'line',
      data: {
          labels: ["Dec", "Jan", "Feb", "March", "April"],
          datasets: [{
              data: [1590, 1703, 1750, 1272, 1270],
              borderWidth: 5,
              borderColor : 'gray',
              backgroundColor: gradient
          },{
              data: [1395, 1508, 1545, 1067, 1065],
              borderWidth: 5,
              borderColor : 'black'
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
