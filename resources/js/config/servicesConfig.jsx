import basicPodiatryTreatmentGallery1 from '../assets/images/service/basic-podiatry-treatment/image-1.webp';
import basicPodiatryTreatmentGallery2 from '../assets/images/service/basic-podiatry-treatment/image-2.webp';
import basicPodiatryTreatmentGallery3 from '../assets/images/service/basic-podiatry-treatment/image-3.webp';
import removePrintsGallery1 from '../assets/images/service/remove-prints/image-1.webp';
import removePrintsGallery2 from '../assets/images/service/remove-prints/image-2.webp';
import removePrintsGallery3 from '../assets/images/service/remove-prints/image-3.webp';
import removePrintsGallery4 from '../assets/images/service/remove-prints/image-4.webp';
export const servicesConfig = [
    {
        key: 'diagnostyka-podologiczna',
        title: 'Diagnostyka podologiczna',
        shortDesc: 'test',
        services: [
            {
                key: 'konsutlacja-podologiczna',
                title: 'Konsutlacja podologiczna',
                shortDesc: 'Profesjonalne konsultacje podologiczne – diagnoza i indywidualne podejście do zdrowia Twoich stóp.',
                desc: (
                    <>
                        <p>
                            <strong>W</strong>izyta u podologa zawsze zaczyna się od szczegółowego wywiadu z klientem, by zrozumieć źródło jego
                            dolegliwości oraz przeszłość zdrowotną. Następnie, analizuje się przyczynę problemów i proponuje odpowiedni program
                            leczenia podologicznego. Każdy klient po konsultacji dostaje zalecenia dotyczące opieki nad stopami w domu.
                        </p>
                        <strong>Warto wiedzieć!</strong>
                        <p>
                            <strong>D</strong>ecydując się na rozpoczęcie zalecanej terapii podczas pierwszej wizyty, nie ponosisz kosztów
                            konsultacji! W skład konsultacji podologicznej wchodzą:
                        </p>
                        <ul>
                            <li>🔶 Analiza kondycji skóry stóp oraz stanu paznokci</li>
                            <li>🔶 Zdiagnozowanie zmian na stopach</li>
                            <li>🔶 Badanie na podoskopie</li>
                            <li>🔶 Ocena postawy i statyki ciała</li>
                            <li>🔶 Omówienie zaproponowanego planu leczenia</li>
                            <li>🔶 Rekomendacja spersonalizowanej domowej pielęgnacji</li>
                        </ul>
                    </>
                ),
                images: [],
            },
            {
                key: '/konsutlacja-podologiczna',
                title: 'Konsutlacja Online',
                shortDesc: 'Konsultacja podologiczna online – wygodna i bezpieczna pomoc specjalisty bez wychodzenia z domu.',
                desc: 'bla bla bla',
                images: [],
            },
        ],
    },
    {
        key: 'profilaktyka-podologiczna',
        title: 'Profilaktyka podologiczna',
        shortDesc: 'test',
        services: [
            {
                key: 'podstawowy-zabieg-podologiczny',
                title: 'Podstawowy zabieg podologiczny',
                shortDesc:
                    'Podstawowy zabieg podologiczny – kompleksowa pielęgnacja stóp obejmująca usunięcie zrogowaceń, opracowanie paznokci i nawilżenie skóry.',
                desc: 'bla bla bla',
                images: [basicPodiatryTreatmentGallery1, basicPodiatryTreatmentGallery2, basicPodiatryTreatmentGallery3],
            },
            {
                key: '/konsutlacja-podologiczna',
                title: 'Rozszerzony zabieg podologiczny',
                shortDesc:
                    'Rozszerzony zabieg podologiczny – zaawansowana pielęgnacja stóp z indywidualnym podejściem, obejmująca m.in. usunięcie odcisków, modzeli i opracowanie zmian skórnych.',
                desc: 'bla bla bla',
                images: [],
            },
        ],
    },
    {
        key: 'terapie-problemow-skornych',
        title: 'Terapie problemów skórnych',
        shortDesc: 'test',
        services: [
            {
                key: 'pekajace-piety',
                title: 'Pękające pięty',
                shortDesc: 'Terapia na pękające pięty – skuteczne opracowanie i regeneracja suchej, popękanej skóry dla gładkich i zdrowych stóp.',
                price: 'od 180,00',
                desc: (
                    <>
                        <p>
                            Jeśli zmagasz się z problemem suchych i popękanych pięt, które stają się bolesne, to oferuję profesjonalną pomoc. Pękające
                            pięty to powszechny problem, który może wynikać z różnych przyczyn, takich jak niewłaściwa pielęgnacja stóp, złe obuwie,
                            niedobory witaminowe czy zaburzenia krzepnięcia krwi. Zajmuję się nie tylko usuwaniem widocznych zmian skórnych, ale
                            również diagnozowaniem i leczeniem przyczyn ich powstawania.
                        </p>
                        <p>Pękające pięty często są wynikiem przesuszenia skóry i nadmiernego rogowacenia. Do ich pojawienia mogą przyczynić się:</p>
                        <ul>
                            <li>🔶 Niewłaściwa pielęgnacja stóp,</li>
                            <li>🔶 Złe obuwie,</li>
                            <li>🔶 Niedobory witaminy A,</li>
                            <li>🔶 Zaburzenia krzepnięcia krwi.</li>
                        </ul>
                        <h3>Jak skutecznie wyleczyć pękające pięty?</h3>
                        <p>
                            Nieleczone pęknięcia mogą prowadzić do głębokich, bolących ran, dlatego ważne jest, by nie ignorować tego problemu.
                            Leczenie obejmuje dezynfekcję skóry, ofrezowanie pięt, usunięcie pęknięć, wyrównanie naskórka oraz założenie opatrunków.
                            Zalecam regularne wizyty co 2-4 tygodnie, aby skutecznie zaradzić problemowi.
                        </p>
                        <h3>Jak zapobiegać pękającym piętom?</h3>
                        <p>Aby zapobiec pękaniu pięt, zalecam:</p>
                        <ul>
                            <li>🔶 Regularne stosowanie kąpieli leczniczych, zmiękczających i regenerujących naskórek,</li>
                            <li>🔶 Stosowanie intensywnie nawilżających kremów z kompleksami witaminowymi,</li>
                            <li>🔶 Systematyczne kontrole stanu stóp u podologa.</li>
                        </ul>
                        <p>
                            Pamiętaj, że estetyka to tylko jedna strona medalu. Nieleczona pękająca skóra na piętach może stać się bramą dla bakterii,
                            prowadząc do zakażeń i stanów zapalnych. Dlatego nie opieraj się wyłącznie na domowych sposobach leczenia, lecz skorzystaj
                            z pomocy specjalistów.
                        </p>
                        <p>
                            Oferuję kompleksowe leczenie pękających pięt, pomagając przywrócić Twoim stopom zdrowie i piękny wygląd. Moje metody są
                            bezpieczne i skuteczne, a dzięki indywidualnemu podejściu do każdego klienta, możesz liczyć na najlepsze rozwiązania
                            dostosowane do Twoich potrzeb. Jeśli Twoje stopy wymagają profesjonalnej opieki, nie zwlekaj – umów się na konsultację i
                            pozwól mi zadbać o Twoje zdrowie.
                        </p>
                    </>
                ),
                images: [removePrintsGallery1, removePrintsGallery2, removePrintsGallery3, removePrintsGallery4],
            },
            {
                key: '/konsutlacja-podologiczna',
                title: 'Usuwanie brodawek wirusowych',
                shortDesc: 'Usuwanie brodawek wirusowych – bezpieczna i skuteczna terapia podologiczna w walce z brodawkami (kurzajkami) na stopach.',
                desc: 'bla bla bla',
                images: [],
            },
            {
                key: '/konsutlacja-podologiczna',
                title: 'Usuwanie Modzeli',
                shortDesc: 'Usuwanie modzeli – precyzyjne i bezbolesne opracowanie zgrubiałej skóry dla komfortu i ulgi w chodzeniu.',
                desc: 'bla bla bla',
                images: [],
            },
            {
                key: '/konsutlacja-podologiczna',
                title: 'Usuwanie odcisków',
                shortDesc: 'Usuwanie odcisków – szybka i skuteczna ulga w bólu poprzez bezpieczne usunięcie zrogowaceń punktowych.',
                desc: 'bla bla bla',
                images: [],
            },
        ],
    },
    {
        key: 'terapie-problemow-aparatu-paznockiowego',
        title: 'Terapie problemów aparatu paznokciowego',
        shortDesc:
            'Odkryj skuteczne terapie problemów aparatu paznokciowego w Łodzi z dojazdem. Mobilny podolog oferuje leczenie grzybicy, wrastających paznokci i innych dolegliwości. Dbaj o zdrowie swoich paznokci, umawiając się na wizytę już dziś!',
        services: [
            {
                key: 'grzybica-stop-i-paznokci',
                title: 'Grzybica Stóp i Paznokci',
                shortDesc: '',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>Z</strong>auważyłaś/eś, że skóra na Twoich stopach stała się biała lub zaczęła się nadmiernie łuszczyć? A może
                            Twoje paznokcie zmieniły barwę i są teraz bardziej kruche? Te objawy mogą wskazywać na grzybicę stóp lub paznokci. Chociaż
                            ten problem może być dla wielu osób źródłem wstydu, nie zawsze jest wynikiem nieodpowiedniej higieny. Zajmuje się
                            leczeniem grzybicy, pomagając jednocześnie zapobiegać jej nawrotom.
                        </p>
                        <p>
                            <strong>G</strong>rzybica to jedno z bardziej dokuczliwych schorzeń, które może dotknąć stopy i paznokcie, wywołane przez
                            grzyby zdolne do rozkładu keratyny. Najczęściej czynnikiem sprawczym choroby stóp są tzw. dermatofity. Kontakt z tymi
                            mikroorganizmami nie musi automatycznie prowadzić do infekcji, jednak uszkodzenie skóry może zwiększyć ryzyko
                            zachorowania. Czynniki takie jak wilgotność i ciepło mogą sprzyjać rozwojowi grzybicy. Przy zaburzeniach układu
                            odpornościowego, cukrzycy, po przeszczepach, chorobach nowotworowych, stosowaniu sterydów czy leków immunosupresyjnych
                            pojawienie się grzybicy jest dużo większe.
                        </p>
                        <p>
                            <strong>K</strong>luczowym elementem w leczeniu jest usunięcie zainfekowanej części paznokcia, co umożliwia lekom dotarcie
                            do łożyska i skuteczniejsze leczenie.
                        </p>
                        <h3>Oto kilka wskazówek, jak unikać zakażenia grzybicą paznokci:</h3>
                        <ul>
                            <li>🔶 Unikaj chodzenia boso w miejscach publicznych takich jak baseny, sauny, czy salony SPA.</li>
                            <li>🔶 Zawsze noś obuwie ochronne, zwłaszcza pod prysznicem i w łazience podczas podróży.</li>
                            <li>🔶 Sprawdzaj, czy salony kosmetyczne, których używasz, przestrzegają zasad sterylizacji narzędzi.</li>
                        </ul>
                        <p>
                            <strong>J</strong>eśli zauważysz u siebie objawy takie jak przebarwienia, kruchość paznokci, deformacje, odwarstwienie od
                            łożyska, czy nieprzyjemny zapach, może to być oznaka grzybicy. Ta dolegliwość może dotyczyć nie tylko paznokci, ale
                            również skóry stóp i przestrzeni międzypalcowych, manifestując się świądem i łuszczeniem.
                        </p>
                        <p>
                            <strong>N</strong>ajlepszym sposobem na radzenie sobie z grzybicą paznokci i stóp jest konsultacja z podologiem. W moim
                            gabinecie przeprowadzę dokładną diagnostykę i zaoferuję skuteczne leczenie, które przywróci zdrowie i estetykę Twoim
                            stopom.
                        </p>
                        <p>
                            <strong>G</strong>rzybica paznokci może być problemem wstydliwym, ale unikanie wizyty u specjalisty tylko pogłębia
                            problem. Nie czekaj, aż infekcja się rozwinie – skuteczne leczenie może szybko poprawić jakość Twojego życia. Ponadto,
                            zajmuję się również leczeniem innych problemów stóp. Zapraszam do umówienia się na konsultację i rozpoczęcia leczenia.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'leczenie-wrastajacych-i-wkrecających-paznokci',
                title: 'Leczenie Wrastających i Wkręcających Paznokci',
                shortDesc: '',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>C</strong>zy doświadczasz bólu spowodowanego przez paznokcie, które nieprawidłowo rosną i wbijają się w skórę
                            palców, zwłaszcza w okolicy palucha, wywołując dyskomfort? Jeśli tak to możliwe, że borykasz się z problemem wrastających
                            lub wkręcających się paznokci.
                        </p>
                        <p>
                            <strong>P</strong>rzyczyny wrastających paznokci obejmują przede wszystkim błędy w pielęgnacji, takie jak nieprawidłowe
                            obcinanie paznokci, które powinno być proste, by unikać niepożądanych efektów, takich jak bolesne wrastanie. Czynniki
                            genetyczne również odgrywają rolę. Zbyt krótkie obcinanie paznokci jest innym błędem prowadzącym do tego problemu.
                            Reagowanie na pierwsze sygnały, takie jak ból czy obrzęk, jest kluczowe dla skutecznego leczenia i zapobiegania nawrotom.
                        </p>
                        <p>
                            <strong>O</strong>feruję profesjonalne usługi leczenia wrastających paznokci, które mogą obejmować oczyszczanie wałów
                            okołopaznokciowych, odpowiednie przycięcie, zastosowanie tamponady lub klamry korygującej kierunek wzrostu paznokcia. W
                            przypadkach, gdy paznokieć wkręca się, co prowadzi do bólu i dyskomfortu, moje metody leczenia są dostosowane do
                            indywidualnych potrzeb pacjenta, biorąc pod uwagę przyczyny i stopień zaawansowania problemu. Założenie klamry jest metodą
                            korekcyjną, pozwalającą na łagodzenie stanów zapalnych i bólu, przy czym sama aplikacja jest bezbolesna. Regularne
                            monitorowanie stanu stóp i odpowiednia pielęgnacja mogą zapobiegać powstawaniu deformacji paznokci i innych problemów,
                            takich jak grzybica.
                        </p>
                        <p>
                            <strong>A</strong>by zapobiegać wrastaniu i wkręcaniu paznokci, zalecane jest noszenie odpowiedniego obuwia, prawidłowe
                            obcinanie paznokci i dbałość o higienę stóp. Regularne wizyty u podologa mogą pomóc w wykrywaniu i leczeniu problemów na
                            wczesnym etapie, co jest kluczowe dla zapobiegania poważniejszym dolegliwościom.
                        </p>
                        <p>
                            <strong>Z</strong>achęcam do kontaktu ze mną, aby umówić się na wizytę i rozpocząć skuteczne leczenie. Dbając o zdrowie
                            stóp, możesz uniknąć wielu nieprzyjemnych dolegliwości i cieszyć się komfortem na co dzień.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'onycholiza',
                title: 'Onycholiza',
                shortDesc: '',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>J</strong>eśli zauważyłaś/eś, że Twoje paznokcie zmieniły kształt, zaczęły się rozwarstwiać lub odchodzić od
                            łożyska to prawdopodobnie mierzymy się z onycholizą. Stan ten może mieć różnorodne przyczyny, co czyni diagnozę i leczenie
                            sprawą złożoną, wymagającą profesjonalnego podejścia. Zajmuję się profesjonalnym leczeniem onycholizy, a w odpowiednich
                            przypadkach oferuję również rekonstrukcję paznokcia.
                        </p>
                        <h3>Leczenie onycholizy.</h3>
                        <p>
                            <strong>O</strong>nycholiza może dotyczyć osób w każdym wieku i niezależnie od płci. Objawia się zmianą kształtu i
                            zabarwienia paznokci, będącego wynikiem poluzowania struktury płytki paznokciowej. To poluzowanie prowadzi do
                            odwarstwienia płytki paznokcia od łożyska i nagromadzenia się pod nią powietrza.
                        </p>
                        <h3>Rekonstrukcja paznokcia.</h3>
                        <p>
                            <strong>D</strong>o najczęstszych powodów, dla których przeprowadzana jest rekonstrukcja paznokcia, należą:
                        </p>
                        <ul>
                            <li>🔶 Zanik paznokcia i zmiana kształtu paliczka,</li>
                            <li>🔶 Zaburzenia wzrostu paznokcia,</li>
                            <li>🔶 Odłączanie się paznokcia od łożyska,</li>
                            <li>🔶 Urazy mechaniczne paznokcia.</li>
                        </ul>
                        <p>
                            <strong>O</strong>nycholiza może być również spowodowana przez infekcje, które wymagają leczenia pod kierunkiem podologa
                            oraz zastosowania odpowiednich leków przeciwbakteryjnych i przeciwgrzybiczych.
                        </p>
                        <p>
                            <strong>J</strong>eśli zmagasz się z onycholizą, nie czekaj na pogorszenie stanu zdrowia Twoich paznokci. Skonsultuj się
                            ze mną, aby uzyskać profesjonalną diagnozę i rozpocząć skuteczne leczenie. Stosuję kompleksowe metody leczenia onycholizy
                            oraz oferuję rekonstrukcję paznokci, aby przywrócić im zdrowy wygląd i funkcjonowanie. Zapraszam do kontaktu i umówienia
                            się na wizytę.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'usuniecie-krwiaka',
                title: 'Usunięcie Krwiaka',
                shortDesc: '',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>Z</strong>auważyłaś/eś, że na Twoim ciele pojawił się obrzęk, który zmienia kolor z czerwonego na niebieski, a
                            potem na żółto-zielony? Czy dotknięta okolica jest bolesna przy nacisku? To mogą być objawy krwiaka, czyli nagromadzenia
                            krwi poza naczyniami krwionośnymi, często wynikające z urazu. Krwiaki mogą wystąpić niemal w każdej części ciała i choć
                            często są wynikiem niewielkiego urazu, mogą także sygnalizować poważniejsze problemy.
                        </p>
                        <p>
                            <strong>K</strong>rwiaki mogą być nie tylko źródłem bólu, ale także powodem dyskomfortu i problemów estetycznych. W
                            zależności od lokalizacji i rozmiaru, krwiak może również ograniczać ruchomość. Ważne jest, aby nie ignorować tych
                            objawów, ponieważ nieleczony krwiak może prowadzić do komplikacji, takich jak infekcja czy nawet zakrzepica.
                        </p>
                        <p>
                            <strong>W</strong> leczeniu krwiaków kluczowe jest jak najszybsze działanie (do 72h). W moim gabinecie stosuję metody,
                            które nie tylko przynoszą ulgę w bólu, ale również przyspieszają resorpcję krwiaka. Dzięki zastosowaniu odpowiednich
                            zabiegów możliwe jest skuteczne i szybkie usunięcie krwiaka.
                        </p>
                        <h3>Oto kilka wskazówek, jak minimalizować ryzyko powstawania krwiaków:</h3>
                        <ul>
                            <li>🔶 Zawsze stosuj ochronę podczas uprawiania sportów i aktywności fizycznych, które mogą prowadzić do urazów.</li>
                            <li>🔶 Dbaj o ostrożność w codziennym życiu, aby unikać przypadkowego uderzenia czy upadku.</li>
                            <li>
                                🔶 W przypadku przyjmowania leków rozrzedzających krew, regularnie konsultuj się z lekarzem, aby monitorować stan
                                zdrowia.
                            </li>
                        </ul>
                        <p>
                            <strong>J</strong>eśli zauważysz u siebie objawy, które mogą wskazywać na krwiaka, takie jak wyraźny obrzęk, zmiana koloru
                            skóry i ból, nie zwlekaj z konsultacją. W moim gabinecie przeprowadzam szczegółową diagnostykę i oferuję skuteczne metody
                            leczenia, które pomogą szybko wrócić do zdrowia.
                        </p>
                        <p>
                            <strong>K</strong>rwiaki, choć często lekceważone, mogą być sygnałem poważniejszych problemów. Nie ignoruj ich obecności i
                            skonsultuj się ze specjalistą. Skuteczne leczenie może nie tylko zapewnić szybką ulgę w bólu, ale także zapobiec
                            poważniejszym komplikacjom. Zapraszam do umówienia się na konsultację i rozpoczęcia leczenia.
                        </p>
                    </>
                ),
                images: [],
            },
        ],
    },
    {
        key: 'ortonyksja',
        title: 'Ortonyksja',
        shortDesc:
            'Skuteczna terapia ortoniksyjna dla wrastających paznokci w Łodzi. Zminimalizuj ból i uniknij operacji dzięki naszym mobilnym usługom podologicznym. Umów się już dziś!',
        services: [
            {
                key: 'zalozenie-klamry-korygujacej',
                title: 'Założenie klamry korygującej',
                shortDesc: '',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>Z</strong>ałożenie klamry korygującej to pierwszy i kluczowy etap terapii wrastających paznokci. Proces rozpoczyna
                            się od szczegółowej <strong>diagnozy</strong>, która pozwala dobrać odpowiedni rodzaj klamry ortonyksyjnej dopasowanej do
                            problemu pacjenta.
                        </p>
                        <p>
                            <strong>N</strong>astępnie opracowywana jest płytka paznokcia – usuwa się zrogowacenia, a powierzchnia zostaje
                            przygotowana do aplikacji. Klamra zostaje <strong>precyzyjnie założona</strong> na paznokieć w celu skorygowania jego
                            wzrostu.
                        </p>
                        <p>
                            <strong>P</strong>o zabiegu ustalana jest <strong>kolejna wizyta kontrolna</strong>, podczas której sprawdzana będzie
                            skuteczność działania klamry. Pacjent otrzymuje również <strong>zalecenia domowe</strong> dotyczące codziennej pielęgnacji
                            i postępowania z paznokciem.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'przelozenie-klamry-korygujacej',
                title: 'Przełożenie klamry korygującej',
                shortDesc: '',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>K</strong>orekta wzrostu paznokcia za pomocą klamry to proces, który może wymagać{' '}
                            <strong>okresowego przełożenia</strong> klamry – w zależności od tego, jak szybko rośnie paznokieć i jak zmienia się jego
                            kształt.
                        </p>
                        <p>
                            <strong>P</strong>rzełożenie klamry pozwala dostosować jej działanie do aktualnej potrzeby i kontynuować proces korekcji.
                            Częstotliwość tego zabiegu <strong>ustalana jest indywidualnie</strong> – może różnić się w zależności od przypadku.
                        </p>
                        <p>
                            <strong>Z</strong>abieg jest szybki i bezbolesny, a jego regularność wpływa na skuteczność całej terapii i zapobiega
                            nawrotom problemu.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'podklejenie-klamry-korygujacej',
                title: 'Podklejenie klamry korygującej',
                shortDesc: '',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>W</strong> przypadku, gdy klamra korygująca częściowo się odklei – np. wskutek urazu, zbyt mocnego uderzenia lub
                            nieprawidłowej pielęgnacji – konieczne jest jej <strong>ponowne podklejenie</strong>.
                        </p>
                        <p>
                            <strong>T</strong>en zabieg pozwala na kontynuację terapii bez potrzeby zakładania nowej klamry. Jest to szybka procedura,
                            wykonywana w warunkach gabinetowych.
                        </p>
                        <p>
                            <strong>C</strong>ena usługi zależy od <strong>czasu noszenia klamry</strong> – im dłużej od zabiegu minęło, tym większe
                            może być ryzyko jej przesunięcia lub uszkodzenia.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'zdjecie-klamry-korygujacej-na-zakonczenie-zabiegu',
                title: 'Zdjęcie klamry korygującej na zakończenie zabiegu',
                shortDesc: '',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>P</strong>o zakończeniu terapii i uzyskaniu prawidłowego wzrostu paznokcia, klamra korygująca jest{' '}
                            <strong>delikatnie usuwana</strong> z płytki. To końcowy etap leczenia.
                        </p>
                        <p>
                            <strong>D</strong>odatkowo wykonuje się <strong>obcięcie, oszlifowanie paznokcia</strong> oraz{' '}
                            <strong>oczyszczenie wałów okołopaznokciowych</strong>, by zapobiec nawrotom problemu.
                        </p>
                        <p>
                            <strong>P</strong>acjent otrzymuje zalecenia domowe oraz rekomendację kontroli, która pomoże upewnić się, że efekt
                            leczenia zostanie utrzymany na długo.
                        </p>
                    </>
                ),
                images: [],
            },
        ],
    },
    {
        key: 'zabiegi-uzupelniajace',
        title: 'Zabiegi uzupełniające',
        shortDesc:
            'Zadbaj o stopy z zabiegami uzupełniającymi w Łodzi. Mobilny podolog oferuje indywidualne usługi pielęgnacyjne. Umów się na wizytę już dziś i ciesz się zdrowymi stopami!',
        services: [
            {
                key: 'tamponada-wrastajacego-paznokcia',
                title: 'Tamponada wrastającego paznokcia',
                shortDesc: 'Delikatna metoda łagodzenia bólu przy wrastającym paznokciu.',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>T</strong>amponada to skuteczna i nieinwazyjna metoda łagodzenia objawów wrastającego paznokcia. Polega na{' '}
                            <strong>umieszczeniu delikatnego opatrunku</strong> (tampony) między paznokciem a wałem okołopaznokciowym.
                        </p>
                        <p>
                            <strong>Z</strong>abieg ten redukuje ból i zapobiega dalszemu wrastaniu, pozwalając paznokciowi{' '}
                            <strong>odrastać we właściwym kierunku</strong>. Tamponada może być stosowana jednorazowo lub cyklicznie w ramach terapii.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'opatrunek-z-odciazeniem',
                title: 'Opatrunek z odciążeniem',
                shortDesc: 'Zabezpieczenie zmienionych miejsc na stopie przed uciskiem i bólem.',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>O</strong>patrunek z odciążeniem stosowany jest w miejscach szczególnie narażonych na ucisk – np. przy modzelach,
                            odciskach czy stanach zapalnych. Jego zadaniem jest <strong>zredukowanie nacisku</strong> i zmniejszenie bólu podczas
                            chodzenia.
                        </p>
                        <p>
                            <strong>W</strong>ykonywany z materiałów ochronnych, opatrunek tworzy barierę amortyzującą i wspomaga{' '}
                            <strong>naturalne procesy regeneracji skóry</strong>.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'opatrunek-z-preparatem-specjalistycznym',
                title: 'Opatrunek z preparatem specjalistycznym',
                shortDesc: 'Opatrunek wspomagający leczenie ran, pęknięć i stanów zapalnych.',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>W</strong> przypadku ran, pęknięć, rozpadlin lub infekcji podolog stosuje opatrunki nasączone{' '}
                            <strong>specjalistycznymi preparatami leczniczymi</strong>. Mogą one działać przeciwbakteryjnie, przeciwgrzybiczo,
                            regenerująco lub łagodząco.
                        </p>
                        <p>
                            <strong>D</strong>obrany indywidualnie preparat <strong>wspiera proces leczenia</strong> i zabezpiecza skórę przed
                            dalszymi uszkodzeniami. Tego typu opatrunki są bardzo pomocne w terapii przewlekłych zmian skórnych.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'taping-podologiczny',
                title: 'Taping podologiczny (taping palucha)',
                shortDesc: 'Korygowanie ustawienia palców i odciążenie miejsc przeciążonych.',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>T</strong>aping to technika terapeutyczna wykorzystująca specjalistyczne taśmy, które{' '}
                            <strong>korygują ustawienie palców</strong>, zwłaszcza palucha, oraz odciążają zmienione miejsca na stopie.
                        </p>
                        <p>
                            <strong>Z</strong>abieg ten jest często stosowany przy haluksach, przeciążeniach oraz jako element wspomagający terapię
                            ortopedyczną i podologiczną. <strong>Redukuje ból</strong> i poprawia biomechanikę chodu.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'usuniecie-lakieru-hybrydowego',
                title: 'Usunięcie lakieru hybrydowego – w przypadku pedicure podologicznego',
                shortDesc: 'Bezpieczne usunięcie lakieru hybrydowego przed zabiegiem podologicznym.',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>P</strong>odczas pedicure podologicznego usunięcie lakieru hybrydowego przeprowadzane jest w sposób{' '}
                            <strong>bezpieczny dla płytki paznokcia</strong>, bez jej mechanicznego uszkodzenia.
                        </p>
                        <p>
                            <strong>D</strong>zięki użyciu odpowiednich preparatów i narzędzi, proces jest szybki, skuteczny i przygotowuje paznokieć
                            do dalszego zabiegu podologicznego lub aplikacji terapeutycznej.
                        </p>
                    </>
                ),
                images: [],
            },
            {
                key: 'badanie-stop-na-podoskopie',
                title: 'Badanie stóp na podoskopie',
                shortDesc: 'Nieinwazyjna analiza rozkładu nacisku i ustawienia stóp.',
                price: '',
                desc: (
                    <>
                        <p>
                            <strong>B</strong>adanie na podoskopie to nieinwazyjna diagnostyka umożliwiająca <strong>analizę rozkładu nacisku</strong>{' '}
                            stóp, łuków podłużnych i poprzecznych oraz ustawienia palców i pięt.
                        </p>
                        <p>
                            <strong>N</strong>a podstawie obrazu stóp specjalista może <strong>wczesne wykryć nieprawidłowości</strong> postawy ciała,
                            przeciążenia oraz dobrać odpowiednie wkładki ortopedyczne lub dalsze działania terapeutyczne.
                        </p>
                    </>
                ),
                images: [],
            },
        ],
    },
];

// {
//     key: '',
//         title: '',
//     shortDesc: '',
//     services: [
//     {
//         key: '',
//         title: '',
//         shortDesc: '',
//         price: '',
//         desc: <></>,
//         images: [],
//     },
// ],
// },
