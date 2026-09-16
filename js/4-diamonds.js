//////////////// floating stars ///////////////////////////////////////////////////////////////////////////////////

const arrayStars = [];
for (let i = 0; i < 5; i++) {
  arrayStars.push([]);
}

for (let i = 0; i <= Math.floor(5 / 2); i++) {
  for (let j = 0; j < Math.floor(5 / 2) - i; j++) {
    arrayStars[i][j] = " ";
  }

  for (let j = 4; j > Math.floor(5 / 2) + i; j--) {
    arrayStars[i][j] = " ";
  }

  for (let j = Math.floor(5 / 2) - i; j <= Math.floor(5 / 2) + i; j++) {
    arrayStars[i][j] = "*";
  }
}

for (let i = 3; i < 5; i++) {
  for (let j = 4; j > 4 - (i - Math.floor(5 / 2)); j--) {
    arrayStars[i][j] = " ";
  }

  for (let j = i - Math.floor(5 / 2) - 1; j >= 0; j--) {
    arrayStars[i][j] = " ";
  }

  for (let j = i - Math.floor(5 / 2); j <= 4 - (i - Math.floor(5 / 2)); j++) {
    arrayStars[i][j] = "*";
  }
}

for (let i = 0; i < 5; i++) {
  console.log(arrayStars[i].join(""));
}

/*
const arrayStars = [5][5];

for(let i = 0; i<=5/2; i++){
  for(let j = 0; j < 5/2 - i; j++){
      arrayStars[i][j] = '';
  }

  for(let j = 4; j > 5/2 + i; j--){
    arrayStars[i][j] = '';
  }

  for(let j = 5/2 - i; j <= 5/2 + i; j++){
    arrayStars[i][j] = '*';
  }

}

  for(let i = 3; i < 5; i++){
    for(let j = 4; j > 5/2; j--){
      arrayStars[i][j] = '';
    }

    for(let j = (i - 5/2) - 1; j >= 0; j--){
      arrayStars[i][j] = '';
    }

    for(let j = i - 5/2; j >= 5/2; j--){
      arrayStars[i][j] = '*';
    }
  }
    */

const arrayOfDiamonds = [];

let listOfDiamonds = "";

for (let i = 0; i < 20; i++) {
  arrayOfDiamonds[i] =
    ` <br> <svg class="svg" xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="floating-accent">
  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
</svg> <br>`;
}

console.log(arrayOfDiamonds);

window.addEventListener("DOMContentLoaded", function () {

      document.querySelector(".intro").classList.add("slidein");

    setTimeout(function () {
      document.querySelector(".intro").classList.remove("slidein");
    }, 10000); //figured it out in less than a few seconds might lowk be a "tensai" anyway slidein takes effect on page load and 10s after which is its completion time it is removed.


  arrayOfDiamonds.forEach(function (arrayElt) {
    const diamond = arrayElt;

    listOfDiamonds += diamond;
  });

  listOfDiamonds += listOfDiamonds;

  document.querySelector(".diamonds-js").innerHTML =
    `<div class="diamonds-inner">${listOfDiamonds}</div>`;
});

