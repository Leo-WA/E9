function updateBackgroundColors() {
    const screenWidth = window.innerWidth;

    // Check if the screen width is less than or equal to 450px
    if (screenWidth <= 450) {
      // Apply responsive background colors
      document.body.style.backgroundColor = 'new_color_here';
      // You can update other elements' background colors in a similar way
    } else {
      // Revert to the original background colors
      document.body.style.backgroundColor = 'original_color_here';
      // Reset other elements' background colors
    }
  }

  // Call the function on page load and window resize
  updateBackgroundColors();
  window.addEventListener('resize', updateBackgroundColors);