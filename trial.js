function outF(){
    var outvar = "out func";
    function innerF(){
        console.log(outvar);
    }
    return innerF;
}

var returnedFunction  = outF();
returnedFunction(); 