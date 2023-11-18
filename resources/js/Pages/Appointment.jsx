import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { VehicleCard } from '@/Components/VehiclesCard';
import React,{ useState } from 'react';
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


export default function Appointment({ auth }) {
    const [activePage, setActivePage] = useState(1); // Initialize the active page

    const { vehicles } = usePage().props;
    console.log(vehicles);
    // Determine the range of vehicles to display on the current page
    const vehiclesPerPage = 6; // Number of vehicles to display per page
    const startIndex = (activePage - 1) * vehiclesPerPage;
    const endIndex = Math.min(startIndex + vehiclesPerPage, vehicles.length); // Ensure endIndex doesn't exceed the number of vehicles
    
    const visibleVehicles = vehicles.slice(startIndex, endIndex);
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
    // TODO CREATE A REQUEST TO FETCH THE NUMBER OF VEHICLES AVAILBBLE PER CATEGORY
    const count = 1;
    return (
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
                                
                                
                                <Tag color="green">L300 {count} </Tag>
                                <Tag color="green">Van {count}</Tag>
                                <Tag color="green">Car {count}</Tag>
                                <Tag color="green">Bike {count}</Tag>
                                <Tag color="green">E-bike {count}</Tag>
                                <Tag color="green">Tricycle {count}</Tag>
                                <Tag color="green">Multi cab {count}</Tag>
                                <Tag color="green">Motorcycle {count}</Tag>
                                

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
                                            img={vehicleImageMap[vehicle.img]} // Use the vehicleImageMap to get the image source
                                            occupied={vehicle.occupied}
                                        />
                                            {/* isPreferred={vehicle.isPreferred} */}
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
    );
}
