let listapessoa = []
        

        function gravar(){
           //alert("teste")
           let pessoa = {}

           pessoa.nome = document.getElementById('nome').value
           pessoa.status = document.getElementById('status').value
           pessoa.local = document.getElementById('local').value
           pessoa.inicio = document.getElementById('inicio').value
           pessoa.inicioPrevisto = document.getElementById('inicioPrevisto').value
           pessoa.fimPrevisto = document.getElementById('fimPrevisto').value
           pessoa.saidaPrevista = document.getElementById('saidaPrevista').value

           let id = document.getElementById('id').value

           if (id == ''){
                       
                listapessoa.push(pessoa)
           }else{
               listapessoa[id] = pessoa
           }
           
           localStorage.setItem('listapessoa', JSON.stringify(listapessoa))

           atualizartabela()

           novo()
           
        }

        function atualizartabela(){
            //console.log('atualizar tabela')
            let listapessoa = JSON.parse(localStorage.getItem('listapessoa')) 
            let corpotabela = ''
            for (i in listapessoa){
               corpotabela += `<tr onclick="editar(${[i]})">`
               corpotabela += `<td>${listapessoa[i].nome}</td>`
               corpotabela += colunastatus(listapessoa[i].status, listapessoa[i].local)
               corpotabela += `<td>${listapessoa[i].inicio}</td>`
               corpotabela += `<td>${listapessoa[i].inicioPrevisto}</td>`
               corpotabela += `<td>${listapessoa[i].fimPrevisto}</td>`
               corpotabela += `<td>${listapessoa[i].saidaPrevista}</td>`
               corpotabela += '</tr>'
            }
            document.getElementById('corpotabela').innerHTML = corpotabela
        }

        function colunastatus(status,local){
            let retorno = '<td &class> &status &local </td>'
            local = (local == '') ? '' : `(${local})`
            retorno = retorno.replace("&local", local)
            switch(status){
                case 'operatorio' :{
                    retorno = retorno.replace('&class', "class='table-warning'")
                    .replace("&status", "Pré Operatório")
                    
                break
                }
                case 'cirurgia' :{
                    retorno = retorno.replace('&class', "class='table-danger'")
                    .replace("&status", "Em cirurgia")
                    
                break
                }
                case 'recuperacao' :{
                    retorno = retorno.replace('&class', "class='table-success'")
                    .replace("&status", "Em Recuperação")
                   
                break
                }
                case 'transferido' :{
                    retorno = retorno.replace('&class', "class='table-primary'")
                    .replace("&status", "Transferído")
                    
                break
                }
            }
            return retorno
        }

        function editar(id){
            document.getElementById('nome').value = listapessoa[id].nome
            document.getElementById('status').value = listapessoa[id].status
            document.getElementById('local').value = listapessoa[id].local
            document.getElementById('inicio').value = listapessoa[id].inicio
            document.getElementById('inicioPrevisto').value = listapessoa[id].inicioPrevisto
            document.getElementById('fimPrevisto').value = listapessoa[id].fimPrevisto
            document.getElementById('saidaPrevista').value = listapessoa[id].saidaPrevista
            document.getElementById('id').value = id

        }

        function apagar(){
            //alert('teste')
            let id = document.getElementById('id').value
            
            if (id == ''){
                return
               

            }else if (confirm('Você deseja realmente apagar esse paciente?')){
                listapessoa.splice(id, 1)

                localStorage.setItem('listapessoa', JSON.stringify(listapessoa))
                
                novo() 
                atualizartabela()
            }
                return  
                                       
            }
        function novo(){
            document.getElementById('formulario').reset()
            let id = document.getElementById('id').value = ''
        }
        function painel(){ 
            
         }
atualizartabela()