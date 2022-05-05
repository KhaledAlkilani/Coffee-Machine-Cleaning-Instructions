let ohjeet = [
    {
        fi: "Laita 4 mittaa pesuainetta liukenemaan kuumaan veteen ½ L, ota vesi keittimestä painamalla kuuman veden painiketta.",
        en: "Put 4 measures of detergent to dissolve in hot water ½ L, take the water out of the coffee maker by pressing the hot water button",
        sw: "Häll 4 mått diskmedel för att lösas upp i varmt vatten ½ L, ta ut vattnet ur vattenkokaren genom att trycka på varmvattenknappen",
        ru: "Положите 4 меры моющего средства для растворения в ½ л горячей воды, вылейте воду из чайника, нажав кнопку горячей воды",
        ar: "ضع 4 مقاييس من المنظف ليذوب في لتر من الماء الساخن، خذ الماء من آلة صنع القهوة بالضغط على زر الماء الساخن",
        pe: "4 پیمانه مواد شوینده را در آب داغ ½ لیتری حل کنید,با فشار دادن دکمه آب گرم,آب را از کتری خارج کنید"

    },

    {
        fi: "Laita avain ja käännä se 0 asentoon",
        en: "Put the key and turn it to position 0",
        sw: "Sätt i nyckeln och vrid den till läge 0",
        ru: "Вставьте ключ и поверните его в положение 0",
        ar: "ضع المفتاح وأدره إلى الوضع 0",
        pe: "کلید را بگذارید و آن را در موقعیت 0قرار دهید"
    },

    {
        fi: "Käännä avain takaisin 1 asentoon ja ota avain pois koneesta",
        en: "Turn the key back to position 1 and remove the key from the machine",
        sw: "Vrid tillbaka nyckeln till läge 1 och ta ut nyckeln ur maskinen",
        ru: "Поверните ключ обратно в положение 1 и извлеките ключ из машины.",
        ar: "أعد المفتاح إلى الوضع 1 وأخرج المفتاح من الآلة",
        pe: "کلید را به موقعیت 1 برگردانید و کلید را از دستگاه خارج کنید"
    },

    {
        fi: "Paina yhtä aikaa pieni kahvi ja isokuumavesi painikkeita (näytössä teksti DRAIN URN)",
        en: "Press the small coffee and hot water buttons at the same time (display shows DRAIN URN)",
        sw: "Tryck samtidigt på de små kaffe- och varmvattenknapparna (DRAIN URN visas)",
        ru: "Одновременно нажмите маленькие кнопки кофе и горячей воды (отображается DRAIN URN)",
        ar: "اضغط في نفس الوقت على زر القهوة الصغيرة والماء الساخن (الى ان يعرض على الشاشة DRAIN URN)",
        pe: "دکمه های کوچک قهوه و آب گرم را همزمان فشار دهید (DRAIN URN نمایش داده می شود)"
    },

    {
        fi: "Paina pieni kahvi painike",
        en: "Press the small coffee button",
        sw: "Tryck på den lilla kaffeknappen",
        ru: "Нажмите маленькую кнопку кофе",
        ar: "اضغط على زر القهوة الصغيرة",
        pe: "دکمه کوچک قهوه را فشار دهید"
    },

    {
        fi: "Odota, kunnes säiliö on tyhjennetty kahvista ja se on 0,0 L",
        en: "Wait until the tank is emptied of coffee and it's 0.0L",
        sw: "Vänta tills tanken är tömd på kaffe och den är 0,0L",
        ru: "Подождите, пока в баке не останется 0,0 литров",
        ar: "انتظر حتى يتم افراغ الخزان من القهوة ويصبح 0.0 لتر",
        pe: "صبر کنید تا ظرف از قهوه خالی شود و 0.0 لیتر باشد"
    },

    {
        fi: "Kahvinkeitin ei käytössä",
        en: "The coffee machine is not in use",
        sw: "Kaffemaskinen används inte",
        ru: "Кофемашина не используется",
        ar: "آلة القهوة خارج الخدمة",
        pe: "قهوه ساز قابل استفاده نیست"
    },

    {
        fi: "Alhaalta voit tyhjentä kahvinkeittimen vanhasta kahvinjauheesta",
        en: "Below you can empty the coffee machine from the old coffee powder",
        sw: "Nedan kan du tömma kaffemaskinen från det gamla kaffepulvret",
        ru: "Ниже вы можете очистить кофемашину от старого молотого кофе",
        ar: "من الأسفل يمكنك تفريغ آلة القهوة من مسحوق القهوة القديم",
        pe: "در قسمت پایین می توانید دستگاه قهوه ساز را از پودر قهوه قدیمی خالی کنید"
    },

    {
        fi: "Näytössä teksti ADD CLEANER, lisää pesuaine-vesi seos ylhäälle kahvijauho säiliön vieressä olevaan säiliöön, kun säiliöön kaadat, varo kahvinkeittimen etupuolella Olevia vastuksia (putket säiliössä)",
        en: "The text ADD CLEANER is displayed, pour the detergent-water mixture into the top of the coffee maker next to the container where is the coffee powder, watch out the resistors on the front of the coffee machine (tubes in the container)",
        sw: "Texten ADD CLEANER visas, häll diskmedel-vattenblandningen i toppen av kaffebryggaren bredvid behållaren där kaffepulvret finns, se upp för motstånden på framsidan av kaffemaskinen (rör i behållaren)",
        ru: "Отображается текст ADD CLEANER, налейте смесь моющего средства и воды в верхнюю часть кофеварки рядом с контейнером, где находится молотый кофе, следите за резисторами на передней панели кофемашины (трубки в контейнере)",
        ar: "عند عرض النص ADD CLEANER على الشاشة، قم بصب مادة التنظيف والماء الساخن في الجزء العلوي من آلة القهوة بجانب حاوية القهوة المطحونة، احترس من المقاومات الموجودة في الجزء الأمامي من آلة القهوة (الأنابيب الموجودة في الحاوية)",
        pe: "متن ADD CLEANER نمایش داده می شود، هنگامی که آن را در ظرف ریختید، مخلوط آب و شوینده را به بالای ظرف تفاله قهوه در کنار ظرف اضافه کنید، مراقب مقاومت های جلوی دستگاه قهوه ساز باشید (لوله های داخل ظرف)"
    },

    {
        fi: "Paina SET, sitten paina YES ja sitten paina SET uudestaan. SET-painike on keskellä ja YES-painike oikealla näytön alla",
        en: "Press SET, then press YES and press SET again. SET button is on the middle, and YES button is on the right below the screen",
        sw: "Tryck på SET, tryck sedan på YES och tryck på SET igen. SET-knappen är i mitten och YES-knappen är till höger under skärmen",
        ru: "Нажмите SET, затем нажмите YES и снова нажмите SET. Кнопка SET находится посередине, а кнопка YES справа под экраном",
        ar: "اضغط على ضبط، ثم اضغط على نعم ثم اضغط على ضبط مرة أخرى. الزر ضبط في الوسط، والزر نعم على اليمين أسفل الشاشة",
        pe: "را فشار كنيد تنظیم، سپس را فشار كنيد بله و را فشار كنيد تنظیم یک بار دیگر. دکمه تنظیم در وسط و دکمه بله در سمت راست زیر صفحه نمایش"
    },

    {
        fi: "Näyttöön jää teksti OFF AFTER CLEANING. Puhdistus kestää noin 30 minuuttia",
        en: "OFF AFTER CLEANING is displayed. Cleaning takes about 30 minutes",
        sw: "AV EFTER RENGÖRING visas. Rengöring tar cirka 30 minuter",
        ru: "Отображается ВЫКЛ. ПОСЛЕ ОЧИСТКИ. Очистка занимает около 30 минут",
        ar: "يتم عرض OFF AFTER CLEANING. يستغرق التنظيف حوالي 30 دقيقة",
        pe: "OFF AFTER CLEANING نمایش داده می شود. تمیز کردن حدود 30 دقیقه طول می کشد."
    },

    {
        fi: "Kun puhdistus on valmis, laita avain lukkoon, käännä 0 asentoon ja takaisin 1 asentoon, ota avain pois koneesta.",
        en: "When cleaning is complete, put the key, turn it to position 0 and back to position 1, remove the key from the machine",
        sw: "När rengöringen är klar, sätt på strömbrytaren, vrid den till läge 0 och återställ den till läge 1, ta bort strömbrytaren från maskinen",
        ru: "Когда очистка завершена, включите переключатель, поверните его в положение 0 и верните в положение 1, снимите переключатель с машины",
        ar: "عند اكتمال التنظيف ، ضع المفتاح ، وأدره إلى الوضع 0 ثم أعده إلى الموضع 1 ، ثم أخرج المفتاح من الآلة",
        pe: "هنگامی که تمیز کردن کامل شد، کلید را قفل کنید، آن را به موقعیت 0 برگردانید و به موقعیت 1 برگردید، کلید را از دستگاه خارج کنید."
    },

    {
        fi: "Kahvinkeitin on päällä, ole hyvä ja nauti kahvista",
        en: "The coffee machine is ready, please enjoy your coffee.",
        sw: "Kaffemaskinen är på, njut av ditt kaffe",
        ru: "Кофемашина включена, пожалуйста, наслаждайтесь кофе",
        ar: "آلة صنع القهوة جاهزة، يمكنك الاستمتاع بشرب القهوة",
        pe: "دستگاه قهوه روشن است، لطفا از قهوه خود لذت ببرید"
    },
]

let kuvat = [
    [
        "kuvat/1.jpg",
        "kuvat/11.jpg",
        "kuvat/111.jpg",
    ],
    [
        "kuvat/2.jpg",
        "kuvat/22.jpg",
        "kuvat/222.jpg",
    ],
    [
        "kuvat/3.jpg",
        "kuvat/33.jpg",
    ],
    [
        "kuvat/4.jpg",
        "kuvat/44.jpg",
    ],
    [
        "kuvat/5.jpg",
    ],
    [
        "kuvat/6.jpg",
    ],
    [
        "kuvat/7.jpg",
    ],
    [
        "kuvat/8.jpg",
        "kuvat/88.jpg",
        "kuvat/888.jpg",
        "kuvat/8888.jpg",
    ],
    [
        "kuvat/9.jpg",
        "kuvat/99.jpg",
        "kuvat/999.jpg",
        "kuvat/9999.jpg",
    ],
    [
        "kuvat/10.jpg",
        "kuvat/010.jpg",
        "kuvat/0010.jpg",
    ],
    [
        "kuvat/0011.jpg",
    ],
    [
        "kuvat/0012.jpg",
        "kuvat/00012.jpg",
        "kuvat/000012.jpg",
        "kuvat/0000012.jpg",
    ],
    [
        "kuvat/Kahvinkeittin on.jpg",
    ],
];