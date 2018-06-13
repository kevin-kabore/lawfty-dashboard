  var roiToDate = document.getElementById("roi-to-date-line").getContext('2d');


  /*** Gradient ***/
  var gradient = roiToDate.createLinearGradient(0,0,0,400);

  gradient.addColorStop(1, 'rgba(237, 104, 99, 1)');
  gradient.addColorStop(0.2, 'rgba(249, 211, 80, 0.5)');
  gradient.addColorStop(0, 'rgba(249, 211, 80, 0.1)');

  /***************/

  var cPSLine = new Chart(roiToDate, {
      type: 'line',
      data: {
          labels: ["Dec", "Jan", "Feb", "March", "April"],
          datasets: [{
              data: [3, 1.5, 3, 4.5, 4.5],
              borderWidth: 5,
              backgroundColor: gradient,
              borderColor: 'gray'
          },{
              data: [2, 0.5, 2, 3.5, 3.5],
              borderWidth: 5,
              borderColor: 'blue'
          }]
      },
      options: {
          // datasetStrokeWidth : 10,
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return '$ ' + value;
                    }
                  },
                  gridLines: {
                    display: false
                  }
              }],
              xAxes: [{
                ticks: {
                  // beginAtZero: true,
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
