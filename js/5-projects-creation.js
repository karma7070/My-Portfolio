
//its insane how i was able to build this on my first try mehnn!!!

//i dont have to fill my html with divs, instead i simply add them to this array which stores them and then adds them to my page using innerHTML

let proGrid = document.querySelector('.project-grid');

let singleProject = {
  title: '', desc: '', img: '' 
};

let projectList = '';

let arrayOfProjects = [];

arrayOfProjects.push(
  {title:'Programming - C', desc: 'Created a Stack, Queue, Circular Queue in C', img: '../images-and-icons/icons/github-icon-svgrepo-com.svg', repo_link: 'https://github.com/karma7070/Very-simple-C-tasks-I-completed'
})

arrayOfProjects.push(
  {title:'Programming - C++', desc: 'Built a Secure Messaging System with XOR cipher and OpenSSL', img: '../images-and-icons/icons/github-icon-svgrepo-com.svg', repo_link: 'https://github.com/karma7070/Secure-messaging-system-in-C---with-openSSL-and-XOR-cipher'

  })

arrayOfProjects.push({
  title:'Backend Development (PostgreSQL + Springboot +...)', desc: 'Built the products and damaged modules in the employee system of the company I interned at (Kings Digital)', img:'../images-and-icons/icons/github-icon-svgrepo-com.svg', repo_link: ''
})  

arrayOfProjects.push({
  title: 'FullStack Dev(Springboot) - My first java project: Tourist booking system', desc:'Built a system for booking travels to touristic sites with group members from school(School project)', img:'../images-and-icons/icons/github-icon-svgrepo-com.svg', repo_link: 'https://github.com/karma7070/OOP-group-13---Tourism-booking-system'
})

arrayOfProjects.push({
  title:'Frontend Development(My Portfolio)', desc: 'Built this very portfolio from scratch', img:'../images-and-icons/icons/github-icon-svgrepo-com.svg', repo_link: 'https://github.com/karma7070/My-Portfolio'
})

arrayOfProjects.push({
  title:'Backend Development(Springboot + PostgreSQL)', desc:'Building an app for finding a job in Cameroon or anywhere really with features like a whatsapp API that make communication easy', img:'../images-and-icons/icons/github-icon-svgrepo-com.svg', repo_link: 'https://github.com/karma7070/Practice-Backend-for-Job-Finder-Application-with-Springboot-Spring-Modulith-Architecture-'
})



arrayOfProjects.forEach(function(elt){

  let proj = elt;

  let proBody = `<div class="single-project">
              
                <div class="project-tooltip">
                  <p>${proj.title}</p>
                  ${proj.desc}
                </div>
           
                <img src="${proj.img}">

                 <div class="whiteCirc">

                </div>

                <a href="${proj.repo_link}">
                <div class="btn-con">
                  <button>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  </button>
                </div>
                </a>

            </div>`;

            projectList += proBody;

            console.log(proBody)
})

localStorage.setItem('projectList', JSON.stringify(projectList));

console.log(projectList)

displayProjectsOnRefresh();

