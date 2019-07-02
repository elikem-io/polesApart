document.getElementById('submit').addEventListener('click', loadUser);

//variables
const xhr = new XMLHttpRequest(),
      link = "https://randomuser.me/api/",
      //key = "MDB3-YF7H-IWED-8LS6";
      gender ="gender=" + document.querySelector ('#gender').value,
      race = document.querySelector ('#race').value,
      age = "age=" + document.querySelector ('#myRange').value;
      url = link + age;



//functions
function loadUser(e){
    e.preventDefault();
    //open a new connection
    console.log(age);
    
    xhr.open('GET', link, true);
    xhr.onload = function(){
        if(this.status === 200){
            const user = JSON.parse(this.responseText);
            let 
        }else{
            console.log('damn');
        }
    }

    xhr.send();    
    
}



