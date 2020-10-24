const message ="Some message from my module.js"
const name ="Venugopal Anantha"
const age ="38"

const myGreeting = (name)=>{
    return `welcome to the course ${name}`
}

export{
    message,
    name,
    age as default,
    myGreeting
}