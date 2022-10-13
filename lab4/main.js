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


async function addComment(body, user_name){
    let comments = document.querySelector('.comments');
    let div = document.createElement('dev');
    div.className = 'output';
    let CustomersContent = `
    <div class="comment">
        
    
        <h3><span>Username: ${user_name} </h3></span>
        <p>
            "${body}"
        </p>
        
        
    </div>`;
    div.innerHTML = CustomersContent;
    comments.append(div);
}


const l = fetch('https://dummyjson.com/comments')
    .then(res => res.json())
    .then(res => parse_json(res.comments))

    function parse_json(data){
        for(let i = 0; i<data.length; i++){
            let body = data[i].body;
            let user_name = data[i].user.username;
            console.log(body);
            console.log(user_name);
            addComment(body, user_name);
        } 
    }
