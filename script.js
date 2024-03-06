const zoomIn = document.querySelector('.zoomIn');
const zoomOut = document.querySelector('.zoomOut');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');


let fontSize = 36;

const increase = () => {
    if(fontSize >= 221) {
        return;
    }
    fontSize += 5;
    p.style.fontSize = fontSize + 'px';
}

const decrease = () => {
    if(fontSize <= 21) {
        return;
    }
    fontSize -= 5;
    p.style.fontSize = fontSize + 'px';
}

const colorChanger = () => {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    p.style.color = `rgb(${r}, ${g}, ${b})`

}

zoomIn.addEventListener('click', increase);
zoomOut.addEventListener('click', decrease);
colorBtn.addEventListener('click', colorChanger);