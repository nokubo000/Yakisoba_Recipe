/**
 * This is the JS to implement the UI for my project - Yakisoba Recipe.
 * It takes the user to different parts of the recipe based on user input.
 */
"use strict";

(function() {

  window.addEventListener("load", init);

  /**
   * This starts running when the page initially loads.
   * Allowing buttons and pictures to respond once they have been clicked on
   */
  function init() {
    document.getElementsByClassName("yakisoba")[0].addEventListener("click", addPics);
    id("to-follow-along").addEventListener("click", function() {
      changeVis(id("ingre-list"));
    });
    id("to-prep").addEventListener("click", function() {
      changeVis(id("ingre-prep"));
    });
    id("to-start-cooking").addEventListener("click", function() {
      changeVis(id("start-cooking"));
    });
  }

  /**
   * Adds three pictures of Yakisoba everytime the first yakisoba
   * picture is clicked on.
   */
  function addPics() {
    for (let i = 0; i < 3; i++) {
      let newImg = document.createElement("img");
      newImg.src = 'https://live.staticflickr.com/4057/4716936691_f8f46aca80_b.jpg';
      newImg.alt = "Close-up of Yakisoba";
      let parent = id("yakisoba-pics");
      parent.appendChild(newImg);
      newImg.classList.add("yakisoba");
    }
  }

  /**
   * Changes the visibility of the given element's ID to the opposite
   * visibility from when the button was initially clicked.
   * (Turns invisible elements to be visible, and visible elements to be invisible)
   * @param {string} recipeSection - ID of the element the
   * user wants to change the visibility of.
   */
  function changeVis(recipeSection) {
    if (recipeSection.style.display === "none") {
      recipeSection.style.display = "block";
    } else {
      recipeSection.style.display = "none";
    }
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }
})();
