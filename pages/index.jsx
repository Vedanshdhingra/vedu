import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import Background from '../components/HomeComponents/Background/background';
const home = () => {
    return (
        <div className="Home-Page flex flex-col min-h-screen space-y-8">
            <Banner />
            <Background />
            <div className="mt-auto">
                <Footer />
            </div>
        </div>

    )
}

export default home