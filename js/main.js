(() => {
  let imagePosition = 0;

  const images = document.querySelector("#memberImages"),
        btnNext = document.getElementById("button-next"),
        btnPrev = document.getElementById("button-previous"),
        eachPix = 300,
        maxNumPic = 3,
        maxPix = eachPix * maxNumPic;


  function nextImage() {
    // get image location by pixel (i.e. img[0] = 0; img[1] = 300, img[2] = 600)
    let imgPix = parseInt( images.style.right.slice(0, -2) );

    // each click +300 pixel
    // % 900 just to ensure 600px will go back to 0px
    imgPix = (imgPix + eachPix) % maxPix;
    images.style.right = imgPix + "px";
  }

  function prevImage() {

    let imgPix = parseInt( images.style.right.slice(0, -2) );

    if (imgPix == 0) {
      images.style.right = "600px";
    } else {
      imgPix = (imgPix - eachPix);
      images.style.right = imgPix + "px";
    }
  }


  // add event handling
  btnNext.addEventListener("click", nextImage);
  btnPrev.addEventListener("click", prevImage);

})();
