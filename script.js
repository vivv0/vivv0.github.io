document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("gameSection").style.display = "block";
    startGame();
});

function startGame() {
    let gameText = document.getElementById("gameText");
    let nextBtn = document.getElementById("nextBtn");

    let messages = [
        "welcome to ur space, chris",
        "there's plenty of things to do here, but the choice is urs as to where we go first",
        "we can take a trip down memory lane, be absolutely bombarded with balloons, or read the top secret letter (which if i were u i would pick last)",
        "where to?"
    ];
    
    let index = 0;
    gameText.innerText = messages[index];
    nextBtn.style.display = "block";

    nextBtn.addEventListener("click", function() {
        index++;
        if (index < messages.length) {
            gameText.innerText = messages[index];
        } else {
            gameText.innerText = "to be continued...";
            nextBtn.style.display = "none";
        }
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 1500); // Adjust time as needed
});


