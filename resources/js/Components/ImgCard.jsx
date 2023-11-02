import { Typography } from "@material-tailwind/react";
 
export function ImgCard({ model, driver, rate, ratings, img, description}) {
    return (
        <figure className="relative h-[20rem] sm:h-auto w-full">
            <img
                className="h-full w-full rounded-xl object-cover object-center"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="nature image"
            />
            <figcaption className="absolute bottom-4 sm:bottom-8 left-2/4 transform -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-2 sm:py-4 px-4 sm:px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                    <Typography variant="h5" color="blue-gray" className="text-sm sm:text-lg">
                        {driver}
                    </Typography>
                    <Typography color="gray" className="mt-1 sm:mt-2 font-normal text-sm sm:text-base">
                        {description}
                    </Typography>
                </div>
                <Typography variant="h5" color="blue-gray" className="flex justify-center items-center h-fit gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-4 sm:h-5 w-4 sm:w-5 text-yellow-700"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-xs sm:text-sm">{ratings}</span>
                </Typography>
            </figcaption>
        </figure>

    );
}