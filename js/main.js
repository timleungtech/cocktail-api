//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
let i = 0
function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
	.then(res => res.json()) // parse response as JSON
	.then(data => {
		console.log(data.drinks)
        document.querySelector('h2').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[i].strInstructions
        
        console.log(i)
        // carousel drink
        return (i < data.drinks.length - 1) ? i++ : i = 0
        // randomize drink
        // return i = Math.floor(Math.random() * data.drinks.length)
        }
	)
	.catch(err => {
		console.log(`error ${err}`)
	})
}