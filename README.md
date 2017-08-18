Behavior spec
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
_desired output: unordered list contains 1 list item
* _Form returns number of list items equal to the number that was input (regardless of each list items content)._
_example input: 7_
_desired output: unordered list contains 7 item_
* _Form returns one entry containing the number one when the number 1 is input_
_example input: 1_
_desired output: unordered list contains 1 list item stating '1'._
* _Form returns number of list items equal to the number that was input, with multiples of 3 switched to 'ping'_
_example input: 3_
_desired output: list items containing 1, 2, 'ping'_
* _Form returns number of list items equal to the number that was input, multiples of with 3 switched to 'ping' and multiples of 5 switched to pong_
_example input: 5_
_desired output: list items containing 1, 2, 'ping', 4, 'pong'._
* _Form returns number of list items equal to the number that was input, multiples of with 3 switched to 'ping' and multiples of 5 switched to 'pong' and multiples of 15 switched to ping-pong_
_example input: _
_desired output: list items containing 1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'pong', 'ping', 11, 'pong', 13, 14, 'ping-pong'._
