
//////////////// localStorage defaults - run first, before anything reads these ////////////////

if(!localStorage.getItem('currentPage')){
  localStorage.setItem('currentPage', JSON.stringify(''));
}

if(!localStorage.getItem('leavingPageId')){
  localStorage.setItem('leavingPageId', JSON.stringify('#home-section'));
}

if(!localStorage.getItem('projectList')){
  localStorage.setItem('projectList', JSON.stringify(''));
}

// arrayOfSkillIds isn't declared yet at this point in main-page.js,
// so hardcode the same 4 ids here to seed their '...list' keys
['feat-sk', 'lan-sk', 'front-sk', 'back-sk'].forEach(function(id){
  if(!localStorage.getItem(id + 'list')){
    localStorage.setItem(id + 'list', JSON.stringify(''));
  }
});


/////////////////////////////////// Switching Pages and Page transitions   ///////////////////////////////////////////

const classOfTemplateIds = {
  home: "home-section",
  about: "about-section",
  projects: "projects-section",
  skills: "skills-section",
  CV: "CV-section",
  contact: "contact-section",
};

const arrayOfIds = [
  "#home-section",
  "#about-section",
  "#projects-section",
  "#skills-section",
  "#CV-section",
  "#contact-section",
];

let arrayOfSkillIds = ["feat-sk", "lan-sk", "front-sk", "back-sk"]


const arrayOfBtnIds = ["home", "about", "projects", "skills", "CV", "contact"];


const arrayOfTemplates = [];


//localStorage.clear();


console.log(localStorage.getItem('currentPage'));


let currentPageId = '';//page being switched to


let leavingPageId = JSON.parse(localStorage.getItem('leavingPageId')) || currentPageId;//page we're leaving to current page


for (let i = 0; i < arrayOfIds.length; i++) {
  arrayOfTemplates.push(document.querySelector(arrayOfIds[i]).innerHTML);

  if(arrayOfIds[i] === leavingPageId){
    localStorage.setItem('currentPage', JSON.stringify(document.querySelector(arrayOfIds[i]).innerHTML))
  }//to make sure the currentPage is updated each time its html element is updated
}

localStorage.setItem("arrayOfTemplates", JSON.stringify(arrayOfTemplates));


let currentPage = localStorage.getItem("currentPage") || arrayOfTemplates[0];
//this makes the current page on refresh to either be the most recent page or


let arrayClone = [];

function returnIndex(array, button) {

 let newbutton = "#" + button;

  console.log("return index: " + button);

  for (let i = 0; i < array.length; i++) {

    console.log(newbutton, array[i]);

    if (array[i] === newbutton) {

      return i;

    }
  }

  throw console.error("No id matches");
}
//returns the index of the button who's section is being transitioned to

// console.log(document.querySelector('#home').innerHTML)

///for page switching

function pageSwitchingLogic(e){

    console.log(e.currentTarget.id);

    //remove slidein effect that might still be in classList
      document.querySelector(".intro").classList.remove("slidein");

    let index = returnIndex(arrayOfIds, e.currentTarget.id + "-section");
    //tagrget.id returns the button's id which is either 'home' or 'about' or.....
    //so we add '-section' so we can compare against the template ids
    for (let i = 0; i < arrayOfTemplates.length; i++) {

      arrayClone[i] = arrayOfTemplates[i];

    }

    console.log(arrayClone);

    //if the page is still transitioning then it returns true and returns to the leaving page. This stops the current page id from being set everytime

    if(istransitioning){ 

      return;

    }

    currentPage = arrayClone[index];

    localStorage.setItem('currentPage', JSON.stringify(currentPage));
    //stores the data of the current page in json, it's just the html tags stored in it, so it can later be used to track the most recent section after refresh 

    currentPageId = arrayOfIds[index];

    //keeps the page same if the destination is same
     if(leavingPageId !== currentPageId){

      console.log('failed if')

    leavingPageId = currentPageId;//the page that we switched to becomes the page we'll be leaving

    localStorage.setItem('leavingPageId', JSON.stringify(leavingPageId));
    //stores the page we're going to be leaving or current page's id so we can keep track of which page we're on when we need to switch pages

    console.log(currentPage);

    transitionPage(currentPage);

     } else{

     currentPageId = leavingPageId;

     }

}


function switchPage(button) {
  document.querySelector("#" + button)
  .addEventListener("click", function (e) {
  
    pageSwitchingLogic(e);

      refreshProjects();

  refreshSkills();// restore page history even after leaving on when entering page

  });
}

console.log(arrayOfTemplates);

arrayOfBtnIds.forEach(function (arrayItem) {

  switchPage(arrayItem);

});


////for page transitions

let istransitioning = false;
function transitionPage(currentPage) {

  if(istransitioning){

    return;

  }

  istransitioning = true;

  if (!document.querySelector(".intro").classList.contains("fade-out")) {

    document.querySelector(".intro").classList.add("fade-out");

  } 

      //empty home page
  document.querySelector("#home-section").innerHTML = "";

  document.querySelector("#home-section").innerHTML = currentPage;

  setTimeout(function () {

    document.querySelector(".intro").classList.remove("fade-out");

      istransitioning = false;

  }, 1000);


}

function aboutMeClick(){

  document.addEventListener("click", function(e){

    if(e.target.closest('#about-button')){
   
    e.currentTarget.id = 'about';

          pageSwitchingLogic(e);

          setActive(document.querySelector('#about'), 'about')

     } 
  }
  )
}

aboutMeClick();//this initializes the listener so it can then be called on when clicked once

function returnPageHistory(){

  document.querySelector("#home-section").innerHTML = JSON.parse(localStorage.getItem('currentPage')) || currentPage;//current page by default should be home page
 
}

returnPageHistory();

 console.log(currentPageId);


 function refreshProjects(){

  arrayOfTemplates[2] = `<div class="project-grid">
  ${JSON.parse(localStorage.getItem('projectList'))}</div>`

 }

 refreshProjects();//so the newly added projects are also shown
   
 function refreshSkills(){

  arrayOfTemplates[3] = ` <div class="skill-con">

    <div class="featured">
            <p>Featured</p>
            <div class="skill-display" id="feat-sk">
              ${JSON.parse(localStorage.getItem(arrayOfSkillIds[0] + 'list')) || ''}
            </div>
          </div>

          <div class="languages">
            <p>Languages</p>
            <div class="skill-display" id="lan-sk">
              ${JSON.parse(localStorage.getItem(arrayOfSkillIds[1] + 'list')) || ''}
            </div>
            </div>
         
          <div class="Frontend">
            <p>Front-end</p>
            <div class="skill-display" id="front-sk">
              ${JSON.parse(localStorage.getItem(arrayOfSkillIds[2] + 'list')) || ''}
            </div>
          </div>

          <div class="Backend">
            <p>Back-end</p>
            <div class="skill-display" id="back-sk">
              ${JSON.parse(localStorage.getItem(arrayOfSkillIds[3] + 'list')) || ''}
            </div>
          </div>

        </div>`

 }

 refreshSkills();

function displayProjectsOnRefresh(){
  //list of projects

  console.log(JSON.parse(localStorage.getItem('projectList')))
if(leavingPageId === '#projects-section'){
document.querySelector('.project-grid').innerHTML = JSON.parse(localStorage.getItem('projectList')) || `<div><div>`;
}
}

displayProjectsOnRefresh();



function displaySkillsOnRefresh(){
   //skills
   if(leavingPageId === '#skills-section'){
document.querySelector('#feat-sk').innerHTML = JSON.parse(localStorage.getItem(arrayOfSkillIds[0] + 'list'));
document.querySelector('#lan-sk').innerHTML = JSON.parse(localStorage.getItem(arrayOfSkillIds[1] + 'list'));
document.querySelector('#front-sk').innerHTML = JSON.parse(localStorage.getItem(arrayOfSkillIds[2] + 'list'));
document.querySelector('#back-sk').innerHTML = JSON.parse(localStorage.getItem(arrayOfSkillIds[3] + 'list'));
   }


}

displaySkillsOnRefresh()

/*
function displayCV_XP(){

  if(leavingPageId === '#CV-section'){
    displayCV();
    displayResume();
  }
}

displayCV_XP();
*/



//////////////////////////////////// end of page switching program ///////////////////////////////////////////////////////////////////////////////



