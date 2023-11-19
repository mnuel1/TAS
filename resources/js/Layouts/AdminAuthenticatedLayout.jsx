 
import React,{ useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input, Badge,IconButton } from "@material-tailwind/react";
import { UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon,CalendarIcon } from "@heroicons/react/24/solid";
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';
 
export default function AdminAuthenticated({ user, header, children }) {
    
    const [open, setOpen] = React.useState(false);
    
    
    const handleOpen = () => {        
        setOpen(open === false ? true : false);
        
    };
    
    return (
        <div className="min-w-screen min-h-screen bg-gray-100 flex">
            <Card className={`absolute md:relative z-10 md:block min-h-screen max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ${open ? '' : 'hidden'}`}>
                <div className="mb-2 items-center gap-4 p-4 mt-[5rem] md:mt-0">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 " />
                    </Link>
                    {/* <Typography variant="small" className="font-bold" color="blue-gray"> TRANSPORT APPOINTMENT SYSTEM @ BARANGAY NORTH DAANGHARI TAGUIG CITY </Typography> */}
                </div>

                <hr className="my-6 border-blue-gray-50" />

                <List>
                    <NavLink href={route('appointment')} active={route().current('appointment')}>
                        <ListItem>
                            <ListItemPrefix>
                                <CalendarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                                Appointment
                        </ListItem>
                    </NavLink>
                
                    <hr className="my-2 border-blue-gray-50" />

                    <NavLink href={route('staff.create')} active={route().current('staff.create')}>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Vehicles Management                        
                           
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
                    <NavLink href={route('users')} active={route().current('users')}>
                        <ListItem>
                            <ListItemPrefix>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>

                            </ListItemPrefix>
                            Users

                        </ListItem>
                    </NavLink>
                    <NavLink href={route('staffs')} active={route().current('staffs')}>
                        <ListItem>
                            <ListItemPrefix>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>

                            </ListItemPrefix>
                            Staffs

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
                        <div className="flex items-center gap-2 mx-6">
                            <img 
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nO3XwQkAMAwCQPffzZ06RCkJ9A78+xMTgOe6PFlfEADuTE9ZbTEAn+vyZLpA/WIgcw7iMMAxg+GZ7gAAAABJRU5ErkJggg==" 
                                className="block md:hidden hover:cursor-pointer z-10"
                                onClick={handleOpen}
                            />
                            <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8 ">{header}</div>
                        </div>

                    </div>
                )}
                
                <main>{children}</main>
            </div>
            
        </div>
    );
}