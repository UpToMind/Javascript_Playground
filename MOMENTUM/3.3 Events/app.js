const title = document.querySelector('.hello');
console.log(title);

title.style.color = 'red';

title.addEventListener('click', () => {
    title.style.color = 'blue';
    });