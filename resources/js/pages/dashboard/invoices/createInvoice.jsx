import { router } from '@inertiajs/react';
import { StyleSheet } from '@react-pdf/renderer';
import { useState } from 'react';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});
const CreateInvoice = () => {
    const [title, setTitle] = useState('');
    const [items, setItems] = useState([{ name: '', quantity: 1, price: 0 }]);

    const addItem = () => setItems([...items, { name: '', quantity: 1, price: 0 }]);

    const updateItem = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(
            route('dashboard.invoice.create'),
            {
                title,
                items,
            },
            {
                onSuccess: (page) => {
                    // Po sukcesie Laravel przekieruje do /invoices/{id}/download
                    // PDF się pobierze automatycznie
                },
            },
        );
    };
    return (
        <DashboardLayout>
            <h1>Utwórz fakturę</h1>
            <form onSubmit={handleSubmit}>
                <label>Tytuł faktury:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />

                <h2>Pozycje:</h2>
                {items.map((item, index) => (
                    <div key={index}>
                        <input placeholder="Usługa / Produkt" value={item.name} onChange={(e) => updateItem(index, 'name', e.target.value)} />
                        <input type="number" value={item.quantity} onChange={(e) => updateItem(index, 'quantity', e.target.value)} />
                        <input type="number" value={item.price} onChange={(e) => updateItem(index, 'price', e.target.value)} />
                    </div>
                ))}
                <button type="button" onClick={addItem}>
                    Dodaj pozycję
                </button>
                <button type="submit">Zapisz fakturę</button>
            </form>
        </DashboardLayout>
    );
};

export default CreateInvoice;
