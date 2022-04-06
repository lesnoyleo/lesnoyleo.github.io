const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 400;

const english = ["A", "B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const alphabet = [...english, ...numbers];
const fontSize = 16;
const countColumns = canvas.width / fontSize;
const rainDrops = [];

for (let i = 0; i < countColumns; i++) {
  rainDrops[i] = canvas.height;
}

const draw = () => {
  context.fillStyle = "rgba(0,0,0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet[Math.floor(Math.random() * alphabet.length)];
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

let refreshDrag = setInterval(draw, 30);

let toggler = false;

window.addEventListener('keydown', (event)=>{
    if (event.code === 'Space') {
        event.preventDefault();
        toggler = !toggler;
        toggler ? clearInterval(refreshDrag) : refreshDrag = setInterval(draw, 30);
    }
})