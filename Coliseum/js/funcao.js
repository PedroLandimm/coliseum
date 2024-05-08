function resp(){
    nome = document.getElementById("nome").value.toUpperCase();
    alert("Sr(a)" + nome +", entraremos em contato em breve.")
}
function somente_num(e){
    tecla = (window.Event) ? e.which : e.keyCode;
    if (tecla > 47 && tecla <58){
        return true;
    } 
    else{
        if (tecla > 95 && tecla < 106){
            return true;
    }
    else{
       
        if(tecla == 8 || tecla == 46 || tecla == 37 || tecla == 39){
            return true;
       
        }
        else{
            return false;
        }
        }
    }
  }
  function maiusculo(){
    nomemaior = document.getElementById("nome").value.toUpperCase();
    document.getElementById("nome").value = nomemaior;
}