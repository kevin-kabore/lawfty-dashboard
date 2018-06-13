
  var pieCTB = document.getElementById("case-type-breakdown").getContext('2d');
  // pieCTB.canvas.height = 1000;
  // pieCTB.canvas.width = 1000;
  var ctbChart = new Chart(pieCTB, {
      type: 'pie',
      data: {
          labels: ["Premises", "WC", "Other", "MVA"],
          datasets: [{
              data: [16.67, 16.67, 16.67,50],
              backgroundColor: [
                  '#ffffff',
                  '#cccccc',
                  '#7d8491',
                  '#373f51',
              ],
              borderColor: [
                  'rgba(255,255,255,1)',
                  'rgba(255,255,255,1)',
                  'rgba(255,255,255,1)',
                  'rgba(255,255,255,1)'
              ],
              // borderWidth: 1
          }]
      },
      options: {
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  }
              }],
              xAxes: [{
                ticks: {
                  display: false
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                }
              }]
          },
          legend: {
            display: true
          }

      }
  });
