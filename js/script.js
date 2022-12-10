let bode = document.querySelector('body')
bode.style.display= 'flex'
bode.style.gap = '20px'


for(let i = 0; i <= 3 ; i++){
    let div = document.createElement('div')
    div.style.width = 100 + 'px'
    div.style.height = 100 + 'px'
    div.style.backgroundColor = '#fff'
    div.style.border = '2px solid #000'
    div.classList.add('border')
    bode.prepend(div)
    
}//создаю дивы 


let gar = [
    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 57%, rgba(0,212,255,1) 100%)', 
    'linear-gradient(90deg, rgba(7,233,246,1) 0%, rgba(101,247,2,1) 51%, rgba(0,212,255,1) 100%)',
    'linear-gradient(90deg, rgba(246,7,7,1) 0%, rgba(229,247,2,1) 51%, rgba(255,0,14,1) 100%)',
    'linear-gradient(90deg, rgba(229,247,2,1) 53%, rgba(68,0,255,1) 100%)',
]//беру гардиенты

let bloc = document.querySelectorAll('.border')//добавляю класс

//беру рандомный гардиент
let num = Math.random()*4
num = Math.floor(num)
let g = gar[num]


//подставляю гардиент
bloc = bloc[bloc.length - 1]
bloc.style.background = g
bloc.style.border = 'none'


console.log(bloc);//проверка



