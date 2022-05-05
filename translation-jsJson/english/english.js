
var english = document.querySelector(".ekieli");

english.addEventListener("click", function(){


var enReq = new XMLHttpRequest();
enReq.open('GET', 'translation-jsJson/english/english.json');
enReq.onload = function() {
    var enData = JSON.parse(enReq.responseText);

    kaannaEn(enData);
    naytaOhje(ohjCount);

};

enReq.send();

});

function kaannaEn(data){
    var navOts = data[0].navotsikko[0].english;
    otsikko.innerHTML = navOts;
    otsikko1.innerHTML = navOts;

    var kiOt = data[0].navsidebar[0].english;
    kieliOtsikko.innerHTML = kiOt;

    var finOt = data[0].kielite[0].finnish;
    finOts.innerHTML = finOt;

    var engOt = data[0].kielite[0].english;
    engOts.innerHTML = engOt;

    var sweOt = data[0].kielite[0].swedish;
    sweOts.innerHTML = sweOt;

    var ruOt = data[0].kielite[0].russian;
    ruOts.innerHTML = ruOt;

    var arOt = data[0].kielite[0].arabia;
    arOts.innerHTML = arOt;

    var peOt = data[0].kielite[0].persia;
    peOts.innerHTML = peOt;

    var plBt = data[0].pallom[0].english
    palBtn.innerHTML = plBt;

    var oyBt = data[0].otayhlom[0].english;
    yhBtn.innerHTML = oyBt;

    var plOt = data[0].pallom[0].english;
    palOts.innerHTML = plOt;

    var plLa = data[0].pallomsubots[0].english;
    palLa.innerHTML = plLa;

    var plEt = data[0].pallomkoh1[0].english;
    palEtu.innerHTML = plEt;

    var plSu = data[0].pallomkoh2[0].english;
    palSuk.innerHTML = plSu;

    var plPu = data[0].pallomkoh3[0].english;
    palPuh.innerHTML = plPu;

    var plEm = data[0].pallomkoh4[0].english;
    palEma.innerHTML = plEm;

    var laPl = data[0].pallombtn1[0].english;
    lahetaPal.innerHTML = laPl;

    var suPl = data[0].pallombtn2[0].english;
    suljePal.innerHTML = suPl;

    lahetaPal.onclick = () => {
    var plVa = data[0].pallomvah[0].english;
    kiitosPal.innerHTML = plVa;
}
    var yhOt = data[0].otayhlom[0].english;
    yhtOts.innerHTML = yhOt;

    var yhLa = data[0].otayhlomsubots[0].english;
    yhtLau.innerHTML = yhLa;

    var oyEt = data[0].otayhlomkoh1[0].english;
    otaEtu.innerHTML = oyEt;

    var oySu = data[0].otayhlomkoh2[0].english;
    otaSuk.innerHTML = oySu;

    var oyPu = data[0].otayhlomkoh3[0].english;
    otyPuh.innerHTML = oyPu;

    var oyEm = data[0].otayhlomkoh4[0].english;
    otyEma.innerHTML = oyEm;

    var oyAi = data[0].otayhlomkoh5[0].english;
    otyAih.innerHTML = oyAi;

    var laVi = data[0].otayhlombtn1[0].english;
    lahetaVie.innerHTML = laVi;

    var suVi = data[0].otayhlombtn2[0].english;
    suljeVie.innerHTML = suVi;

    lahetaVie.onclick = () => {
        var oyVa = data[0].otayhlomvah[0].english;
        kiitosVie.innerHTML = oyVa;
    }

    var alHe = data[0].hei[0].english;
    alkHei.innerHTML = alHe;

    var teTe = data[0].tervetuloa[0].english;
    terTek.innerHTML = teTe;

    var alBt = data[0].aloitabutton[0].english;
    aloitaBtn.innerHTML = alBt;

    var kaOh = data[0].kayttoohjeet[0].english;
    kayOhe.innerHTML = kaOh;

    // var ohTe = ohjeet[1].en;
    // ohjeTeksti.innerHTML = ohTe;

    var edBt = data[0].edebtn[0].english;
    edeBtn.innerHTML = edBt;

    var seBt = data[0].seubtn[0].english;
    seuBtn.innerHTML = seBt;

    var suBt = data[0].sulbtn[0].english;
    suljeBtn.innerHTML = suBt;

   
}


