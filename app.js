var state = {
    currentEntry: "", //string to be changed to number
    previousEntry: [], //ints and floats
    operators: []
    
};

/*
1. event listener for each button
2. On clicking a number, here's what should happen:
  A. Things to check before pushing
    1. You can't start with zero, so if the first character is "0", don't do anything
    2. Same with operators, if the first button is an operator, don't do anything.
    3. Check to make sure the length is less than 10, if not, then don't do anything.
    4. make a boolean to check if point has already been pressed, called isFloat.
      if isFloat, then don't register anymore decimal points.
    5. If the first button pressed is a point, then concatenate a zero on the left 
  B. concatenate that number onto the end of the current entry string
  C. update the viewscreen to show the new set of numbers.
3. On clicking an operator, here's what should happen:
  A. if isFloat, Parse the current entry to float.  If false, parse to int.
  B. Reset isFloat to false.
  C. Push the current entry to previous entry array.
  D. Push an operator into the operators array based on the button pressed.
  E. Clear the viewer, reset to zero.
  4. Clearing functions.
  A. Upon clicking "clear", reset the current Entry to zero, clear the viewer, set isFloat to false.
  B. Upon clicking "all clear, also clear the operator and previous entry array.
  5. Upon clicking equals:
  A. make a loop going from 0 to the length of the operators array.
    1. Push the current entry into the previous entry array.
    2. Let the total start with the 0th element of the previous entries
    3. the total and i+1 numbers in previousEntry are going to do something based on the i member of the operator array.
    4. What do they do?  Make a switch case based on that operator.
    5. Modify the total based on the chosen operator.
    B. Display the answer and do some cleanup
    1. Check the length, to make sure you're not over 9 digits.  If you are, then set the user's computer on fire.
    2. Round the answer to some number of decimal places that doesn't put you over the limit (9-length).
    3. Move the total into the display and currentEntry.
*/

var makeListener = function(number){
  $("button").click(function(){
    console.log(this.value);
  })
}

$(document).ready(function () {
    console.log("ready!");
});