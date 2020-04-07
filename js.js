/*window.alert('este site usa cookies para melhorar sua navegação')
window.confirm('Gostaria de receber notificação assim que um produto nosso é lançado ?')
var nome = window.prompt('Qual seu nome ?')
window.alert('Olá, ' + nome + ' !') */

/*var n1 = window.prompt('Digite um numero: ')
var n2 = window.prompt('Digite outro número: ')
window.alert('Os números que você digitou foram: ' + n1 + ' e ' + n2) */

/* var n1 = Number.parseInt (window.prompt('Digite um numero: '))
var n2 = Number.parseInt (window.prompt('Digite outro número: '))
n3 = n1 + n2
// window.alert('A soma dos números: ' + n1 + ' e ' + n2 +' é de ' + n3) 
window.alert(`A soma dos números: ${n1} e ${n2} é igual a ${n3}`) */

// n1.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'} ) valor monetario 
$('#meuModal').on('shown.bs.modal', function () {
    $('#meuInput').trigger('focus')
  })


  