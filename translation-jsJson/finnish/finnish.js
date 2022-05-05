var finnish = document.querySelector(".skieli");

var otsikko = document.querySelector(".otsikko");
var otsikko1 = document.querySelector(".otsikko1");
// var dateTime = document.querySelector("datetimeid");
var kieliOtsikko = document.getElementById("kieliotsikko");
var finOts = document.querySelector(".skieli");
var engOts = document.querySelector(".ekieli");
var sweOts = document.querySelector(".rkieli");
var ruOts = document.querySelector(".vkieli");
var arOts = document.querySelector(".akieli");
var peOts = document.querySelector(".pkieli");
var palOts = document.querySelector(".pal-ots");
var palLa = document.querySelector(".pal-lause");
var palEtu = document.querySelector(".content-nimi");
var palSuk = document.getElementById("pal-suku");
var palPuh = document.querySelector(".content-numero");
var palEma = document.querySelector(".content-email");
var yhtOts = document.querySelector(".yht-ots")
var yhtLau = document.querySelector(".yht-lause");
var otaEtu = document.getElementById("oty-etu");
var otaSuk = document.getElementById("oty-suku");
var otyPuh = document.getElementById("oty-puh");
var otyEma = document.getElementById("oty-ema");
var otyAih = document.getElementById("oty-aih");
var alkHei = document.querySelector(".alku-hei");
var terTek = document.querySelector(".terve-teksti");
var kayOhe = document.querySelector(".kaytto-ohjeet");
var ohjTek = document.querySelector(".ohj_teksti");
var ohjeTeksti = document.querySelector('.ohj_teksti');

finnish.addEventListener("click", function(){

    var suoReq = new XMLHttpRequest();
    suoReq.open('GET', 'translation-jsJson/finnish/finnish.json');
    suoReq.onload = function() {
        var suoData = JSON.parse(suoReq.responseText);
    
        kaannaSuo(suoData);
        naytaOhje(ohjCount)

    };
    
    suoReq.send();
    
    });

    function kaannaSuo(data){
        var navOts = data[0].navotsikko[0].finnish;
        otsikko.innerHTML = navOts;
        otsikko1.innerHTML = navOts;

        var kiOt = data[0].navsidebar[0].finnish;
        kieliOtsikko.innerHTML = kiOt;

        var finOt = data[0].kielits[0].finnish;
        finOts.innerHTML = finOt;

        var engOt = data[0].kielits[0].english;
        engOts.innerHTML = engOt;

        var sweOt = data[0].kielits[0].swedish;
        sweOts.innerHTML = sweOt;

         var ruOt = data[0].kielits[0].russian;
        ruOts.innerHTML = ruOt;

        var arOt = data[0].kielits[0].arabia;
        arOts.innerHTML = arOt;

        var peOt = data[0].kielits[0].persia;
        peOts.innerHTML = peOt;

        var plBt = data[0].pallom[0].finnish
        palBtn.innerHTML = plBt;

        var oyBt = data[0].otayhlom[0].finnish;
        yhBtn.innerHTML = oyBt;

        var plOt = data[0].pallom[0].finnish;
        palOts.innerHTML = plOt;

        var plLa = data[0].pallomsubots[0].finnish;
        palLa.innerHTML = plLa;

        var plEt = data[0].pallomkoh1[0].finnish;
        palEtu.innerHTML = plEt;

        var plSu = data[0].pallomkoh2[0].finnish;
        palSuk.innerHTML = plSu;

        var plPu = data[0].pallomkoh3[0].finnish;
        palPuh.innerHTML = plPu;

        var plEm = data[0].pallomkoh4[0].finnish;
        palEma.innerHTML = plEm;

        var laPl = data[0].pallombtn1[0].finnish;
        lahetaPal.innerHTML = laPl;

        var suPl = data[0].pallombtn2[0].finnish;
        suljePal.innerHTML = suPl;

        lahetaPal.onclick = () => {
            var plVa = data[0].pallomvah[0].finnish;
            kiitosPal.innerHTML = plVa;
        }

        var yhOt = data[0].otayhlom[0].finnish;
        yhtOts.innerHTML = yhOt;

        var yhLa = data[0].otayhlomsubots[0].finnish;
        yhtLau.innerHTML = yhLa;

        var oyEt = data[0].otayhlomkoh1[0].finnish;
        otaEtu.innerHTML = oyEt;

        var oySu = data[0].otayhlomkoh2[0].finnish;
        otaSuk.innerHTML = oySu;

        var oyPu = data[0].otayhlomkoh3[0].finnish;
        otyPuh.innerHTML = oyPu;

        var oyEm = data[0].otayhlomkoh4[0].finnish;
        otyEma.innerHTML = oyEm;

        var oyAi = data[0].otayhlomkoh5[0].finnish;
        otyAih.innerHTML = oyAi;

        var laVi = data[0].otayhlombtn1[0].finnish;
        lahetaVie.innerHTML = laVi;

        var suVi = data[0].otayhlombtn2[0].finnish;
        suljeVie.innerHTML = suVi;

        lahetaVie.onclick = () => {
        var oyVa = data[0].otayhlomvah[0].finnish;
        kiitosVie.innerHTML = oyVa;
    }

        var alHe = data[0].hei[0].finnish;
        alkHei.innerHTML = alHe;

        var teTe = data[0].tervetuloa[0].finnish;
        terTek.innerHTML = teTe;

        var alBt = data[0].aloitabutton[0].finnish;
        aloitaBtn.innerHTML = alBt;

        var kaOh = data[0].kayttoohjeet[0].finnish;
        kayOhe.innerHTML = kaOh;

        var edBt = data[0].edebtn[0].finnish;
        edeBtn.innerHTML = edBt;

        var seBt = data[0].seubtn[0].finnish;
        seuBtn.innerHTML = seBt;

        var suBt = data[0].sulbtn[0].finnish;
        suljeBtn.innerHTML = suBt;

    // var ohTe = data[0].ensohj[0].english;
    // ohjTek.innerHTML = naytaOhje(index) = ohTe;

    }