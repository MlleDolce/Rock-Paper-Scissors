# Pseudo-code for Rock Paper Scissors implementation

Alert user with a Welcome message introducing them to the game.
Write function to get player's selection
- Prompt user to input their turn: R, P or S.
- Make user's input case insensitive
- If PS is NOT rock, paper or scissor, ask for player selection again
Write function for computer to take turn in RPS. 
- select a random number between 0 and 99
- if the number is between 0 and 33.3, assign the computer choice to 'rock
- if the number is greater than 33.3 and less than or equal to 66.6, assign the computer choice to 'rock'
- for all other random numbers, assign the computer choice to 'scissors'
- print the computer selection to screen to make sure that it is what you think it is

Write play round function to compare Player Selection to Computer Selection:
- if PS is R and CS is R, return 'You Tie! You both chose rock.'
- if PS is R and CS is P, return 'You Lose! Paper beats rock.'
- if PS is R and CS is S, return 'You Win! Rock beats scissors.'
- if PS is P and CS is R, return 'You Win! Paper beats rock.'
- if PS is P and CS is P, return 'You Tie! You both chose paper.'
- if PS is P and CS is S, return 'You Lose! Scissors beats paper.'
- if PS is S and CS is R, return, 'You Lose! Rock beats scissors.'
- if PS is S and CS is P, return, 'You Win! Scissors beats paper.'
- if PS is S and CS is S, return, 'You Tie! You both chose scissors.'

Write play game function that includes five rounds of RPS
- write for loop.
- keep score after each round of RPS
- at the end, report a winner or loser
