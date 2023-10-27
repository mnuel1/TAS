import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { VehicleCard } from '@/Components/VehiclesCard';
import React,{ useState } from 'react';
import { Pagination } from '@/Components/Pagination';
import { usePage } from '@inertiajs/react';

export default function Appointment({ auth }) {
    const [activePage, setActivePage] = useState(1); // Initialize the active page

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            text: "Your vehicle has arrived",
            time: "2 minutes ago",
            read: false,
        },
        {
            id: 2,
            text: "Your vehicle is here",
            time: "5 days ago",
            read: true,
        },
        // Add more notifications as needed
    ]);
    const [filter, setFilter] = useState("all");
    
    const { vehicles } = usePage().props;
    console.log(vehicles);
      
    // Determine the range of vehicles to display on the current page
    const vehiclesPerPage = 6; // Number of vehicles to display per page
    const startIndex = (activePage - 1) * vehiclesPerPage;
    const endIndex = Math.min(startIndex + vehiclesPerPage, vehicles.length); // Ensure endIndex doesn't exceed the number of vehicles
    console.log(activePage);
    const visibleVehicles = vehicles.slice(startIndex, endIndex);

    console.log(visibleVehicles);
   

    const markAsRead = (id) => {
        const updatedNotifications = notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
        );
        setNotifications(updatedNotifications);
    };

    const markAllAsRead = () => {
        const updatedNotifications = notifications.map((notification) => ({
        ...notification,
        read: true,
        }));
        setNotifications(updatedNotifications);
    };

    const unreadNotifications = notifications.filter((notification) => !notification.read);
    const readNotifications = notifications.filter((notification) => notification.read);

    const filteredNotifications =
        filter === "all"
        ? notifications
        : filter === "unread"
        ? unreadNotifications
        : readNotifications;

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
                            <div className="space-x-4 mb-4 flex justify-between mx-5">                            
                                <div className='space-x-4 mb-4'>
                                    <button
                                        onClick={() => setFilter("all")}
                                        className={`${
                                        filter === "all" ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 '
                                        } px-4 py-2 rounded border-b-2 `}
                                    >
                                    All
                                    </button>
                                    <button
                                        onClick={() => setFilter("unread")}
                                        className={`${
                                        filter === "unread" ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 '
                                        } px-4 py-2 rounded border-b-2`}
                                    >
                                    Unread
                                    </button>
                                    <button
                                        onClick={() => setFilter("read")}
                                        className={`${
                                        filter === "read" ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 '
                                        } px-4 py-2 rounded border-b-2`}
                                    >
                                    Read
                                    </button>
                                    
                                </div>

                                <button
                                onClick={markAllAsRead}
                                className="bg-transparent text-gray-900 px-4 py-1 h-fit rounded 
                                        hover:border-indigo-400 border-b-2 focus:border-indigo-700 "
                                >
                                See History
                                </button>
                            </div>
                            
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-wrap justify-between">
                                {visibleVehicles.map((vehicle, index) => (
                                    <div key={index} className="inline-block mr-4 mb-4">                                        
                                        <VehicleCard id={vehicle.id} model={vehicle.model} driver={vehicle.driver} 
                                            rate={vehicle.rate} ratings={vehicle.ratings}
                                            description={vehicle.description} imgLink={vehicle.imgLink} />
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
