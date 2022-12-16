import { pageload } from "./pageload"
import { loadMenu } from "./menu";
import { loadStory } from "./story";
import { loadContact } from "./contact";
import "./style.css";

pageload();
console.log("Webpack worked.")
const menuButton = document.querySelector('#menu');
const storyButton = document.querySelector('#story');
const contactButton = document.querySelector('#contact');





menuButton.addEventListener('click', () => {
    loadMenu();

    console.log("menu loaded")
})


storyButton.addEventListener('click', () => {
    loadStory();

    console.log("story loaded")
})


contactButton.addEventListener('click', () => {
    loadContact();

    console.log("contact loaded")
})
