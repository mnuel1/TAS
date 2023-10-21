import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex flex-col sm:justify-center items-center">        
            <div className="w-full sm:w-11/12 px-6 py-2 overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
