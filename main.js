const baseURL = 'https://hacker-news.firebaseio.com/v0/item/';
const itemNumbers = Array.from({length: 10}, (_, i) => i + 1);

const fetchPromises = itemNumbers.map(num => 
  fetch(`${baseURL}${num}.json`).then(response => response.json())
);

Promise.all(fetchPromises)
  .then(items => {
    const ul = document.createElement('ul'); // Create a new <ul> element
    items.forEach(item => {
      const li = document.createElement('li'); // Create a new <li> element
      const a = document.createElement('a'); // Create a new <a> element
      a.textContent = item.title; // Set the text content of the <a> element to the title
      a.href = item.url; // Set the href attribute of the <a> element to the URL of the item
      a.target = '_blank'; // Open the link in a new tab
      li.appendChild(a); // Append the <a> element to the <li> element
      ul.appendChild(li); // Append the <li> element to the <ul> element
    });
    document.body.appendChild(ul); // Append the <ul> element to the body of the HTML document
  })
  .catch(error => console.error(error));