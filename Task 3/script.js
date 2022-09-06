/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

//const ENDPOINT = 'https://api.github.com/users';
const ul = document.getElementById('output');
const list = document.createDocumentFragment();
const url = 'https://api.github.com/users';
btn.onclick = function () {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let output = data;
            output.map(function (output) {
                
            }

//console.log(data)
        

/*   output.map(function (author) {
                let li = document.createElement('li');
                let avatar_url = document.createElement('h3');
                let login = document.createElement('span');

                avatar_url.innerHTML = `${author.avatar_url}`;
                login.innerHTML = `${author.login}`;

                li.appendChild(name);
                li.appendChild(email);
                list.appendChild(li);}*/
            });
        }