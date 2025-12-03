import AboutKrzysztofSenior from './team/AboutKrzysztofSenior.jsx';
import AboutMonika from './team/AboutMonika.jsx';

const AboutUsPerson = ({ person }) => {
    const teamConfig = [
        {
            key: 'monika-juczynska',
            component: <AboutMonika />,
        },
        {
            key: 'krzysztof-juczynski-senior',
            component: <AboutKrzysztofSenior />,
        },
    ];
    console.log();
    return <>{teamConfig.find((el) => el.key === person).component}</>;
};

export default AboutUsPerson;
