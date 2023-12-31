 
import React,{ useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input, Badge,IconButton } from "@material-tailwind/react";
import { UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon,CalendarIcon } from "@heroicons/react/24/solid";
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';
 
export default function Authenticated({ user, header, children }) {
    
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

                    <NavLink href={route('notification')} active={route().current('notification')}>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>                            
                            Notification                        
                            {/* <ListItemSuffix> */}
                                {/* <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" /> */}
                            {/* </ListItemSuffix> */}
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