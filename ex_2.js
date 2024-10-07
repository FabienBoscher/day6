function AddCar(agentString, car) {

    let agent = JSON.parse(agentString)
    agent.car = car;
 
return agent;
}
 
let agentString =`{
    "age" : 57,
    "code" : 007,
    "firstName" : James,
    "lastName" : bond,
}`;

let newCar = "Aston Martin";
let newAgentString = AddCar(agentString, newCar);
console.log(newAgentString);

