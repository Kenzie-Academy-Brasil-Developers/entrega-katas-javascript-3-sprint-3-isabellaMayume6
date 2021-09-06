const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showResults(resultado){
    let elemento = document.createElement("div")
    let texto = document.createTextNode(resultado)
    elemento.appendChild(texto)
    document.body.appendChild(elemento)
}

function kata1() {
    //mostrar os numeros de 1 até 25
    let x = ' '
    for(let i=1;i<=25;i++){
        if(i==25){
            x+=i
        }else{
            x+=i+', '
        }
    }
    return showResults(x)
}kata1()

function kata2() {
    //Exibir os números de 25 a 1: _(25, 24, 23, …, 2, 1)
    let x = ' '
    for(let i=25;i>=1;i--){
        if(i==1){
            x+=i
            
        }else{
            x+=i+', '
        
        }
    }return showResults(x)
}kata2()

function kata3() {
    //Exibir os números de -1 a -25: _(-1, -2, -3, …, -24, -25)
    let x= ' '
    for(let i = -1; i>=-25;i--){
        if(i==-25){
            x+=i
        }else{
            x+=i + ', '
        }
    }return showResults(x)
}kata3()

function kata4() {
    //4.  Exibir os números de -25 a -1: _(-25, -24, -23, …, -2, -1)_
    let x= ' '
    for(let i = -25; i<=-1;i++){
        if(i==-1){
            x+=i
        }else{
            x+=i + ', '
        }
    } return showResults(x)
}kata4()

function kata5() {
    // 5.  Exibir os números ímpares de 25 a -25: _(25, 23, 21, …, -23, -25)_
    let x = ' '
    for(let i=25;i>=-25;i--){
        if(i%2!==0){
            x+=i + ', '
        }
    }return showResults(x)
}kata5()

function kata6() {
    // 6.  Exibir os números divisíveis por 3 até o 100: _(3, 6, 9, …, 96, 99)_
    let x = ' '
    for (let i=3;i<=100;i++){
        if(i%3==0){
            x+=i + ', '
        }
    }showResults(x)
}kata6()

function kata7() {
    //Exibir os números divisíveis por 7 até o 100: _(7, 14, 21, …, 91, 98)_
    let x = ' '
    for (let i=7;i<=100;i++){
        if(i%7==0){
            x+=i + ', '
        }
    }showResults(x)
}kata7()

function kata8() {
//Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: _(99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)_
    let x = ' '
    for (let i=100;i>=3;i--){
        if(i%7==0){
            x+=i + ', '
        }
        if(i%3==0){
            x+=i +', '
        }
    }showResults(x)
}kata8()

function kata9() {
    // Exibir os números ímpares divisíveis por 5 até o 100: _(5, 15, 25, …, 85, 95)
    let x =' '
    for(let i = 5;i<100;i++){
        if(i%2!==0 && i%5==0){
            x+=i + ', '
        }
    }return showResults(x)
}kata9()

function kata10() {
    // Exibir os 20 elementos de sampleArray. _(469, 755, 244, …, 940, 472)_
    let x = sampleArray
    return showResults(x)
}kata10()

function kata11() {
    // 11. Exibir todos os números pares contidos em sampleArray. _(244, 758, 450, …, 940, 472)_
    let x = [ ]
    for(let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%2==0){
            x.push(sampleArray[i])
        }
    }return showResults(x)
}kata11()

function kata12() {
    // 12. Exibir todos os números ímpares contidos em sampleArray. _(469, 755, 245, …, 179, 535)_
    let x = [ ]
    for(let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%2!==0){
            x.push(sampleArray[i])
        }
    }return showResults(x)
}kata12()

function kata13() {
    // 13. Exibir os números divisíveis por 8 em sampleArray: _(712, 456, …, 472)_
    let x =[]
    for(let i=0;i<sampleArray.length;i++){
        if(sampleArray[i]%8==0){
            x.push(sampleArray[i])
        }
    }return showResults(x)
}kata13()

function kata14() {
    // 14. Exibir o quadrado de cada elemento de sampleArray. _(219961, 570025, …, 222784)_
    let x = []
    for(let i = 0;i<sampleArray[i];i++){
        let rest = (sampleArray[i]*sampleArray[i])
        x.push(rest)
    }return showResults(x)
}kata14()

function kata15() {
    // 15. Exibir a soma de todos os números de 1 a 20.
    let x = 0
    for(let i=0;i<=20;i++){
        x +=i
    }return showResults(x)
}kata15()

function kata16() {
    // 16. Exibir a soma de todos os elementos de sampleArray.
    let sum = 0
    for(let i=0;i<sampleArray.length;i++){
        sum+=sampleArray[i]
    }return showResults(sum)
}kata16()

function kata17() {
   // 17. Exibir o menor elemento de sampleArray.
   let min = Math.min(469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472)
    return showResults (min)
}kata17()

function kata18() {
    //18. Exibir o maior elemento de sampleArray.
    let max = Math.max(469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472)
    return showResults(max)
}kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}


