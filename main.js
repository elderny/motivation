const text_gen = document.getElementById("text_gen");
const motivate_text = document.getElementById("motivation_text");
const motivate_percentage = document.getElementById("motivation_percentage");
let Quote = "";
let Random_num = 0;
let Random_percentage = 0;
function RandomGen(max) {
    return (Math.random() * (max + 0) + 0).toFixed(0);
}

function GetQuote() {
    fetch("motivation.json")
        .then(res => res.json())
        .then(data => {
            Random_num = RandomGen(data.motivation.length);
            Random_percentage = RandomGen(100);
            Quote = data.motivation[Random_num].text;
            motivate_text.innerText = Quote;
            motivate_percentage.innerText = `${Random_percentage}% motivation`
            if (Random_percentage >= 90) motivate_percentage.style.backgroundColor = "rgb(152 231 81 / 57%)"
        })
}
GetQuote();
if (Random_percentage >= 90) motivate_percentage.style.backgroundColor = "rgb(152 231 81 / 57%)"
text_gen.addEventListener("click", () => {
    motivate_percentage.style.backgroundColor = "rgba(0,0,0,.03)";
    GetQuote();
})

function takeshot() {
    let div = ss_area;
    html2canvas(div).then(
        function (canvas) {
            document
                .getElementById('output')
                .appendChild(canvas);
            document.querySelector("#output > canvas").setAttribute("hidden", "hidden");
        })
    setTimeout(() => {
        saver.href = document.querySelector("#output > canvas").toDataURL("image/jpg");
        saver.click();
    }, 500);
    setTimeout(() => {
        document.querySelector("#output > canvas").remove();
    }, 500);
}
