/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const ul = document.getElementById('output');
const list = document.createDocumentFragment();
    fetch(ENDPOINT)
        .then((cars) => {
            return cars.json();
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
        })
        .catch(function(error) {
            console.log(error);
          });
      
        ul.appendChild(list);