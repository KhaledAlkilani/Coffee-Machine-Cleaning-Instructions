var logoImg = document.querySelector('.img-logo');

logoImg.onclick = () => {
    window.location.reload()
}

var aloitaBtn = document.querySelector('.btn');
var ohjLaatikko = document.querySelector('.ohj_laatikko');

var suljeBtn = document.querySelector('#sulje_btn')
var contentBox = document.querySelector('.contentbox');

aloitaBtn.onclick = () => {

    ohjLaatikko.classList.add('active');
    contentBox.classList.remove('active');
    naytaOhje(ohjCount)
    ohjYhteen(ohjCount + 1)
    naytaKuvat(ohjCount);
    
}

suljeBtn.addEventListener('click', function () {
    ohjCount = 0;
    ohjLaatikko.classList.remove('active');
    contentBox.classList.add('active');
    window.location.reload()
    naytaKuvat(0)

})

let ohjCount = 0;

const seuBtn = document.querySelector('#seu_btn');
const edeBtn = document.querySelector('#ede_btn');

edeBtn.style.display = "none";
seuBtn.onclick = () => {
    ohjCount++
    if (ohjCount < ohjeet.length) {
        
        naytaOhje(ohjCount);
        ohjYhteen(ohjCount + 1);
        removeImg();
        edeBtn.style.display = "inline";
        
        naytaKuvat(ohjCount);

    } else {
        ohjCount = ohjeet.length - 1;
    }

}

edeBtn.onclick = () => {
    ohjCount--
    if (ohjCount >= 0) {
        naytaOhje(ohjCount);
        ohjYhteen(ohjCount + 1);
        removeImg();
        naytaKuvat(ohjCount);
    } else {
        ohjCount = 0;
    }

}

function setLang(lang){
    document.getElementById("munTeksti").setAttribute('value',lang);
}

function naytaOhje(ohjCount) {
    let ohjeTek;
    var lang=document.getElementById("munTeksti").value;
    let ohjeTeksti = document.querySelector('.ohj_teksti');

    switch(lang) {
        case 'en':
            ohjeTek = '<span>' + ohjeet[ohjCount].en +'</span>';
            break;
        case 'sw':
            ohjeTek = '<span>' + ohjeet[ohjCount].sw +'</span>';
            break;
        case 'ru':
            ohjeTek = '<span>' + ohjeet[ohjCount].ru +'</span>';
            break;
        case 'ar':
            ohjeTek = '<span>' + ohjeet[ohjCount].ar +'</span>';
            break;
        case 'pe':
            ohjeTek = '<span>' + ohjeet[ohjCount].pe +'</span>';
            break;
        default:
            ohjeTek = '<span>' + ohjeet[ohjCount].fi +'</span>';
            break;
    }
    ohjeTeksti.innerHTML = ohjeTek
}

function ohjYhteen(index) {
    const viimeinen_ohjeet_count = ohjLaatikko.querySelector(".ohj_yhteensa");
    let ohjyhteensaTag = '<span>' + index + '</span>/<span>' + ohjeet.length + '</span>';
    viimeinen_ohjeet_count.innerHTML = ohjyhteensaTag;
}

function avaSideNav(){
    document.querySelector('.nav-content').style.width='190px';
}

function suljeSideNav(){
    document.querySelector('.nav-content').style.width='0px';
}

function naytaKuvat(i) {
    var section = document.querySelector('.ohjK');
    const ohjDiv=document.createElement('div');
    ohjDiv.classList.add('vaiheKuvatNew');
    section.appendChild(ohjDiv);

    for (let j = 0; j < kuvat[i].length;j++){
        const ohjImg = document.createElement('img');
        ohjImg.src=kuvat[i][j];
        ohjImg.classList.add('ohjImg');
        document.querySelector('.vaiheKuvatNew').appendChild(ohjImg);

        const modal = document.querySelector(".modal");
        const avaKuva = document.querySelector(".ava-kuva");

        ohjImg.addEventListener("click", () => {
            modal.classList.add("ava");
            avaKuva.classList.add("ava");

            const originalSrc = ohjImg.src=kuvat[i][j];
            avaKuva.src = originalSrc;

        });

        modal.addEventListener("click", (e) => {
            if(e.target.classList.contains("modal")){
                modal.classList.remove("ava");
                avaKuva.classList.remove("ava");
            }
        });
    }
}

function removeImg() {
    document.querySelector('.vaiheKuvatNew').remove();
    // for (j=0;j<kuvat[i].length;j++){
    //     const img = document.querySelector('.vaiheKuvat');
    //     img.removeChild(img.childNodes[j]);
    // }
}


//----------------------------------------------------------------------------------
