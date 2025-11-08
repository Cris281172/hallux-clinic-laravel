import { Book, Home, Image, ShoppingCart } from 'lucide-react';

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
                title: 'Lista wpisów',
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
    // {
    //     title: 'Faktury',
    //     url: 'dashboard',
    //     icon: Image,
    //     children: [
    //         {
    //             title: 'Dodaj fakture',
    //             url: 'dashboard.invoice.create.view',
    //             permission: 'dodawanie ról',
    //         },
    //     ],
    // },
    {
        title: 'Vouchery',
        url: 'dashboard',
        icon: Image,
        permissions: ['dodawanie voucherów', 'wyświetlanie wszystkich voucherów'],
        children: [
            {
                title: 'Dodaj voucher',
                url: 'dashboard.voucher.create.view',
                permission: 'dodawanie voucherów',
            },
            {
                title: 'Wszystkie vouchery',
                url: 'dashboard.voucher.get.all',
                permission: 'wyświetlanie wszystkich voucherów',
            },
        ],
    },
    {
        title: 'Sklep',
        url: 'dashboard',
        icon: ShoppingCart,
        permissions: ['dodawanie voucherów', 'wyświetlanie wszystkich voucherów'], //TODO zmiana permisji
        children: [
            {
                title: 'Produkty',
                url: 'dashboard',
                permission: 'dodawanie voucherów', //TODO zmiana permisji
                children: [
                    {
                        title: 'Dodawanie',
                        url: 'dashboard.product.create.view',
                        permission: 'dodawanie produktów',
                    },
                    {
                        title: 'Wszystkie',
                        url: 'dashboard.product.get.all',
                        permission: 'dodawanie produktów',
                    },
                ],
            },
            {
                title: 'Kategorie',
                url: 'dashboard',
                permission: 'dodawanie voucherów', //TODO zmiana permisji
                children: [
                    {
                        title: 'Dodawanie',
                        url: 'dashboard.category.create.view',
                        permission: 'dodawanie voucherów', //TODO zmiana permisji
                    },
                    {
                        title: 'Wszystkie',
                        url: 'dashboard.category.get.all',
                        permission: 'dodawanie voucherów', //TODO zmiana permisji
                    },
                ],
            },
            {
                title: 'Warianty',
                url: 'dashboard',
                permission: 'dodawanie voucherów', //TODO zmiana permisji
                children: [
                    {
                        title: 'Dodawanie',
                        url: 'dashboard.variant.create.view',
                        permission: 'dodawanie voucherów', //TODO zmiana permisji
                    },
                    {
                        title: 'Wszystkie',
                        url: 'dashboard.variant.get.all',
                        permission: 'dodawanie voucherów', //TODO zmiana permisji
                    },
                ],
            },
            {
                title: 'Atrybuty',
                url: 'dashboard',
                permission: 'dodawanie voucherów', //TODO zmiana permisji
                children: [
                    {
                        title: 'Dodawanie',
                        url: 'dashboard.attribute.create.view',
                        permission: 'dodawanie voucherów', //TODO zmiana permisji
                    },
                    {
                        title: 'Wszystkie',
                        url: 'dashboard.attribute.get.all',
                        permission: 'dodawanie voucherów', //TODO zmiana permisji
                    },
                ],
            },
            {
                title: 'Użytkownicy',
                url: 'dashboard',
                permission: 'dodawanie voucherów', //TODO zmiana permisji
                children: [
                    {
                        title: 'Wszyscy',
                        url: 'dashboard.user.get.all',
                        permission: 'dodawanie voucherów', //TODO zmiana permisji
                    },
                ],
            },
            {
                title: 'Promocje',
                url: 'dashboard',
                permission: 'dodawanie voucherów', //TODO zmiana permisji
                children: [
                    {
                        title: 'Dodawanie',
                        url: 'dashboard.promotion.create.view',
                        permission: 'dodawanie voucherów', //TODO zmiana permisji
                    },
                ],
            },
        ],
    },
];

export default sidebarItemsConfig;
