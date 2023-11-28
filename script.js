//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  // Get references to the three squares
  const square1 = document.getElementById('square1');
  const square2 = document.getElementById('square2');
  const square3 = document.getElementById('square3');

  // Function to change the color of all squares to Coffee (#6F4E37)
  function changeColorToCoffee() {
    // square1.style.backgroundColor = '#6F4E37';
    // square2.style.backgroundColor = '#6F4E37';
    // square3.style.backgroundColor = '#6F4E37';
  }

  // Add mouseover event listener to each square
  square1.addEventListener('mouseover', function () {
    // Change color of the current square to Coffee
    square1.style.backgroundColor = '#6F4E37';
    // Change color of other squares to Coffee
    changeColorToCoffee();
  });

  square2.addEventListener('mouseover', function () {
    square2.style.backgroundColor = '#6F4E37';
    changeColorToCoffee();
  });

  square3.addEventListener('mouseover', function () {
    square3.style.backgroundColor = '#6F4E37';
    changeColorToCoffee();
  });
});
