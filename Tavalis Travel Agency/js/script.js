let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

if ('geolocation' in navigator){
    console.log ('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    });
}else {
    console.log ('geolocation not available');
}

const sucessfulLookup = (position) =>{
    const {lattitude ,longitude}= position.coords;
    const self= this;
    fetch ('https://api.opencagedata.com/geocode/v1/json?q=${lattitude}+{longitude}&key=0e4d7d46374b4894a7d31af02107372d')
    .then (response = response.json())
    .then (console.log);
};