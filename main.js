let get_button = document.getElementById("get_motivation");
let text_area = document.getElementById("motivation_text");

let Random_number = 0;
let Quote = "";

function genRandomNum(len) {
    Random_number = (Math.random() * (len - 0) + 0).toFixed(0);
}

function genQuote() {
    fetch("/motivation.json")
        .then(res => res.json())
        .then(data => {
            genRandomNum(data.motivation.length);
            for (let i = 0; i < data.motivation.length; i++) {
                Quote = data.motivation[Random_number].text;
                text_area.innerText = Quote;
            }
        })
}
genQuote()
get_button.addEventListener("click", () => {
    genQuote()
})
