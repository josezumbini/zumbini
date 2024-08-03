import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FotoFundoSection from '../components/FotoFundoSection';
import NomeLinks from '../components/NomeLinks';
import SobreMim from '../components/SobreMim';

function Home() {
    return (
        <div>
            <Header />
            <FotoFundoSection />
            <NomeLinks />
            <SobreMim />
            <Footer />
        </div>
    )
}

export default Home