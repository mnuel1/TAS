import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

import React,{ useState, useEffect } from 'react';
import { Pagination } from '@/Components/Pagination';
import { usePage } from '@inertiajs/react';

import { Typography } from 'antd';

const { Title } = Typography;
import { Tag } from 'antd';

import AppointmentsList from './Appoint/AppointmentsList';
export default function StaffAppointment({ auth }) {

    
    // const { vehicles } = usePage().props;
                        
    return (
        <>
            <Head title="AppointmentStaff" />

            <div className="py-12 flex justify-center items-center">
                <div className="w-[80%] lg:w-full lg:mx-auto sm:px-6 lg:px-8 ">                
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-4"></h3>
                            <div>
                                <AppointmentsList/>
                            </div>
                            {/* <div className="flex items-center justify-center ">
                                <Pagination activePage={activePage} setActivePage={setActivePage} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
