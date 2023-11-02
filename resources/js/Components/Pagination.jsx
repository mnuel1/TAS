import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
export function Pagination({ activePage, setActivePage }) {
    
    const getItemProps = (index) =>
        ({
            variant: activePage === index ? "filled" : "text",
            color: "gray",
            onClick: () => setActivePage(index),
            className: "rounded-full",
        });
    
    const next = () => {
        if (activePage === 5) return;
                
        setActivePage(activePage + 1)
    };
    
    const prev = () => {
        if (activePage === 1) return;
           
        setActivePage(activePage - 1)
    };
    
    return (
        <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={prev}
                disabled={activePage === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
                <IconButton {...getItemProps(3)}>3</IconButton>
                <IconButton {...getItemProps(4)}>4</IconButton>
                <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={next}
                disabled={activePage === 5}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
    
}