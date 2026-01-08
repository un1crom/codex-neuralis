/* ============================================
   CELLULAR AUTOMATA - Rule 110 Background
   ============================================ */

let automataCanvas, automataCtx;
let automataState = [];

function initAutomata() {
    automataCanvas = document.getElementById('automata-bg');
    if (!automataCanvas) return;

    automataCtx = automataCanvas.getContext('2d');
    automataCanvas.width = window.innerWidth;
    automataCanvas.height = window.innerHeight;

    const width = Math.ceil(automataCanvas.width / 4);
    automataState = new Array(width).fill(0);
    automataState[Math.floor(width / 2)] = 1;

    // Add some random seeds
    for (let i = 0; i < width; i++) {
        if (Math.random() < 0.01) automataState[i] = 1;
    }
}

function rule110(l, c, r) {
    const pattern = (l << 2) | (c << 1) | r;
    return (110 >> pattern) & 1;
}

function stepAutomata() {
    const width = automataState.length;
    const newState = new Array(width).fill(0);

    for (let i = 0; i < width; i++) {
        const l = automataState[(i - 1 + width) % width];
        const c = automataState[i];
        const r = automataState[(i + 1) % width];
        newState[i] = rule110(l, c, r);
    }

    automataState = newState;
}

function renderAutomata() {
    if (!automataCtx) return;

    const cellSize = 4;
    const height = automataCanvas.height;

    // Shift existing content up
    const imageData = automataCtx.getImageData(0, cellSize, automataCanvas.width, height - cellSize);
    automataCtx.putImageData(imageData, 0, 0);

    // Clear bottom row
    automataCtx.fillStyle = '#F5E6D3';
    automataCtx.fillRect(0, height - cellSize, automataCanvas.width, cellSize);

    // Draw new generation
    for (let i = 0; i < automataState.length; i++) {
        if (automataState[i]) {
            automataCtx.fillStyle = '#2C1810';
            automataCtx.fillRect(i * cellSize, height - cellSize, cellSize, cellSize);
        }
    }

    stepAutomata();
}

function startAutomataAnimation() {
    initAutomata();
    setInterval(renderAutomata, 100);
}

window.addEventListener('resize', initAutomata);
