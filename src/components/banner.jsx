const Banner = () => {
    return (
        <div className="flex items-center  justify-center bg-gradient-to-r from-blue-500 to-fuchsia-500 mx-auto w-[60%] bg-opacity-10 h-fit py-2 px-8 mb-5 rounded-lg">
            <div className="flex flex-col items-center justify-center">
                <p className="text-4xl font-extrabold text-center text-white py-4">
                    Electricians, Plumber, Carpenters, and more
                </p>
                <p className="text-2xl font-medium text-center text-white">
                    At your doosteps in just 30 minutes
                </p>
            </div>
        </div>
    )
}

export default Banner;