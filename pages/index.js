import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FotoFundoSection from '../components/FotoFundoSection';
import NomeLinks from '../components/NomeLinks';
import SobreMim from '../components/SobreMim';
import EspacoLeitor from '../components/EspacoLeitor';
import SiteEmConstrucao from '../components/SiteEmConstrucao';

function Home() {
    return (
        <div>
            <SiteEmConstrucao />
        </div>
    )
}


/*
function Home() {
    return (
        <div>
            <Header />
            <FotoFundoSection />
            <NomeLinks />
            <SobreMim />
            <EspacoLeitor />
            <Footer />
        </div>
    )
}
*/

export default Home