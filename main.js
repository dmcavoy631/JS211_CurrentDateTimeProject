// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element1").innerHTML = currentDate;
}
 
// Or 





// Write a JavaScript program to convert a number to a string.

const toStr = () => {
  var x = document.getElementById('numStr').value;

  x = x.toString();

  document.getElementById("display-element2").innerHTML = x;
}


// Write a JavaScript program to convert a string to the number.


const toNum = () => {
  var x = document.getElementById('strNum').value;

  x = parseInt(x, 10);

  document.getElementById("display-element3").innerHTML = x;

}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  const whatDataType = () =>{
    var dType = document.getElementById('dataType').value;

    document.getElementById("display-element4").insertAdjacentHTML("afterend", typeof dType);

    document.getElementById("display-element4").insertAdjacentHTML("afterend", "<hr/> <p>  Type </p>");
    
    document.getElementById("display-element4").insertAdjacentHTML("afterend", typeof false);

    document.getElementById("display-element4").insertAdjacentHTML("afterend", "<hr/>");

    document.getElementById("display-element4").insertAdjacentHTML("afterend", typeof null);

    document.getElementById("display-element4").insertAdjacentHTML("afterend", "<hr/>");


    document.getElementById("display-element4").insertAdjacentHTML("afterend", typeof t);

    document.getElementById("display-element4").insertAdjacentHTML("afterend", "<hr/>");

    document.getElementById("display-element4").insertAdjacentHTML("afterend",typeof NaN);

    document.getElementById("display-element4").insertAdjacentHTML("afterend", "<hr/>");


    document.getElementById("display-element4").insertAdjacentHTML("afterend",typeof 150);

    document.getElementById("display-element4").insertAdjacentHTML("afterend", "<hr/>");


    document.getElementById("display-element4").insertAdjacentHTML("afterend",typeof NaN);
    
    document.getElementById("display-element4").insertAdjacentHTML("afterend", "<hr/>");


    document.getElementById("display-element4").insertAdjacentHTML("afterend", typeof 'Bla Bla BlA');

  }
  
  
// Write a JavaScript program that adds 2 numbers together.

const addSum = () => {
  var x = document.getElementById('num1').value;
  var y = document.getElementById('num2').value;

  result = parseInt(x) + parseInt(y);

    //  return result in html element
  document.getElementById("display-element5").innerHTML = result;
  
}


// Write a JavaScript program that runs only when 2 things are true.

const truthTest1 = () => {
  var t1 = document.getElementById('t1_1').value;
  var t2 = document.getElementById('t2_1').value;



  if (Boolean(t1) == true && Boolean(t2) == true) {
    document.getElementById("display-element6").innerHTML = "Both of these are TRUE";
  } else {
    document.getElementById("display-element6").innerHTML = "1 of these are not TRUE";
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.

const truthTest2 = () => {
  var t1 = document.getElementById('t1_2').value;
  var t2 = document.getElementById('t2_2').value;


  if (Boolean(t1) == true || Boolean(t2) == true) {
    document.getElementById("display-element7").innerHTML = "1 of these are TRUE";
  } else {
    document.getElementById("display-element7").innerHTML = "Both of these are FALSE";
  }
}




// Write a JavaScript program that runs when both things are not true.  

const truthTest3 = () => {
  var t1 = document.getElementById('t1_3').value;
  var t2 = document.getElementById('t2_3').value;



  if (Boolean(t1) == false && Boolean(t2) == false) {
    document.getElementById("display-element8").innerHTML = "Both of these are false";
  } else {
    document.getElementById("display-element8").innerHTML = "1 of these are not TRUE";
  }
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
