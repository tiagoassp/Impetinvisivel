function showMenu() {
    let menuMobile = document.querySelector(".mobile-nav");
    let menuIcon = document.getElementById("menuIcon");
    let aboutUsTitle =  document.querySelector(".aboutUs-title");
    let reach =  document.querySelector(".reach");
    let navSeparatorMobile = document.querySelector(".name-company-div");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuIcon.style.color = "#000000"; 
        if (aboutUsTitle) {
            aboutUsTitle.style.marginTop = "100px"; // If aboutUsTitle exists, set margin-top to 0
        }
        if (reach) {
            reach.style.marginTop = "100px"; // If aboutUsTitle exists, set margin-top to 0
        }
        if (navSeparatorMobile) {
            navSeparatorMobile.style.borderBottom = "1px solid white";
            navSeparatorMobile.style.padding = "30px";
            navSeparatorMobile.style.width = "100%";
        }
    } else {
        if (navSeparatorMobile) {
            navSeparatorMobile.style.borderBottom = "0px";
            navSeparatorMobile.style.padding = "0px";
            navSeparatorMobile.style.width = "0%";
        }
        menuMobile.classList.add("open");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuIcon.style.color = "#000000"; // Change icon color to white
        if (aboutUsTitle) {
            aboutUsTitle.style.marginTop = "20px"; // If aboutUsTitle exists, set margin-top to 0
        }
        if (reach) {
            reach.style.marginTop = "20px"; // If aboutUsTitle exists, set margin-top to 0
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    Display_Settings();
    const dropdown = document.querySelector(".dropdown");
    const options = document.querySelector(".dropdown-options");
  
    dropdown.addEventListener("mouseover", function() {
      options.style.display = "block";
    });
  
    dropdown.addEventListener("mouseout", function() {
      options.style.display = "none";
    });
  
    const buttonsInsideOptions = document.querySelectorAll(".dropdown-options button");
  
    buttonsInsideOptions.forEach(button => {
        button.addEventListener("click", function(event) {
          options.style.display = "none";
          const clickedButton = event.target;
          const buttonText = clickedButton.textContent.trim(); // Trim whitespace
          Change_Continent_Text(buttonText);
        });
    });
});

function Change_Continent_Text(buttonText) {
    const dropdownSpan = document.querySelector(".dropdown span");
    const europe = document.querySelector(".europe");
    const americas = document.querySelector(".america");
    const asia = document.querySelector(".asia");
    /*const africa = document.querySelector(".africa");*/
    const map = document.querySelector(".map-division");
    switch (buttonText) {
        case "Europa":
            map.style.height = "1250px";
            europe.style.display = "flex";
            asia.style.display = "none";
            americas.style.display = "none";
            break;
        case "Américas":
            map.style.height = "1100px";
            americas.style.display = "flex";
            europe.style.display = "none";
            asia.style.display = "none";
            break;
        case "Asia":
            map.style.height = "900px";
            asia.style.display = "flex";
            europe.style.display = "none";
            americas.style.display = "none";
            break;
        default:
            break;
    }
    dropdownSpan.textContent = buttonText;
}

/* --------------------------------------------------- */ 
function Display_Settings () {
    const dropdownSpan = document.querySelector(".dropdown span");
    const options = document.querySelector(".dropdown-options");
    const map = document.querySelector(".map-division");
    console.log(dropdownSpan.textContent.trim());
    if (dropdownSpan.textContent.trim() === "Continentes") {
        console.log("Im here");
        const europe =  document.querySelector(".europe");
        const americas = document.querySelector(".america");
        const asia = document.querySelector(".asia");
        /*const africa = document.querySelector(".africa");*/
        europe.style.display = "none";
        americas.style.display = "none";
        asia.style.display = "none";
        map.style.height = "785px";
        /*africa.style.display = "none";*/
    }
}

