const canvas = document.getElementById('clock');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.min(centerX, centerY);

function drawCircle() {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.stroke();
}

function drawHand(length, angle, color="#0058a3") {
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(centerX, centerY);
    context.lineTo(
        centerX + length * Math.cos(angle),
        centerY + length * Math.sin(angle)
    );
    context.stroke();
}

function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourAngle = (hour % 12) * (2 * Math.PI) / 12 + (minute / 60) * (2 * Math.PI) / 12;
    const minuteAngle = minute * (2 * Math.PI) / 60 + (second / 60) * (2 * Math.PI) / 60;
    const secondAngle = second * (2 * Math.PI) / 60;

    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawHand(radius * 0.5, hourAngle);
    drawHand(radius * 0.8, minuteAngle);
    drawHand(radius, secondAngle);
}

setInterval(updateClock, 1000);
