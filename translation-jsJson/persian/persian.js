var persian = document.querySelector(".pkieli");

persian.addEventListener("click", function(){

var perReq = new XMLHttpRequest();
perReq.open('GET', 'translation-jsJson/persian/persian.json');
perReq.onload = function() {
    var perData = JSON.parse(perReq.responseText);

    kaannaPer(perData);
    naytaOhje(ohjCount)

};

perReq.send();

});

function kaannaPer(data){
    var navOts = data[0].navotsikko[0].persia;
    otsikko.innerHTML = navOts;
    otsikko1.innerHTML = navOts;

    var kiOt = data[0].navsidebar[0].persia;
    kieliOtsikko.innerHTML = kiOt;

    var finOt = data[0].kielitp[0].finnish;
    finOts.innerHTML = finOt;

    var engOt = data[0].kielitp[0].english;
    engOts.innerHTML = engOt;

    var sweOt = data[0].kielitp[0].swedish;
    sweOts.innerHTML = sweOt;

    var ruOt = data[0].kielitp[0].russian;
    ruOts.innerHTML = ruOt;

    var arOt = data[0].kielitp[0].arabia;
    arOts.innerHTML = arOt;

    var peOt = data[0].kielitp[0].persia;
    peOts.innerHTML = peOt;

    var plBt = data[0].pallom[0].persia;
    palBtn.innerHTML = plBt;

    var oyBt = data[0].otayhlom[0].persia;
    yhBtn.innerHTML = oyBt;

    var plOt = data[0].pallom[0].persia;
    palOts.innerHTML = plOt;

    var plLa = data[0].pallomsubots[0].persia;
    palLa.innerHTML = plLa;

    var plEt = data[0].pallomkoh1[0].persia;
    palEtu.innerHTML = plEt;

    var plSu = data[0].pallomkoh2[0].persia;
    palSuk.innerHTML = plSu;

    var plPu = data[0].pallomkoh3[0].persia;
    palPuh.innerHTML = plPu;

    var plEm = data[0].pallomkoh4[0].persia;
    palEma.innerHTML = plEm;

    var laPl = data[0].pallombtn1[0].persia;
    lahetaPal.innerHTML = laPl;

    var suPl = data[0].pallombtn2[0].persia;
    suljePal.innerHTML = suPl;

    lahetaPal.onclick = () => {
    var plVa = data[0].pallomvah[0].persia;
    kiitosPal.innerHTML = plVa;
}
    var yhOt = data[0].otayhlom[0].persia;
    yhtOts.innerHTML = yhOt;

    var yhLa = data[0].otayhlomsubots[0].persia;
    yhtLau.innerHTML = yhLa;

    var oyEt = data[0].otayhlomkoh1[0].persia;
    otaEtu.innerHTML = oyEt;

    var oySu = data[0].otayhlomkoh2[0].persia;
    otaSuk.innerHTML = oySu;

    var oyPu = data[0].otayhlomkoh3[0].persia;
    otyPuh.innerHTML = oyPu;

    var oyEm = data[0].otayhlomkoh4[0].persia;
    otyEma.innerHTML = oyEm;

    var oyAi = data[0].otayhlomkoh5[0].persia;
    otyAih.innerHTML = oyAi;

    var laVi = data[0].otayhlombtn1[0].persia;
    lahetaVie.innerHTML = laVi;

    var suVi = data[0].otayhlombtn2[0].persia;
    suljeVie.innerHTML = suVi;

    lahetaVie.onclick = () => {
        var oyVa = data[0].otayhlomvah[0].persia;
        kiitosVie.innerHTML = oyVa;
    }

    var alHe = data[0].hei[0].persia;
    alkHei.innerHTML = alHe;

    var teTe = data[0].tervetuloa[0].persia;
    terTek.innerHTML = teTe;

    var alBt = data[0].aloitabutton[0].persia;
    aloitaBtn.innerHTML = alBt;

    var kaOh = data[0].kayttoohjeet[0].persia;
    kayOhe.innerHTML = kaOh;

    var edBt = data[0].edebtn[0].persia;
    edeBtn.innerHTML = edBt;

    var seBt = data[0].seubtn[0].persia;
    seuBtn.innerHTML = seBt;

    var suBt = data[0].sulbtn[0].persia;
    suljeBtn.innerHTML = suBt;

}