const container = document.querySelector('#container');

let gridSize = 16;
let items;

drawGrid(gridSize);


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
            item.style.backgroundColor = 'red';
        });
    })
    
}
