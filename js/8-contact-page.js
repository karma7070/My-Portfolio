let arrayOfLinkIds = 
['#home-link', 
  '#about-link',
  '#projects-link',
  '#skills-link',
  '#CV-link',
  '#contact-link']

  let linkValue = '';

  let linkIndex = 0;

function linkPageSwitch(){ 
document.addEventListener("click", function(e){

  for(let i = 0; i< arrayOfLinkIds.length; i++){
    if(e.target.closest(arrayOfLinkIds[i])){
      linkValue = arrayOfLinkIds[i];
      linkIndex = i;

      let btnVal = arrayOfBtnIds[linkIndex]; 

    e.currentTarget.id = btnVal;

    pageSwitchingLogic(e);

    setActive(document.querySelector('#' + btnVal), btnVal);

    break;
        }
      }   
    }
  )
}

linkPageSwitch();