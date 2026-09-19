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

let senderName = document.querySelector('.name');

let senderEmail = document.querySelector('.email');

let senderMessage = document.querySelector('.message');

function sendMessage(){

  document.querySelector('.send')
  .addEventListener("click", function(e){

    emailjs.send("service_u55e5jp", "template_o8sioc8", {
      from_name: senderName.value,
      from_email: senderEmail.value,
      sent_at: new Date().toLocaleString(),
      message: senderMessage.value
    });

    senderName.value = "";
    senderEmail.value = "";
    senderMessage.value = "";

  })
}

sendMessage();