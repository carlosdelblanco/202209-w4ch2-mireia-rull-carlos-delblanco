# Data layer

## Data

- Array with random words
- The word to guess
- An array of all the letters
- Error count

## Data modifications

- Increment error count by one after error
- Toggle the guessed letter status from the word
- Toggle the guessed letter status from the array of letters

# Components

## App

### Show data

- The components on the screen

### Get actions

- Get random word from an array of words
- Toggle the state of the picked letter in the array of letters
- Toggle the state of the picked letter in the word

## GuessLetters

### Show data

- The guessed letters from the recieved word

## Hangman

### Show data

- Add one svg after a mistake

## Letters

### Show data

- A list of all the letters

### Get actions

- Get the clicked letter

## Result

### Show data

- The text "You're dead" when you reach the maximum used letters
- The text "You win" when you've guessed al the letters from the word

## UsedLetters

### Show data

- The received picked letters from the array of available letters
