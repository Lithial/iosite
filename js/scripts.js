// toggle the change class for each of the callers children.
//used to animate the hamburger
function toggleAnimation(x) {
    let list = [...x.children];
    list.forEach(e => {
      e.classList.toggle("change");
    });
  }

  //find the nav-items id and toggle it visable.
  //used to make the hamburger toggle appear
  function displayHiddenNav(){
    const e = document.getElementById("nav-items");
    console.log(e);
    e.classList.toggle("visable")
  
  }