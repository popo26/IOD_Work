fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify({
        title: "The Studio",
        body: "Something funny",
        userId: 1,
    }),
    headers: {
        'Content-type': "application.json; charset=UTF-8",
    },
})
.then((response) => response.json())
.then((json) => console.log(json));