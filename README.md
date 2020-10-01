# M1-Project-Ricksteroids

## Description
In the Other Amazing Game the player will be flying a spaceship through an asteroid field, and will need to avoid collisions with the asteroids. The player will be able to move vertically, and the game will end if the player collides with an asteroid. The score will be based on how many asteroids are avoided. 



## MVP (DOM - CANVAS)
Asteroids of random sizes will appear randomly from the right of the screen.  



## Backlog
- with increasing score, the game will increase speed and number of asteroids.
- the ship will be animated based on the direction the player inputs. 
- background music
-  continous sound effects e.g music and engine sound.
- event sound effects e.g collision, shield, weapons. 
- the asteroids will rotate.
- instead of one collision ending the game, the player will start the game with a set amount of shield strength. 
- the player will be able to pick up extra shield points placed randomly in space and time. 
- the player will be able to pick up special "weapons" 
- there will be a highscore list.



## Data Structure

# index.js
- intialise variables
- startGame()
- gameOver()
- reintialise variables
- event listners
- collsion detection
- player draw and coordinates
- asteroids draw and coordinates

## States and States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

## Task

- game - buildCanvas
- game - drawCanvas
- game - updateCanvas
- game - startLoop
- rick draw
- rick move
- asteroid - draw
- asteroid - move
- game - checkCollision
- add background sounds
- add event sounds
- main - buildSplashScreen
- main - buildGameScreen
- main - buildGameOverScreen
- main - buildDom
- add event listners for start and restart game
- add multiple asteroids
- update collision detection




## Links

### Trello
https://trello.com/b/ffyFlLVu/ironhack-m1-project

### Git
https://ibirossi.github.io/M1-Project-Ricksteroids/


### Slides
https://docs.google.com/presentation/d/e/2PACX-1vTbXXWkM5bkWaanvMgGSaYdNiVXfLOirdKawlcw37z9ozq536PrVlR5r942rvA5oFsS4w-mTJoHS9Bd/pub?start=false&loop=false&delayms=5000