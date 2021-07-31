const nam = document.getElementById("name");

const prof = document.getElementById("profession");

const contact =  document.getElementById("contact");

const edu = document.getElementById("education");

const langu = document.getElementById("langu");

const eng = document.getElementById("englishProgress");

const hin = document.getElementById("hindiProgress");

const pro = document.getElementById("profil");

const exp = document.getElementById("experience");

const skl = document.getElementById("professionalSkills");

const int = document.getElementById("intrest");




function glowName() {
    nam.style = 
          "border: 2px outset #ff0000; box-shadow: 4px 2px 4px green; background-color: #000000; color: #ffffff; text-shadow:2px 2px 4px #ff0000; font-size: 30px; padding: 4px;"
} 

function glowOffName() {
    nam.style = null;
}

function glowContact() {
    contact.style = 
          "border: 2px outset #ff0000; box-shadow: 4px 2px 4px green; background-color: #000000; color: #ffffff; text-shadow:2px 2px 4px #ff0000; font-size: 25px; padding: 14px;"
          
}

function glowOffContact() {
    contact.style = null;
}

function glowEducation() {
    edu.style = 
    "border: 2px outset #ff0000; box-shadow: 4px 2px 4px green; background-color: #000000; color: #ffffff; text-shadow:2px 2px 4px #ff0000; font-size: 25px; padding: 14px;" 
}

function glowOffEducation() {
    edu.style = null;
}

function glowLanguage() {
    langu.style = 
    "border: 2px inset #ff0000; box-shadow: 4px 2px 4px green; background-color: #000000; color: #ffffff; text-shadow:2px 2px 4px #ff0000; font-size: 15px; padding: 14px;" 
}

function glowOffLanguage() {
    langu.style = null;
}

function engProg() {
    eng.style = "width: 80%;"
    document.getElementById("gloweng").style = "border: 2px outset #ff0000; box-shadow: 4px 2px 4px green; background-color:#000000; text-shadow: 2px 2px 4px #ff0000;";
}

function engProgHide() {
    eng.style = "display: none;";
    document.getElementById("gloweng").style = null;
}


function hinProg(){
    hin.style = "width: 90%;"
    document.getElementById("glowhin").style = "border: 2px outset #ff0000; box-shadow: 4px 2px 4px green; background-color:#000000; text-shadow: 2px 2px 4px #ff0000;";
}

function hinProgHide() {
    hin.style = "display: none;";
    document.getElementById("glowhin").style = null;
}


function changeBackCol() {
    document.getElementById("rightSide").style ="background-color: lightyellow;";
}

function normBackCol() {
    document.getElementById("rightSide").style = null;
}

function glowProfile() {
    pro.style = "border: 2px inset #ff0000; box-shadow: 4px 2px 4px gray; font-size: 25px; padding: 14px;";
}

function glowOffProfile() {
    pro.style = null;
}

function glowExperience() {
    exp.style = "border: 2px inset #ff0000; box-shadow: 4px 2px 4px gray; font-size: 25px; padding: 14px;";

}

function glowOffExperience() {
    exp.style = null;
}

function glowProfession() {
    skl.style = "border: 2px inset #ff0000; box-shadow: 4px 2px 4px gray; padding: 10px";
    document.getElementById("indexPercent").style = "width:95%;";
    document.getElementById("stylePercent").style = "width:80%;";
    document.getElementById("scriptPercent").style = "width:80%;";
    document.getElementById("photoPercent").style = "width:20%;";
}

function glowOffProfession() {
    skl.style = null;
    document.getElementById("indexPercent").style = null;
    document.getElementById("stylePercent").style = null;
    document.getElementById("scriptPercent").style = null;
    document.getElementById("photoPercent").style = null;
}

function glowInterest() {
    int.style = "border: 2px inset #ff0000; box-shadow: 4px 2px 4px gray; font-size: 25px; padding: 14px; display: flex;";

}

function glowOffInterest() {
        int.style = null;
}


function glowImage() {
    document.getElementById("image").style = "height: 300px; width:300px";

}

function glowOffImage() {
    document.getElementById("image").style = "height: 200px; width:200px";
}

