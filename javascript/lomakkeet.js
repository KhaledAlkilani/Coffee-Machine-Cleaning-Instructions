document.forms['palauteForm'].addEventListener('submit', sendFeedback)

var palBtn = document.querySelector('.palaute-btn');
var palLom = document.querySelector('.palaute-lom');
var lahetaPal = document.querySelector('.laheta-palaute');
var yhBtn = document.querySelector('.yhteys-btn');
var yhLom = document.querySelector('.yhteys-lom');
var lahetaVie = document.querySelector('.laheta-viesti');
var kiitosPal = document.querySelector('.kiitos-pal');
var suljePal = document.querySelector('.sulje-palaute');
var kiitosVie = document.querySelector('.kiitos-vie')
var suljeVie = document.querySelector('.sulje-viesti')
var kenimi = document.querySelector('.enimiinput');
var ksnimi = document.querySelector('.snimiinput');
var kpnu = document.querySelector('.pninput');
var einput = document.querySelector('.eminput');
var kpal = document.querySelector('.palinput');

/* Send feedback */
function sendFeedback(event){
    event.preventDefault();

    var ajax = new XMLHttpRequest();

    // Prepare POST-data
    const ffname = document.forms['palauteForm']['penimi'].value
    const flname = document.forms['palauteForm']['psnimi'].value;
    const fpnumber = document.forms['palauteForm']['pphonenumber'].value;
    const femail = document.forms['palauteForm']['pemail'].value;
    const fbox = document.forms['palauteForm']['ppalbox'].value;
    let postData = `ffname=${ffname}&flname=${flname}&fpnumber=${fpnumber}&femail=${femail}&fbox=${fbox}`
    // When response arrives
    ajax.onload = function(){
        console.log(JSON.parse(this.responseText));
    };

    ajax.open('POST', './backend/sendFeedback.php');
    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    ajax.send(postData);
}

palBtn.onclick = () => {
    palLom.classList.add('active-palaute');
    contentBox.classList.remove('active');
    ohjLaatikko.classList.remove('active');
    yhLom.classList.remove('active-yhteytta');
}

suljePal.onclick = () => {
    palLom.classList.remove('active-palaute');
    contentBox.classList.add('active');
    window.location.reload();
}

lahetaPal.onclick = () => {
    
    
    if (ketunimi(kenimi)) {
        if (ksukunimi(ksnimi)) {
            if(kpuhnu(kpnu)){
                if(kemail(einput)){
                    if(kpalaute(kpal)){

                    }
                }
            }
        }
    }
    // return false;
}

function ketunimi(kenimi) {
    var letters = /^[A-Za-z]+$/;
    if (kenimi.value.match(letters)) {
        return true;
    }
    else {
        alert('Etunimi ei voi olla tyhjä');
        kenimi.focus();
        return false;
    }
}

function ksukunimi(ksnimi) {
    var letters = /^[A-Za-z]+$/;
    if (ksnimi.value.match(letters)) {
        return true;
    }
    else {
        alert('Sukunimi ei voi olla tyhjä');
        ksnimi.focus();
        return false;
    }
}

function kpuhnu(kpnu) {
    var numerot = /^[0-9]+$/;
    if (kpnu.value.match(numerot)) {
        return true;
    }
    else {
        alert('Puhelin-numero pitää olla numeerinen vain');
        kpnu.focus();
        return false;
    }
}

function kemail(einput) {
    var echar = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (einput.value.match(echar)) {
        return true;
    }
    else {
        alert("Olet syöttänyt väärin sähköpostin");
        einput.focus();
        return false;
    }
}

function kpalaute(kpal) {
    if (!kpal.value) {
        alert("Palaute kenttä ei voi olla tyhjä");
        kpal.focus();
        return false;
    }
    else {
        kiitosPal.innerHTML = "Kiitos palautteestasi";
        return true;
    }
}

yhBtn.onclick = () => {
    yhLom.classList.add('active-yhteytta');
    contentBox.classList.remove('active');
    ohjLaatikko.classList.remove('active');
    palLom.classList.remove('active-palaute');

}

var ykenimi = document.querySelector('.yenimi');
var yksnimi = document.querySelector('.ysnimi');
var ykpnu = document.querySelector('.ypnumero');
var yeinput = document.querySelector('.yemail');
var yaiheinput = document.querySelector('.yaihe');
var ykviesti = document.querySelector('.yviesti')

lahetaVie.onclick = () => {
    if (yketunimi(ykenimi)) {
        if (yksukunimi(yksnimi)) {
            if(ykpuhnu(ykpnu)){
                if(ykemail(yeinput)){
                    if(yaiheViesti(yaiheinput, ykviesti)) {

                    }
                    // if(ykviesti(ykviesti)){

                    // }
                }
            }
        }
    }
    return false;
}

function yketunimi(ykenimi) {
    var letters = /^[A-Za-z]+$/;
    if (ykenimi.value.match(letters)) {
        return true;
    }
    else {
        alert('Etunimi ei voi olla tyhjä');
        ykenimi.focus();
        return false;
    }
}

function yksukunimi(yksnimi) {
    var letters = /^[A-Za-z]+$/;
    if (yksnimi.value.match(letters)) {
        return true;
    }
    else {
        alert('Sukunimi ei voi olla tyhjä');
        yksnimi.focus();
        return false;
    }
}

function ykpuhnu(ykpnu) {
    var numerot = /^[0-9]+$/;
    if (ykpnu.value.match(numerot)) {
        return true;
    }
    else {
        alert('Puhelin-numero pitää olla numeerinen vain');
        ykpnu.focus();
        return false;
    }
}

function ykemail(yeinput) {
    var echar = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (yeinput.value.match(echar)) {
        return true;
    }
    else {
        alert("Olet syöttänyt väärin sähköpostin");
        yeinput.focus();
        return false;
    }
}

function yaiheViesti(yaiheinput, yviestiinput) {
    if (!yaiheinput.value) {
        alert("Aihe ei voi olla tyhjä");
        yaiheinput.focus();
        return false;
    } else if (!yviestiinput.value){
        alert("Viesti kenttä ei voi olla tyhjä");
        yviestiinput.focus();
        return false;
    }
    else {
        kiitosVie.innerHTML = "Kiitos viestistäsi";
        return true;
    }
}

suljeVie.onclick = () => {
    yhLom.classList.remove('active-yhteytta');
    contentBox.classList.add('active');
    window.location.reload();
}