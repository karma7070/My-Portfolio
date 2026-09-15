
  /////////////////////////////////// Switching Pages   ///////////////////////////////////////////

  const classOfTemplateIds = {home:'home-section', 
    about:'about-section', 
    projects:'projects-section', 
    skills:'skills-section',
    CV: 'CV-section',
    contact: 'contact-section' }

     const arrayOfIds = ['#home-section', '#about-section', 
    '#projects-section', 
    '#skills-section',
    '#CV-section',
    '#contact-section' ]

    const arrayOfBtnIds = ['home',
       'about',
        'projects',
         'skills',
          'CV',
           'contact']

    const arrayOfTemplates = [];

    for(let i = 0; i<arrayOfIds.length; i++){

            arrayOfTemplates.push(document.querySelector(arrayOfIds[i]).innerHTML);

    }

    localStorage.setItem('arrayOfTemplates', JSON.stringify(arrayOfTemplates));

    let arrayClone = [];

  function returnIndex(array, button){

    newbutton = '#' + button;

    console.log('return index: ' + button);

    for(let i = 0; i < array.length; i++){

      console.log(newbutton, array[i])

      if(array[i] === newbutton){
        
        return i;
      }     
    }

    throw console.error('No id matches');
    
  }

   // console.log(document.querySelector('#home').innerHTML)

    function switchPage(button){
      document.querySelector('#' + button)
      .addEventListener('click', function(e){

        console.log(e.currentTarget.id);

        let index = returnIndex(arrayOfIds, e.currentTarget.id + '-section');
        //tagrget.id returns the button's id which is either 'home' or 'about' or.....
        //so we add '-section' so we can compare against the template ids

        

        document.querySelector('#home-section').innerHTML = '';

        for(let i = 0; i < arrayOfTemplates.length; i++){

          arrayClone[i] = arrayOfTemplates[i];

        }

         console.log(arrayClone);

        let currentPage = arrayClone[index];

        console.log(currentPage);

        transitionPage(currentPage);

      })
    }

    console.log(arrayOfTemplates);

    arrayOfBtnIds.forEach(function(arrayItem){
      switchPage(arrayItem);
    })


    function transitionPage(currentPage){

     if(!document.querySelector('.intro').classList.contains('fade-out')){
        document.querySelector('.intro').classList.add('fade-out');
     }

      

     setTimeout(function(){

      document.querySelector('#home-section').innerHTML = currentPage;

        document.querySelector('.intro').classList.remove('fade-out');

     }, 500);

    }


//////////////////////////////////// end of page switching program ///////////////////////////////////////////////////////////////////////////////


//////////////// floating stars ///////////////////////////////////////////////////////////////////////////////////
   

const arrayStars = [];
for(let i = 0; i < 5; i++){
  arrayStars.push([]);
}

for(let i = 0; i<=Math.floor(5/2); i++){
  for(let j = 0; j < Math.floor(5/2) - i; j++){
      arrayStars[i][j] = ' ';
  }

  for(let j = 4; j > Math.floor(5/2) + i; j--){
    arrayStars[i][j] = ' ';
  }

  for(let j = Math.floor(5/2) - i; j <= Math.floor(5/2) + i; j++){
    arrayStars[i][j] = '*';
  }

}

  for(let i = 3; i < 5; i++){
    for(let j = 4; j > 4 - (i - Math.floor(5/2)); j--){
      arrayStars[i][j] = ' ';
    }

    for(let j = (i - Math.floor(5/2)) - 1; j >= 0; j--){
      arrayStars[i][j] = ' ';
    }

    for(let j = i - Math.floor(5/2); j <= 4 - (i - Math.floor(5/2)); j++){
      arrayStars[i][j] = '*';
    }
  }

for(let i = 0; i < 5; i++){
  console.log(arrayStars[i].join(''));
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

let listOfDiamonds = '';

for(let i = 0; i < 15; i++){
  arrayOfDiamonds[i] = ` <br> <svg class="svg" xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="floating-accent">
  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
</svg> <br>`
}

console.log(arrayOfDiamonds)

window.addEventListener("DOMContentLoaded", function(){

  arrayOfDiamonds.forEach(function(arrayElt){
      const diamond = arrayElt; 

      listOfDiamonds += diamond;
  })

  listOfDiamonds += listOfDiamonds;

  document.querySelector('.diamonds-js').innerHTML = `<div class="diamonds-inner">${listOfDiamonds}</div>`;
}
)


///////////////////////////////  button selection on active and page transitions  /////////////////////////////////////////////////////////////////////////////





  