const ajax = new XMLHttpRequest();

ajax.open('GET', 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty', false);
ajax.send();

console.log(ajax.responseText);