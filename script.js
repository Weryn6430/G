const sigInBtn = document.querySelector('.sigin-btn');
const sigInupBtn = document.querySelector('.siginup-btn');
const formBox = document.querySelector('.form_block');
const body = document.body;
sigInupBtn.addEventListener('click',function() {
formBox.classList.add('active');
body.classList.add('active');
});
sigInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active')
}); 