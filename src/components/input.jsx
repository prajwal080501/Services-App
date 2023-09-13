const Input = ({ type, label, placeholder }) => {
    return (
        <div className="flex flex-col justify-start px-5 py-3 space-y-3">
            <label className="text-lg font-extrabold">{label}</label>
            <input className="w-[80%] border border-gray-300 rounded-lg duration-200 transition-all px-3 py-2" type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input;