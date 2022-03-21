(() => {
  const images = document.querySelector("#memberImages"),
        btnNext = document.getElementById("button-next"),
        btnPrev = document.getElementById("button-previous"),
        eachPix = 300,
        maxNumPic = 3,
        maxPix = eachPix * maxNumPic;

  const memberTitle = [
    `Designer - Joanna`, `Developer - Chow`, `Drinker - Snuggle Bear`
  ]

  const memberData = [
    `Joanna is a student studying Interactive Media Design at Fanshawe College. Her works focus on self-care, wellness, and dogs.`,

    `Chow is a student studying Interactive Media Design at Fanshawe College. Her works focus on plants and yoga.`,

    `Since 2012, Snuggle Bear has devoted himself to trying different beers worldwide. Until he tried Beck's beer, he never wanted to have anything else. You will be able to recognize him when you see a bear holding Beck's beer.`
  ]

  function nextImage() {

    // Change Banner
    // get image location by pixel (i.e. img[0] = 0; img[1] = 300, img[2] = 600)
    let imgPix = parseInt(images.style.right.slice(0, -2) );

    // each click +300 pixel
    // % 900 just to ensure 600px will go back to 0px
    imgPix = (imgPix + eachPix) % maxPix;
    images.style.right = imgPix + "px";

    // Change title & info
    // Get current title and info
    currTitle = document.getElementById("member-title").textContent;
    currInfo = document.getElementsByClassName("member-info")[0].textContent;
    console.log(currInfo);
    // Get corresponding number in array
    currNum = memberTitle.indexOf(currTitle, 0);
    // Get next number
    nextNum = (currNum + 1) % 3;  // remainder 3 gives us only { 0, 1, 2 }

    // Change title & info
    document.getElementById("member-title").textContent = memberTitle[nextNum];
    document.getElementsByClassName("member-info")[0].textContent = memberData[nextNum];
  }

  function prevImage() {

    let imgPix = parseInt(images.style.right.slice(0, -2) );
    console.log(imgPix);
    // each click -300 pixel
    //  i.e 600 - 300 = 300px and 300 - 300 = 0px
    // remainder 3 only for the case of 0:
    //      (0 - 300) + 900 = -300 + 900 = 600px
    imgPix = (imgPix - eachPix + maxPix ) % maxPix ;
    images.style.right = imgPix + "px";

    // previous implementation
    // let imgPix = parseInt( images.style.right.slice(0, -2) );
    //
    // if (imgPix == 0) {
    //   images.style.right = "600px";
    // } else {
    //   imgPix = (imgPix - eachPix);
    //   images.style.right = imgPix + "px";
    // }

    // Change title & info
    // Get current title and info
    currTitle = document.getElementById("member-title").textContent;
    currInfo = document.getElementsByClassName("member-info")[0].textContent;
    console.log(currInfo);
    // Get corresponding number in array
    currNum = memberTitle.indexOf(currTitle, 0);
    // Get next number
    nextNum = (currNum - 1 + 3) % 3;  // remainder 3 gives us only { 0, 1, 2 }

    // Change title & info
    document.getElementById("member-title").textContent = memberTitle[nextNum];
    document.getElementsByClassName("member-info")[0].textContent = memberData[nextNum];

  }

  function getMemberName(member, index) {
    console.log(``)
  }


  // add event handling
  btnNext.addEventListener("click", nextImage);
  btnPrev.addEventListener("click", prevImage);

})();
