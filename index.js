let canvas
let ctx 
let intervalId 
let gameIsEnding = false

let bg = new Image()
bg.src = 'images/stars.jpg'
let bgW 
let bgH 

let rick = new Image()
rick.src = 'images/ricknew3_1_60x60.png'

let bang1= new Image()
bang1.src = 'images/explosion.png'

let bang2= new Image()
bang2.src = 'images/bang2.png'

let ast1= new Image()
ast1.src ='images/asteroid.png'

let ast2 = new Image()
ast2.src = 'images/asteroid 2.png'

let ast3 = new Image ()
ast3.src ='images/asteroid3.png'

let blackHole = new Image ()
blackHole.src = 'images/black-hole.png'

let mortyscream = new Audio()
mortyscream.src = 'sounds/mortyscream.mp3'
mortyscream.volume = 0.01

let explosion1= new Audio()
explosion1.src ='sounds/explosion1.wav'
explosion1.volume = 0.01

let jeez = new Audio()
jeez.src = 'sounds/jeez.mp3'
jeez.volume = 0.01

let thrust = new Audio()
thrust.src = 'sounds/thruster2.mp3'
thrust.volume=0.01

let theme = new Audio()
theme.src = 'sounds/theme.mp3'
theme.volume = 0.01

let endTheme = new Audio()
endTheme.src = 'sounds/game-over.mp3'
endTheme.volume = 0.01

let warning = new Audio ()
warning.src = 'sounds/alarm.wav'
warning.volume = 0.008

let shields
let score 
let rickX 
let rickY 
let rickIncrement
let rickIncrement2
let constIncrement
let spawn
let spawnRnd
let speed 
let collisions
let asteroids 
let asteroids2 
let leave
let astSH 
let astSW
let astSRot
let elementsOutbound
let elementsOutbound2
let elementsOutbound3
let rightPressed 
let leftPressed 
let upPressed 
let downPressed 



function initializeVariables(){
    shields = 5
    score = 0;
    rickX = 50;
    rickY = 50;
    rickIncrement = 1;
    rickIncrement2 = 1;
    rightPressed = false;
    leftPressed = false;
    upPressed = false;
    downPressed = false;
    constIncrement= 100;
    spawn = 880;
    speed =1;
    speed2 =2;
    collisions = 0;
    gameIsEnding = false;
    elementsOutbound = 0;
    elementsOutbound2 = 0;
    elementsOutbound3 = 0;
    
    asteroids = [
    {x: 890, y: 500}
    ];

    asteroids2 = [
    {x: 890, y: 500},
    ];

    asteroids3 = [
    {x: 890, y: 500}
    ]
}


//document.addEventListener('mousedown', (event) => {
//    rickIncrement = -2
//    thrust.play()
//})
//
//document.addEventListener('mouseup', () => {
//    rickIncrement = 2
//})


function startGame() { 
    move()
    ctx.drawImage(bg, 0, 0, bgW, bgH)
    ctx.drawImage(rick, rickX, rickY)
    
    if (score >=10){
    for(let i=0; i< asteroids.length; i++){
    
        let constant = ast1.height + constIncrement
        
        ctx.drawImage(ast1, asteroids[i].x, asteroids[i].y)
        asteroids[i].x-=speed2
      
       
       if (asteroids[i].x < 0) {
            score++
            elementsOutbound++
        }
        
        if (asteroids[i].x === spawn) {
            
            asteroids.push({
                x: canvas.width,
                y: Math.floor(Math.random() * canvas.height)
            })
        }
        
        let asteroid1Collision = asteroids[i].x<=(rickX+rick.width) && asteroids[i].x + ast1.width>=rickX  && asteroids[i].y<=(rickY+(rick.height)) && asteroids[i].y + ast1.height >rickY 

        if(asteroid1Collision){
                    
                asteroids[i].x *=-1
                
                explosion1.play()
                
                collisions = collisions+1
                
                if (shields>0){
                    shields--
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
                    rickX=rickX+(Math.round(Math.random()*2))
                    rickX=rickX-(Math.round(Math.random()*2))
                }, 10);      
            }

            if (rickY > canvas.height+rick.height+10 || (collisions>=6 && shields ===0)) {
        
                let startTime = new Date().getTime();
                let drawIntId2 = setInterval(()=>{
                if(new Date().getTime() - startTime > 1000){
                    clearInterval(drawIntId2);
                    
                }
    
                ctx.drawImage(bang1,Math.round(Math.random()*canvas.width), Math.round(Math.random()*canvas.height))
                rickX=rickX+(Math.round(Math.random()*2))
                }, 10);  
               
                if (!gameIsEnding){
                    gameIsEnding=true
                    setTimeout(() => {
                        gameOver()
                    }, 4000);
                }
            }
        }
    }

    if (score >=30){
        for(let i=0; i< asteroids3.length; i++){
        
            let constant = ast3.height + constIncrement
            
            ctx.drawImage(ast3, asteroids3[i].x, asteroids3[i].y)
            asteroids3[i].x-=speed2
            asteroids3[i].y-=speed
           
           if (asteroids3[i].x < 0) {
                score++
                elementsOutbound3++
            }
            
            if (asteroids3[i].x === (spawn-400)) {
                
                asteroids3.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * canvas.height)
                })
            }
            
            let asteroid3Collision = asteroids3[i].x<=(rickX+rick.width) && asteroids3[i].x + ast3.width>=rickX  && asteroids3[i].y<=(rickY+(rick.height)) && asteroids3[i].y + ast3.height >rickY 
    
            if(asteroid3Collision){
                        
                    asteroids3[i].x *=-1
                    
                    explosion1.play()
                    
                    collisions = collisions+1
                    
                    if (shields>0){
                        shields--
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
                        rickX=rickX+(Math.round(Math.random()*2))
                        rickX=rickX-(Math.round(Math.random()*2))
                    }, 10);      
                }
    
                if (rickY > canvas.height+rick.height+10 || (collisions>=6 && shields ===0)) {
            
                    let startTime = new Date().getTime();
                    let drawIntId2 = setInterval(()=>{
                    if(new Date().getTime() - startTime > 1000){
                        clearInterval(drawIntId2);
                        
                    }
        
                    ctx.drawImage(bang1,Math.round(Math.random()*canvas.width), Math.round(Math.random()*canvas.height))
                    rickX=rickX+(Math.round(Math.random()*2))
                    }, 10);  
                   
                    if (!gameIsEnding){
                        gameIsEnding=true
                        setTimeout(() => {
                            gameOver()
                        }, 4000);
                    }
                }
            }
        }

    for(let i=0; i< asteroids2.length; i++){
    
        let constant = ast2.height + constIncrement  
        ctx.drawImage(ast2, asteroids2[i].x, asteroids2[i].y)
        
        asteroids2[i].x -= speed
    
        if (asteroids2[i].x < 0) {
            score++
            elementsOutbound2++
        }

        if (asteroids2[i].x === spawn) {
            asteroids2.push({
                x: canvas.width,
                y: Math.floor(Math.random() * canvas.height)
            })
        }    
    
        // second asteroid collision
        let asteroid2Collision = asteroids2[i].x<=(rickX+rick.width) && asteroids2[i].x + ast2.width>=rickX && asteroids2[i].y<=(rickY+(rick.height)) && asteroids2[i].y + ast2.height>rickY
        
        if(asteroid2Collision){

            asteroids2[i].x =-1
            
            explosion1.play()
            
            collisions = collisions+1
            
            if (shields>0){
                shields--
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
                //ctx.drawImage(bang1,rickX-Math.round(Math.random()*50), rickY-Math.round(Math.random()*50))
                rickX=rickX+(Math.round(Math.random()*2))
                rickX=rickX-(Math.round(Math.random()*2))
            }, 10);      
        }

         if (rickY > canvas.height+rick.height+10|| (collisions>=6 && shields ===0)) {
            
            let startTime = new Date().getTime();
            let drawIntId2 = setInterval(()=>{
            if(new Date().getTime() - startTime > 1000){
                clearInterval(drawIntId2);
                
                }

                ctx.drawImage(bang1,Math.round(Math.random()*canvas.width), Math.round(Math.random()*canvas.height))
                //ctx.drawImage(bang1,rickX-Math.round(Math.random()*50), rickY-Math.round(Math.random()*50))
                rickX=rickX+(Math.round(Math.random()*2))
                //rickX=rickX-(Math.round(Math.random()*2))
            }, 10);  
           
            if (!gameIsEnding){
                gameIsEnding=true
                setTimeout(() => {
                    gameOver()
                }, 4000);
            }
        }

        
    }
// ---------------------------Game Start Loop Ends Here----------//
for (let i = 1; i <= elementsOutbound; i++) {
        asteroids.shift()
   }

   elementsOutbound = 0
    
for (let i = 1; i <= elementsOutbound2; i++) {
         asteroids2.shift()
    }
   
    elementsOutbound2 = 0

for (let i = 1; i <= elementsOutbound3; i++) {
        asteroids3.shift()
   }
  
   elementsOutbound3 = 0
     
    //Player falls if no button input
    rickY += rickIncrement
    rickX -= rickIncrement2
    
    
    //Set score and shield style
    ctx.fillStyle= 'limegreen'
    ctx.font = '20px Get Schwifty'
    ctx.fillText('Score: ' + score, 10, 490)
    ctx.fill()

    //if (score>10){
    //    shields = shields+1
    //}
        
    if (collisions<6){
        theme.play();
    }
        
    if (shields>1){
        ctx.fillStyle= '#49eb34'
    } else {
        ctx.fillStyle='red'
    }

	ctx.fillRect (250, 480, 20*shields, 10)
    ctx.fill()
    
			
	if (shields==0){
        ctx.fillText ('SHIELDS GONE!', 10, 350)
        warning.play()
    }

	if (shields==1){
	    ctx.fillText ('SHIELDS LOW', 10, 350)
	    ctx.fillText ('shields:'+shields, 10, 400)
    } else {
        ctx.fillText ('shields:'+shields, 160, 490)
    }
        
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
    rightPressed = true;
    } 
    else if (e.keyCode == 37) {
    leftPressed = true;
    }
    else if (e.keyCode == 38) {
        upPressed = true;
        }
    else if (e.keyCode == 40) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
    rightPressed = false;
    console.log ('right')
    }
    else if(e.keyCode == 37) {
    leftPressed = false;
    console.log ('left')
    }
    else if(e.keyCode == 38) {
    upPressed = false;
    console.log ('up')
    }
    else if(e.keyCode == 40) {
        downPressed = false;
        console.log ('down')
    }
}

function move(){
    if (rightPressed && rickX < 500-rick.width) {
        rickX += 3;
        thrust.play()
    }
    else if (leftPressed && rickX > 0) {
        rickX -= 3;
        thrust.play()
    }

    if (downPressed && rickY <canvas.height-rick.height) {
        rickY +=3
        thrust.play()
    }

    else if (upPressed && rickY > 0){
        rickY -=3
        thrust.play()
    }
}
  
const  addCanvas = () => {

    let body = document.querySelector ('body')
    let splashScreen = document.querySelector ('.splash')
    
    if (splashScreen) {
        body.removeChild (splashScreen)
    } else {
        let removeGameOver = document.querySelector('.game-over')
        body.removeChild(removeGameOver)
    }
    
    let canvasContainer = document.createElement('div')
    canvasContainer.className= 'canvas-container'
    canvasContainer.innerHTML = `<canvas id="myCanvas" width="1000" height="500"></canvas>`

    body.appendChild (canvasContainer)

    canvas = document.querySelector('canvas')
    canvas.style.border = '1px solid black';
 
    ctx = canvas.getContext('2d')
    intervalId = 0;
    bgW = canvas.width
    bgH =canvas.height
    

}

const gameOver = () => {
    
    theme.pause()
    theme.currentTime = 0

    clearInterval(intervalId)
   
    let gameBody = document.querySelector ('body')
    let zeroCanvas = document.querySelector ('.canvas-container')
    gameBody.removeChild (zeroCanvas)
    let gameOverContainer = document.createElement ('div')
    gameOverContainer.className = 'game-over'
    gameOverContainer.innerHTML = `<div>
    <h1 class="heading">
        GAME OVERRRRR!
    </h1>
    <div class="deadpics">
        <img id="mortydead" src="images/mortydead.png" alt="dead morty"> 
        <img id="rickdead" src="images/rickdead.png" alt="dead rick">
    </div>
    <p>Play Again?</p>
    <img id="start-btn" src="images/startbutton.png">
    <p> <a class="leave-game" href="https://www.youtube.com/watch?v=YgSPaXgAdzE" target="_blank">Or give up?</a></p>
    </div>`

    endTheme.play()
    
    gameBody.appendChild(gameOverContainer)
    
    startHanlder()

    leave = document.querySelector('.leave-game')
    leave.addEventListener('click',() => {
        endTheme.pause()
        endTheme.currentTime = 0
    })
}

function startHanlder () {
    
    console.log(document)
    let startButton = document.querySelector('#start-btn')
    startButton.addEventListener('click',() => {
    theme.pause()
    theme.currentTime =0
    endTheme.pause()
    endTheme.currentTime = 0
    initializeVariables()
    addCanvas()

    intervalId = setInterval(() => {
    
        requestAnimationFrame(startGame)
    },10)
    })
}

startHanlder()

// bounce objects
// (asteroids[i].y+(Math.floor(Math.random()*100)))
