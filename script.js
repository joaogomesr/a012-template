const bool1 = false
const bool2 = true
const bool3 = true

/* if (bool1){
        alert(`entrou no if. bool1 é true`)
}else{
        alert(`Entrou no else. Bool1 é false`)
} */

/* if (bool1 === bool2){
    alert(`Os valores 1 e 2 sao iguais`)
}else if (bool2 === bool3){
    alert(`Os valores 2 e 3 sao iguais`)
}else if (bool1 === bool3){
    alert(`Os valores 1 e 3 sao iguais`)
}else{
    alert(`Nao existe valores iguais`)
} */

/* let idade = 11

if(idade >= 60 || idade >= 16 && idade < 18){
    console.log(`Titulo Facultativo`)
}else if(idade >= 18){
    console.log(`Tem direito ao titulo de eleitor`)
}else{
    console.log(`Você a idade minima para emissão do titulo de eleitor.`)
} */

let media = `a`

if(media >= 5){
    console.log(`Sua nota foi aprovada`)
}else if(media >= 3){
    console.log(`Você ficou de recuperação`)
}else if(media < 3){
    console.log(`Recuperação`)
}else{
    console.log(`Dado invalido`)
}