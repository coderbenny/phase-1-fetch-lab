// To pass the tests, don't forget to return your fetch!
function fetchBooks() {
  const apiUrl = 'https://anapioficeandfire.com/api/books'

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('error fetching books:', error))
}

function renderBooks(books){
  const main = document.querySelector('main')

  books.map(book => {
    const h2 = document.createElement('h2')
    h2.textContent = book.name;
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
