import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
      } else {
        // Reject
      }
    });
  });
}
createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
  });
