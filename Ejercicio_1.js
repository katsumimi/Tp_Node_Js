function sumArray (arreglo, numero){
    let indicador=0;
    let pocision=-1;
    let finalR=false;
    while(!finalR && indicador<arreglo.length){
        var resultado= arreglo[indicador]+arreglo[indicador+1];
        console.log(resultado);
        if(resultado==numero){
            finalR=true;
            pocision=finalR;
        } 
        else{
            finalR=false;
            pocision=finalR;
            indicador+=1;
        }
    }
    return finalR;
}
var arreglo=[3,4,5,6,7,10];
var numero=[12];
var finalR=sumArray(arreglo, numero);
console.log(finalR)
