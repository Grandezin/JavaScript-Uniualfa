function aluhark(x){
    return function java(y){
        return x + y
    }
}
aluhark(2)(2);
const num = ()=> "joao"
console.log(num());

function ex06(){
    return ()=> 2 * 2
}
console.log(ex06()());

function ex07(){
    return function cadastro(nome, idade){
        if(nome == undefined || idade == undefined){
            console.log("Argumentos incorretos")
        }else{
            console.log("olá " + nome +  " Bem vindo ")
        }
    }
}
ex07()("João Gabriel", 17);

function ex08(){
    return function(base, exp){
        return Math.pow(base, exp)
    }
}
console.log(ex08()(2,2));