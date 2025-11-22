import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const PrivacyPolicy = () => {
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
                        <ol className="list-inside space-y-2 leading-relaxed text-gray-700">
                            <li>
                                I/ Dla Właściciela niniejszej strony internetowej, ochrona danych osobowych Użytkowników jest sprawą najwyższej wagi.
                                Dokłada on ogrom starań, aby Użytkownicy czuli się bezpiecznie, powierzając swoje dane osobowe w trakcie korzystania
                                ze strony internetowej.
                            </li>
                            <li>
                                II/ Przetwarzane są dane osobowe Użytkowników tylko w zakresie niezbędnym do zapewnienia funkcjonalnej strony
                                internetowej i usług. Dane osobowe Użytkowników są przetwarzane wyłącznie za ich zgodą. Wyjątkiem są przypadki, w
                                których nie można uzyskać uprzedniej zgody z przyczyn faktycznych i w których przetwarzanie danych jest dozwolone
                                przez prawo.
                            </li>
                            <li>
                                III/ Użytkownik to osoba fizyczna, osoba prawna albo jednostka organizacyjna, nieposiadająca osobowości prawnej,
                                której ustawa przyznaje zdolność prawną, korzystająca z usług elektronicznych, dostępnych w ramach strony
                                internetowej.
                            </li>
                            <li>
                                IV/ Niniejsza polityka prywatności wyjaśnia zasady i zakres przetwarzania danych osobowych Użytkownika, przysługujące
                                mu prawa, jak też obowiązki administratora tych danych, a także informuje o używaniu plików cookies.
                            </li>
                            <li>
                                V/ Administrator stosuje najnowocześniejsze środki techniczne i rozwiązania organizacyjne, zapewniające wysoki poziom
                                ochrony przetwarzanych danych osobowych oraz zabezpieczenia przed dostępem osób nieupoważnionych.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">I. Administrator danych osobowych</h2>
                        <ol className="list-inside space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Administratorem danych osobowych jest Pani Monika Juczyńska, zamieszkała przy: ul. Armii Krajowej 44, lokal U3 (zwany
                                dalej: „Właściciel").
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">II. Cel przetwarzania danych osobowych</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Administrator przetwarza dane osobowe Użytkownika w celu:
                                <span className="ml-5 block">
                                    a) realizacji zamówienia, w tym obsługi płatności, dostawy produktów oraz kontaktu dotyczącego statusu zamówienia;
                                </span>
                                <span className="ml-5 block">b) założenia i prowadzenia konta Użytkownika w sklepie internetowym;</span>
                                <span className="ml-5 block">
                                    c) obsługi zgłoszeń i kontaktu, w tym odpowiadania na pytania przesyłane za pomocą formularzy, e-maila lub czatu;
                                </span>
                                <span className="ml-5 block">
                                    d) prowadzenia rozliczeń księgowych i podatkowych wynikających z zawarcia umowy sprzedaży;
                                </span>
                                <span className="ml-5 block">
                                    e) realizacji obowiązków prawnych ciążących na Administratorze (np. wystawianie faktur, obsługa reklamacji i
                                    zwrotów);
                                </span>
                                <span className="ml-5 block">
                                    f) marketingu bezpośredniego własnych produktów i usług (np. newsletter, jeśli Użytkownik wyraził zgodę);
                                </span>
                                <span className="ml-5 block">
                                    g) tworzenia analiz, statystyk i raportów, aby ulepszać działanie sklepu i jakość usług;
                                </span>
                                <span className="ml-5 block">
                                    h) zapewnienia bezpieczeństwa i zarządzania stroną, w tym administrowania serwerem, wykrywania nadużyć oraz
                                    zapobiegania oszustwom;
                                </span>
                            </li>
                            <li>
                                Powyższe oznacza, że przetwarzane dane osobowe Użytkownika są potrzebne w szczególności do:
                                <span className="ml-5 block">a) zarejestrowania się na stronie internetowej;</span>
                                <span className="ml-5 block">b) zawarcia umowy;</span>
                                <span className="ml-5 block">c) dokonania rozliczeń;</span>
                                <span className="ml-5 block">d) dostarczenia zamówionego przez Użytkownika towaru lub wykonanie usług;</span>
                                <span className="ml-5 block">
                                    e) korzystania przez Użytkownika z wszelkich uprawnień konsumenckich (np. odstąpienie od umowy, rękojmia).
                                </span>
                                <span className="ml-5 block">f) obsługi reklamacji i zwrotów towarów;</span>
                                <span className="ml-5 block">
                                    g) wysyłki informacji handlowych i newslettera, jeśli Użytkownik wyraził zgodną zgodę;
                                </span>
                                <span className="ml-5 block">
                                    h) zapewnienia bezpieczeństwa serwisu i ochrony przed nadużyciami (np. wykrywanie oszustw, monitorowanie logów);
                                </span>
                                <span className="ml-5 block">
                                    i) prowadzenia analiz i statystyk dotyczących sprzedaży i zachowań Użytkowników, w celu poprawy jakości usług;
                                </span>
                                <span className="ml-5 block">
                                    j) obsługi kontaktu z Użytkownikiem, w tym odpowiadania na pytania przesyłane przez formularze, e-mail lub
                                    telefon.
                                </span>
                            </li>
                            <li>
                                Użytkownik może również wyrazić zgodę na otrzymywanie informacji o nowościach i promocjach, co spowoduje, że
                                administrator będzie również przetwarzać dane osobowe w celu przesyłania Użytkownikowi informacji handlowych,
                                dotyczących m.in. nowych produktów lub usług, promocji czy wyprzedaży.
                            </li>
                            <li>
                                Dane osobowe są również przetwarzane w ramach wypełnienia prawnych obowiązków ciążących na administratorze danych oraz
                                realizacji zadań w interesie publicznym m.in. do wykonywania zadań związanych z bezpieczeństwem i obronnością lub
                                przechowywaniem dokumentacji podatkowej.
                            </li>
                            <li>
                                Dane osobowe mogą być również przetwarzane w celach marketingu bezpośredniego produktów, zabezpieczenia i dochodzenia
                                roszczeń lub ochrony przed roszczeniami Użytkownika lub osoby trzeciej, jak również marketingu usług i produktów
                                podmiotów trzecich lub marketingu własnego, niebędącego marketingiem bezpośrednim.
                            </li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">III. Rodzaj danych</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Przy każdym wejściu na naszą stronę internetową, pobierane są automatycznie dane i informacje z systemu komputera,
                                wchodzącego na stronę, w szczególności dotyczące:
                                <span className="ml-5 block">a) rodzaju i wersji używanej przeglądarki;</span>
                                <span className="ml-5 block">b) systemu operacyjnego Użytkownika;</span>
                                <span className="ml-5 block">c) dostawcy usług internetowych Użytkownika;</span>
                                <span className="ml-5 block">d) adresu IP Użytkownika;</span>
                                <span className="ml-5 block">e) daty i godziny wejścia przez Użytkownika na stronę internetową;</span>
                                <span className="ml-5 block">
                                    f) stron internetowych, z których system Użytkownika wchodzi na stronę internetową: https://hallux.clinic
                                </span>
                                <span className="ml-5 block">
                                    g) stron internetowych, do których system Użytkownika uzyskuje dostęp za pośrednictwem strony internetowej:
                                    https://hallux.clinic
                                </span>
                                <span className="ml-5 block">
                                    h) plików dziennika, zawierających adresy IP lub inne dane, które umożliwiają przypisanie ich do Użytkownika
                                    (jeśli zostały podane na innej stronie internetowej, przez którą Użytkownik wszedł na stronę internetową:
                                    https://hallux.clinic ). Dane te są zapisywane w plikach logów systemu i nie są przechowywane razem z innymi
                                    danymi osobowymi Użytkownika.
                                </span>
                            </li>
                            <li>
                                Administrator przetwarza następujące dane osobowe Użytkownika, których podanie jest niezbędne do:
                                <span className="ml-5 block">
                                    a) zarejestrowania się na stronie internetowej:
                                    <span className="ml-5 block">- imię i nazwisko;</span>
                                    <span className="ml-5 block">- adres e-mail.</span>
                                </span>
                                <span className="ml-5 block">
                                    b) dokonywania zakupów za pomocą strony internetowej:
                                    <span className="ml-5 block">- imię i nazwisko;</span>
                                    <span className="ml-5 block">- adres dostawy;</span>
                                    <span className="ml-5 block">- numer telefonu;</span>
                                    <span className="ml-5 block">- adres e-mail.</span>
                                </span>
                                <span className="ml-5 block">
                                    c) dokonywania zakupów przez konsumentów za pomocą strony internetowej:
                                    <span className="ml-5 block">- imię i nazwisko;</span>
                                    <span className="ml-5 block">- adres dostawy;</span>
                                    <span className="ml-5 block">- numer telefonu;</span>
                                    <span className="ml-5 block">- adres e-mail.</span>
                                </span>
                            </li>
                            <li>
                                W przypadku odstąpienia od umowy bądź uznania reklamacji, gdy zwrot należności następuje bezpośrednio na rachunek
                                bankowy Użytkownika, w celu dokonania zwrotu należności przetwarzamy również informacje, dotyczące numeru rachunku
                                bankowego.
                            </li>
                            <li>
                                Administrator przetwarza również opcjonalne dane, podawane przez Użytkownika:
                                <span className="ml-5 block">a) dane firmy do faktury.</span>
                            </li>
                        </ol>
                    </article>
                </section>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default PrivacyPolicy;
