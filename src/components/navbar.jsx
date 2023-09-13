import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="absolute px-3 py-5 z-10 top-0 flex items-center justify-between w-full">
            <div>
                <p className="font-extrabold text-2xl text-white">Logo</p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-white decoration-none list-none">
                <a href="#" className="text-lg font-bold underline">Register as a worker</a>
                <Link to="/auth"
                    className="cursor-pointer bg-transparent text-lg transition-all duration-200  hover:text-blue-500 p-2 text-white font-bold">
                    Login/Sign Up
                </Link>
            </div>

        </div>
    )
}

export default Navbar;