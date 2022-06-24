# Tic Tac Toe

Welcome to my creation of Tic Tac Toe/ Noughts and Crosses. See if you can beat the computer! (It should be pretty easy)

---

### Languages Used:

- HTML5
- CSS3
- JavaScript

--- 

### Overview

This is my first project completed for the Software Engineering Immersive bootcamp with General Assembly. It took around 3.5 days to finish and was a huge learning experience. Taking all the things I've learnt over the past two weeks and implementing it into this project was challenging but also very fun. Creating a game using multiple functions, debugging, testing different scenarios and utilising CSS were just some of the things I had to do in order for everything to come together. I struggled at times with the logic of using node elements and combining that with functions to implement rules but with some guidance I was able to work through these issues.

---

### Creative Process

I started off focussing on the CSS elements such as creating the grid and background so it would be easier for me to visualise the direction I was heading with this project. I decided on a theme of space and a battle between humans and aliens to give more of a story for my user. Creating a kind of high stakes where the hope of humanity centred on the user's choices. 

![Alt text= "Gameboard Design"](./Screen%20Shot%202022-06-23%20at%203.31.51%20pm.png)

![Alt text= "Gameboard Design"](./Screen%20Shot%202022-06-23%20at%203.32.25%20pm.png)

--- 

### Game Mechanisms

The game starts as soon as you click any square and places a human token with the subsequent alien token being places in one of the other squares.

The aim of the game is to get three pictures in a row whether that be horizontally, vertically or diagonally.

The scoreboard to the left and right of the screen indicates the total number of wins for the humans and aliens in the current session. 

When the game comes to an end through a win or draw, a window will pop up indicating the personalised win/ draw outcome with the ability to reset the game with the button. (As seen in the image above)

--- 

### Debugging Process

In the making of the game I encountered a number of bugs and errors. One of the main errors involved the human win score counting for three and the alien win score counting for two even though both scores were set to one. Through some teamwork and collaboration we were able to pinpoint the bug being towards lines of code which initially created a condition where the checkWin function was set to true. This condition created multiple times in the javascript file meant that the checkWin function was run multiple times, causing the score evaluation to multiply. This was fixed by created a new variable and using that as the condition as opposed to the previous method.

--- 

### Installation

To play this game, download this repository and open the index.html file in a web browser.

---

### References

Background, end game screens and human and alien tokens were pictures taken from [Free Pik](www.freepik.com)

- Background Image: https://www.freepik.com/free-vector/falling-stars-beautiful-night-background_5376553.htm#query=space%20background&position=20&from_view=search
- Draw Screen Image: https://www.freepik.com/free-photo/soldier-guarding-design_879705.htm#query=soldiers&position=19&from_view=search 
- Human Win Screen Image: https://www.freepik.com/free-vector/flat-people-dancing-illustration_17721643.htm#query=party&position=16&from_view=search#position=16&query=party
- Alien Win Screen Image: https://www.freepik.com/free-vector/evil-alien-robot-machine-attacking-people-city-cartoon_15080142.htm#query=alien%20robot%20machine%20attacking&position=1&from_view=search
- Human Token Image: https://www.freepik.com/free-psd/young-businessman-3d-cartoon-avatar-portrait_25842057.htm#query=smiling%20person&position=23&from_view=keyword
- Alien Token Image: https://www.freepik.com/free-vector/modern-ufo-abduction-concept-with-flat-design_2889277.htm#query=alien&position=9&from_view=search 