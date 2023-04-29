import "./style.css";
import { Menu } from "./components/Menu/menu.js";
import { Header } from "./components/Header/header.js";
import { Gallery } from "./components/Gallery/gallery.js";
import { Footer } from "./components/Footer/footer.js";
import { Contact } from "./components//Contact/contact.js";
import { Banner } from "./components/Banner/banner.js";

console.log("funguju!");

const pageElement = document.createElement("div");
pageElement.classList.add("page");

const main = document.createElement("main");
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector("#app").append(pageElement);
