async function generateAdvice() {
  const text = document.querySelector("h1");
  const id = document.querySelector("h3");
  const advice = await fetch("https://api.adviceslip.com/advice");
  const adviceJson = await advice.json();
  text.innerHTML = '"' + adviceJson.slip.advice + '"';
  id.innerHTML = "ADVICE #" + adviceJson.slip.id;
  text.classList.remove("noGenerated");
}
