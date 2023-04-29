let x;

const library = [
  {
    title: 'The Count Of Monte Cristo',
    author: 'Alexandre Dumas',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Fault In Our Stars',
    author: 'John Green',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const firstBook = library[0].title;
// const { title: firstBook } = library[0];

const str = JSON.stringify(library);

x = library;

console.log(x);
console.log(firstBook);
console.log(str);
