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

let bang1= new Image()
bang1.src = 'images/explosion.png'

let bang2= new Image()
bang2.src = 'images/bang2.png'

//let fg = new Image()
//fg.src = 'images/fg.png'


let ast1= new Image()
ast1.src ='images/asteroid.png'

let ast2 = new Image()
ast2.src = 'images/asteroid 2.png'

let ast3 = new Image ()
ast3.src ='images/asteroidbig.png'

let rocket = new Image()
rocket.src = 'images/rocket.png'

let mortyscream = new Audio()
mortyscream.src = 'sounds/mortyscream.mp3'

let explosion1= new Audio()
explosion1.src ='sounds/explosion1.wav'

let jeez = new Audio()
jeez.src = 'sounds/jeez.mp3'


let shields = 5
let score = 0;
let rickX = 50;
let rickY = 50;
let rickIncrement = 1;
let constIncrement= 100;
let spawn = 600
let speed =1






let asteroids = [
     {x: canvas.width-10, y: canvas.height},
    ]

    let asteroids2 = [
        {x: canvas.width-10, y: canvas.height},
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

    if (score>=20){
        speed=2
    }

    

   


    for(let i=0; i< asteroids.length; i++){
        
        let constant = ast1.height + constIncrement  
      
        ctx.drawImage(ast1, asteroids[i].x, asteroids[i].y)

        //if (score>=20){
//
        //    ctx.drawImage(ast2, asteroids2[i].x+constant, asteroids2[i].y+constant)
        //}
        //
        

        //if (score>=20 && score <=30){
        //ctx.drawImage(ast3, asteroids[i].x+constant+100, asteroids[i].y+constant -50)
        //}
        
        asteroids[i].x-=speed
        //asteroids2[i].x-=speed

         
       if (asteroids[i].x === 10 || asteroids2[i].x === 10 ) {
            score++
            //speed *+speed
            //constIncrement -=5
            
        }

        if (asteroids[i].x === spawn || asteroids[i].x === spawn ) {
            
            asteroids.push({
                x: canvas.width,
                y: Math.floor(Math.random() * canvas.height)})
                
                asteroids2.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * canvas.height)
            })
        
           
   
        
}
    
//if (asteroids[i].length < spawn ) {
//        if (Math.random()<0.10){
//        asteroids.push({
//            x: canvas.width,
//            y: Math.floor(Math.random() * canvas.height)
//            
//        })
//    }

        if(asteroids[i].x<=(rickX+rick.width) && asteroids[i].x+ast1.width>=rickX  && asteroids[i].y<=(rickY+(rick.height)) && asteroids[i].y+ast1.height>rickY  /*|| 
        asteroids2[i].x<=(rickX+rick.width) && asteroids2[i].x+ast2.width>=rickX && asteroids2[i].y<=(rickY+(rick.height)) && asteroids2[i].y+ast2.height>rickY*/){
            

            //first asteroid collision
   // let asteroid1Collision = asteroids[i].x<=(rickX+rick.width) && asteroids[i].x + ast1.width>=rickX  && asteroids[i].y<=(rickY+(rick.height)) && asteroids[i].y + ast1.height >rickY 
   // //second asteroid collision
   // let asteroid2Collision = asteroids2[i].x<=(rickX+rick.width) && asteroids2[i].x + ast2.width>=rickX && asteroids2[i].y<=(rickY+(rick.height)) && asteroids2[i].y + ast2.height>rickY
   // if( asteroid1Collision || asteroid2Collision){


            asteroids[i].x *=-1

            explosion1.play()
            
            if (shields>0){
                shields--
                //mask += 40
            }



            if (shields===4 || shields===2){
                mortyscream.play()
            }

            else if(shields===3 || shields===1){
                jeez.play()
            }
            
            
            let startTime = new Date().getTime();
            let drawIntId = setInterval(()=>{
                if(new Date().getTime() - startTime > 2000){
                    clearInterval(drawIntId);
                    
                }
                ctx.drawImage(bang1,rickX+Math.round(Math.random()*50), rickY+Math.round(Math.random()*50))
                ctx.drawImage(bang1,rickX-Math.round(Math.random()*50), rickY-Math.round(Math.random()*50))
                rickX=rickX+(Math.round(Math.random()*2))
                rickX=rickX-(Math.round(Math.random()*2))
                
                
            }, 10);      

            
 }

        
    //    Collision logic. Try and break it down to understand. Don't panic
    //    if( birdX + bird.width >= pipes[i].x && birdX <= pipes[i].x + pipeNorth.width && (birdY <= pipes[i].y + pipeNorth.height || birdY+bird.height >= pipes[i].y+constant) || birdY + bird.height >=  canvas.height - fg.height){
    //     clearInterval(intervalId);
    //        alert('GAME OVER');
    //        location.reload(); 
    //    }
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