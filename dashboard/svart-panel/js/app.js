$('document').ready(function() {

    const saat = new Date().getHours();
    const hoursMessage = $('.main__header').find('.header__message p span');

    if( saat <= 6 )
    hoursMessage.html('İyi geceler');
    else if( saat <= 12 )
      hoursMessage.html('Günaydın');
    else if( saat < 18 )
      hoursMessage.html('Tünaydın');
    else
      hoursMessage.html('İyi akşamlar');


    /* weather - [START] */
    Weather();
    function Weather() {
      var request;
    
      // Send the request
      request = $.ajax({
          url: 'https://api.openweathermap.org/data/2.5/weather',
          type: "GET",
          data: { q: 'istanbul', 
                  appid: 'a16e33bdb752c9b5778d38c42614a6e4', // put your appid
                  units: 'metric'}
      });
    
      // Callback handler for success
      request.done(function (response){
          formatSearchResults(response);
      });
      
  
      function formatSearchResults(jsonObject) {
        
        var city_name = jsonObject.name;
        city_name = city_name;
        var city_temp = jsonObject.main.temp;

        $(".aside__weather .weather .weather__city").text(city_name);
        $(".aside__weather .weather .weather__extent span").text(Math.floor(city_temp));
      }

    }
    /* weather - [END^] */
      

    /* nav active - [START] */
    $('.nav__items').find('li').click(function() {
      $('.nav__items').find('.active').removeClass('active');
      $('.nav__items').find('.nav__dropdown').css({display: 'none'});


      $(this).find('a:first').addClass('active');
      $(this).find('.nav__dropdown').css({display: 'block'});
    });
    /* nav active - [END^] */

    /* main header bell - [START] */
    $('.bell').click( () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Çok yakında...',
      }) 
    });
    /* main header bell - [END^] */

    /* main header bar - [START] */
    $('.main__header .header__btn').find('.bar').click(function() {
      $(this).toggleClass('change');
      $('nav').toggleClass('nav__small');
      $('.nav__dark').toggleClass('nav__active');
    });
    /* main header bar - [END^] */
});



window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};

var options = {
  series: [{
  name: 'Income',
  type: 'column',
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
},

{
  name: 'Cashflow',
  type: 'column',
  data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
}, {
  name: 'Revenue',
  type: 'line',
  data: [20, 29, 37, 36, 44, 45, 50, 58]
}],
  chart: {
  height: 200,
  type: 'line',
  stacked: false
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [1, 1, 4]
},
xaxis: {
  categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
},
yaxis: [
  {
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#008FFB'
    },
    labels: {
      style: {
        colors: '#008FFB',
      }
    },
    title: {
      text: "Income (thousand crores)",
      style: {
        color: '#008FFB',
      }
    },
    tooltip: {
      enabled: true
    }
  },
  
  {
    seriesName: 'Income',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#00E396'
    },
    labels: {
      style: {
        colors: '#00E396',
      }
    }
  },
  {
    seriesName: 'Revenue',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#FEB019'
    },
    labels: {
      style: {
        colors: '#FEB019',
      },
    },
    title: {
      text: "Revenue (thousand crores)",
      style: {
        color: '#FEB019',
      }
    }
  },
],
tooltip: {
  fixed: {
    enabled: true,
    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
    offsetY: 30,
    offsetX: 60
  },
},
legend: {
  horizontalAlign: 'left',
  offsetX: 40
}

};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


var options2 = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 250,
      height: 250
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart2 = new ApexCharts(document.querySelector("#chart-2"), options2);
chart2.render();



var options3 = {
  series: [
  {
    name: 'Bob',
    data: [
      {
        x: 'Design',
        y: [
          new Date('2019-03-05').getTime(),
          new Date('2019-03-08').getTime()
        ]
      },
      {
        x: 'Code',
        y: [
          new Date('2019-03-02').getTime(),
          new Date('2019-03-05').getTime()
        ]
      },
      {
        x: 'Code',
        y: [
          new Date('2019-03-05').getTime(),
          new Date('2019-03-07').getTime()
        ]
      },
      {
        x: 'Test',
        y: [
          new Date('2019-03-03').getTime(),
          new Date('2019-03-09').getTime()
        ]
      },
      {
        x: 'Test',
        y: [
          new Date('2019-03-08').getTime(),
          new Date('2019-03-11').getTime()
        ]
      },
      {
        x: 'Validation',
        y: [
          new Date('2019-03-11').getTime(),
          new Date('2019-03-16').getTime()
        ]
      },
      {
        x: 'Design',
        y: [
          new Date('2019-03-01').getTime(),
          new Date('2019-03-03').getTime()
        ],
      }
    ]
  },
  {
    name: 'Joe',
    data: [
      {
        x: 'Design',
        y: [
          new Date('2019-03-02').getTime(),
          new Date('2019-03-05').getTime()
        ]
      },
      {
        x: 'Test',
        y: [
          new Date('2019-03-06').getTime(),
          new Date('2019-03-16').getTime()
        ],
        goals: [
          {
            name: 'Break',
            value: new Date('2019-03-10').getTime(),
            strokeColor: '#CD2F2A'
          }
        ]
      },
      {
        x: 'Code',
        y: [
          new Date('2019-03-03').getTime(),
          new Date('2019-03-07').getTime()
        ]
      },
      {
        x: 'Deployment',
        y: [
          new Date('2019-03-20').getTime(),
          new Date('2019-03-22').getTime()
        ]
      },
      {
        x: 'Design',
        y: [
          new Date('2019-03-10').getTime(),
          new Date('2019-03-16').getTime()
        ]
      }
    ]
  },
  {
    name: 'Dan',
    data: [
      {
        x: 'Code',
        y: [
          new Date('2019-03-10').getTime(),
          new Date('2019-03-17').getTime()
        ]
      },
      {
        x: 'Validation',
        y: [
          new Date('2019-03-05').getTime(),
          new Date('2019-03-09').getTime()
        ],
        goals: [
          {
            name: 'Break',
            value: new Date('2019-03-07').getTime(),
            strokeColor: '#CD2F2A'
          }
        ]
      },
    ]
  }
],
  chart: {
  height: 350,
  type: 'rangeBar'
},
plotOptions: {
  bar: {
    horizontal: true,
    barHeight: '80%'
  }
},
xaxis: {
  type: 'datetime'
},
stroke: {
  width: 1
},
fill: {
  type: 'solid',
  opacity: 0.6
},
legend: {
  position: 'top',
  horizontalAlign: 'left'
}
};

var chart3 = new ApexCharts(document.querySelector("#chart-3"), options3);
chart3.render();











