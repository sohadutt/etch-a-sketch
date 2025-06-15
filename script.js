const container = document.getElementById('sketch-container');
let inkColor = 'blue';
const blueButton = document.getElementById('blue-ink-button');
const eraserButton = document.getElementById('eraser-button');
const rainbowButton = document.getElementById('rainbow-ink-button');

for (let i = 0; i < 10000; i++) {
    const sketch = document.createElement('div');
    sketch.className = 'canvas';
    sketch.addEventListener('mouseover', () => {
        if (inkColor === 'rainbow') {
            sketch.style.backgroundColor = rainbowInk();
        } else {
            sketch.style.backgroundColor = inkColor;
        }
    });
    container.appendChild(sketch);
}

const blackButton = document.getElementById('black-ink-button');
blackButton.addEventListener('click', () => {
    inkColor = 'black';
});

blueButton.addEventListener('click', () => {
    inkColor = 'blue';
});

eraserButton.addEventListener('click', () => {
    inkColor = 'lightblue';
});

rainbowButton.addEventListener('click', () => {
    inkColor = 'rainbow';
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    const canvases = document.querySelectorAll('.canvas');
    canvases.forEach(canvas => {
        canvas.style.backgroundColor = 'lightblue';
    });
});

function rainbowInk() {
    const rainbow = `hsl(${Math.random() * 360}, 100%, 50%)`;
    return rainbow;
}
