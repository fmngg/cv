function moveTo(obj) {
  if (obj === 'first-section') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    document.getElementById(obj).scrollIntoView({
      behavior: 'smooth',
    });
  }
}
