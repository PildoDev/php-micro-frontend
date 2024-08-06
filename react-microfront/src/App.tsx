// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./assets/components/welcome/welcome";
import NotFound from "./assets/components/not-found/not-found";
import Characters from "./assets/components/characters/characters";
import Locations from "./assets/components/locations/locations";
import Episodes from "./assets/components/episodes/episodes";

function App() {
    // return (
    //   <div>
    //     <Welcome />
    //     <RickNMorty />
    //   </div>
    // );
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
