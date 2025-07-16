function fetchAllUsers() {
    const list = document.getElementById('user-list');
    list.innerHTML = 'fucking wait';
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            list.innerHTML = '';
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} (${user.email})`;
                list.appendChild(li);
            });
        });
}

function fetchUserById(id) {
    const result = document.getElementById('user-result');
    result.innerHTML = 'fucking wait';
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            if (!res.ok) throw new Error('Not found');
            return res.json();
        })
        .then(user => {
            result.innerHTML = `${user.name} (${user.email})`;
        })
        .catch(() => {
            result.innerHTML = 'no fucking';
        });
}
const input = document.getElementById('user-id-input');
const btn = document.getElementById('user-id-btn');
btn.addEventListener('click', () => {
    const id = parseInt(input.value, 10);
    if (id >= 1 && id <= 10) {
        fetchUserById(id);
    } else {
        document.getElementById('user-result').innerHTML = 'input 1 to 10';
    }
    input.value = '';
});

window.addEventListener('DOMContentLoaded', () => {
    fetchAllUsers();
});
