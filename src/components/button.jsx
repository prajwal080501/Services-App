const Button = () => {
    return (
        <button className="text-lg px-3 py-4 bg-blue-500 rounded-lg" >
            {props.children}
        </button>
    )
}

export default Button;