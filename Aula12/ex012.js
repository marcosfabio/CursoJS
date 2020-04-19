var hora = 22
var agora = new Date()

console.log(`Agora são extamente ${hora}h`)

if(hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 18) {
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!`)
}

console.log(`Agora são extamente ${agora.getHours()}h`)

if(agora.getHours() < 12) {
    console.log(`Bom dia!`)
} else if (agora.getHours() < 18) {
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!`)
}