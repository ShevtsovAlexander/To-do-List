const input = document.querySelector('#input')
const list = document.querySelector('#to_do_list')
const addItemm = document.querySelector('#add_item')

var count=0;

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
     if(count==0) {checkIcon.style.color = 'limegreen'; count++} else
     if(count==1) {checkIcon.style.color = 'lightgray'; count=0} 
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
