//richiamo evento dal dom
document.addEventListener('DOMContentLoaded', () => {
    const emailList = document.getElementById('emailList');
    const emailPromises = [];

//ciclo for per chiamare i 10 indirizzi email 
for (let i = 0; i < 10; i++) {
    //fetch per chiamare le 10 api
    emailPromises.push(fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then(data => data.response));
    }
});