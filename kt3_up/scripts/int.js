const counters = document.querySelectorAll(".count");
const speed = 400;

// The code to start the animation is now wrapped in a function
const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(+counter.getAttribute("data-target"));
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };
     updateCount();
  });
}

// ждем полной загрузки страницы
window.onload = () => {
    // устанавливаем настройки
    const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения - половина изображения
        threshold: 0.5
    }

    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                startCounters()
            }
        })
    }, options)

    // с помощью цикла следим за всеми img на странице
    const arr = document.querySelectorAll('.count')
    arr.forEach(i => {
        observer.observe(i)
    })
}