document.getElementById("glitterButton").addEventListener("click", function() {
    createCrackers();
});

function createCrackers() {
    const container = document.getElementById("glitterContainer");
    for (let i = 0; i < 10; i++) { // Adjust the number of crackers as needed
        const cracker = document.createElement("div");
        cracker.className = "cracker";
        cracker.style.left = Math.random() * window.innerWidth + "px";
        cracker.style.top = Math.random() * window.innerHeight + "px";
        container.appendChild(cracker);
    }

    // Clear the particles after 2 seconds
    setTimeout(function() {
        container.innerHTML = "";
    }, 2000);
}
