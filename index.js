// Cannot read properties of null (reading 'addEventListener')

console.log('bobbyhadz.com');

const btn = document.getElementById('btn');
console.log(btn);

// ✅ Works as expected
btn.addEventListener('click', () => {
  console.log('btn clicked');
});

// ------------------------------------------

// Or you can use DOMContentLoaded

// document.addEventListener('DOMContentLoaded', () => {
//   const btn = document.getElementById('btn');
//   console.log(btn);

//   // ✅ Works as expected
//   btn.addEventListener('click', () => {
//     console.log('btn clicked');
//   });
// });
