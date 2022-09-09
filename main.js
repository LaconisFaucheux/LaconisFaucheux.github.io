function randomMeal () {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then ((response => {
        //removing former ingredients list
        let ul = document.getElementById('myList');
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        //ingredients implementation
        const ingredients = Object.entries(response.data.meals[0])
        //Ingredients list starts at [9] and ends at [28]
        for(i=9; i < 29; i++ ){
            if(ingredients[i][1] != "" && ingredients[i][1] != null){
                let myList= document.querySelector('#myList')
                let li = document.createElement("li");
                li.innerText = ingredients[i][1];
                myList.appendChild(li);            
            }
        }
        document.querySelector('#mealName').textContent = response.data.meals[0].strMeal        
        document.querySelector('#preparation').textContent = response.data.meals[0].strInstructions
        document.querySelector('#photo').setAttribute('src', response.data.meals[0].strMealThumb)
      })

      ) 
      .catch ((error) => console.log(error))
}

randomMeal()
let button = document.querySelector("#playButton")
button.addEventListener('click', randomMeal)
