alert("Bem vindo ao sistema dobro e triplo, se quiser sair do programa aperte 0")
let numero ;

do{
    numero = number(prompt("Digite o número"))
    if(numero === 0 || isNaN(numero)){
        let sair = prompt("confirma a saída")
        if(sair){
            break;
        } else {
            continue;
        }
        if (numero % 2 ===0) {
            alert(`o dobro de ${numero} é: ${numero} * 2}`);
        }else{
            alert(`o triplo de ${numero} é: ${numero} *3`)
        }
    } 
  alert("Digite 0 para sair do programa")
} while (true);