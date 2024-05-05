const baseURL = 'https://hacker-news.firebaseio.com/v0/item/';
const itemNumbers = Array.from({length: 10}, (_, i) => i + 1);

const fetchPromises = itemNumbers.map(num => 
  fetch(`${baseURL}${num}.json`).then(response => response.json())
);

Promise.all(fetchPromises)
  .then(items => items.map(item => item.title))
  .then(titles => {
    const ul = document.createElement('ul'); // Create a new <ul> element
    titles.forEach(title => {
      const li = document.createElement('li'); // Create a new <li> element
      li.textContent = title; // Set the text content of the <li> element to the title
      ul.appendChild(li); // Append the <li> element to the <ul> element
    });
    document.body.appendChild(ul); // Append the <ul> element to the body of the HTML document
  })
  .catch(error => console.error(error));