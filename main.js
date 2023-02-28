const input = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const text = input.value;
    
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;
    const btn = document.createElement('button');
    btn.textContent = "X"
    btn.setAttribute('class', 'del-btn');
    btn.addEventListener('click', delBtn)

    li.appendChild(p);
    li.appendChild(btn);
    
    p.textContent && list.appendChild(li);
    input.value = '';

    empty.style.display = 'none';
})

const delBtn = (e) => {
    const item = e.target.parentElement;
    list.removeChild(item);

    const items = document.querySelectorAll("li");
    items.length === 0 && (empty.style.display = 'block');
}