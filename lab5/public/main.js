let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// !fetch

function getPosts() {
    fetch('http://localhost:3000/laptops')
        .then((res) => res.json())
        .then((data) => {
            let output = `<div class="heading"><h2>Buy a laptop</h2></div>`;
            data.forEach(function (laptops) {
                output += `
              <div class="box">
                <h3>${laptops.title}</h3>
                <div class="content">
                    <span>${laptops.id}</span>
                    <span>${laptops.hdd}</span>
                    <a href="${laptops.link}">Buy</a>

                </div>
              </div>
              `;
            });
            document.getElementById('output').innerHTML = output;
        })
}

getPosts()

// const image = document.getElementById('pic');
// function setSrc(){
//     image.src="./img/1.jpg"
// }

// setSrc()