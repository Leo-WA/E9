function adjustStyles() {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        document.body.classList.add('mobile');
      } else if (screenWidth <= 768) {
        document.body.classList.add('tablet');
      } else {
        document.body.classList.remove('mobile', 'tablet');
      }
    }

    window.onload = adjustStyles;
    window.onresize = adjustStyles;