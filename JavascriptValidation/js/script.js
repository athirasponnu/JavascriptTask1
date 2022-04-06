let form=document.getElementById("formSubmit");
var username=document.getElementById("name");
let email=document.getElementById("email");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let gender1=document.getElementById("gen1");
let gender2=document.getElementById("gen2");
let dob=document.getElementById("dob");
let occupationDetails=document.getElementById("description");
let checkbox=document.querySelectorAll("input[name=checkbox]");
// // let chk2=document.getElementById("chk2");
// // let chk3=document.getElementById("chk3");
let contactNum=document.getElementById("contactNum");
let inputFile=document.getElementById("image");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInputs();
   
});
username.addEventListener("blur",validateName);
email.addEventListener("blur",validateEmail);
password.addEventListener("blur",validatePassword);
confirmPassword.addEventListener("blur",validateCPassword);
gender1.addEventListener("blur",validateGender);
dob.addEventListener("blur",validatedob);
occupationDetails.addEventListener("blur",validateOccupation);
contactNum.addEventListener("blur",validatePhonenum);
checkbox.addEventListener("change",validateCheckbox);
inputFile.addEventListener("blur",validateFile);
function validateInputs()
{
    validateName();
    validateEmail();
    validatePassword();
    validateCPassword();
    validateGender();
    validatedob();
    validateOccupation();
    validatePhonenum();
    validateCheckbox();
    validateFile();
}

//Name validation
function validateName()
{
    let nameValue=username.value.trim();
    let validName="^[a-zA-Z\s]+$";
    if(nameValue=="")
    {
        error(username,"Username cannot be empty");
    }
    else if(!nameValue.match(validName))
    {
        error(username,"Username cannot include numbers and special characters ");
    }
    else
    {
        success(username);
    }
}

//email vaidation
function validateEmail()
{
    let emailValue=email.value.trim();
    let validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailValue=="")
    {
        error(email,"Email cannot be empty");   
    }
    else if(!emailValue.match(validEmail))
    {
        error(email,"Enter a valid email ");
    }
    else
    {
        success(email);
    }
}
//password validation
function validatePassword()
{
    let passwordValue=password.value.trim();
    let validPassword="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])";
    if(passwordValue=="")
    {
        error(password,"Password cannot be empty");
        
    }
    else if(passwordValue.length<8)
    {
        error(password,"Password must atleast contain 8 characters");   
    }
    else if(!passwordValue.match(validPassword))
    {
        error(password,"Password should contain atleast one uppercase character, lowercase character,digit and special character");
    }
    else
    {
        success(password);
    }
}
//confirm password validation
function validateCPassword()
{
    let passwordValue=password.value.trim();
    let confirmPasswordValue=confirmPassword.value.trim();
    if(confirmPasswordValue=="")
    {
        error(confirmPassword,"Password cannot be empty");
    }
    else if(confirmPasswordValue!=passwordValue)
    {
        error(confirmPassword,"Password doesnot match");
    }
    else
    {
        success(confirmPassword);
    }
}    
//gender validation
function validateGender()
{
    // let genderValue=gender1.value;
    if(gender1.checked==false && gender2.checked==false)
    {
       error(gender1,"please select a gender");
    }
    else
    {
        success(gender1);
    }
}
//dob validaion
function validatedob()
{
    let dobValue=dob.value.trim();
    if(dobValue=="")
    {
        error(dob,"Date of Birth feild cannot be empty");
    }
    else
    {
        success(dob);
    }
}
//description validation
function validateOccupation()
{
    let occupationValue=occupationDetails.value.trim();
    if(occupationValue=="")
    {
        error(occupationDetails,"Occupation details can't be empty");
    }
    else if(occupationValue.length<10)
    {
        error(occupationDetails,"Details must contain more than 10 characters ");
    }
    else
    {
        success(occupationDetails);
    }
}
//phone number validation
function validatePhonenum()
{
    let contactValue=contactNum.value.trim();
    let validPhoneNum=/^\d{10}$/;
    if(contactValue=="")
    {
        error(contactNum,"Phone number feild cannot be empty");
    }
    else if(!contactValue.match(validPhoneNum))
    {
        error(contactNum,"Enter a valid number");
    }
    else
    {
        success(contactNum);
    }
}
//checkbox validation
function validateCheckbox()
{
    
    if(checkbox.checked==false)
    {
        error(checkbox,"Please select your Qualifications");
        
    }
    else
    {
        success(checkbox);
    }
}
// file validation
function validateFile()
{
    let inputFileValue=inputFile.value.trim();
    let validImageExtension=["jpeg","jpg"];
    if(inputFileValue=="")
    {
        error(inputFile,"Please choose a  file");
    }
    else if(inputFileValue!="")
    {
        let imageExtensionPosition=inputFileValue.lastIndexOf(".");
        let inputImageExtension=inputFileValue.substring(imageExtensionPosition+1);
        let result=validImageExtension.includes(inputImageExtension);
        if(!result)
        {
            error(inputFile,"Enter  a valid file");
        }
        else
        {
            success(inputFile);
        }
    }
    else
    {
        success(inputFile);
    }
}
function error(input,message)
{
   let feildDiv=input.parentElement;
   let errorMsg=feildDiv.querySelector("p");
   errorMsg.innerHTML=message;
   feildDiv.className="feildDiv error";
}
function success(input)
{
    let feildDiv=input.parentElement;
    feildDiv.className="feildDiv success";
}



