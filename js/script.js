const canvas = document.querySelector("canvas")//Selecionar elementos do html
const ctx = canvas.getContext("2d") // obtem contexto de desenho

const h1 =document.querySelector("h1")
const size = 30

const snake = [
    {x:0,y:0}
] //Criando o array da cobra

const randomNumber=(min,max)=>{
    return Math.round(Math.random()*(max-min) +min)
}
const randomPosition=()=>{
    const number = randomNumber(0,canvas.width-size)
    return Math.round(number/30) *30
}
h1.innerText = randomPosition()
const food = {
    x:randomPosition(),
    y:randomPosition(),
    color: "yellow"
}

const drawFood = ()=>{

    const {x,y,color} = food

    ctx.shadowColor = color
    ctx.shadowBlur = 6
    ctx.fillStyle = color
    ctx.fillRect(x,y,size,size)
    ctx.shadowBlur=0
}
const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    
    snake.forEach((position,index)=>{

        if(index==snake.length -1){
            ctx.fillStyle = "white"
        }
        ctx.fillRect(position.x,position.y,size,size)
    })
}

let direction,loopId

const moveSnake = () =>{
if(!direction) return
    const head = snake[snake.length-1] //Pega o ultimo elemento do array

    snake.shift() //remove o primeito elemento do array
    
    if(direction=="right"){
        snake.push({x:head.x + size,y:head.y})
    }
    if(direction=="left"){
        snake.push({x:head.x - size,y:head.y})
    }
    if(direction=="down"){
        snake.push({x:head.x,y:head.y + size})
    }
    if(direction=="up"){
        snake.push({x:head.x,y:head.y - size})
    }
}

const drawGrid = ()=>{
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

    for(let i=30;i<canvas.width;i+=30){
        ctx.beginPath()
        ctx.lineTo(i,0)
        ctx.lineTo(i,600)

        ctx.stroke()
        
        ctx.beginPath()
        ctx.lineTo(0,i)
        ctx.lineTo(600,i)

        ctx.stroke()
    }
    
}

const gameLoop = ()=> {
    clearInterval(loopId)
    ctx.clearRect(0,0,600,600)
    drawGrid()
    drawFood()

    moveSnake()
    drawSnake()

    loopId=setTimeout(() => {
        gameLoop()
    }, 300);
}


gameLoop()

document.addEventListener('keydown',({key}) =>{
    if(key =="ArrowRight" && direction != "left"){
        direction = "right"
    }
    if(key =="ArrowLeft" && direction != "right"){
        direction = "left"
    }
    if(key =="ArrowDown" && direction != "up"){
        direction = "down"
    }
}) /*Serve para pegar qual botão o usuário apertou*/
/*
ctx.fillStyle="red" // Estilo de preenchimento
ctx.fillRect(300, 300, 50, 50)//desenha um quadrado preenchido
*/

