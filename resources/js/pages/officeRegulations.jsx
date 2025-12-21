import { Link } from '@inertiajs/react';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const OfficeRegulations = () => {
    return (
        <AppLayout>
            <SEO
                title={'Regulamin gabinetu'}
                description={
                    'Zapoznaj się z regulaminem naszego gabinetu podologicznego. Dowiedz się o zasadach umawiania wizyt, bezpieczeństwie zabiegów, higienie i odpowiedzialności gabinetu. Profesjonalna opieka w Hallux Clinic.'
                }
                url={'/galeria/wszystkie'}
            />
            <SubpageHeader
                title={'Regulamin gabinetu'}
                text={
                    'Zapoznaj się z regulaminem naszego gabinetu podologicznego. Dowiedz się o zasadach umawiania wizyt, bezpieczeństwie zabiegów, higienie i odpowiedzialności gabinetu. Profesjonalna opieka w Hallux Clinic.'
                }
            />
            <SubpageLayoutContainer>
                <section className="space-y-10 select-none">
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">1. Dane identyfikacyjne gabinetu</h2>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>
                                <strong>Nazwa podmiotu:</strong> Hallux Clinic – Podolog mobilno-stacjonarny
                            </li>
                            <li>
                                <strong>Forma prawna:</strong> działalność gospodarcza / gabinet podologiczny
                            </li>
                            <li>
                                <strong>Siedziba gabinetu stacjonarnego:</strong> ul. Armii Krajowej 44, lokal U3
                            </li>
                            <li>
                                <strong>Kontakt:</strong> tel.{' '}
                                <a className={'underline'} href="tel:+48459410096">
                                    +48 459 410 096
                                </a>
                                , e-mail:{' '}
                                <a href={'mailto:hallux.clinic@gmail.com'} className={'underline'}>
                                    hallux.clinic@gmail.com
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">2. Cele i misja działalności</h2>
                        <p className={'text-gray-700'}>
                            Celem Gabinetu Hallux Clinic jest świadczenie wysokiej jakości usług podologicznych w formie mobilnej oraz stacjonarnej.
                            Misją gabinetu jest zapewnienie bezpieczeństwa zdrowotnego pacjentów poprzez profesjonalną diagnozę, leczenie oraz
                            profilaktykę chorób stóp i paznokci.
                        </p>
                        <p className={'text-gray-700'}>
                            <strong>Do zadań gabinetu należą:</strong>
                        </p>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>diagnoza problemów podologicznych,</li>
                            <li>wykonywanie zabiegów leczniczych i pielęgnacyjnych,</li>
                            <li>edukacja pacjentów w zakresie profilaktyki i higieny stóp,</li>
                            <li>współpraca z innymi specjalistami (np. lekarz dermatolog, fizjoterapeuta, ortopeda).</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">3. Organizacja i struktura wewnętrzna</h2>
                        <p className={'text-gray-700'}>
                            Gabinet funkcjonuje jako jednoosobowa działalność podologiczna, z możliwością współpracy z innymi specjalistami. Struktura
                            obejmuje:
                        </p>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>
                                <strong>Właściciel / Podolog</strong>: odpowiedzialny za świadczenie usług, zarządzanie gabinetem oraz kontakt z
                                pacjentem;
                            </li>
                            <li>
                                <strong>Personel pomocniczy</strong> (jeśli dotyczy): wsparcie administracyjne i organizacyjne.
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">4. Zakres świadczonych usług medycznych</h2>
                        <p className={'text-gray-700'}>Gabinet świadczy usługi zdrowotne w zakresie podologii, w tym:</p>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>zabiegi pielęgnacyjne i lecznicze paznokci (np. wrastające paznokcie),</li>
                            <li>usuwanie modzeli, odcisków i nagniotków,</li>
                            <li>doradztwo profilaktyczne i edukacyjne w zakresie pielęgnacji stóp,</li>
                            <li>konsultacje i dobór wkładek ortopedycznych.</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">5. Lokalizacja i forma udzielania świadczeń</h2>
                        <p className={'text-gray-700'}>Świadczenia zdrowotne udzielane są:</p>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>w gabinecie stacjonarnym pod adresem ul. Armii Krajowej 44, lokal U3,</li>
                            <li>w formie mobilnej, u pacjenta, po uprzednim umówieniu wizyty.</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">6. Procedury udzielania świadczeń</h2>
                        <ol className="list-inside list-decimal space-y-2 leading-relaxed text-gray-700">
                            <li>Pacjent rejestruje wizytę telefonicznie lub online.</li>
                            <li>Podolog przeprowadza wywiad medyczny i ocenę stanu zdrowia pacjenta.</li>
                            <li>Na podstawie diagnozy ustalany jest plan zabiegowy.</li>
                            <li>Wykonywany jest zabieg podologiczny zgodnie z zasadami aseptyki i higieny.</li>
                            <li>Po zabiegu pacjent otrzymuje zalecenia dotyczące pielęgnacji domowej i ewentualnych wizyt kontrolnych.</li>
                            <li>Wszystkie działania są dokumentowane w kartotece medycznej pacjenta.</li>
                        </ol>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">7. Podział obowiązków i współpraca wewnętrzna</h2>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>
                                <strong>Podolog:</strong> świadczenie usług, prowadzenie dokumentacji, doradztwo pacjentowi;
                            </li>
                            <li>
                                <strong>Personel pomocniczy:</strong> organizacja wizyt i wsparcie administracyjne;
                            </li>
                            <li>
                                Współpraca z innymi placówkami medycznymi realizowana jest w formie konsultacji lub wymiany informacji w ramach
                                skierowań pacjenta.
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">8. Przyjęcia pacjentów z innych placówek</h2>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>Pacjenci mogą być przyjmowani na podstawie skierowania od lekarza lub innej placówki medycznej.</li>
                            <li>Informacje dotyczące skierowania są dokumentowane i przechowywane zgodnie z obowiązującymi przepisami.</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">9. Procedury świadczeń odpłatnych</h2>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Wysokość opłat określona jest w cenniku dostępnym w gabinecie i na{' '}
                                <Link className={'underline'} href={route('price-list')}>
                                    stronie internetowej.
                                </Link>
                            </li>
                            <li>Płatność może być dokonana gotówką, przelewem lub innymi akceptowanymi metodami.</li>
                            <li>Brak uiszczenia opłaty w ustalonym terminie może skutkować odmową wykonania świadczenia.</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">10. Systemy bezpieczeństwa i monitoring</h2>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>Gabinet może posiadać monitoring w celu zapewnienia bezpieczeństwa pacjentów i personelu.</li>
                            <li>Nagrania wykorzystywane są wyłącznie w celu zabezpieczenia mienia oraz w razie zdarzeń losowych.</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">11. Odpowiedzialność gabinetu i pacjenta</h2>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>Gabinet odpowiada za prawidłowe wykonanie zabiegów zgodnie z obowiązującymi standardami podologicznymi.</li>
                            <li>Pacjent odpowiada za przekazanie pełnych i prawdziwych informacji o stanie zdrowia.</li>
                            <li>Gabinet nie ponosi odpowiedzialności za powikłania wynikające z niewłaściwej pielęgnacji domowej pacjenta.</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="mb-4 text-center text-2xl font-bold text-black">12. Ochrona danych osobowych (RODO)</h2>
                        <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
                            <li>
                                Gabinet przetwarza dane osobowe pacjentów zgodnie z obowiązującymi przepisami prawa, w tym RODO i ustawą o prawach
                                pacjenta.
                            </li>
                            <li>Dane są wykorzystywane wyłącznie w celu świadczenia usług zdrowotnych i prowadzenia dokumentacji medycznej.</li>
                            <li>Pacjent ma prawo dostępu do swoich danych, ich poprawiania oraz żądania usunięcia w granicach prawa.</li>
                        </ul>
                    </article>
                </section>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default OfficeRegulations;
