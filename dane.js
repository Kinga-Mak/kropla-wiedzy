const tekstyUI = {
    pl: {
        tytulStrony: "Ciekawostki",
        podtytul: "Odkryj niezwykłe fakty ze świata",
        btnLosuj: "🎲 Wylosuj ciekawostkę",
        filtrujeszPo: "Filtrujesz po: ",
        wrocDoLosowania: "🎲 Wroc do losowania",
    },
    en: {
        tytulStrony: "Facts",
        podtytul: "Discover amazing facts from the world",
        btnLosuj: "🎲 Random fact",
        filtrujeszPo: "Filtering by: ",
        wrocDoLosowania: "🎲 Back to random fact",
    }
};

const bazaWiedzy = [
    {
        id: "zebra",
        tytul: {
            pl: "Zebra",
            en: "Zebra",
        },
        zdjecie: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=600&q=80",
        tagi: {
            pl: ["zwierzeta", "zebra", "ssaki"],
            en: ["animals", "zebra", "mammals"],
        },
        ciekawostki: {
            pl: [
                "Wzór pasków u zebry jest tak unikalny jak linie papilarne u ludzi.",
                "Zebry biegają w zygzakowaty sposób, gdy są gonione przez drapieżniki.",
                "Zebry są znacznie bardziej agresywne i dużo bardziej niebezpieczne niż konie. Są znane z tego, że kopią się na śmierć, złośliwie gryzą każdego człowieka, który zbliży się do nich zbyt blisko, a jest nawet wiele relacji o zebrach zabijających lwy.",
                "Zebry mogą obracać swoje uszy niemalże w każdym kierunku.",
                "Mało prawdopodobne jest, aby zebry były w stanie utrzymać wagę dorosłego człowieka przez dłuższy czas bez obrażeń.",
                "Zebry są bardzo szybkimi zwierzętami i mogą osiągać prędkość do 65 km/h podczas galopu przez równiny. Jest to wystarczająco szybko, aby wyprzedzić drapieżniki takie jak lwy.",
                "Zebry są jednym z niewielu ssaków, które, jak podejrzewamy, mogą widzieć w kolorze. Badania wykazały, że nie widzą koloru pomarańczowego.",
            ],
            en: [
                "The stripe pattern of a zebra is as unique as fingerprints in humans.",
                "Zebras run in a zigzag pattern when chased by predators.",
                "Zebras are much more aggressive and far more dangerous than horses. They are known to kick each other to death, viciously bite any human who gets too close, and there are even many accounts of zebras killing lions.",
                "Zebras can turn their ears in almost any direction.",
                "It is unlikely that zebras could support the weight of an adult human for any length of time without injury.",
                "Zebras are very fast animals and can reach speeds of up to 65 km/h while galloping across the plains. This is fast enough to outrun predators such as lions.",
                "Zebras are one of the few mammals we suspect can see in color. Studies have shown that they cannot see the color orange.",
            ]
        }
    },
    {
        id: "tygrys",
        tytul: {
            pl: "Tygrys",
            en: "Tiger"
        },
        zdjecie: "https://images.unsplash.com/photo-1500463959177-e0869687df26?auto=format&fit=crop&w=600&q=80",
        tagi: {
            pl: ["zwierzeta", "tygrys", "ssaki"],
            en: ["animals", "tiger", "mammals"],
        },
        ciekawostki: {
            pl: [
                "Ryk tygrysa jest tak donośny, że można go usłyszeć z odległości ponad 3 km.",
                "Jednym uderzeniem łapy może zabić zwierzę wielkości dużego psa a nawet człowieka.",
                "Umaszczenie tygrysów uzależnione jest od pory roku i od podgatunku. Bywa od żółtej do czerwonopomarańczowej z wyraźnymi czarnymi pręgami.",
                "Tylne nogi tygrysa są dłuższe od przednich, dzięki czemu jest on maszyną do biegania, skakania i atakowania.",
                "Choć tygrys jest ekspertem w polowaniu, tylko jedno na 20 polowań kończy się zabiciem zwierzęcia. Na obszarach, gdzie zwierzyny jest niewiele, polowania kończą się sukcesem jeszcze rzadziej.",
                
            ],
            en: [
                "A tiger's roar is so loud that it can be heard from a distance of over 3 km.",
                "With one blow of its paw it can kill an animal the size of a large dog or even a human.",
                "The color of tigers depends on the season and the subspecies. It ranges from yellow to reddish-orange with distinct black stripes.",
                "A tiger's back legs are longer than its front legs, which makes it a running, jumping, and pouncing machine.",
                "While the tiger is an expert hunter, only one in every 20 hunts ends in a kill. In areas where prey is scarce, even fewer hunts are successful.",

            ]
        }
    }
];