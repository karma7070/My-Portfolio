let mobileView = window.innerWidth;

let displayPagesList = '';

let mainPageDisplay = document.querySelector('.intro');

if(mobileView < 601){

  arrayOfTemplates.forEach(function(pageContent, index){

    if(index === 0){
      pageContent = `<div class='firstpage'>${pageContent}</div>`;
    }

    displayPage = pageContent;

    displayPagesList += displayPage;

    mainPageDisplay.innerHTML = displayPagesList;

  })

}