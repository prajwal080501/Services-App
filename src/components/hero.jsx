const Hero = () => {
    return (
        <div className="relative flex justify-center items-center">
        <div className="w-full">
            <img className="blur-sm object-cover w-full h-96 brightness-50" src="https://source.unsplash.com/random"
                alt="Home services, on demand" />
          
            <div
                className="absolute flex items-center space-y-4 justify-center flex flex-col w-full h-full top-0 mt-8 text-center">
                <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 text-gray-100">Home services, on demand</h1>
                <div className="w-[90%] lg:w-[50%] flex space-x-3 mx-auto">
                    <div className="bg-blue-500 px-5 space-x-2 py-3 flex justify-between items-center justify-center">
                        <i className="fa-solid fa-location-crosshairs text-white"></i>
                        <p className=" font-bold rounded-lg text-white shadow-lg">Pune</p>
                    </div>
                    <input type="text" className="w-full outline-none px-5 py-3 font-bold rounded-lg shadow-lg"
                        placeholder="Search for a service" />
                </div>
                <p className="text-lg text-gray-200">Get any home service you need, fast and easy.</p>
                <a href="#call-to-action"
                    className="mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 font-bold duration-200 btn btn-primary">Explore</a>
            </div>
        </div>
    </div>
    )
}

export default Hero