import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { VehicleTypesCard } from '@/Components/VehicleTypesCard';
import { Head } from '@inertiajs/react';
import { useState } from 'react'; 
import { useForm, usePage } from '@inertiajs/react';



export default function Settings({ auth }) {

    const user = usePage().props.auth.preference;
    console.log(user);
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        dropoff_loc: user.dropoff_loc,
        pickup_loc: user.pickup_loc,
        // number: user.number, preffered vehicle types
        email_notif: user.email_notif,
        sms_notif: user.sms_notif,

    });
    // Define states for user preferences    
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [notificationPreferences, setNotificationPreferences] = useState({
        email: false,
        sms: false,
    });

    
    // Add more states for other preferences as needed

    // Function to handle form submissions
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // You can save user preferences to a backend or handle them as needed here
        console.log('User preferences submitted:', {
            vehicleTypes,
            pickupLocation,
            dropoffLocation,
            notificationPreferences,
        });
    };

    const vehicleTypes = [
        {
            value: 'l300',
            title: 'L300',
            rate: '₱100',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "https://imgcdnblog.carbay.com/wp-content/uploads/2019/05/20180219/Untitled-1-3-650x420.jpg",
        },
        {
            value: 'van',
            title: 'Van',
            rate: '₱150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "https://www.hireexpress.com.au/product_pic/pictures/530045.jpg",
        },
        {
            value: 'car',
            title: 'Car',
            rate: '₱100',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "https://www.wallpaperup.com/uploads/wallpapers/2014/02/21/264234/8adc4288e526edf66155921a442dbcb8.jpg",
        },
        {
            value: 'bike',
            title: 'Bike',
            rate: '₱20',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "https://pngimg.com/uploads/bicycle/bicycle_PNG5354.png",
        },
        {
            value: 'ebike',
            title: 'E-Bike',
            rate: '₱50',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "https://images.flexshopper.xyz/385x385/product-beta-images/b73ad71f-0d16-4f24-bcd5-d1e1a2d28736.jpeg",
        },
        {
            value: 'tricycle',
            title: 'Tricycle',
            rate: '₱70',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "https://www.seekpng.com/png/detail/89-890671_tricycle-transparent-background-png-tricycle-png.png",
        },
        {
            value: 'multicab',
            title: 'Multicab',
            rate: '₱150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "https://www.dealerlogin.co/dealer-site-source/image_preview.php?filename=/domains/philmotors.com/html/upload/607/5057504_1.jpg&width=634",
        },
        {
            value: 'motorcycle',
            title: 'Motorcycle',
            rate: '₱90',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "https://bikes.bestcarmagz.net/sites/default/files/ajs/dd50e-2/2011/2011-ajs-dd50e-2-83309-309.jpg",
        },
    ];
      
      
      

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings</h2>}
        >
        <Head title="Settings" />

        <div className="py-12">
            <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <section className="max-w-min">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Personal Preference</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Update your account's personal preferences.
                            </p>
                        </header>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6 w-full">

                            {/* Vehicle Types */}
                            <label className="block text-sm font-medium text-gray-700">Vehicle Types</label>

                            <div className="mb-4 flex justify-between items-center w-full space-x-4 ">
                                {/* First Row */}
                                {vehicleTypes.slice(0, 4).map((vehicle, index) => (
                                    <VehicleTypesCard
                                    title={vehicle.title}
                                    rate={vehicle.rate}
                                    description={vehicle.description}
                                    isPreferred={vehicle.isPreferred}
                                    imgLink={vehicle.imgLink}
                                    index={index}
                                    />
                                ))}
                                </div>
                            <div className="mb-4 flex justify-between items-center w-full space-x-4">
                                {/* Second Row */}
                                {vehicleTypes.slice(4, 8).map((vehicle, index) => (
                                    <VehicleTypesCard
                                    title={vehicle.title}
                                    rate={vehicle.rate}
                                    description={vehicle.description}
                                    isPreferred={vehicle.isPreferred}
                                    imgLink={vehicle.imgLink}
                                    index={index + 4} // Adjust the index for the second row
                                    />
                                ))}
                            </div>



                            {/* Pick-up Location */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Pick-up Location</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    value={data.pickup_loc}
                                    onChange={(e) => setPickupLocation(e.target.value)}
                                />
                            </div>

                            {/* Drop-off Location */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Drop-off Location</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    value={data.dropoff_loc}
                                    onChange={(e) => setDropoffLocation(e.target.value)}
                                />
                            </div>

                            {/* Notification Preferences */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Notification Preferences</label>
                                <div className="mt-1">
                                    <label className="inline-flex items-center">
                                        <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={data.email_notif}
                                        onChange={(e) => setNotificationPreferences({ ...notificationPreferences, email: e.target.checked })}
                                        />
                                        <span className="ml-2">Email</span>
                                    </label>
                                    <label className="inline-flex items-center ml-4">
                                        <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={data.sms_notif}
                                        onChange={(e) => setNotificationPreferences({ ...notificationPreferences, sms: e.target.checked })}
                                        />
                                        <span className="ml-2">SMS</span>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-4">
                                <PrimaryButton disabled={processing}>Save Preferences</PrimaryButton>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}
