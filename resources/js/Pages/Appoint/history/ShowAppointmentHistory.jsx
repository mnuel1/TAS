import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, usePage, Link } from '@inertiajs/react';
import { Checkbox } from '@material-tailwind/react';
import { ImgCard } from '@/Components/ImgCard';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { HistoryTable } from '@/Components/Table';
// import { BreadcrumbsLinks } from '@/Components/Breadcrumbs';

const HistoryAppointment = (props, auth ) => {
    
    const  userAppointmentHistory = usePage().props.userAppointmentHistory;
    const firstRecord = userAppointmentHistory[0] || null;

    let vehicleModel;
    if (firstRecord) {
        vehicleModel = firstRecord.appointment.vehicle.model;
    }
        
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointment</h2>}
        >
            <div className="py-8 sm:py-12">
                <div className="w-full mx-auto sm:px-4 md:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link
                            href={route('appointment')}
                            className="mt-4 md:mt-6 ml-4 sm:ml-8 flex items-center justify-center w-20 sm:w-32 h-8 sm:h-10 rounded-xl bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Back
                        </Link>
                        <div className="p-4 md:p-8">
                            <HistoryTable userAppointmentHistory={userAppointmentHistory} />
                        </div>
                    </div>
                </div>
            </div>

            
        </AuthenticatedLayout>
    );
};

export default HistoryAppointment;
