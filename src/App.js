import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import Packages from "./components/Packages";
import About from "./components/About";
import Activities from "./components/Activities";
import Communitywork from "./components/Communitywork";
import Faqs from "./components/Faqs";
import Safaris from "./components/Safaris";
import Tourafricablog from "./components/Tourafricablog";
import Vehicles from "./components/Vehicles";
import Destinations from "./components/Destinations";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
//import  Itinerariessearch from "./components/Itinerariessearch";

import Aberdare from "./destination/Aberdare";
import Diani from "./destination/Diani";
import Amboseli from "./destination/Amboseli";
import Maasaimara from "./destination/Maasaimara";
import Mountkilimanjaro from "./destination/Mountkilimanjaro";
import Ngorongoro from "./destination/Ngorongoro";
import Serengeti from "./destination/Serengeti";
import Tarangire from "./destination/Tarangire";
import Zanzibar from "./destination/Zanzibar";

import Beachholidayssafaris from "./destination/Beachholidayssafaris";
import Birdingsafaris from "./destination/Birdingsafaris";
import Honeymoonsafaris from "./destination/Honeymoonsafaris";
import Photographysafaris from "./destination/Photographysafaris";
import Tailormadesafaris from "./destination/Tailormadesafaris";
import Treckingsafaris from "./destination/Treckingsafaris";
import Wildebeestsafaris from "./destination/Wildebeestsafaris";
import Ndutucalvingitineraries from "./destination/Ndutucalvingitineraries";



import Nairobipark from "./destination/Nairobipark";
import Mountkenya from "./destination/Mountkenya";
import Hellsgate from "./destination/Hellsgate";
//import Sychellesitineraries from "./destination/Sychellesitineraries";
import Tsavowest from "./destination/Tsavowest";
import LakeNakuru from "./destination/LakeNakuru";
import Meru from "./destination/Meru";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">

        {/* NAVBAR */}
        <Navbar />

        <main className="pt-20">

          <Routes>

            {/* HOME */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* MAIN PAGES */}
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/safaris" element={<Safaris />} />
            <Route path="/tourafricablog" element={<Tourafricablog />} />
            <Route path="/faqs"            element={<Faqs />} />
            <Route path="/communitywork" element={<Communitywork />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/contact" element={<Contact />} />

            <Route  path="/Beachholidayssafaris"  element={<Beachholidayssafaris />}/>
          <Route  path="/Birdingsafaris"  element={<Birdingsafaris />}/>
           <Route  path="/Honeymoonsafaris"  element={<Honeymoonsafaris />}/>
          <Route  path="/Photographysafaris"  element={<Photographysafaris />}/>
          <Route  path="/Tailormadesafaris"  element={<Tailormadesafaris />}/>
          <Route  path="/Treckingsafaris"  element={<Treckingsafaris />}/>
          <Route  path="/Wildebeestsafaris"  element={<Wildebeestsafaris />}/>
          <Route  path="/ndutucalvingitineraries"  element={<Ndutucalvingitineraries />}/>


            {/* DESTINATIONS */}
            <Route path="/aberdare" element={<Aberdare />} />
            <Route path="/amboseli" element={<Amboseli />} />
            <Route path="/diani" element={<Diani />} />
            <Route path="/maasaimara" element={<Maasaimara />} />
            <Route path="/mountkilimanjaro" element={<Mountkilimanjaro />} />
            <Route path="/mountkenya" element={<Mountkenya />} />
            <Route path="/ngorongoro" element={<Ngorongoro />} />
            <Route path="/serengeti" element={<Serengeti />} />
            <Route path="/tarangire" element={<Tarangire />} />
            <Route path="/zanzibar" element={<Zanzibar />} />
            <Route path="/nairobipark" element={<Nairobipark />} />
            <Route path="/hellsgate" element={<Hellsgate />} />
            
            <Route path="/tsavowest" element={<Tsavowest />} />
            <Route path="/lakenakuru" element={<LakeNakuru />} />
            <Route path="/meru" element={<Meru />} />

            {/* FALLBACK */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>

          {/* FLOATING WHATSAPP BUTTON */}
          <WhatsAppButton />

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;