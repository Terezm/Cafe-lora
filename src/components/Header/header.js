import "./style.css";

export const Header = () => {
  const element = document.createElement("header");
  element.innerHTML = `
    <div class="header__content container">
          <div class="site-logo"></div>
  
          <div class="navigation">
            <button class="nav-btn"></button>
            <nav class="rollout-nav nav-closed">
              <a href="#home">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
            </nav>
          </div>
           </div>
       `;
  const navButton = element.querySelector(".nav-btn");
  const navMenu = element.querySelector(".rollout-nav");

  navButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-closed");
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.matches(".rollout-nav a")) {
      navMenu.classList.add("nav-closed");
    }
  });

  return element;
};
