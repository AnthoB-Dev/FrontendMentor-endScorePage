async function fetchData() {
   try {
      const response = await fetch("data.json");
      if (!response.ok) {
         throw new Error("Le fichier JSON n'a pas pu être chargé.");
      }
      const data = await response.json();
      printData(data);
   } catch (error) {
      console.error("Une erreur s'est produite :", error);
   }
}

const printData = function(data) {
   const sumWrapper = document.querySelector("#sumWrapper");
   
   data.forEach(e => {
      const category = e.category;
      const score = e.score;
      const icon = e.icon;

      const sumEle = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const divScore = document.createElement("div");
      const spanBold = document.createElement("span")
      const spanFade = document.createElement("span")
      
      sumEle.className = "sumEle";
      sumEle.id = category.toLowerCase();
      img.src = icon;
      img.alt = category;
      title.innerText = category;
      spanBold.className = "sumEleBolded";
      spanBold.append(score);
      spanFade.className = "sumEleFadded";
      spanFade.innerText = "/ 100";

      sumEle.append(img);
      sumEle.append(title);
      divScore.append(spanBold, spanFade);
      sumEle.append(divScore);
      sumWrapper.append(sumEle);
   });
}

fetchData();