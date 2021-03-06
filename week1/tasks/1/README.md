# Task 1 --- Word Game

Create class DataSource containing an array with different words and another containing all the letters in the alphabet

Create a component WordGame and import the DataSource. When the component is constructed a random word from the DataSource should be picked.
Another random number N, should be chosen that will represent the number of hidden letters from that word.
Present the word to the user with the hidden N random letters represented as `_`

```
Example (N = 3):

Word: abstract
Display: `a__t_act`
Word Bank: z, a, t, b, q, s, y, r 
```

The user has to pick from 8 letters (the hidden ones and (8 - N) randomly picked from the alphabet) and try to guess the word.
When a correct letter is selected it should be marked in a proper way. If all letters are correctly chosen a button should appear so the user can continue with the next word.

# Task 2 --- Upgrade Word Game

Modify the game to show in the begining three options: Beginner, Intermediate, Advanced. Limit the number of letters that the user can guess (Beginner: No of hidden + 5, Intermediate: No of hidden + 4, Advanced: No of hidden + 2). Also limit the time to guess a word by creating a countdown timer and if the timer ends or the user selects more incorrect letters than the correct ones left show the next word. When there are no words left present to the user how many words he guessed out of all.

Create a log decorator that will log messages in the console and decorate the nesessary functions.