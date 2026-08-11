import AboutKrzysztofSenior from './team/aboutKrzysztofSenior.jsx';
import AboutMonika from './team/aboutMonika.jsx';
import AboutMagdalena from './team/aboutMagdalena.jsx';
const AboutUsPerson = ({ person }) => {
    const teamConfig = [
        {
            key: 'monika-juczynska',
            component: <AboutMonika />,
        },
        {
            key: 'magdalena-dziewanowska',
            component: <AboutMagdalena />,
        },
        {
            key: 'krzysztof-juczynski-senior',
            component: <AboutKrzysztofSenior />,
        },
    ];
    return <>{teamConfig.find((el) => el.key === person).component}</>;
};

export default AboutUsPerson;
