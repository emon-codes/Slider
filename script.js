  let index = 0;
  const slides = document.getElementById("slider");
  const total = slides.children.length;

  function showSlide(i) {
    index = (i + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById("next").onclick = () => showSlide(index + 1);
  document.getElementById("prev").onclick = () => showSlide(index - 1);

  // Auto Slide (optional)
  setInterval(() => showSlide(index + 1), 3000);