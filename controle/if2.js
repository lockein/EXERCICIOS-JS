function teste1(num){

    //com esse sintaxe, o unico comando dentro do if é a primeira linha após ele 
    if(num > 7)
     console.log(num);
     console.log('Final');
}

teste1(6);
teste1(8);

function teste2(num){

    if(num > 7 ); {
        console.log(num);
    }
}

teste2(6);
teste2(8);