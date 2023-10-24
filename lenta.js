const newsSlider = document.querySelector('.news-container');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let counter = 0;
let itemWidth = newsSlider.querySelector('news.item').clientWidth;
prevBtn.addEventListener('click',() => {
    counter++;
    newsSlider.style.transform = 'translateX(-${counter * itemWidth}px)';
})

nextBtn.addEventListener('click',() => {
    counter--;
    newsSlider.style.transform = 'translateX(-${counter * itemWidth}px)';
})