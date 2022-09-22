// const form = document.getElementById('form');
// const fullName = document.getElementById('fullName');
// const name = document.getElementById('name');
// // const email = document.getElementById('email');
// // const subject = document.getElementById('subject');
// // const message = document.getElementById('message');
// // const location = document.getElementById('location');
// // const roomType = document.getElementById('RoomType');
// // const numberOfRooms = document.getElementById('rooms');
// // const apartment = document.getElementById('apartment');
// // const fromDate = document.getElementById('fromDate');
// // const toDate = document.getElementById('toDate');
// // const tell = document.getElementById('phone');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkInputs();
// })

// function checkInputs() {
//     fullName = fullName.nodeValue.trim();
//     name = name.nodeValue.trim();
//     email = email.nodeValue.trim();
//     subject = subject.nodeValue.trim();
//     message = message.nodeValue.trim();
//     location = location.nodeValue.trim();
//     roomType = roomType.nodeValue.trim();
//     numberOfRooms = numberOfRooms.nodeValue.trim();
//     apartment = apartment.nodeValue.trim();
//     fromDate = fromDate.nodeValue.trim();
//     toDate = toDate.nodeValue.trim();
//     tell = tell.nodeValue.trim();
//     if (name === '') {
//         setErrorFor(name, 'Name can not be blank')
//     }
// }
// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');

//     // add message inside
//     // small.innerText = message;

//     //add class
//     formControl.className='form-control error'
// }
const header = document.querySelector('header')
if (scrollY > 125) {
    header.classList.add('nav-scrolled')
}
console.log(scrollY)