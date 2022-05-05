var swedish = document.querySelector(".rkieli");

swedish.addEventListener("click", function(){

var ruoReq = new XMLHttpRequest();
ruoReq.open('GET', 'translation-jsJson/swedish/swedish.json');
ruoReq.onload = function() {
    var ruoData = JSON.parse(ruoReq.responseText);

    kaannaRuo(ruoData);
    naytaOhje(ohjCount)
};

ruoReq.send();

});

function kaannaRuo(data){
    var navOts = data[0].navotsikko[0].swedish;
    otsikko.innerHTML = navOts;
    otsikko1.innerHTML = navOts;

    var kiOt = data[0].navsidebar[0].swedish;
    kieliOtsikko.innerHTML = kiOt;

    var finOt = data[0].kielitr[0].finnish;
    finOts.innerHTML = finOt;

    var engOt = data[0].kielitr[0].english;
    engOts.innerHTML = engOt;

    var sweOt = data[0].kielitr[0].swedish;
    sweOts.innerHTML = sweOt;

    var ruOt = data[0].kielitr[0].russian;
    ruOts.innerHTML = ruOt;

    var arOt = data[0].kielitr[0].arabia;
    arOts.innerHTML = arOt;

    var peOt = data[0].kielitr[0].persia;
    peOts.innerHTML = peOt;

    var plBt = data[0].pallom[0].swedish;
    palBtn.innerHTML = plBt;

    var oyBt = data[0].otayhlom[0].swedish;
    yhBtn.innerHTML = oyBt;

    var plOt = data[0].pallom[0].swedish;
    palOts.innerHTML = plOt;

    var plLa = data[0].pallomsubots[0].swedish;
    palLa.innerHTML = plLa;

    var plEt = data[0].pallomkoh1[0].swedish;
    palEtu.innerHTML = plEt;

    var plSu = data[0].pallomkoh2[0].swedish;
    palSuk.innerHTML = plSu;

    var plPu = data[0].pallomkoh3[0].swedish;
    palPuh.innerHTML = plPu;

    var plEm = data[0].pallomkoh4[0].swedish;
    palEma.innerHTML = plEm;

    var laPl = data[0].pallombtn1[0].swedish;
    lahetaPal.innerHTML = laPl;

    var suPl = data[0].pallombtn2[0].swedish;
    suljePal.innerHTML = suPl;

    lahetaPal.onclick = () => {
    var plVa = data[0].pallomvah[0].swedish;
    kiitosPal.innerHTML = plVa;
}
    var yhOt = data[0].otayhlom[0].swedish;
    yhtOts.innerHTML = yhOt;

    var yhLa = data[0].otayhlomsubots[0].swedish;
    yhtLau.innerHTML = yhLa;

    var oyEt = data[0].otayhlomkoh1[0].swedish;
    otaEtu.innerHTML = oyEt;

    var oySu = data[0].otayhlomkoh2[0].swedish;
    otaSuk.innerHTML = oySu;

    var oyPu = data[0].otayhlomkoh3[0].swedish;
    otyPuh.innerHTML = oyPu;

    var oyEm = data[0].otayhlomkoh4[0].swedish;
    otyEma.innerHTML = oyEm;

    var oyAi = data[0].otayhlomkoh5[0].swedish;
    otyAih.innerHTML = oyAi;

    var laVi = data[0].otayhlombtn1[0].swedish;
    lahetaVie.innerHTML = laVi;

    var suVi = data[0].otayhlombtn2[0].swedish;
    suljeVie.innerHTML = suVi;

    lahetaVie.onclick = () => {
        var oyVa = data[0].otayhlomvah[0].swedish;
        kiitosVie.innerHTML = oyVa;
    }

    var alHe = data[0].hei[0].swedish;
    alkHei.innerHTML = alHe;

    var teTe = data[0].tervetuloa[0].swedish;
    terTek.innerHTML = teTe;

    var alBt = data[0].aloitabutton[0].swedish;
    aloitaBtn.innerHTML = alBt;

    var kaOh = data[0].kayttoohjeet[0].swedish;
    kayOhe.innerHTML = kaOh;

    var edBt = data[0].edebtn[0].swedish;
    edeBtn.innerHTML = edBt;

    var seBt = data[0].seubtn[0].swedish;
    seuBtn.innerHTML = seBt;

    var suBt = data[0].sulbtn[0].swedish;
    suljeBtn.innerHTML = suBt;

}