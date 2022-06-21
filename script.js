const container = document.querySelector('#container');

let gridSize = 16;
let items;

drawGrid(gridSize);

const buttonNumSquares = document.querySelector('#btnNumberSquares');

buttonNumSquares.addEventListener('click', () => {
    let currentSizeGrid = prompt('Number of Squares', 0);
    
    if(!isNaN(currentSizeGrid) && currentSizeGrid > 0 && currentSizeGrid <= 100)
    {
        removeGrid();
        drawGrid(currentSizeGrid);
    }
    else
    {
        alert('ERROR');
    }
});


function drawGrid(gridSize)
{
    let itemWidth = (320 / gridSize) + 'px';

    for (let i = 0; i < gridSize*gridSize; i++)
    {
        let item = document.createElement('div');
        item.style.width = itemWidth;
        item.classList.add('item')
        container.appendChild(item);
    }

    items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = random_rgba();
        });
    })
    
}

function removeGrid() {
    document.querySelectorAll('.item').forEach((item) => container.removeChild(item));
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}