const modal = document.querySelector (".modal");
const overlay = document.querySelector (".overlay");

// Modal open function
const openModal = () => {
    console.log ("Modla is open");
    modal.classList.add ("active");
    overlay.classList.add ("overlayactive");
}
