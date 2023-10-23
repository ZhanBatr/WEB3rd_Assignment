const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove the "active" class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        // Add the "active" class to the clicked button and corresponding content
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});

const showNotificationButton = document.getElementById("showNotificationButton");

showNotificationButton.addEventListener("click", () => {
    showNotification("Notification Title", "This is a sample notification message.");
});

//feedback
function showNotification(title, message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");

    const notificationTitle = document.createElement("h2");
    notificationTitle.textContent = title;

    const notificationMessage = document.createElement("p");
    notificationMessage.textContent = message;

    notification.appendChild(notificationTitle);
    notification.appendChild(notificationMessage);

    document.body.appendChild(notification);

    // Automatically remove the notification after a few seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000); // Remove after 3 seconds (adjust as needed)
}

const startButton = document.getElementById("startButton");
const durationInput = document.getElementById("duration");
const timerDisplay = document.getElementById("timerDisplay");

let intervalId;
let timerRunning = false;

startButton.addEventListener("click", () => {
    if (timerRunning) {
        clearInterval(intervalId);
        startButton.textContent = "Start";
        timerRunning = false;
    } else {
        const duration = parseFloat(durationInput.value);
        if (!isNaN(duration)) {
            startTimer(duration);
        }
    }
});

function startTimer(duration) {
    let timer = duration;
    let minutes, seconds;

    startButton.textContent = "Stop";
    timerRunning = true;

    intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            timerDisplay.textContent = "00:00";
            startButton.textContent = "Start";
            timerRunning = false;
        }
    }, 1000);
}

