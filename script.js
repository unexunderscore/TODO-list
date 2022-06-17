const canYouSee = "Hello there!";

// Checking if the JS connected
console.log(canYouSee);

// Set local storage value for first run if there is no exist value yet. (So default theme is light)
 if(localStorage.length < 1){
  let todoElements = [];
  localStorage.setItem('data-theme', "light");
  localStorage.setItem('list-id', 1);
  localStorage.setItem('list-elements', JSON.stringify(todoElements));
 };

 let idCounter = localStorage.getItem('list-id');
 let todoElements = localStorage.getItem('list-elements');
 todoElements = JSON.parse(todoElements);

// Checking the current theme from local storage
 const currentTheme = localStorage.getItem('data-theme');
 // Loading the theme style
 document.documentElement.setAttribute("data-theme", currentTheme);

 // Writing out what is the current theme
 console.log("Current theme: " + currentTheme);

 // Waiting for document to load
 document.addEventListener("DOMContentLoaded", function(event) {
  
    // Lock our button in themeSwitcher variable
    const themeSwitcher = document.getElementById("theme-switcher");

    // When our button gets clicked runs a function (toggle theme)
    themeSwitcher.onclick = function() {

      // Checking again the current theme (Need after button used, this value will be changed)
      const currentTheme = localStorage.getItem('data-theme');

      // Switch between `dark` and `light`
      const switchToTheme = currentTheme === "dark" ? "light" : "dark"
      // Saving the current theme to local storage
      localStorage.setItem('data-theme', switchToTheme);

      // Set our currenet theme to the new one
      document.documentElement.setAttribute("data-theme", switchToTheme);
      // Writing out the current theme in console
      console.log("Current theme: " + switchToTheme);
    }
  });


  const list =  document.getElementById("todo-list");
  
  function makeList(element) {
    const li = document.createElement("li");
    li.id = "list-item"+idCounter++;
    localStorage.setItem('list-id', idCounter);
    li.innerHTML='<div class="circle-list"></div>';
    li.appendChild(document.createTextNode(element));
    list.appendChild(li);
  }

  const inputLayout = document.getElementById("inputTodo");
  inputLayout.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
    if(inputLayout.value==0){
      alert("Please fill the form.");
    } else {
      makeList(inputLayout.value);
      todoElements.push(inputLayout.value);
      console.log("Add todo: " + inputLayout.value);
      inputLayout.value = "";
    }
    localStorage.setItem('list-elements', JSON.stringify(todoElements));
 		event.preventDefault();
     }
});

window.onload = function() {
  if(todoElements.length>0){
    todoElements.map(element => makeList(element));
  }
  
};