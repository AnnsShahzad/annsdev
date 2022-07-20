    // TYPE WRITER EFFECT
class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 500;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}
  
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

//   Header Item References

const allHeaderItem = document.querySelectorAll('.header-item');

const homeHeaderItem = document.querySelector(".home-item");

const aboutHeaderItem = document.querySelector(".about-item");

//  Section references

const allSection = document.querySelectorAll('.sec');

const homeSection = document.querySelector('.home');

const aboutSection = document.querySelector('.about');


homeHeaderItem.addEventListener('click', () => 
{
    allHeaderItem.forEach(e => e.classList.remove('active'));
    homeHeaderItem.classList.add('active');
    if (homeHeaderItem.classList.contains('active'))
    {
        allSection.forEach(e => e.classList.add('display'));
    }
    homeSection.classList.remove('display');
});

aboutHeaderItem.addEventListener('click', () => 
{
    allHeaderItem.forEach(e => e.classList.remove('active'));
    aboutHeaderItem.classList.add('active');
    if (aboutHeaderItem.classList.contains('active'))
    {
        allSection.forEach(e => e.classList.add('display'));
    }
    aboutSection.classList.remove('display');
});