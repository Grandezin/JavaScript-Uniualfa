function pegavalor(){
    const nome = document.querySelector('.nome').value;
    const sobrenome = document.querySelector('.sobrenome').value;
    
    const p = document.createElement('p');
    p.innerHTML = `Bem vindo ${nome}-${sobrenome}`;
    
    document.querySelector('#div').appendChild(p);
}
const body = document.querySelector('body');
body.style.backgroundColor = 'whitesmoke';
body.style.textAlign = 'center';
body.style.margin = '20px 0px'


$(document).ready(()=>{
    $('#lista').css('list-style','none');

    $('.element').html("Meu texto via jquery");

    $('a').click((e)=>{
        e.preventDefault();
        alert('clicou');
    });
});
