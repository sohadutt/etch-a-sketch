const container = document.getElementById('sketch-container');


for (let i = 0; i < 10000; i++) {
    const sketch = document.createElement('div');
    sketch.className = 'canvas';
    
    
    // Add hover effect
    sketch.addEventListener('mouseover', () => {
        sketch.style.backgroundColor = 'blue';
    });
    container.appendChild(sketch);
  
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    const canvases = document.querySelectorAll('.canvas');
    canvases.forEach(canvas => {
        canvas.style.backgroundColor = 'lightblue';
    });
});
