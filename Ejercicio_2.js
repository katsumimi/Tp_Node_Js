function min (arreglo, string){
    let indicador=0;
    let pocision=1;
    let menorq=0;
    while(!menorq && indicador<arreglo.length){
        if(string=="value"){
            for(i=0;i<arreglo.length;i++){
                if(menorq<arreglo[i++]){
                    (menorq=arreglo[i++])}
                }
                if (menorq>arreglo[i++]){
                    (arreglo[i++]=menorq)
                }else{
                    console.log(menorq);
                }
        }
        else if(arreglo=="index"){
            for(i=0;i<arreglo.length;i++){
                if(menorq<arreglo[i++]){
                    (menorq=arreglo[i++])}
                }
                if (menorq>arreglo[i++]){
                    (arreglo[i++]=menorq)
                }else{
                    console.log(menorq);
                }
            console.log(i);
        }
    }
}
var arreglo=[6,3,7];
var string="value";
min(arreglo, string);
