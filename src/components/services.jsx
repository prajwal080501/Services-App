import Container from "./container"
import ServiceCard from "./service-card"

const Services = () => {
    return (
            <div className="py-6 px-8">
                <p className="font-extrabold text-4xl">
                    Popular Services
                </p>
                <div className="p-5 mt-10 place-items-center gap-y-8 grid xs:grid-cold-2 lg:grid-cols-3 xl:grid-cols-4">

                    <ServiceCard title="Maid" imgUrl="https://img.icons8.com/?size=512&id=WR-40TISvr5B&format=png" />
                </div>
            </div>
    )
}

export default Services