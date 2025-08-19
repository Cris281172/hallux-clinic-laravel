import React from 'react';
import VisitSingleCard from '../../../components/dashboard/visits/visit-single-card.jsx';
import Heading from '../../../components/heading.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const Visits = ({ futureVisits }) => {
    return (
        <DashboardLayout>
            <Heading title={'Wizyty'} />
            <div className={'flex flex-col gap-1.5'}>
                <h2>Nadchodzące wizyty</h2>
                <div className={'grid w-full grid-cols-3 gap-10'}>
                    {futureVisits.map((visit, index) => (
                        <React.Fragment key={index}>
                            <VisitSingleCard visit={visit}></VisitSingleCard>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Visits;
