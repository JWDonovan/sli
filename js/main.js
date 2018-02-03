$(".button-collapse").sideNav();
$(document).ready(function() {
  $('select').material_select();
});
$('.datepicker').pickadate({
  selectMonths: true,
  selectYears: 15,
  //max: new Date(2018,02,01),
  //max: new Date(get year, get month, 01),
  //min: new Date(1994,03,01),
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false
});

// smooth scroll: https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
    $('#sidenav-overlay').click();
    
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
});

// scroll reveal: https://github.com/jlmakes/scrollreveal
window.sr = ScrollReveal();
sr.reveal('.hero-title');
sr.reveal('.hero-subtitle');
sr.reveal('.hero-tagline');
sr.reveal('.hero-action');
sr.reveal('.about-company');
sr.reveal('.about-jeff');
sr.reveal('.about-christina');
sr.reveal('.our-method');
sr.reveal('.calculator');
sr.reveal('.contact');
sr.reveal('.invest');
sr.reveal('.footer');

// js chart: https://github.com/chartjs/Chart.js
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var config = {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "Your Returns",
      backgroundColor: window.chartColors.green,
      borderColor: window.chartColors.green,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      fill: false,
      }, {
        label: "Market Returns",
        fill: false,
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
      }]
    },
    options: {
      responsive: true,
      title:{
        display:true,
        text:'Here\'s How We Did.'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    }
};

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
};