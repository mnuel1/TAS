import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { VehicleCard } from '@/Components/VehiclesCard';
import React,{ useState } from 'react';
import { Pagination } from '@/Components/Pagination';


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

    // retrieved vehicles
    const vehicles = [
        { model: 'SUV', driver: 'John', rate: '30', ratings: 4.5, img: 'suv.jpg', description: 'Spacious utility vehicle' },
        { model: 'Truck', driver: 'Mike', rate: '35', ratings: 4.2, img: 'truck.jpg', description: 'Heavy-duty truck' },
        { model: 'Motorcycle', driver: 'Sarah', rate: '15', ratings: 4.8, img: 'motorcycle.jpg', description: 'Two-wheeler' },
        { model: 'Bicycle', driver: 'Chris', rate: '10', ratings: 4.9, img: 'bicycle.jpg', description: 'Eco-friendly transportation' },
        { model: 'Compact Car', driver: 'Alex', rate: '25', ratings: 4.7, img: 'compact_car.jpg', description: 'Efficient city car' },
        { model: 'Van', driver: 'Emily', rate: '40', ratings: 4.3, img: 'van.jpg', description: 'Versatile van' },
        { model: 'Electric Scooter', driver: 'Daniel', rate: '20', ratings: 4.6, img: 'electric_scooter.jpg', description: 'Economical scooter' },
        { model: 'Luxury Sedan', driver: 'Olivia', rate: '50', ratings: 4.1, img: 'luxury_sedan.jpg', description: 'Premium sedan' },
        { model: 'Mountain Bike', driver: 'Michael', rate: '15', ratings: 4.8, img: 'mountain_bike.jpg', description: 'Off-road bicycle' },
        { model: 'Convertible', driver: 'Sophia', rate: '45', ratings: 4.0, img: 'convertible.jpg', description: 'Open-top sports car' },
        { model: 'Delivery Truck', driver: 'Lucas', rate: '35', ratings: 4.3, img: 'delivery_truck.jpg', description: 'Cargo delivery truck' },
        { model: 'Electric Car', driver: 'Ava', rate: '30', ratings: 4.5, img: 'electric_car.jpg', description: 'Environmentally friendly car' },
        { model: 'Hybrid Bike', driver: 'Liam', rate: '18', ratings: 4.9, img: 'hybrid_bike.jpg', description: 'Pedal-assist bicycle' },
        { model: 'Pickup Truck', driver: 'Mia', rate: '40', ratings: 4.2, img: 'pickup_truck.jpg', description: 'Versatile pickup truck' },
        { model: 'Classic Car', driver: 'Noah', rate: '60', ratings: 4.1, img: 'classic_car.jpg', description: 'Vintage classic car' },
        { model: 'Moped', driver: 'Chloe', rate: '25', ratings: 4.6, img: 'moped.jpg', description: 'Small motorized scooter' },
        { model: 'Sports Bike', driver: 'Ethan', rate: '45', ratings: 4.2, img: 'sports_bike.jpg', description: 'High-performance motorcycle' },
        { model: 'Compact SUV', driver: 'Aria', rate: '30', ratings: 4.4, img: 'compact_suv.jpg', description: 'Small SUV' },
        { model: 'Limousine', driver: 'William', rate: '70', ratings: 4.0, img: 'limousine.jpg', description: 'Luxury chauffeured car' },
        { model: 'Cruiser Bike', driver: 'Avery', rate: '20', ratings: 4.7, img: 'cruiser_bike.jpg', description: 'Comfortable cruiser bicycle' },
      ];
      
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
                                        <VehicleCard model={vehicle.model} driver={vehicle.driver} 
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
