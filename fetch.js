document.addEventListener("DOMContentLoaded", function() {
  getData();
});


async function getData(){
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  let json = await response.json();
  loadData(json);
}

function loadData(resp){
  resp.forEach(user => {
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.appendChild(document.createTextNode(user.userId + ' '+ user.id + ' ' + user.title + ' ' + user.body));
  });
}
