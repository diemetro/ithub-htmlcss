// const counters = document.querySelectorAll(".count");
// const speed = 400;

// // The code to start the animation is now wrapped in a function
// const startCounters = () => {
//   counters.forEach((counter) => {
//     const updateCount = () => {
//       const target = parseInt(+counter.getAttribute("data-target"));
//       const count = parseInt(+counter.innerText);
//       const increment = Math.trunc(target / speed);
//       if (count < target) {
//         counter.innerText = count + increment;
//         setTimeout(updateCount, 1);
//       } else {
//         count.innerText = target;
//       }
//     };
//      updateCount();
//   });
// }

// // On the first scroll in this window, call the function to start the counters
// window.addEventListener('mousedown',  startCounters, {
//   once: false
// });


// const options = {
//   root: document.querySelector('.cont'),
//   rootMargin: '0px',
//   threshold: [0, 0.5, 1],
// }

// const callback = (entries) => {
//   entries.forEach(({ isIntersecting, intersectionRatio }) => {
//     if (isIntersecting) {
//       if (intersectionRatio >= 0 && intersectionRatio < 0.45) {
//         alert('Элемент появился в области наблюдения')
//       }

//       if (intersectionRatio >= 0.45 && intersectionRatio < 0.75) {
//         alert('Элемент наполовину в области наблюдения')
//       }

//       if (intersectionRatio === 1) {
//         alert('Элемент полностью в области наблюдения')
//       }
//     }
//   })
// }

// const targetElement = document.querySelector('.sec8')
// const observer = new IntersectionObserver(callback, options)

// observer.observe(targetElement)
