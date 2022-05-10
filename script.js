console.log("Javascript carregado")

function validacao(){
    console.log("Validação de cpf carregada")
   var cpf = document.getElementById("cpf_digitado").value

   console.log("Cpf é " + cpf);

        var resultadodavalidacao = validaCPF(cpf)
        if(resultadodavalidacao){
                document.getElementById("success").style.display = "block";
                document.getElementById("error").style.display = "none";

        }
        else{
            document.getElementById("error").style.display = "block";
            document.getElementById("success").style.display = "none";
        }
}

function validaCPF(cpf){
    console.log(cpf.length);
    if(cpf.length != 11){
    return false;
    }
    else{
        var numeros = cpf.substring(0,9);
        console.log(numeros);
        var digitos = cpf.substring(9)
        console.log(digitos);
        var soma = 0;
        for(var i = 10; i>1; i--){
            soma+= numeros.charAt(10 - i) * i;
            
        }
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        console.log(soma);
        console.log(resultado)
        //validação do primeiro digito
        if(resultado != digitos.charAt(0)){
            return false;
        }
        console.log(digitos.toString().charAt(0) + "é a primeira posção da variavel soma");
        soma = 0;
        numeros = cpf.substring(0,10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
            
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        console.log(resultado)
        //validação do segundo digito
        console.log(digitos.toString().charAt(1) + "é a primeira posção da variavel soma");
        if(resultado != digitos.charAt(1)){
            return false;
        }
        return true;
    }
}