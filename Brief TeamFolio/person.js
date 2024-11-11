const people = document.getElementById("people");

fetch("person.json").then( response => {
    return response.json();
}).then( obj => {
    obj.person.forEach(element => {
        const dived = document.createElement("div");
        people.appendChild(dived)
        dived.innerHTML = `${element.firstName}   ${element.secondName}  ${element.age}  ${element.genre}`;
    });
})

function Selected() {
    const selectMenu  = document.getElementsByClassName("form-select")[0];
    const selected = selectMenu.value;
    people.innerHTML = ''

    if(selected == 1){
        fetch("person.json").then( response => {
            return response.json();
        }).then( obj => {
            obj.person.forEach(element => {
                if(element.genre === "homme"){
                    const dived = document.createElement("div");
                    people.appendChild(dived)
                    dived.innerHTML = `${element.firstName}   ${element.secondName}  ${element.age}  ${element.genre}`;
                }
            });
        })
    } else if(selected == 2){
        fetch("person.json").then( response => {
            return response.json();
        }).then( obj => {
            obj.person.forEach(element => {
                if(element.genre === "femme"){
                    const dived = document.createElement("div");
                    people.appendChild(dived)
                    dived.innerHTML = `${element.firstName}   ${element.secondName}  ${element.age}  ${element.genre}`;
                }
            });
        })
    }
}

