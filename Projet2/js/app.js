//Menu

function openNav() {
    document.getElementById('myNav').style.width = "100%";
}

function closeNav() {
    document.getElementById('myNav').style.width = "0%";
}

// Image Modale

function modale(){
    let activeModale = document.querySelector('#check');
    let modale = document.querySelector('.modale');

    if (activeModale.checked){
        modale.classList.add('modale-active');
    } else {
        modale.classList.remove('modale-active');
    }
}

// Slider

const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
let slider = document.querySelector('.slider');
index = 0;

prev.addEventListener('click', () => {
    if(index === 1) {
        slider.style.transform = "translateX(0%)";
        index--;
    }
});

next.addEventListener('click', () => {
    if(index === 0) {
        slider.style.transform = "translateX(-50%)";
        index++;
    }
});