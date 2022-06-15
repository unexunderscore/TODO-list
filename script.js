const canYouSee = "Hello there!";

// Checking if the JS connected
console.log(canYouSee);

// Set local storage value for first run if there is no exist value yet. (So default theme is light)
 if(localStorage == null){
  localStorage.setItem('data-theme', "light");
 };

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
