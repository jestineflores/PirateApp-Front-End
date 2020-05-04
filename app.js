console.log("Hit")
fetch('http://localhost:3000/ships')
    .then(response => response.json())
    .then(ships => ships.forEach(ship => {
        let h1 = document.createElement('h1')

        h1.innerHTML = `<a href=ship.html?id=${ship.id}>${ship.name}</a>`

        document.body.appendChild(h1)
    }))


let dropdown = document.querySelector('#dropdown')
fetch("http://localhost:3000/pirates")
    .then(response => response.json())
    .then(showPirates)


fetch("http://localhost:3000/ships")
    .then(response => response.json())
    .then(createOptions)



function showPirates(pirates){
    pirates.forEach(pirate => {
        let h2 = document.createElement('h2')
        h2.innerText = pirate.name

        document.body.appendChild(h2)
    })
}

function createOptions(ships){
    ships.forEach(ship => {
        let option = document.createElement('option')

        option.innerText = ship.name
        option.value = ship.id

        dropdown.appendChild(option)
    })
}