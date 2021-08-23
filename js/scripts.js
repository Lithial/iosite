function toggleAnimation(x) {
    let list = [...x.children];
    list.forEach(e => {
      e.classList.toggle("change");
    });
  }
  function displayHiddenNav(){
    const e = document.getElementById("nav-items");
    console.log(e);
    e.classList.toggle("visable")
  
  }