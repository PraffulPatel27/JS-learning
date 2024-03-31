// <--------- Style HTML Page using various Properties ------>

  // .style
  // .cssTect
  // .setAttribute
  // .className
  // .classList

let content = document.querySelector ('.head');

// <----- Using Style ------>
content.style.color = 'orange';
content.style.backgroundColor = 'yellow';



// <------ Using cssText ------>
  // to apply multiple css on a single line
content.style.cssText = 'background-color: green; color: white;';



// <------ Using setAttribute ------>
  // we can set any attribute using this function
content.setAttribute ("style", "background-color: blue; color: white;");

content.setAttribute ("id", "HeadingKiID");



// <------ Using className ------>
   // using Method 1 :- (If multpile classes are exists)
  
content.className;   // gives className in the String form
   // first we need to split that string in (' ') separated and after that we 
   // want to access by individually like the array


typeof content.className;    // 'String'

content.className.spl


   // Drawback of using className
     // >- If we want to add new class then we append on array after that we need to convert into String


   // using Method 2 :- (If multpile classes is exists)
// <------ Using classList ------>

