import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { VehicleCard } from '@/Components/VehiclesCard';
import React,{ useState } from 'react';
import { Pagination } from '@/Components/Pagination';
import { usePage } from '@inertiajs/react';

export default function Appointment({ auth }) {
    const [activePage, setActivePage] = useState(1); // Initialize the active page

    const { vehicles } = usePage().props;
      
    // Determine the range of vehicles to display on the current page
    const vehiclesPerPage = 6; // Number of vehicles to display per page
    const startIndex = (activePage - 1) * vehiclesPerPage;
    const endIndex = Math.min(startIndex + vehiclesPerPage, vehicles.length); // Ensure endIndex doesn't exceed the number of vehicles
    
    const visibleVehicles = vehicles.slice(startIndex, endIndex);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointment</h2>}
        >
            <Head title="Appointment" />

            <div className="py-12">
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                
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
                            
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-wrap justify-between">
                                {visibleVehicles.map((vehicle, index) => (
                                    <div key={index} className="inline-block mr-4 mb-4">
                                        <VehicleCard id={vehicle.id} model={vehicle.model} driver={vehicle.driver} 
                                            rate={vehicle.rate} ratings={vehicle.ratings}
                                            description={vehicle.description} imgLink={vehicle.imgLink} occupied={vehicle.occupied}/>
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
