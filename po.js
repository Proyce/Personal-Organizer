const addItem = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchInput = document.querySelector('.search input');

const generateTemplate = organizer => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${organizer}</span>
        <i class="far fa-trash-alt delete"></i>
      </li> 
    `;

    list.innerHTML += html;
}

addItem.addEventListener('submit', e => {
    e.preventDefault();
    const organizer = addItem.add.value.trim();
    if(organizer.length){
        generateTemplate(organizer);
        addItem.reset();
    }

});

// delete items

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//filter function for items
const filterItems = searchTerm => {
    Array.from(list.children)
        .filter((organizer) => !organizer.textContent.toLowerCase().includes(searchTerm))
        .forEach((organizer) => organizer.classList.add('filtered'));

    Array.from(list.children)
        .filter((organizer) => organizer.textContent.toLowerCase().includes(searchTerm))
        .forEach((organizer) => organizer.classList.remove('filtered'));        
}

// search items
searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.trim();
    filterItems(searchTerm);
})