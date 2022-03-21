const app = document.getElementById("app");
const p = document.createElement("p");
app.appendChild(p);

fetch("http://api.quotable.io/random").then((response) => {
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(data.content)

    p.textContent = data.content;
    
}).catch()