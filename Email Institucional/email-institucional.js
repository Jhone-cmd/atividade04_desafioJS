function gerar() {
  
    let funcionario = document.getElementById("funcionario").value
    let saidadoemail = document.getElementById("saidadoemail")
  
    if (funcionario == "" || funcionario.indexOf(" ") == -1) {
      alert("Informe o nome completo do funcionário...")
      inFuncionario.focus()
      return
    }
  
    let partes = funcionario.split(" ");
    let email = "";                       
    let tamanhodaspartes = partes.length;            
  
    for (let i = 0; i < tamanhodaspartes - 1; i++) {
      email += partes[i].charAt(0);   
    }
     
    email += partes[tamanhodaspartes - 1] + "@empresa.com.br";
  
    saidadoemail.textContent = "E-mail: " + email.toLowerCase(); 
  }
  let gerarEmail = document.getElementById("geraremail");
