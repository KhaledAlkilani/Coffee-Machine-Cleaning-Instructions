function setPaiva(paivaa){
    document.getElementById("munPaiva").setAttribute('value',paivaa);
}

(function () {


    function getPvm() {
        var pvm = new Date();
        var viikkoPaiva = pvm.getDay();
        var kuukausi = pvm.getMonth();
        var paiva = pvm.getDate();
        var vuosi = pvm.getFullYear();
        var tunti = pvm.getHours();
        var minuutit = pvm.getMinutes();
        var sekuntit = pvm.getSeconds();

        if (tunti < 10) tunti = "0" + tunti;
        if (minuutit < 10) minuutit = "0" + minuutit;
        if (sekuntit < 10) sekuntit = "0" + sekuntit;

        var kuuKaudet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

        let viikkoPaivat = {
                        fin: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
                        eng: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        swe: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                        rus: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
                        ara: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                        per: ["یکشنبه", "دوشنبه", "سهشنبه", "چهار شنبه", "پنج شنبه", "جمعه", "شنبه"]
                    };

        let naytaPaiva;
        var paivaa=document.getElementById("munPaiva").value;
        let dateTime = document.querySelector(".datetime");

        switch(paivaa) {
            case 'eng':
                naytaPaiva = viikkoPaivat.eng[viikkoPaiva];
                break;
            case 'swe':
                naytaPaiva = viikkoPaivat.swe[viikkoPaiva];
                break;
            case 'rus':
                naytaPaiva = viikkoPaivat.rus[viikkoPaiva];
                break;
            case 'ara':
                naytaPaiva = viikkoPaivat.ara[viikkoPaiva];
                break;
            case 'per':
                naytaPaiva = viikkoPaivat.per[viikkoPaiva];
                break;
            default:
                naytaPaiva = viikkoPaivat.fin[viikkoPaiva];
                break;
        }

        var naytaPvm = paiva + "." + kuuKaudet[kuukausi] + "." + vuosi;

        var naytaAika = tunti + "." + minuutit + "." + sekuntit;
            dateTime.innerHTML = naytaPaiva + " " + naytaPvm + " - " + naytaAika;

        requestAnimationFrame(getPvm);
    }

    getPvm();

}());