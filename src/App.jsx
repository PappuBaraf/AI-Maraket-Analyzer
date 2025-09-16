import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row mb-1">
            <div className="col-12">
              <Header />
            </div>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="row">
                    <div className="col-12">
                      <Slider />
                    </div>
                  </div>

                  <div className="container my-2 gap-5">
                    <div className="row mb-2">
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          imgSrc="/imgs/pic7.webp"
                          title="Artificial Intelligence and Machin Learning "
                          text=" Machine Learning and Artificial Intelligence are two closely related but distinct fields within the broader field of computer science. Machine learning is a part of AI that helps machines learn from data and get better over time without being told exactly what to do."
                          btnText="Explore"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          imgSrc="/imgs/pic6.webp"
                          title="The Impact of Artificial Intelligence "
                          text=" Artificial Intelligence (AI) has been a game changer in recent years, transforming the way we live, work, and interact with the world.
                           It is a kind of technology with the promise of transforming the way the world works.."
                          btnText="Explore"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          imgSrc="/imgs/pic8.jpeg"
                          title="job market by displacing certain roles "
                          text="Artificial intelligence (AI) is reshaping the job market by displacing certain roles while simultaneously creating new opportunities,
                           leading to a complex and evolving employment landscape.."
                          btnText="Explore"
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Products
                          imgSrc="/imgs/pic9.jpeg"
                          title="History of artificial intelligence"
                          text=" The history of AI spans from ancient myths of intelligent beings
                           to modern advancements in machine learning and deep learning, with significant milestones occurring since the mid-20th century.."
                          btnText="Explore"
                        />
                      </div>
                    </div>
                  </div>
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

          <div className="row">
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
