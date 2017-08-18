# _{Ping Pong}_

#### _{list of numbers, pings and pongs}, {August 18th, 2017}_

#### By _**{Dan Nollette}**_

## Description

_{The page takes in a number and out puts a list of numbers with numbers divisible by 3 are replaced with "ping", numbers divisible by 5 are replaced with "pong", and numbers divisible by 15 are replaced with "ping-pong".}_


### Requirements
* _A computer with a terminal program and a modern web browser_

### To view this page:
* _Open your terminal program_
* _Run the following command:git clone * `https://github.com/Dan-Nollette/pingPong.git`_
* _open the file index.html in Chrome, or your browser of choice._
* _This can be done on a Mac by finding the file in the Finder and clicking on it._
* _The page should then load and you can take the quiz_

## Known Bugs

_Advanced mode doesn't currently work. It allow the user to input how many number word/pairs they would like to swap in the list of numbers and populates the correct number of buttons, but it doesn't then take the input and process it._

## Support and contact details

_If you have problems, contact the author at Nollette.dan@gmail.com_

## Technologies Used

_This project uses HTML, CSS, and Javascript. In particular this project relies on use of bootstrap styling and Javascript._

## Plain English Behavior Specification, Step by Step

* _Form alerts when a non-number is submitted_
_example input: 'test'_
_desired output: alert stating 'That is not a valid input. Please enter a whole number greater than one'. Output is set to blank._

* _Form alerts when a decimal number is submitted_
_example input: 5.3_
_desired output: alert stating 'That is not a valid input. Please enter a whole number greater than one'. Output is set to blank._

* _Form alerts when a non-positive number is submitted_
_example input: -6 _
_desired output: alert stating 'That is not a valid input. Please enter a whole number greater than one'. Output is set to blank._

* _Form returns 1 list item when the number 1 is input (regardless of list item content)._
_example input: 1_
_desired output: unordered list contains 1 list item_

* _Form returns number of list items equal to the number that was input (regardless of each list items content)._
_example input: 7_
_desired output: unordered list contains 7 item_

* _Form returns one list item containing the number one when the number 1 is input_
_example input: 1_
_desired output: unordered list contains 1 list item stating '1'._

* _Form returns number of list items equal to the number that was input, with non-multiples of 3 and 5 containing there number and without regard to what multiples of 3 and 5 contain._
_example input: 3 item total including 1,2, anything_

* _Form returns only the list items for the current input. Previous output is removed_
_example input: entering 3 when there are already list items on the page _
_desired output: 3 item total including 1,2, [anything]_
_NOTE: This is fairly simple and probably should have been included earlier. It is included here because I didn't think of it until after implementing other behaviors._

* _Form returns number of list items equal to the number that was input, with multiples of 3 switched to 'ping'_
_example input: 3_
_desired output: list items containing 1, 2, 'ping'_

* _Form returns number of list items equal to the number that was input, multiples of with 3 switched to 'ping' and multiples of 5 switched to pong_
_example input: 5_
_desired output: list items containing 1, 2, 'ping', 4, 'pong'._

* _Form returns number of list items equal to the number that was input, multiples of with 3 switched to 'ping' and multiples of 5 switched to 'pong' and multiples of 15 switched to ping-pong_
_example input: _
_desired output: list items containing 1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'pong', 'ping', 11, 'pong', 13, 14, 'ping-pong'._

### License

*This repository licensed under the MIT license*

Copyright (c) 2017 **_Daniel J. Nollette_**
