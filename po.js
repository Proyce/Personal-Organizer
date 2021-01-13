const addItem = document.querySelector('.add');
const list = document.querySelector('.todos');

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

})