//out-num
let section_counter = document.querySelector('.main__number');
let counters = document.querySelectorAll('.main_number__title .out-num');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 20;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 50);
        }
      }
      UpdateCounter();
    });
    observer.unobserve(section_counter);
  },
);
CounterObserver.observe(section_counter);