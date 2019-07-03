document.getElementById('submit').addEventListener('click', loadUser);

function loadUser(e){
    e.preventDefault();

        const gender = document.querySelector ('#gender').value,
                country = document.querySelector ('#country').value,
                age = document.querySelector ('#age').value,
                amount = document.querySelector('#quantity').value;

        link = "https://uinames.com/api/?";

        if(country !== ''){
            link += `region=${country}&`;
        }
        if(gender !== ''){
            link += `gender=${gender}&`;
        }
        if(amount !== ''){
            link += `amount=${amount}&`;
        }
        
    //open a new connection
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.onload = function(){
        if(this.status === 200){
            const user = JSON.parse(this.responseText);
            document.querySelector('#user-profile').innerHTML =
            `
            <div class="profile">
            <div class="img">
                <img src="x.jpg" alt="">
            </div>
            <div class="details">
                <div class="name">
                    <h1>Name:</h1> <p>${user.name}</p>
                </div>
                <div class="age">
                    <h1>Age:</h1> <p>${user.age}</p>
                </div>
                <div class="interests">
                    <h1>Interests:</h1> <p>Ball</p>
                </div>
                <div class="profession">
                    <h1>Profession:</h1> <p>Ball</p>
                </div>
                <div class="need">
                <h1>Needs / wants:</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam ullam quibusdam.</p>
                </div>
               <div class="goals">
                    <h1>Goals / Aspirations</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam ullam quibusdam.</p>
                </div>
                <div class="buttons">
                    <button>Edit</button>
                    <button>Download</button>
               </div>
            </div>
        </div>
            `;
        }else{
            console.log('damn');
        }
    }

    xhr.send();    
    
}



