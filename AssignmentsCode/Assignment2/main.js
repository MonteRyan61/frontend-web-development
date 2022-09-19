
//check to ensure this is an email
const checkValid = document.getElementById('email-input');
const invalidEmail = document.getElementById('invalid-email');
checkValid.addEventListener('focusout', (event) => {
    if(!checkValid.value.includes("@") || (!checkValid.value.includes(".com") && !checkValid.value.includes(".org") && !checkValid.value.includes(".edu")) )
    {
        console.log("Please input valid email");
        invalidEmail.innerHTML = "Please enter a valid email";
    }else{
        invalidEmail.innerHTML = "Email accepted";
    }
    console.log(checkValid.value);
    event.preventDefault();
});


const submit = document.querySelector('#my-button');
submit.addEventListener('click', () => {
  //Users name
  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name');
  nameOutput.innerHTML = "Hey " + nameInput.value + ",";
  console.log(nameInput.value);
  nameInput.value = "";

  const responseMessage = document.querySelector('#responder');
  responseMessage.innerHTML = "Thank you for filling out this quick survery"


  const emailInput = document.querySelector('#email-input');
  console.log(emailInput.value);
  emailInput.value = "";
  const phoneInput = document.querySelector('#phone-input');
  console.log(phoneInput.value);
  phoneInput.value = ""

  const sporty = document.querySelector('#points')
  if(sporty.value > 5)
  {
    responseMessage.innerHTML += "<br> Your pretty into sports, that's awesome!"
  }
  else{
    responseMessage.innerHTML += "<br> Some people just don't like sports and that's ok!"
  }

  const paragraph = document.querySelector('#sportsReview')
  console.log(paragraph.value);
  paragraph.value = "";

  //checkboxes input
  const getCheckBox = document.querySelector('#checkboxes');
  const allCheckBoxes = getCheckBox.querySelectorAll('input');

  let num = 0;
  for (const checkboxStatus of allCheckBoxes) {
    console.log(checkboxStatus.checked);
    if(checkboxStatus.checked && num == 0) //football was checked
    {
        document.getElementById("football").src = "football.jpeg"
    }
    if (checkboxStatus.checked && num == 1) //Soccer was checked
    {
        document.getElementById("soccer").src = "soccer.webp"
    }
    if (checkboxStatus.checked && num == 2) //Baseball was checked
    {
        document.getElementById("baseball").src = "baseball.jpeg"
    }
    if (checkboxStatus.checked && num == 3) //Rugby was checked
    {
        document.getElementById("rugby").src = "rugby.avif"
    }
    checkboxStatus.checked = false;
    num++;
  }
});

