document.querySelector('input#gerar').addEventListener('click', gerar)
function gerar() {
    var iNum = document.querySelector('input#num')
    var num = Number(iNum.value)
    var txt = document.querySelector('option#txt')
    var sel = document.querySelector('select#tab')

    if(iNum.value.length == 0) {
        window.alert("Digite um número para ver a tabuada!")
    } else {
        sel.innerHTML = "" // limpa o select

        if (num >= 0 || num <= -1) {
            for(var c=1;c<=10;c++) {
                var op = document.createElement('option')
                op.setAttribute("class", "opcao")
                sel.appendChild(op)
                op.innerHTML = `${num}X${c} = ${num*c}`
            }
        }
    }
}