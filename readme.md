# Pseudo-code for Rock Paper Scissors implementation

Alert user with a Welcome message introducing them to the game.
Write function to get player's selection
- Prompt user to input their turn: R, P or S.
- Make user's input case insensitive
- If PS is NOT rock, paper or scissor, ask for player selection again
Write function for computer to take turn in RPS. 
- select a random number between 100 and 999
- if the number is between 100 and 333, assign the computer choice to R
- "" 334 and 666, assign the computer choice to P
- "" 667 and 999, assign the computer choice to S
- print the computer selection to screen to make sure that it is what you think it is

Write play round function to compare Player Selection to Computer Selection:
- if user's input is R and c's is R, return 'Tie! You both chose rock.'
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
