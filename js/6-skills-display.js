

//array of skills
let skillContainer = document.querySelector('.skill-con');

let arrayOfFeaturedSkills = [];

let arrayOfLanguages = [];

let arrayOfFrontendSkills = [];

let arrayOfBackendSkills = [];


arrayOfSkillArrays = [arrayOfFeaturedSkills, arrayOfLanguages, arrayOfFrontendSkills, arrayOfBackendSkills]

//localStorage.clear();

//skill lists to be displayed on screen

let listOfFeatSkills = '';

let listOfLanguages = '';

let listOfFrontSkills = '';

let listOfBackSkills = '';

//array of skill lists to be chosen from

let arrayOfDisplayLists = [listOfFeatSkills, listOfLanguages, listOfFrontSkills, listOfBackSkills];// I oveer like work eh, what's all this na, couldve just copy pasted on html yish

let skillObjects = {
  spring: {skillimg:'../images-and-icons/icons/spring-icon-svgrepo-com.svg', skillname:'Spring', progress:60},
  postgresql:{skillimg:'../images-and-icons/icons/postgresql-svgrepo-com.svg', skillname:'PostgreSQL', progress:60},
  git:{skillimg:'../images-and-icons/icons/git-svgrepo-com.svg', skillname:'Git', progress:20},
  github:{skillimg:'../images-and-icons/icons/github-icon-svgrepo-com.svg', skillname:'GitHub', progress:20},
  maven:{skillimg:'../images-and-icons/icons/maven-svgrepo-com.svg', skillname:'Maven', progress:20},
  html:{skillimg:'../images-and-icons/icons/html-5-svgrepo-com.svg', skillname:'HTML', progress:80},
  css:{skillimg:'../images-and-icons/icons/css-3-svgrepo-com.svg', skillname:'CSS', progress:80},
  js:{skillimg:'../images-and-icons/icons/js-svgrepo-com.svg', skillname:'JS', progress:50},
  c:{skillimg:'../images-and-icons/icons/c-svgrepo-com.svg', skillname:'C', progress:50},
  cplusplus:{skillimg:'../images-and-icons/icons/c-plusplus-svgrepo-com.svg', skillname:'C++', progress:80},
  java:{skillimg:'../images-and-icons/icons/java-svgrepo-com.svg', skillname:'Java', progress:80}
}

function addSkill(skill, array, index1){//skill to be added, array to be added to, index for getting localStorage name
arrayOfDisplayLists[index1] = '';

array.push(skill);

array.forEach(function(elt){

  let curSkill = `<div class="single-skill">
              <img src="${elt.skillimg}">
               <a> ${elt.skillname} </a>
               <progress value="${elt.progress}" max="100" class="progBar"></progress> 
            </div>`;

           arrayOfDisplayLists[index1] += curSkill; 

}

)

localStorage.setItem(arrayOfSkillIds[index1] + 'list', JSON.stringify(arrayOfDisplayLists[index1]));


}

//FEATURED

addSkill(skillObjects.spring, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.postgresql, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.git, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.github, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.maven, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.html, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.css, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.js, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.c, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.cplusplus, arrayOfSkillArrays[0], 0);

addSkill(skillObjects.java, arrayOfSkillArrays[0], 0);

//LANGUAGES

addSkill(skillObjects.html, arrayOfSkillArrays[1], 1);

addSkill(skillObjects.css, arrayOfSkillArrays[1], 1);

addSkill(skillObjects.js, arrayOfSkillArrays[1], 1);

addSkill(skillObjects.c, arrayOfSkillArrays[1], 1);

addSkill(skillObjects.cplusplus, arrayOfSkillArrays[1], 1);

addSkill(skillObjects.java, arrayOfSkillArrays[1], 1);

//Front-end

addSkill(skillObjects.html, arrayOfSkillArrays[2], 2);

addSkill(skillObjects.css, arrayOfSkillArrays[2], 2);

addSkill(skillObjects.js, arrayOfSkillArrays[2], 2);

addSkill(skillObjects.github, arrayOfSkillArrays[2], 2);

//Back-end

addSkill(skillObjects.java, arrayOfSkillArrays[3], 3);

addSkill(skillObjects.spring, arrayOfSkillArrays[3], 3);

addSkill(skillObjects.github, arrayOfSkillArrays[3], 3);

addSkill(skillObjects.postgresql, arrayOfSkillArrays[3], 3);

addSkill(skillObjects.maven, arrayOfSkillArrays[3], 3);



console.log(localStorage.getItem(arrayOfSkillIds[1] + 'list'))

displaySkillsOnRefresh();



