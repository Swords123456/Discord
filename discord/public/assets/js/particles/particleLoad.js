
    function particleLoad() {
      particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
      // event handler function
    function handler(e) {
      let elem = document.getElementsByClassName("particles-js-canvas-el")[0]
      if (!elem) return;
      let Width = elem.offsetWidth;
      let Height = elem.offsetHeight;
      
      let y = (e.screenY - (Height/2))
      let x = (e.screenX - (Width/2))
      elem.offsetWidth = elem.offsetWidth + 100;
      elem.offsetHeight = elem.offsetHeight + 100;

      elem.style = "right: " + x*-1/10 + "px; top: 0px"


      //elem.style.right = x*-1/10;
       //elem.style.padding = top + " " + right + " " + bottom + " " + left;
        //console.log(top + " " + right + " " + bottom + " " + left);
    }

    // attach handler to the click event of the document
    if (document.attachEvent) document.attachEvent('onmoussemove', handler);
    else document.addEventListener('mousemove', handler);
  }