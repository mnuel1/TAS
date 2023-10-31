 
export function Avatar({initial}) {
    const colors = ['bg-green-900', 'bg-red-900', 'bg-yellow-900', 'bg-blue-900']
    const randomColorIndex = Math.floor(Math.random() * colors.length);

    //Get the random color class
    const color = colors[randomColorIndex];

    return (
        <div className={`${color} rounded-full flex justify-center items-center w-12 h-12`}> {initial} </div>
    );
}