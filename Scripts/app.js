/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    
    var paragraphElements = [];
    
    // refractor
    // var paragraphElements = [
    // document.getElementById("paragraphOne"),
    // document.getElementById("paragraphTwo"),
    // document.getElementById("paragraphThree")
    // ];

    paragraphElements[0] = document.getElementById("paragraphOne")
    paragraphElements[1] = document.getElementById("paragraphTwo")
    paragraphElements[2] = document.getElementById("paragraphThree")

    // define your paragraphs array (best way and most common)
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "Hey, I'm Meer!" + " I'm an Engineer, fitness fanatic, and dedicated PC gamer."
    paragraphs[1] = " On this page, you will be able to see some of my previous and on-going projects!"
    paragraphs[2] = " I'm a Civil Engineer graduate from Seneca College, Newnham Campus." 
    + " I worked professionally as a Civil Engineer for 2 years and realized that I would like to pursue a different career." + " I'm currently enrolled in Centennial College as a Software Engineer."
    + " I enjoy First Person Shooter video games." + " I'm also a PC hardware enthusiast, as I have build my own PC - more information would be found on My Projects page."
    
    // second way to define an array
    // var paragraphs = new Array();

    // check to see if paragraph one exists
    
    for(var index = 0; index < paragraphElements.length; index++){
        if(paragraphElements[index]){
        paragraphElements[index].textContent = paragraphs[index];
        }
        
    }
   // }
   // if (paragraphElement[0]) {
   //     paragraphElement[0].textContent = paragraphs[0];
   // }
    // check to see if paragraph two exists
   // if (paragraphElement[1]) {
   //     paragraphElement[1].textContent = paragraphs[1];
   // }
    // check to see if paragraph three exists
   // if (paragraphElement[2]) {
   //     paragraphElement[2].textContent = paragraphs[2];
   // }

})();