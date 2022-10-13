let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


function addComment(body, user_name) {
    let comments = document.querySelector('.comments');
    let div = document.createElement('div');
    div.className = 'output';
    let CustomersContent = `
        <h3><span>${user_name} </h3></span>
        <p>
            "${body}"
        </p>
        `;
    div.innerHTML = CustomersContent;
    comments.append(div);
}


const l = fetch('https://dummyjson.com/comments?skip=26&limit=5')
    .then(res => res.json())
    .then(res => parse_json(res.comments))

function parse_json(data) {
    for (let i = 0; i < data.length; i++) {
        let body = data[i].body;
        let user_name = data[i].user.username;
        addComment(body, user_name);
    }
}

fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=7378a94894ca27685ed9113fb79889bd')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data)
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.temperature').innerHTML = "Temperature: " + Math.round(data.main.temp - 273) + '&deg';
        document.querySelector('.feels').innerHTML = "Feels like: " + Math.round(data.main.feels_like - 273) + '&deg';
        document.querySelector('.wind').innerHTML = "Wind speed: " + data.wind['speed'] + " m/s";
        document.querySelector('.image li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0] ['icon']}@2x.png">`;
    })

    .catch(function(){
        //errors
    });