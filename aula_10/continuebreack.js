let numero = 2

while(numero !== 8){
    numero = Math.floor(Math.random() * 10)
    console.log(numero)
}

for(let i = 1; i <= 10; 1++){
    if (i === 3){
        continue;
    }
    if (i === 7){
        break
    }
}