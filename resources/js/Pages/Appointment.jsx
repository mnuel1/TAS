import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { VehicleCard } from '@/Components/VehiclesCard';
import React,{ useState } from 'react';

export default function Appointment({ auth }) {
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
    // retrieved vehicles
    const vehicles = [
        { title: 'SUV', rate: '30', description: 'Spacious utility vehicle', isPreferred: false, imgLink: 'suv.jpg' },
        { title: 'Truck', rate: '35', description: 'Heavy-duty truck', isPreferred: true, imgLink: 'truck.jpg' },
        { title: 'Motorcycle', rate: '15', description: 'Two-wheeler', isPreferred: false, imgLink: 'motorcycle.jpg' },
        { title: 'Bicycle', rate: '10', description: 'Eco-friendly transportation', isPreferred: true, imgLink: 'bicycle.jpg' },
        { title: 'Compact Car', rate: '25', description: 'Efficient city car', isPreferred: false, imgLink: 'compact_car.jpg' },
        { title: 'Van', rate: '40', description: 'Versatile van', isPreferred: true, imgLink: 'van.jpg' },
        { title: 'Electric Scooter', rate: '20', description: 'Economical scooter', isPreferred: false, imgLink: 'electric_scooter.jpg' },
        { title: 'Luxury Sedan', rate: '50', description: 'Premium sedan', isPreferred: true, imgLink: 'luxury_sedan.jpg' },
        { title: 'Mountain Bike', rate: '15', description: 'Off-road bicycle', isPreferred: false, imgLink: 'mountain_bike.jpg' },
        { title: 'Convertible', rate: '45', description: 'Open-top sports car', isPreferred: true, imgLink: 'convertible.jpg' },
        { title: 'Delivery Truck', rate: '35', description: 'Cargo delivery truck', isPreferred: false, imgLink: 'delivery_truck.jpg' },
        { title: 'Electric Car', rate: '30', description: 'Environmentally friendly car', isPreferred: true, imgLink: 'electric_car.jpg' },
        { title: 'Hybrid Bike', rate: '18', description: 'Pedal-assist bicycle', isPreferred: false, imgLink: 'hybrid_bike.jpg' },
        { title: 'Pickup Truck', rate: '40', description: 'Versatile pickup truck', isPreferred: true, imgLink: 'pickup_truck.jpg' },
        { title: 'Classic Car', rate: '60', description: 'Vintage classic car', isPreferred: false, imgLink: 'classic_car.jpg' },
        { title: 'Moped', rate: '25', description: 'Small motorized scooter', isPreferred: true, imgLink: 'moped.jpg' },
        { title: 'Sports Bike', rate: '45', description: 'High-performance motorcycle', isPreferred: false, imgLink: 'sports_bike.jpg' },
        { title: 'Compact SUV', rate: '30', description: 'Small SUV', isPreferred: true, imgLink: 'compact_suv.jpg' },
        { title: 'Limousine', rate: '70', description: 'Luxury chauffeured car', isPreferred: true, imgLink: 'limousine.jpg' },
        { title: 'Cruiser Bike', rate: '20', description: 'Comfortable cruiser bicycle', isPreferred: false, imgLink: 'cruiser_bike.jpg' },
      ];
      
      

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
                                {vehicles.map((vehicle, index) => (
                                    <div key={index} className="inline-block mr-4 mb-4">
                                        <VehicleCard title={vehicle.title} rate={vehicle.rate} description={vehicle.description} isPreferred={vehicle.isPreferred} imgLink={vehicle.imgLink} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
