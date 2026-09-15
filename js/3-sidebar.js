
///////////////////////////////  button selection on active   /////////////////////////////////////////////////////////////////////////////

let switchId = JSON.parse(localStorage.getItem('leavingPageId'));
//retrieve the id of the last page/section the site was in at the moment it was refreshed

let arrayThingy = [];

console.log(arrayOfBtnIds)

console.log(arrayOfIds)

console.log(arrayClone);

function returnVal(){

  for(let i = 0; i < arrayOfIds.length; i++){
    if(arrayOfIds[i] === switchId){
      return i;
    }
  }

}
//finds the index of the button linked to that page by comparing the sections to the switchId or most recent section before refresh. Since the indexes are exactly the same for the buttons

 let currentIndex = returnVal();

console.log(currentIndex);

console.log(switchId);

setActive(document.querySelector('#' + arrayOfBtnIds[currentIndex]), arrayOfBtnIds[currentIndex])
//set the button to active on refresh after getting the section index so that it stays active even after refresh

function setActive(actButton, id){

    if(!actButton.classList.contains('togglebutton')){
      actButton.classList.add('togglebutton');

      arrayOfBtnIds.forEach(function(elt){
        if(elt !== id){
        let currentActButton = document.querySelector('#' + elt);
        currentActButton.classList.remove('togglebutton')
        }
      
      })
    } else{
      
    }
}


function activeButton(btnId){
    //console.log(id);
  let actBtn = document.querySelector('#' + btnId);

  actBtn.addEventListener("click", function(e){

    setActive(actBtn, btnId);

    console.log(btnId);

  })
}

 arrayOfBtnIds.forEach(function(elt){
  activeButton(elt);
 })
