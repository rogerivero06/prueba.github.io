const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const listItem = document.querySelectorAll('.list-item');


toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

function activeLink() {
    listItem.forEach(item =>
    item.classList.remove('active'));
    this.classList.add('active');
}

listItem.forEach(item =>
item.onclick = activeLink);
