import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs.tsx';

const SizeChart = ({ company = 'mypaps', type = 'shoe' }) => {
    const sizesConfig = [
        {
            company: 'mypaps',
            type: 'shoe',
            adultSizes: [
                { size: 35, width: 9.0, length: 22.0 },
                { size: 36, width: 9.2, length: 22.5 },
                { size: 37, width: 9.4, length: 23.5 },
                { size: 38, width: 9.6, length: 24.5 },
                { size: 39, width: 9.8, length: 25.0 },
                { size: 40, width: 9.8, length: 25.5 },
                { size: 41, width: 10.0, length: 26.5 },
                { size: 42, width: 10.0, length: 27.0 },
                { size: 43, width: 10.2, length: 27.5 },
                { size: 44, width: 10.4, length: 28.5 },
                { size: 45, width: 10.4, length: 29.0 },
                { size: 46, width: 10.6, length: 30.0 },
                { size: 47, width: 10.6, length: 30.5 },
                { size: 48, width: 10.8, length: 31.0 },
                { size: 49, width: 11.0, length: 32.0 },
                { size: 50, width: 11.2, length: 33.0 },
            ],
            childrenSizes: [
                { size: 28, width: 6.0, length: 16.5 },
                { size: 29, width: 6.6, length: 17.2 },
                { size: 30, width: 7.0, length: 18.2 },
                { size: 31, width: 7.5, length: 18.6 },
                { size: 32, width: 7.8, length: 19.6 },
                { size: 33, width: 8.0, length: 20.2 },
                { size: 34, width: 8.1, length: 21.0 },
                { size: 35, width: 8.2, length: 21.5 },
                { size: 36, width: 8.4, length: 21.7 },
                { size: 37, width: 8.7, length: 22.4 },
                { size: 38, width: 9.0, length: 23.0 },
                { size: 39, width: 9.2, length: 23.7 },
                { size: 40, width: 9.4, length: 24.5 },
                { size: 41, width: 9.5, length: 25.2 },
                { size: 42, width: 9.6, length: 25.8 },
            ],
        },
    ];

    const currentSizeConfig = sizesConfig.find((el) => el.company === company && el.type === type);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <p className={'text-dark-plum mt-1 cursor-pointer text-sm underline'}>Tabela rozmiarów</p>
            </DialogTrigger>
            <DialogContent showCloseButton={true} className="bg-white">
                <DialogHeader>
                    <DialogTitle className={'text-dark-plum'}>Tabela rozmiarów</DialogTitle>
                </DialogHeader>
                <Tabs onChange={(value) => console.log(value)}>
                    <TabsList>
                        {currentSizeConfig.adultSizes && currentSizeConfig.adultSizes.length !== 0 && (
                            <TabsTrigger value="adult">Rozmiary dorosłych</TabsTrigger>
                        )}
                        {currentSizeConfig.childrenSizes && currentSizeConfig.childrenSizes.length !== 0 && (
                            <TabsTrigger value="children">Rozmiary dzieciece</TabsTrigger>
                        )}
                    </TabsList>
                    <TabsContent value={'adult'}>
                        <div className="mt-4 overflow-x-auto">
                            <table className="min-w-full border-collapse border border-gray-300 text-center text-sm">
                                <thead className="bg-dark-plum text-white">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Rozmiar</th>
                                        <th className="border border-gray-300 px-4 py-2">Szerokość [cm]</th>
                                        <th className="border border-gray-300 px-4 py-2">Długość [cm]</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentSizeConfig.adultSizes.map((item) => (
                                        <tr key={item.size} className="odd:bg-white even:bg-gray-50">
                                            <td className="text-dark-plum border border-gray-300 px-4 py-2 font-medium">{item.size}</td>
                                            <td className="text-dark-plum border border-gray-300 px-4 py-2">{item.width.toFixed(1)}</td>
                                            <td className="text-dark-plum border border-gray-300 px-4 py-2">{item.length.toFixed(1)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </TabsContent>
                    <TabsContent value={'children'}>
                        <div className="mt-4 overflow-x-auto">
                            <table className="min-w-full border-collapse border border-gray-300 text-center text-sm">
                                <thead className="bg-dark-plum text-white">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Rozmiar</th>
                                        <th className="border border-gray-300 px-4 py-2">Szerokość [cm]</th>
                                        <th className="border border-gray-300 px-4 py-2">Długość [cm]</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentSizeConfig.childrenSizes.map((item) => (
                                        <tr key={item.size} className="odd:bg-white even:bg-gray-50">
                                            <td className="text-dark-plum border border-gray-300 px-4 py-2 font-medium">{item.size}</td>
                                            <td className="text-dark-plum border border-gray-300 px-4 py-2">{item.width.toFixed(1)}</td>
                                            <td className="text-dark-plum border border-gray-300 px-4 py-2">{item.length.toFixed(1)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
};

export default SizeChart;
