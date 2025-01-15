const motivationalQuotes = document.getElementById("motivational-quote");
const generateMotivationalQuotes = document.getElementById(
  "generate-motivational-quote"
);
const copyMotivationalQuotes = document.getElementById(
  "copy-motivational-quote"
);

const funnyQuotes = document.getElementById("funny-quote");
const generateFunnyQuotes = document.getElementById("generate-funny-quote");
const copyFunnyQuotes = document.getElementById("copy-funny-quote");
const showCopyMessage = document.getElementById("copy-message");

generateMotivationalQuotes.addEventListener("click", motivationalQuote);
generateFunnyQuotes.addEventListener("click", funnyQuote);

copyMotivationalQuotes.addEventListener("click", copyMotivationQuote);
copyFunnyQuotes.addEventListener("click", copyFunnyQuote);

function motivationalQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        motivationalQuotes.innerHTML = data.quote;
      }
    })
    .catch((err) => console.log(err));
}

function funnyQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        funnyQuotes.innerHTML = data.quote;
      }
    })
    .catch((err) => console.log(err));
}

function copyMotivationQuote() {
  const text = motivationalQuotes.innerText;
  navigator.clipboard.writeText(text);
  showCopyMessage.classList.remove("-right-64");
  showCopyMessage.classList.add("right-5");
  showCopyMessage.classList.add("bg-emerald-600");
  setTimeout(() => {
    showCopyMessage.classList.remove("bg-emerald-600");
    showCopyMessage.classList.remove("right-5");
    showCopyMessage.classList.add("-right-64");
  }, 800);
}
function copyFunnyQuote() {
  const text = funnyQuotes.innerText;
  navigator.clipboard.writeText(text);
  showCopyMessage.classList.remove("-right-64");
  showCopyMessage.classList.add("right-5");
  showCopyMessage.classList.add("bg-orange-500");

  setTimeout(() => {
    showCopyMessage.classList.remove("bg-orange-500");
    showCopyMessage.classList.remove("right-5");
    showCopyMessage.classList.add("-right-64");
  }, 800);
}
