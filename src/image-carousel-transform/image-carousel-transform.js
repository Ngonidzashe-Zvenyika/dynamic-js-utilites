function setCarouselsTransform() {
  const carousels = document.querySelectorAll('.carousel.transform');

  carousels.forEach((carousel) => {
    const imageNodes = carousel.querySelectorAll('.track > img');
    const imageArray = [...imageNodes];
    const track = carousel.querySelector('.track');
    let intervalID;

    imageArray.forEach((image, index) => {
      image.style.left = `${480 * index}px`;
      const nav = carousel.querySelector('.nav');
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.imageIndex = index;
      if (image.classList.contains('current')) {
        indicator.classList.add('current');
        track.style.transform = `translateX(-${image.style.left})`;
      }
      indicator.addEventListener('click', () => {
        const currentImage = carousel.querySelector('.track > .current');
        const targetImage = imageArray[indicator.imageIndex];
        const targetIndex = indicator.imageIndex;
        shiftToTarget(carousel, track, currentImage, targetImage, targetIndex);
        clearInterval(intervalID);
        intervalID = setInterval(() => {
          shiftToNext(imageArray, carousel, track);
        }, '5000');
      });
      nav.appendChild(indicator);
    });

    intervalID = setInterval(() => {
      shiftToNext(imageArray, carousel, track);
    }, '5000');

    const btnPrevious = carousel.querySelector('.previous');
    btnPrevious.addEventListener('click', () => {
      const { currentImage, previousImage, previousIndex } =
        findCurrentNextAndPrevious(imageArray);
      shiftToTarget(
        carousel,
        track,
        currentImage,
        previousImage,
        previousIndex,
      );
      clearInterval(intervalID);
      intervalID = setInterval(() => {
        shiftToNext(imageArray, carousel, track);
      }, '5000');
    });

    const btnNext = carousel.querySelector('.next');
    btnNext.addEventListener('click', () => {
      const { currentImage, nextImage, nextIndex } =
        findCurrentNextAndPrevious(imageArray);
      shiftToTarget(carousel, track, currentImage, nextImage, nextIndex);
      clearInterval(intervalID);
      intervalID = setInterval(() => {
        shiftToNext(imageArray, carousel, track);
      }, '5000');
    });
  });
}

function findCurrentNextAndPrevious(imageArray) {
  const currentIndex = imageArray.findIndex((image) =>
    image.classList.contains('current'),
  );
  let previousIndex =
    currentIndex - 1 >= 0 ? currentIndex - 1 : imageArray.length - 1;
  let nextIndex =
    currentIndex + 1 <= imageArray.length - 1 ? currentIndex + 1 : 0;
  const currentImage = imageArray[currentIndex];
  const previousImage = imageArray[previousIndex];
  const nextImage = imageArray[nextIndex];
  return {
    currentImage,
    currentIndex,
    previousImage,
    previousIndex,
    nextImage,
    nextIndex,
  };
}

function shiftToTarget(
  carousel,
  track,
  currentImage,
  targetImage,
  targetIndex,
) {
  currentImage.classList.remove('current');
  targetImage.classList.add('current');
  const currentIndicator = carousel.querySelector('.nav > .current');
  currentIndicator.classList.remove('current');
  const indicators = carousel.querySelectorAll('.indicator');
  indicators[targetIndex].classList.add('current');
  const amountToMove = targetImage.style.left;
  track.style.transform = `translateX(-${amountToMove})`;
}

function shiftToNext(imageArray, carousel, track) {
  const { currentImage, nextImage, nextIndex } =
    findCurrentNextAndPrevious(imageArray);
  shiftToTarget(carousel, track, currentImage, nextImage, nextIndex);
}

exports.setCarouselsTransform = setCarouselsTransform;
