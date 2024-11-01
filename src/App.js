import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Footer from "./components/Footer/Footer";
import { Component } from "react";
import YoutubeVideos from "./components/YoutubeVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IphonePics from "./components/IphonePics";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />,
                <YoutubeVideos />
              </>
            }
          />
          <Route path="/iphone" element={<IphonePics />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
