const link =
  "https://random-words5.p.rapidapi.com/getMultipleRandom?count=10&wordLength=5";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "random-words5.p.rapidapi.com",
    "x-rapidapi-key": "11c9d0aad2msh5e9b84b925c48abp13a7d3jsn79a559ddbd6f",
  },
};

let data;
let wordOfTheDay;

const getData = async () => {
  const fetchResult = await fetch(link, options);
  const finalResult = await fetchResult.json();
  // console.log(finalResult);
  return finalResult;
};

const btn = document.querySelector("button");
const wordDom = document.querySelector("span");

const setGlobalData = async () => {
  const finalResult = await getData();
  data = finalResult;
  wordOfTheDay = data[0];
  console.log({ data, wordOfTheDay });
  wordDom.innerText = `"${wordOfTheDay}"`;
};

// setGlobalData()

btn.addEventListener("click", setGlobalData);
