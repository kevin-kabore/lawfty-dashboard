  var avgFeePerSigned = document.getElementById("avg-fee-per-case-line").getContext('2d');


  /*** Gradient ***/
  var gradient = avgFeePerSigned.createLinearGradient(0,0,0,400);

  gradient.addColorStop(1, 'rgba(237, 104, 99, 1)');
  gradient.addColorStop(0.2, 'rgba(249, 211, 80, 0.7)');
  gradient.addColorStop(0, 'rgba(111, 213, 152, 0.5)');

  /***************/

  var cPSLine = new Chart(avgFeePerSigned, {
      type: 'line',

      data: {
          labels: ["Dec", "Jan", "Feb", "March", "April"],
          datasets: [{
              data: [21000, 23000, 18060, 26510, 27103],
              borderWidth: 5,
              backgroundColor: gradient,
              borderColor: 'black'
          },{
              data: [18005, 20000, 16000, 23810, 22103],
              borderWidth: 5,
              borderColor: 'black'
          },{
              data: [13020, 15000, 13560, 18310, 19203],
              borderWidth: 5,
              borderColor: 'black'
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
                        return '$' + value;
                    }
                  },
                  gridLines: {
                    display: false
                  }
              }],
              xAxes: [{
                ticks: {
                  beginAtZero: true,
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
