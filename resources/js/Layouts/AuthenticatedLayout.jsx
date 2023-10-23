 

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <nav className="bg-white border-b border-gray-100">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="shrink-0 flex items-center">
//                                 <Link href="/">
//                                     <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
//                                 </Link>
//                             </div>

//                             <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
//                                 <NavLink href={route('dashboard')} active={route().current('dashboard')}>
//                                     Dashboard
//                                 </NavLink>
//                             </div>
//                             <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
//                                 <NavLink href={route('dashboard')} active={route().current('dashboard')}>
//                                     History
//                                 </NavLink>
//                             </div>
//                             <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
//                                 <NavLink href={route('dashboard')} active={route().current('dashboard')}>
//                                     Appointment
//                                 </NavLink>
//                             </div>
//                         </div>


//                         <div className="hidden sm:flex sm:items-center sm:ml-6">
//                             <div className="ml-3 relative">
//                                 <Dropdown>
//                                     <Dropdown.Trigger>
//                                         <span className="inline-flex rounded-md">
//                                             <button
//                                                 type="button"
//                                                 className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
//                                             >
//                                                 {user.name}

//                                                 <svg
//                                                     className="ml-2 -mr-0.5 h-4 w-4"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </span>
//                                     </Dropdown.Trigger>

//                                     <Dropdown.Content>
//                                         <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
//                                         <Dropdown.Link href={route('logout')} method="post" as="button">
//                                             Log Out
//                                         </Dropdown.Link>
//                                     </Dropdown.Content>
//                                 </Dropdown>
//                             </div>
//                         </div>

//                         <div className="-mr-2 flex items-center sm:hidden">
//                             <button
//                                 onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
//                                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
//                             >
//                                 <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                                     <path
//                                         className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                     <path
//                                         className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
//                     <div className="pt-2 pb-3 space-y-1">
//                         <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
//                             Dashboard
//                         </ResponsiveNavLink>
//                     </div>

//                     <div className="pt-4 pb-1 border-t border-gray-200">
//                         <div className="px-4">
//                             <div className="font-medium text-base text-gray-800">{user.name}</div>
//                             <div className="font-medium text-sm text-gray-500">{user.email}</div>
//                         </div>

//                         <div className="mt-3 space-y-1">
//                             <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
//                             <ResponsiveNavLink method="post" href={route('logout')} as="button">
//                                 Log Out
//                             </ResponsiveNavLink>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

import React,{ useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input, Badge,IconButton } from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon,CalendarIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, CubeTransparentIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { NotificationBell } from "@/Components/NotificationBell";
import { Link } from '@inertiajs/react';
 
export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    
    return (
        <div className="min-w-screen bg-gray-100 flex">
            <Card className="min-h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 flex items-center gap-4 p-4">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                    {/* <Typography variant="small" className="font-bold" color="blue-gray"> TRANSPORT APPOINTMENT SYSTEM @ BARANGAY NORTH DAANGHARI TAGUIG CITY </Typography> */}
                </div>

                <hr className="my-6 border-blue-gray-50" />

                <List>
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <ListItem>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>                            
                                Dashboard
                        </ListItem>
                    </NavLink>
                                        
                   
                    <NavLink href={route('appointment')} active={route().current('appointment')}>
                        <ListItem>
                            <ListItemPrefix>
                                <CalendarIcon className="h-5 w-5" />
                            </ListItemPrefix>                            
                                Appointment
                        </ListItem>
                    </NavLink>
                
                    <hr className="my-2 border-blue-gray-50" />

                    <NavLink href={route('notification')} active={route().current('notification')}>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>                            
                            Notification                        
                            <ListItemSuffix>
                                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                            </ListItemSuffix>
                        </ListItem>
                    </NavLink>
                    <NavLink href={route('profile.edit')} active={route().current('profile.edit')}>
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>                            
                            Profile                            
                        </ListItem>
                    </NavLink>
                    <NavLink href={route('settings')} active={route().current('settings')}>
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>                            
                            Settings                            
                        </ListItem>
                    </NavLink>
                    <NavLink method="post" href={route('logout')} as="button" active={true}>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>                        
                            Log Out                        
                    </ListItem>
                    </NavLink>
                </List>
            
            </Card>
            <div className="flex flex-col w-full mt-5">
                {header && ( 
                    <div className="flex items-center justify-between mx-5">
                        <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8 ">{header}</div>
                        <div className="mx-[10%]">     
                        <NotificationBell/>                                           
                        </div>                                                                   
                    </div>
                )}
                
                <main>{children}</main>
            </div>
            
        </div>
    );
}