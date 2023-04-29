import "./style.css";

import { Drink } from "./components/Drink/index.js";
import { Layer } from "./components/Layer";

export const Menu = () => {
  const element = document.createElement("section");
  element.classList.add("menu");
  element.id = "menu";
  element.innerHTML = `


<div class="container"> 
          <h2>Naše nabídka</h2>
          <p class="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div class="drinks-list">
           ${Drink({
             name: "Romano",
             image: "https://cafelora.kodim.app/assets/cups/espresso.png",
           })}

             
            

           ${Drink({
             name: "Doppio",
             image: "https://cafelora.kodim.app/assets/cups/doppio.png",
           })}

            ${Drink({
              name: "Lungo",
              image: "https://cafelora.kodim.app/assets/cups/lungo.png",
            })}
 
             


          <div class="order-detail">
            <a href="/objednavka">Detail objednávky</a>
          </div>
        </div>     `;

  return element;
};
