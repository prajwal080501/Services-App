const ServiceCard = ({ title, imgUrl }) => {
    return (
        <div
            className="flex flex-col w-fit h-fit items-center justify-center space-y-2 hover:scale-105 duration-200 ease-linear cursor-pointer ">
            <img className="w-20 h-20" src={imgUrl} alt="" />
            <p className="text-xl font-bold">{title}</p>
        </div>
    )
}

export default ServiceCard;