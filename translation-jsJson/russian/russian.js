var russian = document.querySelector(".vkieli");

russian.addEventListener("click", function(){

var venReq = new XMLHttpRequest();
venReq.open('GET', 'translation-jsJson/russian/russian.json');
venReq.onload = function() {
    var venData = JSON.parse(venReq.responseText);

    kaannaVen(venData);
    naytaOhje(ohjCount)
};

venReq.send();

});

function kaannaVen(data){
    var navOts = data[0].navotsikko[0].russian;
    otsikko.innerHTML = navOts;
    otsikko1.innerHTML = navOts;

    var kiOt = data[0].navsidebar[0].russian;
    kieliOtsikko.innerHTML = kiOt;

    var finOt = data[0].kielitv[0].finnish;
    finOts.innerHTML = finOt;

    var engOt = data[0].kielitv[0].english;
    engOts.innerHTML = engOt;

    var sweOt = data[0].kielitv[0].swedish;
    sweOts.innerHTML = sweOt;

    var ruOt = data[0].kielitv[0].russian;
    ruOts.innerHTML = ruOt;

    var arOt = data[0].kielitv[0].arabia;
    arOts.innerHTML = arOt;

    var peOt = data[0].kielitv[0].persia;
    peOts.innerHTML = peOt;

    var plBt = data[0].pallom[0].russian;
    palBtn.innerHTML = plBt;

    var oyBt = data[0].otayhlom[0].russian;
    yhBtn.innerHTML = oyBt;

    var plOt = data[0].pallom[0].russian;
    palOts.innerHTML = plOt;

    var plLa = data[0].pallomsubots[0].russian;
    palLa.innerHTML = plLa;

    var plEt = data[0].pallomkoh1[0].russian;
    palEtu.innerHTML = plEt;

    var plSu = data[0].pallomkoh2[0].russian;
    palSuk.innerHTML = plSu;

    var plPu = data[0].pallomkoh3[0].russian;
    palPuh.innerHTML = plPu;

    var plEm = data[0].pallomkoh4[0].russian;
    palEma.innerHTML = plEm;

    var laPl = data[0].pallombtn1[0].russian;
    lahetaPal.innerHTML = laPl;

    var suPl = data[0].pallombtn2[0].russian;
    suljePal.innerHTML = suPl;

    lahetaPal.onclick = () => {
    var plVa = data[0].pallomvah[0].russian;
    kiitosPal.innerHTML = plVa;
}
    var yhOt = data[0].otayhlom[0].russian;
    yhtOts.innerHTML = yhOt;

    var yhLa = data[0].otayhlomsubots[0].russian;
    yhtLau.innerHTML = yhLa;

    var oyEt = data[0].otayhlomkoh1[0].russian;
    otaEtu.innerHTML = oyEt;

    var oySu = data[0].otayhlomkoh2[0].russian;
    otaSuk.innerHTML = oySu;

    var oyPu = data[0].otayhlomkoh3[0].russian;
    otyPuh.innerHTML = oyPu;

    var oyEm = data[0].otayhlomkoh4[0].russian;
    otyEma.innerHTML = oyEm;

    var oyAi = data[0].otayhlomkoh5[0].russian;
    otyAih.innerHTML = oyAi;

    var laVi = data[0].otayhlombtn1[0].russian;
    lahetaVie.innerHTML = laVi;

    var suVi = data[0].otayhlombtn2[0].russian;
    suljeVie.innerHTML = suVi;

    lahetaVie.onclick = () => {
        var oyVa = data[0].otayhlomvah[0].russian;
        kiitosVie.innerHTML = oyVa;
    }

    var alHe = data[0].hei[0].russian;
    alkHei.innerHTML = alHe;

    var teTe = data[0].tervetuloa[0].russian;
    terTek.innerHTML = teTe;

    var alBt = data[0].aloitabutton[0].russian;
    aloitaBtn.innerHTML = alBt;

    var kaOh = data[0].kayttoohjeet[0].russian;
    kayOhe.innerHTML = kaOh;

    var edBt = data[0].edebtn[0].russian;
    edeBtn.innerHTML = edBt;

    var seBt = data[0].seubtn[0].russian;
    seuBtn.innerHTML = seBt;

    var suBt = data[0].sulbtn[0].russian;
    suljeBtn.innerHTML = suBt;

}