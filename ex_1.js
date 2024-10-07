function displayAgentInfo(obj) {

    let age = obj.age
    let code = obj.code
    let firstName = obj.firstName
    let lastName = obj.lastName

    let phrase = `My name is ${obj.lastName}, ${obj.firstName}  ${obj.lastName}! I'm the agent ${obj.code} and I'm ${obj.age} years old.`
    
    let p = document.querySelector("#container p")
    p.textContent = phrase; 
    
}

let agent = {
    age : 57,
    code : "007",
    firstName : "James",
    lastName : "bond"
}

document.addEventListener('DOMContentLoaded', function() {
    displayAgentInfo(agent)
});