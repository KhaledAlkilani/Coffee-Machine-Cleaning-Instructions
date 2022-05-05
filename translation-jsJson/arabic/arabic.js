var arabic = document.querySelector(".akieli");

arabic.addEventListener("click", function(){

var araReq = new XMLHttpRequest();
araReq.open('GET', 'translation-jsJson/arabic/arabic.json');
araReq.onload = function() {
    var araData = JSON.parse(araReq.responseText);

    kaannaAra(araData);
    naytaOhje(ohjCount)

};

araReq.send();

});

function kaannaAra(data){
    var navOts = data[0].navotsikko[0].arabia;
    otsikko.innerHTML = navOts;
    otsikko1.innerHTML = navOts;

    var kiOt = data[0].navsidebar[0].arabia;
    kieliOtsikko.innerHTML = kiOt;

    var finOt = data[0].kielita[0].finnish;
    finOts.innerHTML = finOt;

    var engOt = data[0].kielita[0].english;
    engOts.innerHTML = engOt;

    var sweOt = data[0].kielita[0].swedish;
    sweOts.innerHTML = sweOt;

    var ruOt = data[0].kielita[0].russian;
    ruOts.innerHTML = ruOt;

    var arOt = data[0].kielita[0].arabia;
    arOts.innerHTML = arOt;

    var peOt = data[0].kielita[0].persia;
    peOts.innerHTML = peOt;

    var plBt = data[0].pallom[0].arabia;
    palBtn.innerHTML = plBt;

    var oyBt = data[0].otayhlom[0].arabia;
    yhBtn.innerHTML = oyBt;

    var plOt = data[0].pallom[0].arabia;
    palOts.innerHTML = plOt;

    var plLa = data[0].pallomsubots[0].arabia;
    palLa.innerHTML = plLa;

    var plEt = data[0].pallomkoh1[0].arabia;
    palEtu.innerHTML = plEt;

    var plSu = data[0].pallomkoh2[0].arabia;
    palSuk.innerHTML = plSu;

    var plPu = data[0].pallomkoh3[0].arabia;
    palPuh.innerHTML = plPu;

    var plEm = data[0].pallomkoh4[0].arabia;
    palEma.innerHTML = plEm;

    var laPl = data[0].pallombtn1[0].arabia;
    lahetaPal.innerHTML = laPl;

    var suPl = data[0].pallombtn2[0].arabia;
    suljePal.innerHTML = suPl;

    lahetaPal.onclick = () => {
    var plVa = data[0].pallomvah[0].arabia;
    kiitosPal.innerHTML = plVa;
}
    var yhOt = data[0].otayhlom[0].arabia;
    yhtOts.innerHTML = yhOt;

    var yhLa = data[0].otayhlomsubots[0].arabia;
    yhtLau.innerHTML = yhLa;

    var oyEt = data[0].otayhlomkoh1[0].arabia;
    otaEtu.innerHTML = oyEt;

    var oySu = data[0].otayhlomkoh2[0].arabia;
    otaSuk.innerHTML = oySu;

    var oyPu = data[0].otayhlomkoh3[0].arabia;
    otyPuh.innerHTML = oyPu;

    var oyEm = data[0].otayhlomkoh4[0].arabia;
    otyEma.innerHTML = oyEm;

    var oyAi = data[0].otayhlomkoh5[0].arabia;
    otyAih.innerHTML = oyAi;

    var laVi = data[0].otayhlombtn1[0].arabia;
    lahetaVie.innerHTML = laVi;

    var suVi = data[0].otayhlombtn2[0].arabia;
    suljeVie.innerHTML = suVi;

    lahetaVie.onclick = () => {
        var oyVa = data[0].otayhlomvah[0].arabia;
        kiitosVie.innerHTML = oyVa;
    }

    var alHe = data[0].hei[0].arabia;
    alkHei.innerHTML = alHe;

    var teTe = data[0].tervetuloa[0].arabia;
    terTek.innerHTML = teTe;

    var alBt = data[0].aloitabutton[0].arabia;
    aloitaBtn.innerHTML = alBt;

    var kaOh = data[0].kayttoohjeet[0].arabia;
    kayOhe.innerHTML = kaOh;

    var edBt = data[0].edebtn[0].arabia;
    edeBtn.innerHTML = edBt;

    var seBt = data[0].seubtn[0].arabia;
    seuBtn.innerHTML = seBt;

    var suBt = data[0].sulbtn[0].arabia;
    suljeBtn.innerHTML = suBt;

}

