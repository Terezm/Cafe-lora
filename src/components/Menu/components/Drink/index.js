import "./style.css";
import { Layer } from "../Layer/index.js";

export const Drink = (props) => {
  const { name, ordered, image, layers } = props;

  return `
  <div class="drink">
  <div class="drink__product">
    <div class="drink__cup">
      <img src= "${image}">
    </div>
    <div class="drink__info">
      <h3>${name}</h3>



      ${Layer({
        color: "#613916",
        label: "espresso",
      })}
      
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">
      Objednat
    </button>
  </div>
</div>
`;
};
