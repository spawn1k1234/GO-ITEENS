export function sayHello() {
    console.log('Hello main.js!');
}

export const greeting = 'Hello, world!';

document.getElementById('myButton').addEventListener('click', function() {
    alert('Кнопка натиснута!');
});

// ___

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    
    alert('Дані збережено!');
});

document.getElementById('showInfoBtn').addEventListener('click', function() {
    document.getElementById('additionalInfo').classList.toggle('show');
});
