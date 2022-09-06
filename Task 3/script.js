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
                let li = document.createElement('li');
                let login = document.createElement('h4');
                let avatar_url = document.createElement('span');
                login.innerHTML = `${output.login}`;
                avatar_url.innerHTML = `${output.avatar_url}`;
                li.appendChild(login);
                li.appendChild(avatar_url);
                list.appendChild(li);
            });
            document.getElementById('message').style.visibility = 'hidden';
        })
        .catch(function(error) {
            console.log(error);
          });
      
        ul.appendChild(list);
}