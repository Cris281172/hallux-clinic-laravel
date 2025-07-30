import { Book, Home, Image } from 'lucide-react';

const sidebarItemsConfig = [
    {
        title: 'Dashboard',
        url: 'dashboard',
        icon: Home,
    },
    {
        title: 'Blog',
        url: 'dashboard',
        icon: Book,
        permissions: ['dodawanie wpisów na bloga', 'wyświetlanie wszystkich wpisów na blogu', 'wyświetlanie wszystkich komentarzy'],
        children: [
            {
                title: 'Dodaj',
                url: 'dashboard.blog.post.create.view',
                permission: 'dodawanie wpisów na bloga',
            },
            {
                title: 'List wpisów',
                url: 'dashboard.blog.post.get.all',
                permission: 'wyświetlanie wszystkich wpisów na blogu',
            },
            {
                title: 'Komentarze',
                url: 'dashboard.blog.comment.get.all',
                permission: 'wyświetlanie wszystkich komentarzy',
            },
        ],
    },
    {
        title: 'Galeria',
        url: 'dashboard',
        icon: Image,
        permissions: ['dodawanie zdjęc do galerii', 'wyświetlanie wszystkich zdjęć w galerii'],
        children: [
            {
                title: 'Dodaj',
                url: 'dashboard.gallery.upload.view',
                permission: 'dodawanie zdjęc do galerii',
            },
            {
                title: 'Galeria',
                url: 'dashboard.gallery.get.all',
                permission: 'wyświetlanie wszystkich zdjęć w galerii',
            },
        ],
    },
    {
        title: 'Pacjenci',
        url: 'dashboard.patient',
        icon: Image,
        permissions: ['dodawanie pacjentów', 'wyświetlanie wszystkich pacjentów'],
        children: [
            {
                title: 'Dodaj pacjenta',
                url: 'dashboard.patient.create.view',
                permission: 'dodawanie pacjentów',
            },
            {
                title: 'Lista pacjentów',
                url: 'dashboard.patient.get.all',
                permission: 'wyświetlanie wszystkich pacjentów',
            },
        ],
    },
    {
        title: 'Wizyty',
        url: 'dashboard.visit',
        icon: Image,
        permissions: ['dodawanie wizyt', 'wyświetlanie wszystkich wizyt'],
        children: [
            {
                title: 'Dodaj wizytę',
                url: 'dashboard.visit.create.view',
                permission: 'dodawanie wizyt',
            },
            {
                title: 'Lista wizyty',
                url: 'dashboard.visit.get.all',
                permission: 'wyświetlanie wszystkich wizyt',
                params: {
                    date: new Date().toLocaleDateString('pl-PL').replaceAll('/', '-'),
                },
            },
        ],
    },
    {
        title: 'Zarządzanie użytkownikami',
        url: 'dashboard',
        icon: Image,
        permissions: ['dodawnie użytkowników', 'wyświetlanie wszystkich użytkowników', 'wyświetlanie wszystkich ról', 'dodawanie ról'],
        children: [
            {
                title: 'Dodaj użytkownika',
                url: 'dashboard.user.create.view',
                permission: 'dodawnie użytkowników',
            },
            {
                title: 'Lista użytkowników',
                url: 'dashboard.user.get.all',
                permission: 'wyświetlanie wszystkich użytkowników',
            },
            {
                title: 'Lista ról',
                url: 'dashboard.role.get.all',
                permission: 'wyświetlanie wszystkich ról',
            },
            {
                title: 'Dodaj rolę',
                url: 'dashboard.role.create.view',
                permission: 'dodawanie ról',
            },
        ],
    },
    {
        title: 'Faktury',
        url: 'dashboard',
        icon: Image,
        children: [
            {
                title: 'Dodaj fakture',
                url: 'dashboard.invoice.create.view',
                permission: 'dodawanie ról',
            },
        ],
    },
];

export default sidebarItemsConfig;
