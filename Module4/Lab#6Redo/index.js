

function addCard(title = 'My Card Title', body = "Post content", id) {
    // clone the template
    const template = document.getElementById("card-template").content.cloneNode(true);
    // populate the template
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = body;
    // include the populated template into the page
    document.querySelector('#card-list').appendChild(template);
}

function colorToggle() {
    let cards = document.getElementsByClassName("card")
    for (let item of cards) {
        item.addEventListener("mouseover", function () {
            item.style.color = "red";
            item.style.borderColor = 'red';
        });
        item.addEventListener("mouseout", function () {
            item.style.color = "black";
            item.style.borderColor = 'blue';
        });
    };
};


fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        let delay = 1000;
        json.forEach((post) => {
            setTimeout(() => { addCard(post.title, post.body); }, delay);
            delay += 2000;
        });
    });















