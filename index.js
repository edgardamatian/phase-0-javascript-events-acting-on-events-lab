function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left, 10);
    if (currentLeft > 0) {
      dodger.style.left = `${currentLeft - 1}px`;
    }
  }
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left, 10);
    if (currentLeft < (window.innerWidth - dodger.offsetWidth)) {
      dodger.style.left = `${currentLeft + 1}px`;
    }
  }