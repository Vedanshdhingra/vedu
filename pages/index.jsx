import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import Background from '../components/HomeComponents/Background/background';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <Background />
            <Footer />

        </div>
    )
}

export default home