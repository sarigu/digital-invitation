//https://www.superhi.com/video/how-to-make-reactive-type-as-seen-on-the-airbnb-cereal-site

document.addEventListener("mousemove", function(event) {
  const x = event.pageX;
  const y = event.pageY;

  document.querySelectorAll("#hero-container div").forEach(div => {
    const dx = div.offsetLeft + 50 - x; // weil 50 von dem linken punkt ist die mitte
    const dy = div.offsetTop + 50 - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const score = Math.exp(dist * -0.007);

    div.style.transform = "scale(" + score + ")";
  });
});
