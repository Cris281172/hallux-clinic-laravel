import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const WebsiteTerms = () => {
    return (
        <AppLayout>
            <SEO
                title={'Ogólne warunki użytkowania strony internetowej'}
                description={
                    'Zobacz zdjęcia mojego nowoczesnego gabinetu podologicznego oraz efekty przed i po przeprowadzonych zabiegach. Przekonaj się o jakości moich usług.'
                }
                url={'/galeria/wszystkie'}
            />
            <SubpageHeader
                title={'Ogólne warunki użytkowania strony internetowej'}
                text={
                    'Zobacz zdjęcia mojego nowoczesnego gabinetu podologicznego oraz efekty przed i po przeprowadzonych zabiegach. Przekonaj się o jakości moich usług.'
                }
            />
            <SubpageLayoutContainer>
                <section className="space-y-10">
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">I. Preambuła</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Niniejszy dokument określa warunki dostępu i korzystania ze strony internetowej, zwany będzie dalej: „Ogólne warunki".
                            </li>
                            <li>
                                Każdy Użytkownik z chwilą podjęcia czynności zmierzających do korzystania ze strony internetowej zobowiązany jest do
                                zapoznania się, przestrzegania oraz akceptacji Ogólnych warunków, bez ograniczeń i zastrzeżeń.
                            </li>
                            <li>
                                W przypadku niewyrażenia zgody na wszystkie Ogólne warunki należy zaprzestać korzystania ze strony internetowej i
                                natychmiast ją opuścić.
                            </li>
                            <li>
                                Wszystkie nazwy handlowe, nazwy firm i ich logo, użyte na stronie internetowej należą do ich właścicieli i są używane
                                wyłącznie w celach identyfikacyjnych. Mogą być one zastrzeżone znakami towarowymi.
                            </li>
                            <li>
                                Zabrania się nieuprawnionego korzystania z zawartości strony internetowej, utworów lub informacji, jak też ich
                                nieuprawnionej reprodukcji, retransmisji lub innego użycia jakiegokolwiek elementu strony internetowej, gdyż takie
                                działanie może naruszać m.in. prawa autorskie lub chronione znaki towarowe.
                            </li>
                            <li>
                                Pytania lub uwagi dotyczące strony internetowej można zgłaszać na następujący adres email: hallux.clinic@gmail.com .
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">II. Definicje</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                <strong>FORMULARZ KONTAKTOWY</strong> – kwestionariusz dostępny na stronie internetowej, który umożliwia
                                natychmiastowe wysłanie wiadomości do Właściciela strony internetowej;
                            </li>
                            <li>
                                <strong>FORMULARZ REJESTRACJI</strong> – kwestionariusz dostępny na stronie internetowej umożliwiający rejestrację i
                                utworzenie Konta na stronie internetowej;
                            </li>
                            <li>
                                <strong>KONTO</strong> – oznaczony indywidualną nazwą lub loginem oraz hasłem zbiór zasobów na stronie internetowej, w
                                którym gromadzone są dane Użytkownika;
                            </li>
                            <li>
                                <strong>PRAWO WŁAŚCIWE</strong> – do celów realizacji Ogólnych warunków zastosowanie ma prawo polskie;
                            </li>
                            <li>
                                <strong>STRONA INTERNETOWA</strong> – narzędzie, o nazwie: https://hallux.clinic , służące do świadczenia usług
                                elektronicznych;
                            </li>
                            <li>
                                <strong>UŻYTKOWNIK</strong> – osoba fizyczna, osoba prawna albo jednostka organizacyjna nieposiadająca osobowości
                                prawnej, której ustawa przyznaje zdolność prawną, korzystająca z usług elektronicznych dostępnych w ramach strony
                                internetowej;
                            </li>
                            <li>
                                <strong>WARUNKI</strong> – zbiór wszystkich postanowień m.in. niniejszych Ogólnych warunków, zasad polityki
                                prywatności, plików cookies, regulaminu korzystania ze sklepu internetowego oraz wszelkich innych warunków,
                                znajdujących się na stronie internetowej, które dotyczą określonych funkcji, właściwości lub promocji, jak również
                                obsługi klienta;
                            </li>
                            <li>
                                <strong>WŁAŚCICIEL</strong> – Podmiot udostępniający niniejszą stronę internetową, mianowicie: Pani Monika Juczyńska,
                                zamieszkała w/przy: ul. Armii Krajowej 44, lokal U3, e-mail: mjuczynska@interia.pl ;
                            </li>
                            <li>
                                <strong>WYSZUKIWARKA</strong> – bezpłatna Usługa Elektroniczna udostępniona Usługobiorcom przez Usługodawcę,
                                umożliwiająca wyszukiwanie określonych ogłoszeń lub treści na podstawie podanych przez Usługobiorcę kryteriów (przy
                                użyciu filtrów).
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">III. Zakres warunków</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>Właściciel zapewnia dostęp do zawartości strony internetowej, zgodnie z poniższymi Ogólnymi warunkami.</li>
                            <li>
                                Zawartość i dane publikowane na stronie internetowej mają charakter informacji dla osób zainteresowanych i mogą być
                                wykorzystywane jedynie do celów informacyjnych.
                            </li>
                            <li>
                                Właściciel ma prawo zamieszczania treści reklamowych, które stanowią integralną część serwisu i prezentowanych w nim
                                materiałów.
                            </li>
                            <li>
                                Użytkownicy mogą korzystać z dostępu i usług oferowanych na stronie internetowej, pod warunkiem uprzedniego wyrażenia
                                zgody na Ogólne warunki.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">IV. Zasady korzystania ze strony internetowej</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Strona internetowa jest obsługiwana przez wszelkiego rodzaju przeglądarki internetowe. Nie wymaga się żadnych
                                szczególnych właściwości urządzenia końcowego Użytkownika.
                            </li>
                            <li>
                                Po zaakceptowaniu Warunków, Użytkownik ma prawo przeglądać, kopiować, drukować oraz rozpowszechniać, bez dokonywania
                                zmian w treści, zawartość niniejszej strony internetowej, pod warunkiem, że:
                                <span className="ml-5 block">
                                    a) treści te będą wykorzystywane wyłącznie informacyjnie, w celach niekomercyjnych;
                                </span>
                                <span className="ml-5 block">
                                    b) każda wykonana kopia będzie zawierała informacje na temat praw autorskich lub dane dotyczące autora treści.
                                </span>
                            </li>
                            <li>
                                Zakazane jest używanie i kopiowanie oprogramowania, procesów i technologii, stanowiących część strony internetowej.
                            </li>
                            <li>
                                Użytkownicy mogą korzystać ze strony internetowej jedynie w poszanowaniu przepisów ustawy Prawo komunikacji
                                elektronicznej, ustawy o świadczeniu usług drogą elektroniczną i odpowiednich przepisów prawa cywilnego.
                            </li>
                            <li>
                                Zabronione jest korzystanie ze strony internetowej:
                                <span className="ml-5 block">a) w sposób prowadzący do naruszenia obowiązujących przepisów prawa;</span>
                                <span className="ml-5 block">
                                    b) w jakikolwiek sposób niezgodny z prawem lub nieuczciwy, albo w sposób zmierzający do osiągnięcia niezgodnego z
                                    prawem lub nieuczciwego celu;
                                </span>
                                <span className="ml-5 block">
                                    c) do celów związanych z wyrządzaniem szkody dzieciom lub prób wyrządzenia im jakiejkolwiek szkody;
                                </span>
                                <span className="ml-5 block">
                                    d) do wysyłania, świadomego otrzymywania, wgrywania lub używania treści niezgodnych z Ogólnymi warunkami;
                                </span>
                                <span className="ml-5 block">
                                    e) do przekazywania lub prowokowania wysyłki jakichkolwiek niezamówionych lub nieuprawnionych reklam lub
                                    materiałów promocyjnych, jak również jakichkolwiek form podobnych, zaliczanych do zbiorczej kategorii SPAM;
                                </span>
                                <span className="ml-5 block">
                                    f) do świadomego przekazywania jakichkolwiek danych, wysyłania lub wgrywania jakichkolwiek materiałów
                                    zawierających wirusy, konie trojańskie, oprogramowanie szpiegujące (spyware), oprogramowanie z reklamami (adware)
                                    lub inny szkodliwy program lub zbliżone kody komputerowe zaprogramowane, by niekorzystnie wpływać lub zagrażać na
                                    funkcjonowanie jakiegokolwiek oprogramowania lub sprzętu komputerowego albo niekorzystnie wpływać lub zagrażać
                                    Użytkownikowi.
                                </span>
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">V. Cookies</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Strona internetowa używa plików cookies (ciasteczka) lub podobną technologię (dalej łącznie nazywane: „cookies") do
                                zbierania informacji o dostępie Użytkownika do strony internetowej (np. za pomocą komputera lub smartfona) oraz jego
                                preferencjach. Są one wykorzystywane m.in. w celach reklamowych i statystycznych oraz w celu dostosowania strony
                                internetowej do indywidualnych potrzeb Użytkownika.
                            </li>
                            <li>
                                Pliki cookies to fragmenty informacji, które zawierają unikalny kod referencyjny, który strona internetowa przesyła na
                                urządzenie Użytkownika, w celu przechowywania, a czasem śledzenia informacji dotyczących używanego urządzenia. Zwykle
                                nie pozwalają one zidentyfikować osoby Użytkownika. Ich głównym zadaniem jest lepsze dopasowanie strony internetowej
                                do Użytkownika.
                            </li>
                            <li>
                                Niektóre z plików cookies, występujące na stronie internetowej, są dostępne tylko przez czas trwania danej sesji
                                internetowej i wygasają po zamknięciu przeglądarki. Inne pliki cookies służą do zapamiętywania Użytkownika, który po
                                powrocie na stronę internetową jest na niej rozpoznawany. Są one wówczas zachowywane przez dłuższy czas.
                            </li>
                            <li>Wszystkie pliki cookies, występujące na stronie internetowej, są ustalane przez Właściciela.</li>
                            <li>
                                Wszystkie pliki cookies, używane przez niniejszą stronę internetową, są zgodne z obowiązującym prawem Unii
                                Europejskiej.
                            </li>
                            <li>
                                Większość Użytkowników i niektórych przeglądarek mobilnych automatycznie akceptuje pliki cookies. Jeżeli ustawienia te
                                pozostaną bez zmian, pliki cookies zostaną zapisane w pamięci urządzenia.
                            </li>
                            <li>
                                Użytkownik może zmienić preferencje dotyczące akceptacji plików cookies lub zmienić przeglądarkę, aby móc otrzymać za
                                każdym razem stosowne powiadomienie, gdy funkcja cookies jest ustawiona. Aby zmienić ustawienia akceptacji cookies,
                                należy dostosować ustawienia w przeglądarce.
                            </li>
                            <li>
                                Warto pamiętać, że blokowanie lub usuwanie plików cookies może uniemożliwić pełne korzystanie ze strony internetowej.
                            </li>

                            <li>
                                Pliki cookies będą wykorzystywane do niezbędnego zarządzania sesją, w tym:
                                <span className="ml-5 block">
                                    a) Tworzenia specjalnej sesji logowania dla Użytkownika strony internetowej, aby strona zapamiętała, że Użytkownik
                                    jest zalogowany, a jego żądania były dostarczane w sposób skuteczny, bezpieczny i spójny;
                                </span>
                                <span className="ml-5 block">
                                    b) Rozpoznawania Użytkownika, który już wcześniej odwiedził stronę internetową, co pozwala na identyfikację liczby
                                    unikalnych użytkowników, którzy skorzystali z serwisu i pozwala upewnić się co do wystarczającej pojemności
                                    serwisu dla liczby nowych użytkowników;
                                </span>
                                <span className="ml-5 block">
                                    c) Rozpoznawania, czy osoba odwiedzająca stronę internetową jest zarejestrowana na stronie internetowej;
                                </span>
                                <span className="ml-5 block">
                                    d) Rejestrowanie informacji z urządzenia Użytkownika, w tym: pliki cookies, adres IP i informacje o używanej
                                    przeglądarce, w celu możliwości diagnozowania problemów, administrowania i śledzenia Użytkowania witryny;
                                </span>
                                <span className="ml-5 block">
                                    e) Dostosowywania elementów układu szaty graficznej lub zawartości strony internetowej;
                                </span>
                                <span className="ml-5 block">
                                    f) Zbierania informacji statystycznych o tym, jak Użytkownik korzysta ze strony, w celu możliwości ulepszania
                                    witryny i stwierdzenia, które zakresy strony internetowej są najbardziej popularne dla Użytkowników.
                                </span>
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">VI. Plugin Facebook</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>Strona internetowa zawiera plugin (wtyczkę) do serwisu społecznościowego Facebook.</li>
                            <li>Plugin Facebooka jest oznaczony logo Facebook.</li>
                            <li>
                                Plugin ten bezpośrednio połączy z profilem Właściciela na serwerze Facebooka. Facebook może wówczas uzyskać
                                informacje, że Użytkownik odwiedził stronę internetową ze swojego adresu IP.
                            </li>
                            <li>
                                Jeżeli Użytkownik odwiedza stronę internetową będąc zalogowanym na swoim profilu na Facebooku, Facebook zarejestruje
                                informację o wizycie. Nawet w sytuacji, gdy Użytkownik nie jest zalogowany na Facebooku, Facebook jest w stanie
                                pozyskiwać informacje o adresie IP.
                            </li>
                            <li>
                                Facebook nie przekazuje Właścicielowi informacji o gromadzonych danych i sposobie ich wykorzystania. Cel i zakres
                                danych gromadzonych przez Facebook nie są znane Właścicielowi. W celu uzyskania dodatkowych informacji, dotyczących
                                prywatności na portalu Facebook, należy kontaktować się bezpośrednio z Facebookiem lub zapoznać się z polityką
                                prywatności portalu pod adresem: https://www.facebook.com/about/privacy/ .
                            </li>
                            <li>
                                Jeżeli Użytkownik nie chce, aby Facebook mógł pozyskiwać informacje dotyczące przeglądania strony internetowej, dobrze
                                jest, aby Użytkownik wylogował się wcześniej ze swojego konta na Facebooku.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">VII. Plugin innych portali społecznościowych</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>Właściciel może również używać innych plugin (wtyczek) społecznościowych (np. Twitter, Google+ albo LinkedIn).</li>
                            <li>
                                Wtyczki do portali społecznościowych można zidentyfikować po ikonkach służących do udostępniania informacji na danej
                                platformie.
                            </li>
                            <li>
                                Wtyczki umożliwiają użytkownikom tych platform linkowanie strony internetowej w ich postach, umieszczonych na tych
                                platformach społecznościowych.
                            </li>
                            <li>
                                Wtyczki bezpośrednio połączą z profilem Właściciela na serwerze danego portalu społecznościowego. Portal ten może
                                wówczas uzyskać informacje, że Użytkownik odwiedził stronę internetową ze swojego adresu IP.
                            </li>
                            <li>
                                Podczas wizyty Użytkownika na profilu, administrator serwisu społecznościowego korzysta z plików cookies i innych
                                podobnych technologii, w celu monitorowania zachowania i akcji podejmowanych przez Użytkownika. Informacje te
                                gromadzone są między innymi na potrzeby stworzenia tzw. statystyki strony internetowej. Statystyki zawierają wyłącznie
                                zanonimizowane dane statystyczne na temat użytkowników odwiedzających profil i nie ma możliwości powiązania ich z
                                konkretną osobą. Właściciel nie ma dostępu do danych osobowych wykorzystywanych przez serwisy społecznościowe na
                                potrzeby przygotowywania m.in. statystyk strony internetowej.
                            </li>
                            <li>
                                Dzięki generowanym przez serwis społecznościowy statystykom strony internetowej, Właściciel posiada informacje o tym,
                                w jaki sposób Użytkownicy korzystają z profili Właściciela oraz które z publikowanych treści są najbardziej popularne.
                                Dzięki tym informacjom, Właściciel może optymalizować swoje profile poprzez lepsze dopasowanie publikowanych treści do
                                zainteresowań i zachowań Użytkowników. Podmiotem odpowiedzialnym za przetwarzanie danych Użytkowników na potrzeby
                                generowania statystyk strony internetowej jest administrator każdego z ww. serwisów społecznościowych. Wobec tego,
                                administratorzy zobowiązani są do poinformowania Użytkowników o wszelkich sprawach, związanych z przetwarzaniem danych
                                osobowych, na potrzeby tworzenia statystyk strony internetowej oraz o możliwości skorzystania z prawa ochrony
                                prywatności, przysługującego zgodnie z obowiązującymi przepisami prawa.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">VIII. Linki zewnętrzne</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Odnośniki znajdujące się na niniejszej stronie, do innych stron internetowych, są podane wyłącznie w celu
                                informacyjnym.
                            </li>
                            <li>
                                Właściciel strony internetowej nie ponosi odpowiedzialności za treści znajdujące się na innych witrynach, ani za
                                jakiekolwiek szkody wynikające z ich użytkowania.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">IX. Formularz kontaktowy</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Użytkownik może wpisać swoje dane kontaktowe, wypełniając specjalny formularz, przewidziany do kontaktu z
                                Właścicielem, zawierając treść wiadomości i akceptując ich wysyłkę do Właściciela.
                            </li>
                            <li>
                                Pozostawienie danych kontaktowych oznacza, że Użytkownik wyraził zgodę na przetwarzanie przez Właściciela podanych w
                                Formularzu Kontaktowym danych osobowych. Właściciel będzie mógł użyć podanych danych kontaktowych, w celu wysłania
                                ofert lub nawiązania kontaktu z Użytkownikiem.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">X. Formularz rejestracji</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                W ramach formularza rejestracji, Użytkownik może wpisać swoje dane osobowe, aby zarejestrować się jako zidentyfikowany
                                Użytkownik na stronie internetowej i utworzyć swoje Konto.
                            </li>
                            <li>
                                Po zarejestrowaniu, gdy Użytkownik odwiedzi ponownie stronę internetową, będzie mógł zalogować się jako
                                zidentyfikowany Użytkownik na swoje Konto.
                            </li>
                            <li>
                                Po zalogowaniu na Konto, strona internetowa będzie dysponowała danymi osobowymi i kontaktowymi Użytkownika, podanymi
                                podczas rejestracji lub w późniejszym okresie, które umożliwią sprawniejszy kontakt, przesył danych lub płatność za
                                usługę lub towary, dostępne na stronie internetowej.
                            </li>
                            <li>
                                Zarejestrowanie Użytkownika i w rezultacie zapisanie Jego danych osobowych oznacza, że Użytkownik wyraził zgodę na
                                przetwarzanie przez Właściciela danych osobowych Użytkownika, podanych w Formularzu Rejestracji.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">XI. Wyszukiwarka</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Użytkownik może wyszukiwać na stronie internetowej szukanych informacji, wpisując w wyszukiwarce, umieszczonej na
                                stronie internetowej, hasło, którego szuka. Opcja wyszukiwarki umożliwia Użytkownikowi szybszy filtr informacji, niż
                                zapoznawanie się z treścią całej strony internetowej, w poszukiwaniu tego, po co Użytkownik pojawił się na stronie
                                internetowej.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">XII. Poszanowanie własności intelektualnej</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Strona internetowa oraz jej treści mogą być chronione prawami autorskimi, prawami dotyczącymi znaków towarowych oraz
                                innymi przepisami, związanymi z ochroną własności intelektualnej.
                            </li>
                            <li>
                                Znaki, loga i inne spersonalizowane emblematy Właściciela, pojawiające się na stronie internetowej (zwane łącznie:
                                „Znakami"), stanowią znaki towarowe Właściciela.
                            </li>
                            <li>
                                Z wyjątkiem osobnych, indywidualnych, pisemnych upoważnień, Użytkownik nie może wykorzystywać przez siebie Znaków,
                                należących do Właściciela: osobno, ani w zestawieniu z innymi elementami słownymi lub graficznymi, szczególnie w
                                informacjach prasowych, reklamach, materiałach promocyjnych, marketingowych, w mediach, w materiałach pisemnych lub
                                ustnych, w formie elektronicznej, w formie wizualnej, ani w żadnej innej formie.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">XIII. Ochorna danych użytkownika</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Właściciel szanuje w pełni prywatność Użytkowników. Szczegółowe informacje na temat sposobu gromadzenia i
                                przetwarzania danych osobowych Użytkownika lub innych informacji, jak również sytuacji, w których Właściciel może je
                                ujawniać, znajdują się w zakładce Polityka Prywatności.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">XIII. Ograniczenie odpowiedzialności</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Strona internetowa zawiera informacje o charakterze ogólnym. Nie ma na celu pośredniczyć w świadczeniu jakichkolwiek
                                usług doradztwa profesjonalnego. Przed podjęciem czynności mających wpływ na sytuację finansową lub działalność
                                gospodarczą Użytkownika należy skontaktować się z profesjonalnym doradcą.
                            </li>
                            <li>
                                Strona internetowa nie zapewnia żadnych gwarancji dotyczących jej treści, w szczególności gwarancji bezpieczeństwa,
                                bezbłędności, braku wirusów czy złośliwych kodów, gwarancji dotyczących poprawnego działania czy jakości.
                            </li>
                            <li>
                                Strona internetowa nie zapewnia żadnej rękojmi, wyraźnej lub dorozumianej, w tym gwarancji przydatności handlowej lub
                                przydatności do określonego celu, nienaruszenia praw autorskich, dostosowania, bezpieczeństwa i rzetelności
                                informacji.
                            </li>
                            <li>
                                Użytkownik korzysta ze strony internetowej na własne ryzyko i przyjmuje na siebie pełną odpowiedzialność za szkody
                                związane lub wynikające z jej wykorzystania, zarówno bezpośrednie jak i pośrednie, uboczne, następcze, moralne, lub
                                inne szkody z tytułu odpowiedzialności umownej, deliktowej, z tytułu zaniedbań, w tym m.in. za utratę danych lub
                                usług.
                            </li>
                            <li>
                                Strona internetowa nie ponosi żadnej odpowiedzialności za linki zamieszczone na stronie internetowej, szczególnie
                                jeśli prowadzą do witryn, zasobów lub narzędzi, utrzymywanych przez osoby trzecie.
                            </li>
                            <li>
                                Właściciel nie ponosi odpowiedzialności, jeśli strona internetowa jest z jakichkolwiek przyczyn tymczasowo lub
                                długookresowo niedostępna.
                            </li>
                            <li>
                                Właściciel nie ponosi odpowiedzialności za informacje przekazywane na stronie internetowej, ani też nie może zapewnić
                                całkowitego bezpieczeństwa transakcji lub komunikacji, prowadzonych za pomocą strony internetowej.
                            </li>
                            <li>
                                Pomimo podejmowania przez Właściciela największych starań, w kwestii zapewnienia dokładności i aktualności strony
                                internetowej, mogą pojawić się niezamierzone przez Właściciela błędy, które Użytkownik, po ich wykryciu, proszony jest
                                zgłaszać Właścicielowi.
                            </li>
                            <li>
                                Wszystkie wskazane powyżej wyłączenia i ograniczenia odpowiedzialności obowiązują w najszerszym dopuszczalnym prawnie
                                zakresie, obejmując każdy typ istniejącej odpowiedzialności m.in. odpowiedzialności kontraktowej, deliktowej i każdej
                                innej przewidzianej w polskim lub zagranicznym porządku prawnym.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">
                            XV. Odpowiedzialność użytkownika i treści przesyłane na stronę
                        </h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Użytkownik ponosi pełną odpowiedzialność za wszelkie treści, dane, opinie, zdjęcia lub materiały przesyłane lub
                                udostępniane na stronie internetowej.
                            </li>
                            <li>
                                Użytkownik zobowiązuje się nie przesyłać treści naruszających przepisy prawa, prawa osób trzecich, w tym prawa
                                autorskie, prawa do wizerunku, dobra osobiste, jak również treści niezgodnych z niniejszym regulaminem.
                            </li>
                            <li>
                                Właściciel zastrzega sobie prawo do usuwania treści przesłanych przez Użytkowników, które są niezgodne z regulaminem,
                                zawierają wirusy, spam, treści obraźliwe, wulgarne lub mogące naruszać prawa osób trzecich.
                            </li>
                            <li>
                                Użytkownik wyraża zgodę, że treści przesyłane na stronę mogą być wykorzystywane przez Właściciela w celu świadczenia
                                usług, w tym wyświetlania w serwisie, bez wynagrodzenia i ograniczeń czasowych, w zakresie niezbędnym do
                                funkcjonowania strony.
                            </li>
                            <li>
                                Użytkownik korzysta ze strony internetowej na własne ryzyko w zakresie przesyłanych treści i zobowiązuje się do
                                naprawienia wszelkich szkód wynikających z naruszenia niniejszego punktu, w tym roszczeń osób trzecich.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">XVI. Stosunek do zawartych umów</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Jeśli nie postanowiono inaczej, Ogólne warunki stanowią kompletną i wyczerpującą umowę pomiędzy Użytkownikiem i
                                Właścicielem, dotyczącą korzystania ze strony internetowej w zakresie treści w nich zawartych oraz zastępują wszelkie
                                inne porozumienia, uzgodnienia i umowy, dotyczące przedmiotu (treści) niniejszych Ogólnych warunków.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">XVII. Zmiana warunków strony internetowej</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Właściciel strony internetowej zastrzega sobie prawo do dokonywania modyfikacji niniejszych Ogólnych warunków, w
                                dowolnym momencie ich obowiązywania, zamieszczając ich zaktualizowaną wersję na stronie internetowej, które zaczynają
                                obowiązywać Użytkowników od momentu ich publikacji, chyba że inaczej wskazano w zmodyfikowanych Ogólnych warunkach.
                            </li>
                            <li>
                                Użytkownik ma obowiązek zapoznania się z modyfikacjami Ogólnych warunków, o czym Właściciel poinformuje go, wysyłając
                                do Niego wiadomość lub komunikat o zmianach Ogólnych warunków do zaakceptowania.
                            </li>
                            <li>
                                Dalsze korzystanie ze strony internetowej jest równoznaczne z akceptacją zmodyfikowanych Warunków strony internetowej.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">XVIII. Rozwiązywanie sporów</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Wszelkie powstałe spory Strony postanawiają w pierwszej kolejności rozwiązać w trybie polubownego załatwienia sprawy,
                                przed właściwym sądem polubownym (zapis na sąd polubowny).
                            </li>
                            <li>
                                Jeśli polubowne załatwienie sprawy okaże się niemożliwe, spór wynikający z niniejszych Ogólnych warunków zostanie
                                rozstrzygnięty przez sąd, w którego okręgu znajduje się miejsce zamieszkania lub stałego pobytu Właściciela.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">XIX. Podstawa prawna</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                W sprawach nieuregulowanych w niniejszych Ogólnych warunkach stosuje się odpowiednio następujące ustawy:
                                <span className="ml-5 block">
                                    a) ustawę z dnia 12 lipca 2024 r. Prawo komunikacji elektronicznej (Dz.U. z 2024 r. poz. 1221, ze zm.);
                                </span>
                                <span className="ml-5 block">
                                    b) ustawę z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (t.j. Dz.U. z 2020 r. poz. 344, ze zm.);
                                </span>
                                <span className="ml-5 block">
                                    c) ustawę z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (t.j. Dz.U. z 2022 r. poz. 2509, ze
                                    zm.);
                                </span>
                                <span className="ml-5 block">
                                    d) ustawę z dnia 23 kwietnia 1964 r. Kodeks Cywilny (t.j. Dz.U. z 2024 r. poz. 1061, ze zm.);
                                </span>
                                oraz inne właściwe przepisy prawa polskiego.
                            </li>
                        </ol>
                    </article>
                </section>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default WebsiteTerms;
