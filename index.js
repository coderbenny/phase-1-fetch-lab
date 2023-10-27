// To pass the tests, don't forget to return your fetch!
function fetchBooks() {
  const apiUrl = 'https://anapioficeandfire.com/api/books'
  const options = {
    method: 'GET',
    headers: {
      "Text-Content": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify()
  }
  fetch(apiUrl, options)
  .then(res => res.json())
  .then(data => renderBooks(data))
  .catch(error => console.error('Error:', error))

  function renderBooks(books){
    const bookList = document.createElement('ul')
    const main = document.querySelector('main')
    
    books.forEach(book => {
      const list = document.createElement('li')
      list.textContent = book.name;
      bookList.appendChild(list)
      main.appendChild(bookList)
      document.body.appendChild(main)
    })
  }
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
