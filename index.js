let canvas = document.querySelector('canvas')
canvas.style.border = '1px solid black';

let ctx = canvas.getContext('2d')
let intervalId = 0;

//let speed =10

let bg = new Image()
bg.src = 'images/stars.jpg'
let bgW = canvas.width
let bgH =canvas.height

let rick = new Image()
rick.src = 'images/rickfingerEdit3.png'

//let fg = new Image()
//fg.src = 'images/fg.png'


let ast1= new Image()
ast1.src ='images/asteroid.png'

let ast2 = new Image()
ast2.src = 'images/asteroid 2.png'

let ast3 = new Image ()
ast3.src ='images/asteroidbig.png'



let shields = 5
let score = 0;
let rickX = 20;
let rickY = 20;
let rickIncrement = 1;
let constIncrement= 100;

let asteroids = [
     {x: canvas.width-10, y: canvas.height-500},
    ]



document.addEventListener('mousedown', (event) => {
    rickIncrement = -2
})

document.addEventListener('mouseup', () => {
    rickIncrement = 1
})

function startGame(){
    
    
    ctx.drawImage(bg, 0, 0, bgW, bgH)
    ctx.drawImage(rick, rickX, rickY)

    for(let i=0; i< asteroids.length; i++){
        
        let constant = ast1.height + constIncrement  
      
        ctx.drawImage(ast1, asteroids[i].x, asteroids[i].y)
        
        
        ctx.drawImage(ast2, asteroids[i].x+constant, asteroids[i].y+constant)
        if (score>=20 && score <=30){
        ctx.drawImage(ast3, asteroids[i].x+constant+100, asteroids[i].y+constant -50)
        }
        
        asteroids[i].x--
        if (asteroids[i].x === 10) {
            score++
            //speed *+speed
            //constIncrement -=5
            
        }
        if (asteroids[i].x == 600 ) {
            
            asteroids.push({
                x: canvas.width,
                y: Math.floor(Math.random() * canvas.height-200)
            })

            

          //  //if(score>=20 && score<=30){
          //      asteroids.push({x: canvas.width-10, y: canvas.height-500},)
          //  }
    //
            

            

            
        }

       // if(asteroids[i].x<(rickX+rick.width) && asteroids[i].x+ast1.width>rickX && asteroids[i].y<(rickX+(rick.height)) && asteroids[i].y+ast1.height>rickY){
       //     //dx *=-1
       //     
       //     
       //     if (lives>0){
       //         lives--
       //         //mask += 40
       //     }
       // }
         //Collision logic. Try and break it down to understand. Don't panic
        //if( rickX + rick.width>= asteroids[i].x && rickX <= asteroids[i].x + ast1.width && (rickY <= asteroids[i].y + ast1.height || rickY+rick.height>= asteroids[i].y+constant) || rickY + rick.height >=  canvas.height){
        //    clearInterval(intervalId);
        //    alert('GAME OVER');
        //    location.reload(); 
        //}
   
    //if (rickY > canvas.height-100) {
    //    clearInterval(intervalId)
    //    alert('Game Over')
   // }
    
   
   }
    rickY += rickIncrement
    //ctx.drawImage(fg, 0, canvas.height-100)
    ctx.fillStyle= 'white'
    ctx.font = '20px Verdana'
    ctx.fillText('Score: ' + score, 10,490 )
    ctx.fill()

    
			if (shields>1){
				ctx.fillStyle= 'green'
			}
			else ctx.fillStyle='red'
			ctx.fillRect (250, 480, 20*shields, 10)
			ctx.fill()
			
			if (shields==0){
				ctx.fillText ('SHIELDS GONE!', 10, 350)
			}

			if (shields==1){
			ctx.fillText ('SHIELDS LOW', 10, 350)
			ctx.fillText ('shields:'+shields, 10, 400)

			}
			else ctx.fillText ('shields:'+shields, 160, 490)
            
            
            
        }

        

intervalId = setInterval(() => {

    requestAnimationFrame(startGame)
},10)
