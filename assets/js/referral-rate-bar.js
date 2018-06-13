var referralRateBar = document.getElementById("referral-rate-bar").getContext('2d');
// ctx.height = 200px;
// ctx.width = 100;
var rRBar = new Chart(referralRateBar, {
    type: 'bar',
    data: {
        labels: ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th'],
        datasets: [{
          label: 'Want Ratio',
          data: [1,1,2,2,2,3,3,4,4,4,5,6,6,7,7,7,7.5,7.7,8,8,8,9,10,11],
          backgroundColor: [
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(111, 213, 152, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(249, 211, 80, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)',
            'rgba(237, 104, 99, 0.25)'
          ],
          borderWidth: 1
        }],
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              ticks: {
                display: false
                // beginAtZero: false
              },
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
                ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                      return value + '%';
                  }
                },
                gridLines: {
                  display: false
                }
            }]
        },
        legend: {
          display: false
        }
    }
});
