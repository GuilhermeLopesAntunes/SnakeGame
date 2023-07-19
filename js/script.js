const canvas = document.querySelector("canvas")//Selecionar elementos do html
const ctx = canvas.getContext("2d") // obtem contexto de desenho

const size = 30

const snake = [
    {x:200,y:200},
    {x:230,y:200}
] //Criando o array da cobra

const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    
    snake.forEach((position,index)=>{

        if(index==snake.length -1){
            ctx.fillStyle = "white"
        }
        ctx.fillRect(position.x,position.y,size,size)
    })
}

let direction = "right"

const moveSnake = () =>{
    const head = snake[snake.length-1] //Pega o ultimo elemento do array

    snake.shift() //remove o primeito elemento do array
    if(direction=="right"){
        snake.push({x:head.x + size,y:head.y})
    }
}
moveSnake()
drawSnake()


/*
ctx.fillStyle="red" // Estilo de preenchimento
ctx.fillRect(300, 300, 50, 50)//desenha um quadrado preenchido
*/

