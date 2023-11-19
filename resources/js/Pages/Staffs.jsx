import React, { useState } from 'react';
import StaffAuthenticated from '@/Layouts/StaffAuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

import UserTable from '@/Components/UserTable';
export default function UsersList({ auth }) {

    return (
        <StaffAuthenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Staff List</h2>}
        >
        <Head title="Users" />

        <div className="py-12 h-screen">
            <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-4"></h3>
                        <UserTable users={usePage().props.users}/>
                    </div>
                </div>
            </div>
        </div>
        </StaffAuthenticated>
    );
}
