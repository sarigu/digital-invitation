//https://www.superhi.com/video/how-to-make-reactive-type-as-seen-on-the-airbnb-cereal-site

document.addEventListener("mousemove", function(event) {
  const x = event.pageX;
  const y = event.pageY;

  document.querySelectorAll("#flower-container div").forEach(div => {
    const dx = div.offsetLeft + 50 - x; // weil 50 von dem linken punkt ist die mitte
    const dy = div.offsetTop + 50 - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const score = Math.exp(dist * -0.004);

    div.style.transform = "scale(" + score + ")";
  });
});

const slideshow = document.querySelector("#slideshow");
const images = slideshow.querySelectorAll("#slideshow img");

slideshow.addEventListener("mousemove", function(event) {
  const x = event.offsetX;
  const width = this.offsetWidth;

  const percentage = x / width;
  const imageNumber = Math.floor(percentage * images.length);

  images.forEach(image => {
    image.style.zIndex = 0;
  });

  images[imageNumber].style.zIndex = 1;
});
