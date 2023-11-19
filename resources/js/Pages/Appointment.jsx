import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import StaffAuthenticated from '@/Layouts/StaffAuthenticatedLayout';
import AdminAuthenticated from '@/Layouts/AdminAuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { VehicleCard } from '@/Components/VehiclesCard';
import React,{ useState, useEffect } from 'react';
import { Pagination } from '@/Components/Pagination';
import { usePage } from '@inertiajs/react';
import  bike  from '../../img/bike.jpg'
import  car  from '../../img/car.jpg'
import  ebike  from '../../img/ebike.jpg'
import  l300  from '../../img/l300.jpg'
import  motor  from '../../img/motor.jpg'
import  multicab  from '../../img/multicab.jpg'
import  tric  from '../../img/tric.jpg'
import  van  from '../../img/van.jpg'
import { Typography } from 'antd';

const { Title } = Typography;
import { Tag } from 'antd';

import StaffAppointment from './Staff/StaffAppointment';

export default function Appointment({ auth }) {
    const [activePage, setActivePage] = useState(1); // Initialize the active page
    
    const { vehicles } = usePage().props;
    
    // Determine the range of vehicles to display on the current page
    const vehiclesPerPage = 6; // Number of vehicles to display per page
    const startIndex = (activePage - 1) * vehiclesPerPage;
    const endIndex = Math.min(startIndex + vehiclesPerPage, vehicles.length); // Ensure endIndex doesn't exceed the number of vehicles
    
    const visibleVehicles = vehicles.slice(startIndex, endIndex);
    

    const counts = {
        'Bike': 0,
        'Car': 0,
        'E-Bike': 0,
        'L300': 0,
        'Motorcycle': 0,
        'Multicab': 0,
        'Tricycle': 0,
        'Van': 0,
    };

    const updateVehicleCounts = () => {
                
        vehicles.forEach(vehicle => {
            const { model } = vehicle;         
            counts[model]++;            
        });                    
    };
          
    updateVehicleCounts();
    
                        
    // Create a map to match vehicle.img with imported images
    const vehicleImageMap = {
        'bike': bike,
        'car': car,
        'ebike': ebike,
        'l300': l300,
        'motor': motor,
        'multicab': multicab,
        'tric': tric,
        'van': van,
    };


    console.log(auth.user.access)
    return (
        
        auth.user.access == 1 ? (
           
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointment</h2>}
            >
                <Head title="Appointment" />

                <div className="py-12 flex justify-center items-center">
                    <div className="w-[80%] lg:w-full lg:mx-auto sm:px-6 lg:px-8 ">                
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-4"></h3>
                                <div className="space-x-4 mb-4 flex items-center justify-between mx-5">                                
                                    <Link
                                    href={route('appoint.history')}
                                    className="bg-transparent text-gray-900 px-4 py-1 h-fit rounded 
                                            hover:border-indigo-400 border-b-2 focus:border-indigo-700 "
                                    >
                                    See History
                                    </Link> 
                                </div>
                                <Title level={5} className='ml-4'>Number of Vehicles available for each category</Title>
                                <div className='flex p-4 gap-2'>
                                                                    
                                    <Tag color="">L300 {counts.L300} </Tag>
                                    <Tag color="">Van {counts.van}</Tag>
                                    <Tag color="">Car {counts.Car}</Tag>
                                    <Tag color="">Bike {counts.Bike}</Tag>
                                    <Tag color="">E-bike {counts['E-Bike']}</Tag>
                                    <Tag color="">Tricycle {counts.Tricycle}</Tag>
                                    <Tag color="">Multi cab {counts.Multicab}</Tag>
                                    <Tag color="">Motorcycle {counts.Motorcycle}</Tag>
                                    
                                </div>
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-nowrap flex-col md:flex-row md:flex-wrap justify-center items-center">
                                    {visibleVehicles.map((vehicle, index) => (                                                                   
                                        <div key={index} className="inline-block mr-4 mb-4">                                       
                                        <VehicleCard
                                                id={vehicle.id}
                                                model={vehicle.model}
                                                driver={vehicle.driver}
                                                rate={vehicle.rate}
                                                ratings={vehicle.ratings}
                                                description={vehicle.description}
                                                img={vehicleImageMap[vehicle.img]} 
                                                occupied={vehicle.occupied}
                                            />
                                                
                                        </div>
                                    ))}                               
                                </div>
                                <div className="flex items-center justify-center ">
    
                                    <Pagination activePage={activePage} setActivePage={setActivePage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
            
        ) : auth.user.access == 2 ? (
            <StaffAuthenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointment</h2>}
            >
                <StaffAppointment auth={auth}/>
            </StaffAuthenticated>
        ) : (
            
            <AdminAuthenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointment</h2>}
            >
                <StaffAppointment auth={auth}/>
            </AdminAuthenticated>
        )
        
            
    
    );
}
