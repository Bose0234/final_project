let nav = document.querySelector('.navbar');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('change')
    } else {
        nav.classList.remove('change');
    }
}

AOS.init({
    offset: 150,
    duration: 1000,
});
