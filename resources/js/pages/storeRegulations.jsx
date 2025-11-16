import { Link } from '@inertiajs/react';
import subpageHeader3 from '../assets/images/subpage-header/subpage-header-3.jpg';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const StoreRegulations = () => {
    return (
        <AppLayout>
            <SEO
                title={'Regulamin sklepu'}
                description={
                    'Zobacz zdjęcia mojego nowoczesnego gabinetu podologicznego oraz efekty przed i po przeprowadzonych zabiegach. Przekonaj się o jakości moich usług.'
                }
                url={'/galeria/wszystkie'}
            />
            <SubpageHeader
                title={'Regulamin sklepu'}
                background={subpageHeader3}
                text={
                    'Zobacz zdjęcia mojego nowoczesnego gabinetu podologicznego oraz efekty przed i po przeprowadzonych zabiegach. Przekonaj się o jakości moich usług.'
                }
            />
            <SubpageLayoutContainer>
                <section className="space-y-10">
                    {/* Sekcja 1 */}
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">1. Postanowienia ogólne</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Sklep internetowy <strong>Hallux Clinic</strong>, działający pod adresem:
                                <a
                                    href="https://hallux.clinic"
                                    className="ml-1 text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    hallux.clinic
                                </a>
                                , prowadzony jest przez Monikę Juczyńską z siedzibą przy ul. Armii Krajowej 44, lokal U3.
                            </li>
                            <li>
                                Niniejszy Regulamin określa zasady dokonywania zakupów w sklepie internetowym Hallux Clinic, tryb zawierania umów
                                sprzedaży na odległość, postępowania reklamacyjnego oraz odstąpienia od umowy przez Konsumenta.
                            </li>
                            <li>
                                W zakresie usług świadczonych drogą elektroniczną Regulamin stanowi regulamin, o którym mowa w art. 9 ustawy o
                                świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 r. (Dz.U. z 2024 r. poz. 1513, ze zm.).
                            </li>
                            <li>
                                Regulamin skierowany jest do wszystkich Klientów Sklepu. Każdy Klient zobowiązany jest zapoznać się z jego treścią
                                przed dokonaniem zakupu.
                            </li>
                            <li>
                                Każdy Klient zobowiązany jest przestrzegać postanowień Regulaminu. Sprzedaż odbywa się na podstawie wersji Regulaminu
                                obowiązującej w momencie złożenia zamówienia.
                            </li>
                            <li>
                                Każdy Klient ma możliwość zapoznania się z Regulaminem w dowolnym momencie, klikając na stronie internetowej Sklepu
                                https://hallux.clinic w hiperlink „Regulamin Sklepu”. Regulamin można w każdej chwili pobrać i wydrukować.
                            </li>
                            <li>Sprzedaż odbywa się na podstawie wersji Regulaminu obowiązującej w momencie złożenia zamówienia.</li>
                            <li>
                                Wszystkie informacje zawarte na stronie internetowej Sklepu https://hallux.clinic , odnoszące się do produktów
                                (łącznie z cenami), nie stanowią oferty w rozumieniu art. 66 ustawy z dnia 23 kwietnia 1964 r. Kodeks Cywilny (t.j.
                                Dz.U. z 2024 r. poz. 1061, ze zm.), lecz zaproszenie do zawarcia umowy w myśl art. 71 tej ustawy. Klient, wysyłając
                                Formularz Zamówienia, składa ofertę kupna i dostawy wskazanego Towaru za cenę i na warunkach określonych w opisie.
                            </li>
                        </ol>
                    </article>

                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">2. Definicje</h2>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>
                                <strong>Regulamin</strong> – niniejszy zbiór regulacji organizujących zasady korzystania z usług Sklepu przez
                                Klientów.
                            </li>
                            <li>
                                <strong>Konsument</strong> – osoba fizyczna zawierająca Umowę za pośrednictwem Sklepu, niezwiązaną bezpośrednio z jej
                                działalnością gospodarczą lub zawodową.
                            </li>
                            <li>
                                <strong>Przedsiębiorca na prawach Konsumenta</strong> – osoba fizyczna zawierająca Umowę cywilnoprawną za
                                pośrednictwem Sklepu, bezpośrednio związaną z jej działalnością gospodarczą, gdy z treści tej Umowy wynika, że nie
                                posiada ona dla tej osoby charakteru zawodowego, wynikającego w szczególności z przedmiotu wykonywanej przez nią
                                działalności gospodarczej. W razie braku rozróżnienia, Regulamin odnosi się zarówno do Konsumentów, jak i
                                Przedsiębiorców na prawach Konsumenta.
                            </li>
                            <li>
                                <strong>Klient</strong> – osoba fizyczna (w tym Konsument), która ukończyła co najmniej 13 lat (za zgodą
                                przedstawiciela ustawowego), osoba prawna lub jednostka organizacyjna niebędąca osobą prawną, której przepisy
                                przyznają zdolność prawną, korzystająca z usług Sklepu.
                            </li>
                            <li>
                                <strong>Formularz Zamówienia</strong> – usługa dostępna na stronie internetowej Sklepu, za pomocą której Klient może
                                dokonać zakupu, w szczególności poprzez dodanie Towarów do Koszyka oraz określenie warunków Umowy Sprzedaży (m.in.
                                sposobu dostawy i płatności).
                            </li>
                            <li>
                                <strong>Koszyk</strong> – element Sklepu, w którym widoczne są wybrane przez Klienta Towary oraz w którym Klient ma
                                możliwość ustalenia i modyfikacji danych Zamówienia, w tym ilości nabywanych Produktów.
                            </li>
                            <li>
                                <strong>Sklep</strong> – internetowa platforma handlowa, należąca do Sprzedawcy, dostępna pod domeną
                                https://hallux.clinic , za pośrednictwem której Klient może zakupić Towary.
                            </li>
                            <li>
                                <strong>Sprzedawca</strong> – Monika Juczyńska, z siedzibą przy ul. Armii Krajowej 44, lokal U3, prowadząca
                                działalność zarobkową lub zawodową, oferująca sprzedaż za pomocą strony internetowej.
                            </li>
                            <li>
                                <strong>Towar</strong> – rzecz ruchoma, będąca przedmiotem obrotu pomiędzy Sklepem a Klientem, której warunki
                                sprzedaży określa Formularz Zamówienia.
                            </li>
                            <li>
                                <strong>Towar z elementami cyfrowymi</strong> – towar zawierający treść cyfrową lub usługę cyfrową lub z nimi
                                połączony w taki sposób, że brak treści lub usługi cyfrowej uniemożliwia jego prawidłowe funkcjonowanie.
                            </li>
                            <li>
                                <strong>Produkt</strong> – każdy towar lub usługa (w tym nieruchomości, usługi cyfrowe, treści cyfrowe, prawa lub
                                obowiązki).
                            </li>
                            <li>
                                <strong>Środowisko cyfrowe</strong> – sprzęt komputerowy, oprogramowanie i połączenia sieciowe, wykorzystywane przez
                                Konsumenta w celu uzyskania dostępu do treści lub usług cyfrowych.
                            </li>
                            <li>
                                <strong>Integracja</strong> – połączenie treści cyfrowej lub usługi cyfrowej z elementami środowiska cyfrowego
                                Konsumenta w celu zapewnienia zgodności z Umową.
                            </li>
                            <li>
                                <strong>Kompatybilność</strong> – zdolność treści cyfrowej, usługi cyfrowej lub towaru do współdziałania z typowym
                                sprzętem lub oprogramowaniem bez konieczności przekształcania.
                            </li>
                            <li>
                                <strong>Funkcjonalność</strong> – zdolność treści cyfrowej, usługi cyfrowej lub towaru do pełnienia funkcji zgodnie z
                                przeznaczeniem.
                            </li>
                            <li>
                                <strong>Interoperacyjność</strong> – zdolność treści cyfrowej, usługi cyfrowej lub towaru do współdziałania z innym
                                sprzętem lub oprogramowaniem niż zazwyczaj używane do ich obsługi.
                            </li>
                            <li>
                                <strong>Internetowa platforma handlowa</strong> – usługa korzystająca z oprogramowania (np. strony internetowej lub
                                aplikacji), która umożliwia Konsumentom zawieranie umów na odległość z przedsiębiorcami lub osobami fizycznymi.
                            </li>
                            <li>
                                <strong>Dostawca internetowej platformy handlowej</strong> – przedsiębiorca, który obsługuje lub udostępnia
                                internetową platformę handlową.
                            </li>
                            <li>
                                <strong>Umowa</strong> – umowa sprzedaży Towarów na odległość, zawarta przez Klienta za pośrednictwem Sklepu,
                                zazwyczaj poprzez Formularz Zamówienia.
                            </li>
                        </ul>
                    </article>

                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">3. Przyjmowanie i realizacja zamówień</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Warunkiem korzystania ze Sklepu jest zapoznanie się z niniejszym Regulaminem i jego akceptacja. Składając zamówienie
                                Klient akceptuje treść Regulaminu.
                            </li>
                            <li>
                                Główne parametry, decydujące o plasowaniu ofert przedstawionych Konsumentowi w wyniku wyszukiwania, przedstawiane
                                również w bezpośrednim powiązaniu z daną ofertą, w widoczny sposób, są następujące: Wyniki wyszukiwania są sortowane
                                przede wszystkim na podstawie dopasowania do podanego zapytania (trafności). Dodatkowymi czynnikami wpływającymi na
                                kolejność ofert mogą być: popularność produktu, dostępność, cena, aktualność oferty oraz kategorie lub filtry wybrane
                                przez Konsumenta.
                            </li>
                            <li>
                                Sklep oznacza oferty sponsorowane oraz płatne reklamy. Informacje te są przedstawiane w bezpośrednim powiązaniu z
                                danym wynikiem wyszukiwania, w widoczny sposób, który wyróżnia się z ogólnego interfejsu.
                            </li>
                            <li>
                                Podana w zamówieniu cena stanowi całkowitą wartość, jaką Klient zobowiązany jest zapłacić, zawierającą należny podatek
                                (cena brutto). Koszt dostawy nie jest wliczony w cenę, gdyż zależy od wybranego przez Klienta sposobu dostawy
                                Produktu.
                            </li>
                            <li>
                                Jeżeli Konsument zobowiązany będzie do płatności wykraczającej poza uzgodnioną cenę, Sklep niezwłocznie poinformuje
                                Konsumenta o tym fakcie, wyjaśniając przyczynę różnicy ceny. Obciążenie Konsumenta dodatkowymi kosztami nastąpi
                                wyłącznie po uzyskaniu wyraźnej zgody Konsumenta.
                            </li>
                            <li>
                                Sprzedawca zastrzega sobie prawo zmiany cen, wprowadzania nowych Produktów do sprzedaży, przeprowadzania i odwoływania
                                akcji promocyjnych, bądź wprowadzania w nich zmian, zgodnie z obowiązującymi przepisami prawa.
                            </li>
                            <li>
                                W razie wprowadzenia promocji, Sklep informuje Klientów o najniższej cenie Produktu z ostatnich 30 dni. Jeśli Produkt
                                jest w sprzedaży krócej niż 30 dni, cena przed promocją to najniższa cena od momentu wprowadzenia Produktu do Sklepu.
                                Informacje te są przedstawiane obok ceny promocyjnej Produktu.
                            </li>
                            <li>
                                Zamówienia od Klientów są przyjmowane za pomocą wysłanego Formularza Zamówień, dokonanego za pośrednictwem strony
                                https://hallux.clinic lub e-mailowo na adres: sklep@hallux.clinic , 7 dni w tygodniu, 24 godziny na dobę.
                            </li>
                            <li>
                                Zamówienie Produktu realizuje się poprzez wybranie Towaru, kliknięcie przycisku „DODAJ DO KOSZYKA”, a następnie
                                wypełnienie Formularza Zamówienia, w tym wyboru formy dostawy i zapłaty, a następnie kliknięcie potwierdzenia zakupu.
                            </li>
                            <li>
                                Przedsiębiorcy na prawach Konsumenta powinni zaznaczyć w chwili składania zamówienia, że zakup nie ma charakteru
                                zawodowego.
                            </li>
                            <li>Po złożeniu zamówienia Klient otrzymuje potwierdzenie na adres e-mail podany w Formularzu Zamówienia.</li>
                            <li>
                                Po otrzymaniu potwierdzenia przyjęcia oferty rozpoczyna się proces realizacji zamówienia przez Sprzedawcę:
                                <span className="ml-5 block">
                                    a) przy zamówieniu płatnym przy odbiorze – następnego dnia roboczego po potwierdzeniu przez Sprzedawcę
                                </span>
                                <span className="ml-5 block">
                                    b) przy zamówieniu płatnym przelewem – po zaksięgowaniu wpłaty na koncie bankowym Sklepu
                                </span>
                            </li>
                            <li>
                                Zamówienia są realizowane w godzinach pracy Sklepu (dni robocze od 10:00 do 18:00). Zamówienia złożone po godzinie
                                18:00, w weekendy lub święta, będą rozpatrywane następnego dnia roboczego.
                            </li>
                            <li>Klient otrzyma wiadomość o przyjęciu zamówienia do realizacji, co jest równoznaczne z zawarciem Umowy sprzedaży.</li>
                            <li>Do każdego zamówienia wystawiany jest paragon VAT. Na życzenie Klienta wystawiona zostanie faktura VAT.</li>
                            <li>
                                Dostępne środki kontaktu z Sklepem:
                                <span className="ml-5 block">a) E-mail: sklep@hallux.clinic</span>
                                <span className="ml-5 block">b) Telefon: 459 410 096</span>
                                <span className="ml-5 block">
                                    c) Adres do zwrotu: Adres właściwy dla dokonania zwrotu zależy od rodzaju zakupionego produktu. Klient każdorazowo
                                    otrzyma aktualny i właściwy adres do odesłania produktu po zgłoszeniu chęci odstąpienia od umowy lub reklamacji
                                    poprzez kontakt ze Sklepem. Sklep zobowiązuje się przekazać tę informację w wiadomości e-mail niezwłocznie po
                                    otrzymaniu zgłoszenia.
                                </span>
                            </li>
                            <li>Sprzedawca weryfikuje autentyczność recenzji w następujący sposób: ________</li>
                            <li>Sprzedawca nie zamieszcza fałszywych recenzji ani nie manipuluje opiniami.</li>
                            <li>Opinie sporządzone na płatne zamówienie są oznaczone jako sponsorowane.</li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">4. Dostawa i koszty transportu</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Realizacja wysyłki zamówienia w Sklepie odbywa się za pośrednictwem:
                                <span className="ml-5 block">a) paczkomatu</span>
                                <span className="ml-5 block">b) kuriera</span>
                            </li>
                            <li>
                                Zamówienia składane w Sklepie są realizowane wyłącznie w dni robocze. Zamówienia składane w soboty, niedziele i święta
                                będą realizowane najbliższego dnia roboczego.
                            </li>
                            <li>
                                Czas oczekiwania na przesyłkę wynosi zwykle 5 dni roboczych. Na czas oczekiwania składa się czas realizacji zamówienia
                                oraz przewidywany czas dostawy (od 24 godzin w przypadku Polski).
                            </li>
                            <li>Sprzedawca nie odpowiada za opóźnienia wynikające z winy przewoźnika.</li>
                            <li>
                                Podczas odbioru przesyłki Klient powinien sprawdzić jej zawartość, stan opakowania oraz stan Produktu. W przypadku
                                uszkodzenia należy sporządzić protokół szkody z kurierem w dwóch jednobrzmiących egzemplarzach.
                            </li>
                            <li>Istnieje możliwość odbioru osobistego w Sklepie stacjonarnym: ul. Armii Krajowej 44, lokal U3.</li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">5. Realizacja płatności</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                W ramach funkcjonowania Sklepu możliwe są następujące sposoby płatności:
                                <span className="ml-5 block">a) przelewem, na rachunek bankowy: 03 1240 5556 1111 0011 2320 7916;</span>
                                <span className="ml-5 block">b) Przelewy24.___</span>
                            </li>
                            <li>
                                Szczegółowe zasady i warunki dokonywania płatności za pośrednictwem banków lub innych dostępnych serwisów określają
                                właściwe regulaminy odpowiednich banków i serwisów.
                            </li>
                            <li>
                                Klient, który wybrał opcję płatności przelewem, jest zobowiązany do uiszczenia opłaty za złożone zamówienie w terminie
                                do pięciu (5) dni roboczych od daty złożenia zamówienia. W przeciwnym wypadku oferta Sprzedawcy nie jest wiążąca i
                                zamówienie zostaje usunięte z systemu. W tytule płatności wystarczy podać tylko numer składanego zamówienia. Istnieje
                                możliwość przedłużenia terminu zapłaty, przy uprzednim poinformowaniu obsługi Sklepu: sklep@hallux.clinic (e-mail),
                                459 410 096 (tel.), ul. Armii Krajowej 44, lokal U3 (adres).
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">6. Reklamacje</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Sprzedawca ponosi odpowiedzialność z tytułu niezgodności Produktu z Umową. Do umów zobowiązujących do przeniesienia
                                własności Towaru na Konsumenta, w tym umów sprzedaży, umów dostawy oraz umów o dzieło będące Towarem, nie stosuje się
                                przepisów ustawy z dnia 23 kwietnia 1964 r. Kodeks Cywilny (t.j. Dz.U. z 2023 r. poz. 1610, ze zm.), dotyczących
                                rękojmi za wady.
                            </li>
                            <li>
                                Sprzedawca ponosi odpowiedzialność za brak zgodności z Umową Produktu, który to brak istnieje w chwili jego
                                dostarczenia i jest ujawniony w ciągu dwóch (2) lat od tej chwili, chyba że termin przydatności Produktu do użycia,
                                określony przez Sprzedawcę, jego poprzedników prawnych lub osoby działające w ich imieniu, jest dłuższy. Domniemywa
                                się, że brak zgodności Produktu z Umową, który ujawnił się przed upływem dwóch (2) lat od chwili dostarczenia
                                Produktu, istniał w chwili jego dostarczenia, o ile nie zostanie udowodnione inaczej lub domniemania tego nie można
                                pogodzić ze specyfiką Produktu lub charakterem braku zgodności Produktu z Umową.
                            </li>
                            <li>
                                Jeżeli Produkt jest niezgodny z Umową, Konsument może żądać jego naprawy lub wymiany. Sprzedawca może dokonać wymiany,
                                gdy Konsument żąda naprawy, lub Sprzedawca może dokonać naprawy, gdy Konsument żąda wymiany, jeżeli doprowadzenie do
                                zgodności Produktu z Umową w sposób wybrany przez Konsumenta jest niemożliwe albo wymagałoby nadmiernych kosztów dla
                                Sprzedawcy. Jeżeli naprawa i wymiana są niemożliwe lub wymagałyby nadmiernych kosztów dla Sprzedawcy, może on odmówić
                                doprowadzenia Produktu do zgodności z Umową.
                            </li>
                            <li>
                                Sprzedawca dokonuje naprawy lub wymiany w rozsądnym czasie od chwili, w której Konsument poinformował go o braku
                                zgodności z Umową, i bez nadmiernych niedogodności dla Konsumenta, uwzględniając specyfikę Produktu oraz cel, w jakim
                                Konsument go nabył. Koszty naprawy lub wymiany, w tym opłaty pocztowe, przewóz, robociznę i materiały, ponosi
                                Sprzedawca. W tym celu Konsument udostępni Sprzedawcy Produkt podlegający naprawie lub wymianie. Sprzedawca odbiera od
                                Konsumenta Produkt na swój koszt. Jeżeli Produkt został zamontowany przed ujawnieniem się braku zgodności Produktu z
                                Umową, Sprzedawca demontuje Produkt oraz montuje go ponownie po dokonaniu naprawy lub wymiany albo zleca wykonanie
                                tych czynności na swój koszt.
                            </li>
                            <li>
                                Jeżeli Produkt jest niezgodny z Umową, Konsument może złożyć oświadczenie o obniżeniu ceny albo odstąpieniu od Umowy,
                                gdy:
                                <span className="ml-5 block">a) Sprzedawca odmówił doprowadzenia Produktu do zgodności z Umową;</span>
                                <span className="ml-5 block">b) Sprzedawca nie doprowadził Produktu do zgodności z Umową;</span>
                                <span className="ml-5 block">
                                    c) brak zgodności Produktu z Umową występuje nadal, mimo że Sprzedawca próbował doprowadzić Produkt do zgodności z
                                    Umową;
                                </span>
                                <span className="ml-5 block">
                                    d) brak zgodności Produktu z Umową jest na tyle istotny, że uzasadnia obniżenie ceny albo odstąpienie od Umowy,
                                    bez uprzedniego żądania jego naprawy albo wymiany;
                                </span>
                                <span className="ml-5 block">
                                    e) z oświadczenia Sprzedawcy lub okoliczności wyraźnie wynika, że nie doprowadzi on Produktu do zgodności z Umową
                                    w rozsądnym czasie lub bez nadmiernych niedogodności dla Konsumenta.
                                </span>
                            </li>
                            <li>
                                Obniżona cena musi pozostawać w takiej proporcji do ceny wynikającej z Umowy, w jakiej wartość Produktu niezgodnego z
                                Umową pozostaje do wartości produktu zgodnego z Umową. Sprzedawca zwraca Konsumentowi kwoty należne wskutek
                                skorzystania z prawa obniżenia ceny niezwłocznie, nie później niż w terminie czternastu (14) dni od dnia otrzymania
                                oświadczenia Konsumenta o obniżeniu ceny.
                            </li>
                            <li>
                                Konsument nie może odstąpić od Umowy, jeżeli brak zgodności Produktu z Umową jest nieistotny. Domniemywa się, że brak
                                zgodności Produktu z Umową jest istotny.
                            </li>
                            <li>
                                W razie odstąpienia od Umowy Konsument niezwłocznie zwraca Produkt Sprzedawcy na jego koszt. Sprzedawca zwraca
                                Konsumentowi cenę niezwłocznie, nie później niż w terminie czternastu (14) dni od dnia otrzymania Produktu lub dowodu
                                jego odesłania, przy użyciu takiego samego sposobu zapłaty, jakim posłużył się Konsument, chyba że Konsument wyraźnie
                                zgodził się na inny sposób zwrotu, który nie wiąże się dla niego z żadnymi kosztami.
                            </li>
                            <li>
                                Reklamacje dotyczące Produktów mogą być zgłaszane:
                                <span className="ml-5 block">a) na piśmie, na adres siedziby Sprzedawcy: ul. Armii Krajowej 44, lokal U3;</span>
                                <span className="ml-5 block">b) pocztą elektroniczną, na adres e-mail: sklep@hallux.clinic .</span>
                            </li>
                            <li>
                                Reklamacja powinna zawierać:
                                <span className="ml-5 block">
                                    a) dane osoby składającej reklamację (imię i nazwisko, adres korespondencyjny, adres e-mail i numer telefonu
                                    kontaktowego);
                                </span>
                                <span className="ml-5 block">b) wskazanie przyczyny reklamacji oraz treści żądania;</span>
                                <span className="ml-5 block">c) numer Zamówienia, widniejący w potwierdzeniu przyjęcia Zamówienia;</span>
                                <span className="ml-5 block">
                                    d) oryginał lub kopia dowodu zakupu (np. paragonu lub faktury) może ułatwić złożenie reklamacji, ale nie jest
                                    niezbędny do jej złożenia.
                                </span>
                            </li>
                            <li>
                                Powyższe przepisy nie wyłączają możliwości udzielenia przez Sprzedawcę gwarancji na zakupione Produkty, co przewiduje
                                osobny regulamin gwarancyjny.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">7. Prawo odstąpienia</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Zgodnie z ustawą o prawach konsumenta Konsument może odstąpić od Umowy dotyczącej Produktów zakupionych w Sklepie bez
                                podania przyczyny, w terminie 14 dni od dnia wydania Towaru. Termin uważa się za zachowany, jeśli oświadczenie
                                zostanie wysłane przed jego upływem.
                            </li>
                            <li>Konsument składa Sprzedawcy oświadczenie o odstąpieniu od Umowy (wzór oświadczenia w załączniku nr 1 Regulaminu).</li>
                            <li>Oświadczenie należy wysłać na adres: ul. Armii Krajowej 44, lokal U3.</li>
                            <li>Konsument zwraca Towar w ciągu 14 dni od odstąpienia. Wystarczy wysłanie przed upływem terminu.</li>
                            <li>Konsument ponosi tylko bezpośrednie koszty zwrotu Towaru.</li>
                            <li>Zwrot Towaru należy dokonać na adres Sprzedawcy.</li>
                            <li>Sprzedawca zwraca wszystkie płatności w ciągu 14 dni od otrzymania oświadczenia lub dowodu odesłania Towaru.</li>
                            <li>
                                Jeżeli Konsument wybrał inny sposób dostarczenia Towaru niż najtańszy oferowany przez Sprzedawcę, Sprzedawca nie
                                zwraca dodatkowych kosztów.
                            </li>
                            <li>Sprzedawca dokonuje zwrotu płatności tym samym sposobem, którego użył Konsument.</li>
                            <li>
                                Konsument odpowiada za zmniejszenie wartości Produktu wynikające z używania go w sposób wykraczający poza konieczny do
                                stwierdzenia jego cech i funkcji.
                            </li>
                            <li>
                                Prawo odstąpienia nie przysługuje w odniesieniu do umów np. towarów wykonanych na indywidualne zamówienie, szybko
                                psujących się, alkoholu, nagrań w zapieczętowanym opakowaniu, dostarczanych treści cyfrowych bez nośnika i innych
                                wyjątków określonych w Regulaminie.
                            </li>
                            <li>Prawo odstąpienia przysługuje zarówno Konsumentom, jak i Przedsiębiorcom na prawach Konsumenta.</li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">8. Przyjmowanie i weryfikacja zamówień</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Zamówienia są przyjmowane przez Sprzedawcę 7 dni w tygodniu, 24 godziny na dobę, za pośrednictwem formularza
                                zamówienia dostępnego na stronie internetowej lub poczty elektronicznej.
                            </li>
                            <li>
                                Po otrzymaniu zamówienia Sprzedawca dokonuje jego weryfikacji pod kątem dostępności towaru oraz poprawności danych
                                podanych przez Klienta.
                            </li>
                            <li>
                                W przypadku stwierdzenia braków lub wątpliwości Sprzedawca może skontaktować się z Klientem w celu wyjaśnienia lub
                                potwierdzenia szczegółów zamówienia.
                            </li>
                            <li>
                                Umowa sprzedaży zostaje zawarta z chwilą potwierdzenia przyjęcia zamówienia przez Sprzedawcę, o czym Klient zostaje
                                poinformowany drogą elektroniczną.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">9. Realizacja zamówienia</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Zamówienie realizuje się poprzez: wybór Towaru → kliknięcie „DODAJ DO KOSZYKA” → wypełnienie Formularza Zamówienia w
                                Koszyku, w tym wyboru formy dostawy i płatności → kliknięcie potwierdzenia zakupu.
                            </li>
                            <li>
                                Przedsiębiorcy na prawach Konsumenta powinni zaznaczyć przy składaniu zamówienia, że zakup nie ma charakteru
                                zawodowego.
                            </li>
                            <li>Po złożeniu zamówienia Klient otrzymuje potwierdzenie e-mail.</li>
                            <li>
                                Realizacja zamówienia rozpoczyna się:
                                <span className="ml-5 block">
                                    a) przy płatności przy odbiorze – maksymalnie następnego dnia roboczego po potwierdzeniu;
                                </span>
                                <span className="ml-5 block">b) przy płatności przelewem – po zaksięgowaniu wpłaty na koncie Sklepu.</span>
                            </li>
                            <li>
                                Zamówienia realizowane są w godzinach pracy Sklepu: pon.-pt. 10:00–18:00. Zamówienia złożone po godzinach pracy lub w
                                weekendy i święta rozpatrywane są następnego dnia roboczego.
                            </li>
                            <li>Klient otrzymuje wiadomość o przyjęciu zamówienia, co stanowi zawarcie Umowy sprzedaży.</li>
                            <li>Do każdego zamówienia wystawiany jest paragon VAT; na życzenie – faktura VAT.</li>
                            <li>Środkami kontaktu Klienta ze Sklepem są: e-mail, telefon oraz adres do zwrotów.</li>
                            <li>Sprzedawca weryfikuje autentyczność recenzji, nie zamieszcza fałszywych opinii i oznacza opinie sponsorowane.</li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">10. Reklamacja</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Sprzedawca ponosi odpowiedzialność z tytułu niezgodności Produktu z Umową. Do umów zobowiązujących do przeniesienia
                                własności Towaru na Konsumenta, w tym w szczególności umów sprzedaży, umów dostawy oraz umów o dzieło będące Towarem,
                                nie stosuje się przepisów ustawy z dnia 23 kwietnia 1964 r. Kodeks Cywilny (t.j. Dz.U. z 2023 r. poz. 1610, ze zm.),
                                dotyczących rękojmi za wady.
                            </li>
                            <li>
                                Sprzedawca ponosi odpowiedzialność za brak zgodności z Umową Produktu, który to brak istnieje w chwili jego
                                dostarczenia i jest ujawniony w ciągu dwóch (2) lat od tej chwili, chyba że termin przydatności Produktu do użycia,
                                określony przez Sprzedawcę, jego poprzedników prawnych lub osoby działające w ich imieniu, jest dłuższy. Domniemywa
                                się, że brak zgodności Produktu z Umową, który ujawnił się przed upływem dwóch (2) lat od chwili dostarczenia
                                Produktu, istniał w chwili jego dostarczenia, o ile nie zostanie udowodnione inaczej lub domniemania tego nie można
                                pogodzić ze specyfiką Produktu lub charakterem braku zgodności Produktu z Umową.
                            </li>
                            <li>
                                Jeżeli Produkt jest niezgodny z Umową, Konsument może żądać jego naprawy lub wymiany. Sprzedawca może dokonać wymiany,
                                gdy Konsument żąda naprawy, lub Sprzedawca może dokonać naprawy, gdy Konsument żąda wymiany, jeżeli doprowadzenie do
                                zgodności Produktu z Umową, w sposób wybrany przez Konsumenta, jest niemożliwe albo wymagałoby nadmiernych kosztów dla
                                Sprzedawcy. Jeżeli naprawa i wymiana są niemożliwe lub wymagałyby nadmiernych kosztów dla Sprzedawcy, może on odmówić
                                doprowadzenia Produktu do zgodności z Umową.
                            </li>
                            <li>
                                Sprzedawca dokonuje naprawy lub wymiany w rozsądnym czasie od chwili, w której Konsument poinformował go o braku
                                zgodności z Umową, i bez nadmiernych niedogodności dla Konsumenta, uwzględniając specyfikę Produktu oraz cel, w jakim
                                Konsument go nabył. Koszty naprawy lub wymiany, w tym w szczególności koszty opłat pocztowych, przewozu, robocizny i
                                materiałów, ponosi Sprzedawca. W tym celu Konsument udostępni Sprzedawcy Produkt, podlegający naprawie lub wymianie.
                                Sprzedawca odbiera od Konsumenta Produkt na swój koszt. Jeżeli Produkt został zamontowany przed ujawnieniem się braku
                                zgodności Produktu z Umową, Sprzedawca demontuje Produkt oraz montuje go ponownie, po dokonaniu naprawy lub wymiany
                                albo zleca wykonanie tych czynności na swój koszt.
                            </li>
                            <li>
                                Jeżeli Produkt jest niezgodny z Umową, Konsument może złożyć oświadczenie o obniżeniu ceny albo odstąpieniu od Umowy,
                                gdy:
                                <span className="ml-5 block">a) Sprzedawca odmówił doprowadzenia Produktu do zgodności z Umową;</span>
                                <span className="ml-5 block">b) Sprzedawca nie doprowadził Produktu do zgodności z Umową;</span>
                                <span className="ml-5 block">
                                    c) brak zgodności Produktu z Umową występuje nadal, mimo że Sprzedawca próbował doprowadzić Produkt do zgodności z
                                    Umową;
                                </span>
                                <span className="ml-5 block">
                                    d) brak zgodności Produktu z Umową jest na tyle istotny, że uzasadnia obniżenie ceny albo odstąpienie od Umowy,
                                    bez uprzedniego żądania jego naprawy albo wymiany;
                                </span>
                                <span className="ml-5 block">
                                    e) z oświadczenia Sprzedawcy lub okoliczności wyraźnie wynika, że nie doprowadzi on Produktu do zgodności z Umową
                                    w rozsądnym czasie lub bez nadmiernych niedogodności dla Konsumenta.
                                </span>
                            </li>
                            <li>
                                Obniżona cena musi pozostawać w takiej proporcji do ceny wynikającej z Umowy, w jakiej wartość Produktu niezgodnego z
                                Umową pozostaje do wartości produktu zgodnego z Umową. Sprzedawca zwraca Konsumentowi kwoty należne wskutek
                                skorzystania z prawa obniżenia ceny niezwłocznie, nie później niż w terminie czternastu (14) dni od dnia otrzymania
                                oświadczenia Konsumenta o obniżeniu ceny.
                            </li>
                            <li>
                                Konsument nie może odstąpić od Umowy, jeżeli brak zgodności Produktu z Umową jest nieistotny. Domniemywa się, że brak
                                zgodności Produktu z Umową jest istotny.
                            </li>
                            <li>
                                W razie odstąpienia od Umowy Konsument niezwłocznie zwraca Produkt Sprzedawcy na jego koszt. Sprzedawca zwraca
                                Konsumentowi cenę niezwłocznie, nie później niż w terminie czternastu (14) dni od dnia otrzymania Produktu lub dowodu
                                jego odesłania, przy użyciu takiego samego sposobu zapłaty, jakim posłużył się Konsument, chyba że Konsument wyraźnie
                                zgodził się na inny sposób zwrotu, który nie wiąże się dla niego z żadnymi kosztami.
                            </li>
                            <li>
                                Reklamacje dotyczące Produktów mogą być zgłaszane:
                                <span className="ml-5 block">a) na piśmie, na adres siedziby Sprzedawcy: ul. Armii Krajowej 44, lokal U3;</span>
                                <span className="ml-5 block">b) pocztą elektroniczną, na adres e-mail: sklep@hallux.clinic .</span>
                            </li>
                            <li>
                                Reklamacja powinna zawierać:
                                <span className="ml-5 block">
                                    a) dane osoby składającej reklamację (imię i nazwisko, adres korespondencyjny, adres e-mail i numer telefonu
                                    kontaktowego);
                                </span>
                                <span className="ml-5 block">b) wskazanie przyczyny reklamacji oraz treści żądania;</span>
                                <span className="ml-5 block">c) numer Zamówienia, widniejący w potwierdzeniu przyjęcia Zamówienia;</span>
                                <span className="ml-5 block">
                                    d) oryginał lub kopia dowodu zakupu (np. paragonu lub faktury) może ułatwić złożenie reklamacji, ale nie jest
                                    niezbędny do jej złożenia.
                                </span>
                            </li>
                            <li>
                                Powyższe przepisy nie wyłączają możliwości udzielenia przez Sprzedawcę gwarancji na zakupione Produkty, co przewiduje
                                osobny regulamin gwarancyjny.
                            </li>
                        </ol>
                    </article>
                </section>
                <Link href={route('pdf.download', { filename: 'zal-1-odstapienie-od-umowy.pdf' })}>test</Link>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default StoreRegulations;
