function navList(){
    let navButton = document.getElementById("navButton");
    let navBar = document.getElementById("navBar");
    let navBar2 = document.getElementById("navBar2");

    navButton.classList.toggle("block")
    navButton.classList.toggle("none")

    navBar.classList.toggle("right-[-50rem]");
    navBar.classList.toggle("right-0");
    navBar2.classList.toggle("right-[-50rem]");
    navBar2.classList.toggle("right-0");
    // navBar.classList.toggle("right-[-50rem]");

}