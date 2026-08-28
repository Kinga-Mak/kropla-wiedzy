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
    },
    {
        id: "człowiek-ciało",
        tytul: {
            pl: "Ciało człowieka",
            en: "Human body"
        },
        zdjecie: "https://images.unsplash.com/photo-1559757175-0828e13882ed?auto=format&fit=crop&w=600&q=80",
        tagi: {
            pl: ["człowiek", "ciało", "ssaki"],
            en: ["human", "body", "mammals"],
        },
        ciekawostki: {
            pl: [
                "Większość komórek naszego ciała wielokrotnie ginie i rodzi się na nowo. Człowiek jest w stanie zmienić błonę wyściełającą jego żołądek średnio co 3 dni. Szkielet naszego ciała zmienia się co około 10 lat.",
                "Serce człowieka jest na tyle silne, że mogłoby wypompować krew na przynajmniej 9 metrów w górę. Mięsień sercowy jest najsilniejszym mięśniem w naszym organizmie, ponieważ dostarcza krew do każdego zakątka ciała",
                "W momencie, gdy regeneruje się skóra, wydłuża się nasze ciało. Poprzez zwiększoną pracę mózgu spalamy najwięcej kalorii.",
                "Lekarze na całym świecie potwierdzają, że dziś rodzi się coraz więcej osób u których serce znajduje się po prawej stronie klatki piersiowej. Przypadłość ta nazywana jest Dekstrokardią",
                "Żadne inny ssak na świecie nie ma tak wysokiej umieralności okołoporodowej jak człowiek.",
                "Osoby o niebieskiej barwie oczu, są bardziej wrażliwi na ból. Mają za to możliwość spożywania większych ilości alkoholu",
                "Rogówka jest jedynym fragmentem ludzkiego oka, które nie jest ukrwione. Tlen pobiera z atmosfery.",
            ],
            en: [
                "Most of the cells in our body die and are born again multiple times. A person is able to change the lining of their stomach on average every 3 days. The skeleton of our body changes roughly every 10 years.",
                "The human heart is strong enough that it could pump blood at least 9 meters up. The heart muscle is the strongest muscle in our body because it delivers blood to every corner of the body.",
                "When the skin regenerates, our body lengthens. By working our brain more, we burn the most calories.",
                "Doctors all over the world confirm that nowadays more and more people are being born with their heart on the right side of the chest. This condition is called dextrocardia.",
                "No other mammal in the world has such a high perinatal mortality rate as humans.",
                "People with blue eyes are more sensitive to pain. On the other hand, they can drink larger amounts of alcohol.",
                "The cornea is the only part of the human eye that is not supplied with blood. It takes oxygen from the atmosphere.",
            ]
        }
    },
    {
        id: "rośliny",
        tytul: {
            pl: "Rośliny",
            en: "Plants"
        },
        zdjecie: "https://images.unsplash.com/photo-1712342109846-a8fcb1c883ba??auto=format&fit=crop&w=600&q=80",
        tagi: {
            pl: ["rosliny", "flora"],
            en: ["plants", "floral"],
        },
        ciekawostki: {
            pl: [
                "Największe rośliny leśne produkują do 70 kg czystego tlenu rocznie. Filtrują do 100 000 metrów sześciennych powietrza.",
                "Dąb jest gatunkiem drzewa najczęściej uderzanym przez pioruny. Miłorząb natomiast nie bywa trafiany przez pioruny.",
                "Marchewki w oryginale są fioletowe – pomarańczowe zawdzięczany holenderskim Ogrodnikom.",
                "Truskawka to jedyny owoc, którego nasiona znajdują się na zewnątrz, a nie w środku owocu.",
                "Rośliny nie lubią hałasu. Ogranicza ich rozwój i pogarsza kondycję. Zatem nie bez powodu mówi się, że nie wolno się kłócić przy roślinach.",
                "Według zaleceń dietetyków aby utrzymać organizm w zdrowiu należy spożywać 8 truskawek dziennie.",
                "Rośliny rosnące w grupach, jak np. drzewa w lesie, często tworzą sieć korzeniową, która pozwala im dzielić się wodą i składnikami odżywczymi.",
            ],
            en: [
                "The largest forest plants produce up to 70 kg of pure oxygen per year. They filter up to 100,000 cubic meters of air.",
                "The oak is the tree species most often struck by lightning. Ginkgo, on the other hand, doesn’t usually get hit by lightning.",
                "Carrots are originally purple – the orange ones are thanks to Dutch gardeners.",
                "Truskawka to jedyny owoc, którego nasiona znajdują się na zewnątrz, a nie w środku owocu.",
                "Plants don't like noise. It limits their growth and worsens their condition. So it's not without reason that people say you shouldn't argue around plants.",
                "According to nutritionists, to keep your body healthy, you should eat 8 strawberries a day.",
                "Plants that grow in groups, like trees in a forest, often form a root network that lets them share water and nutrients.",
            ]
        }
    },
];