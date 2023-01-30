const input = document.querySelector('#input')
const list = document.querySelector('#to_do_list')
const addItemm = document.querySelector('#add_item')


input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addItem(input.value)
        input.value = " "
    }
})       


addItemm.addEventListener('click', () => {
    addItem(input.value);
    input.value = " "

})

addItem = (input) => {
    const item = document.createElement('div');
    const div = document.createElement('div');
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");

    item.className = 'item';
    text.textContent = input;

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', () => {
        checkIcon.style.color = 'limegreen';
    })
    checkIcon.addEventListener('dblclick', () => {
        checkIcon.style.color = 'lightgray';
    })
    
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", () => {
    item.remove();
    })

    div.append(checkIcon,trashIcon);

    item.append(text, div);
    list.append(item);

    
}