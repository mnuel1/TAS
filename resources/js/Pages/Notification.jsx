import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Notification({ auth }) {
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Notifications</h2>}
        >
        <Head title="Notification" />

        <div className="py-12">
            <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
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
                            Read All
                            </button>
                        </div>
                        <ul>
                            {filteredNotifications.map((notification) => (
                            <li
                                key={notification.id}
                                className={`${
                                notification.read ? "bg-white" : "bg-gray-100"
                                } p-4 mb-2 rounded hover:bg-gray-200 cursor-pointer`}
                            >
                                <p className="text-sm">{notification.text}</p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                                {!notification.read && (
                                <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="text-xs text-blue-600 hover:underline"
                                >
                                    Mark as Read
                                </button>
                                )}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}
