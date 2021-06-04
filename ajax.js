// setTimeout(() => {
//     console.log(1);
// }, 0);
// setTimeout(() => {
//     console.log(2);
// }, 0);
// console.log(3);
// document.addEventListener('click', () =>{
//     console.log('Mirziyo');
//})
let body = document.querySelector('body')

// AJAX = Asyncronys Javascript And Xml
// API = Application proggramm Interface
// HTTP = HyperText Transfer Protocol
// HTTPS = HyperText Transfer Protocol Secure


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => console.log( response.json()))
//   .then(json => console.log(json))


// let promise = new Promise (function(resolve){
//     setTimeout(() => {
//         resolve('bajarildi')
//     }, 3000);
// }).then(javob => (javob)).then(eYozuv => document.body.innerHTML = eYozuv);


fetch('https://jsonplaceholder.typicode.com/users').then((info) => info.json())
.then(javob =>{
    javob.forEach(object => {
        // document.body.innerHTML += object.name + '<br>'

        let h4 = document.createElement('h1')
        h4.innerHTML = object.name
        h4.classList.add('bg-info', 'text-white', 'p-3')
        document.body.insertAdjacentElement('afterbegin', h4)
    });
})


body.style.background = 'grey'