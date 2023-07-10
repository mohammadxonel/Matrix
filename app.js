const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;

canvas.width = cw;
canvas.height = ch;

window.addEventListener('resize', function(event) {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = cw
    canvas.height = ch;
    maxColumns = cw / fontSize;
    console.log(cw, ch)
}, true);

let charArr = [
    "m",
    "o",
    "h",
    "a",
    "m",
    "m",
    "a",
    "d",
    "x",
    "x",
    "a",
    "l",
    "i",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "А",
    "В",
    "Г",
    "Д",
    "Є",
    "Ѕ",
    "З",
    "И",
    "Ѳ",
    "І",
    "К",
    "Л",
    "М",
    "Н",
    "Ѯ",
    "Ѻ",
    "П",
    "Ч",
    "Р",
    "С",
    "Т",
    "Ѵ",
    "Ф",
    "Х",
    "Ѱ",
    "Ѿ",
    "Ц",
];

let maxCharCount = 300;
let fallingCharArr = [];
let fontSize = 13;
let maxColumns = cw / fontSize;