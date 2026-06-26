let totalTarefas = 0;

function adicionarTarefa(){
 const input = document.getElementById('tarefa');
 const texto = input.value.trim();
 if(texto === ''){ alert('Digite uma tarefa!'); return; }
 const item = document.createElement('li');
 item.textContent = '✓ ' + texto;
 item.onclick = function(){ item.classList.toggle('concluida'); };
 document.getElementById('listaTarefas').appendChild(item);
 totalTarefas++;
 document.getElementById('contador').textContent = 'Total de tarefas: ' + totalTarefas;
 input.value='';
}
function mostrarTela(tela){
 document.querySelectorAll('.tela').forEach(t=>t.classList.remove('ativa'));
 document.getElementById(tela).classList.add('ativa');
}
function alterarTema(){
 const tema = document.getElementById('tema').value;
 if(tema==='escuro'){document.body.classList.add('escuro');}
 else{document.body.classList.remove('escuro');}
}