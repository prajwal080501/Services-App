import Banner from "../components/banner";
import Container from "../components/container";
import Divider from "../components/divder";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Services from "../components/services";

const Home = () => {
    return (
        <div className="bg-gray-100 h-full">
            <Navbar />
            <Hero />
            <Container>
                <Services />
                <Divider />
                <Banner />
            </Container>

        </div>
    )
}
export default Home;