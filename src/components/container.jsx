const Container = (props) => {
    return (
        <div className="max-w-[90%] bg-white mx-auto h-fit py-4 mb-10 mt-10 rounded-lg drop-shadow-2xl">
            {props.children}
        </div>
    )
}

export default Container