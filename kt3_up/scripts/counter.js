const counters = document.querySelectorAll(".count");
const speed = 400;


const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute("data-target"));
      let count = parseInt(counter.innerText);
      const increment = Math.trunc(target / speed);
      
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else if (count > target) {
        counter.innerText = Math.max(target, count - increment);
        setTimeout(updateCount, 1);
      } 
    };
    updateCount();
  });
}


const resetCounters = () => {
  const counters = document.querySelectorAll('.count'); // Замените '.count' на соответствующий селектор
  counters.forEach((counter) => {
    counter.innerText = 0;
  });
}

const options = {
  root: document.querySelector('.cont'),
  rootMargin: '0px',
  threshold: [0, 0.5, 1],
}


const callback = (entries) => {
  entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
    if (!isIntersecting) {
      resetCounters(target); 
    } else if (isIntersecting && intersectionRatio === 1) {
      startCounters();
    }
  });
}

const target = document.querySelector('.sec8')
const observer = new IntersectionObserver(callback, options)

observer.observe(target)

