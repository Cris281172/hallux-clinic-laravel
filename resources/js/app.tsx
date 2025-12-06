import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import 'react-datepicker/dist/react-datepicker.css';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

import './echo';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
    setup({ el, App, props }) {
        const loader = document.getElementById('initial-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }

        console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
        console.log(
            '%cDo not paste any code here unless you know what you are doing. You might break the site or expose sensitive data.',
            'color: black; font-size: 16px;',
        );

        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#F7AACBFF',
    },
});

// This will set light / dark mode on load...
initializeTheme();
