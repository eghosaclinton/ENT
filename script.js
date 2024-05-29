const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
let counter= 0
let count= 0;

hamburger.addEventListener('click', () => {
    counter++;
    if (counter % 2 !== 0){
        menu.classList.remove('hidden'); 
        menu.classList.add('block');
    }else{
        menu.classList.remove('block'); 
        menu.classList.add('hidden');
    }
});










const darkModeBtn = document.querySelector('#dark');
const lightModeStr = './assets/sun-svgrepo-com.svg';
const darkModeStr = './assets/moon-svgrepo-com.svg';

function darkMode(){
    count++;
    if (count % 2 !== 0){
        darkModeBtn.setAttribute('src', lightModeStr);
        document.querySelector('body').style.backgroundColor = '#000000';
        document.querySelector('body').style.color = '#ffffff'
        return;
    }else{
        darkModeBtn.setAttribute('src', darkModeStr);
        document.querySelector('body').style.backgroundColor = '#ffffff';
        document.querySelector('body').style.color = '#000000'
    }
}


darkModeBtn.addEventListener('click', darkMode)