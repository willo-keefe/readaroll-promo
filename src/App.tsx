import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from '../android-chrome-192x192.png';
import Nav from './Nav';
import Footer from './Footer';

const Home: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="container text-center slide-up hidden">
      <Nav />
      <h1 className="mx-auto p-2">ReadaRoll</h1>
      <h4 className="m-3 sub">A New Way to Learn.</h4>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row pt-2 m-2 slide-up hidden">
        <div className="col-sm-4 p-4">
          <h4 className="m-3 sub">Read</h4>
          <p className="home-list border-top p-2 py-3">Read through an extensive collection of novels, short stories, articles, and more with custom formatting and a smooth vertical scrolling experience.</p>
        </div>
        <div className="col-sm-4 p-4">
          <h4 className="m-3 sub">Contribute</h4>
          <p className="home-list border-top p-2 py-3">Contribute to the community by giving your annotations on individual pages and reviews on the books.</p>
          <p className="home-list border-top p-2 py-3">Upload your own writings to share with the community and receive feedback. Optionally, upload premium manuscripts and join our pool of premium content contributors.</p>
        </div>
        <div className="col-sm-4 p-4">
          <h4 className="m-3 sub">The Mission</h4>
          <p className="home-list border-top p-2 py-3">Our mission is to create a seamless reading experience for our users while also creating a stronger and more genuine community around reading and discussion.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const About: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="container slide-up hidden text-center">
      <Nav />
      <h1 className="mx-auto p-2">ReadaRoll</h1>
      <h4 className="m-3 sub">A New Way to Learn.</h4>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 pt-3">
          <h2 className="m-3">How does ReadaRoll Work?</h2>
          <p className="home-list">ReadaRoll lets you discover new writing and connect with others in a setting that is similar to social media.</p>
          <p className="home-list">Make an account, choose a piece, and scroll through it, seeing the communities feedback on each page.</p>
          <p className="home-list">ReadaRoll makes reading not only far easier, but it makes it a social experience.</p>
          <p className="home-list"><strong>ReadaRoll is primarily a mobile app. So download it on your app store soon for the best experience!</strong></p>
        </div>
      </div>
      <div className="row px-5 pt-4 m-3 slide-up hidden">
        <div className="col-sm-12 border-top pt-3">
          <h2 className="m-3">Contribute to the Community</h2>
          <p className="home-list">Contribute to the community by giving feedback on writing. Make comments, like pages, and give reviews on books frequently.</p>
          <p className="home-list">Coming soon will be a feature where you can upload your writing and have it be apart of the platform.</p>
        </div>
      </div>
      <div className="row px-5 pt-4 m-3 slide-up hidden">
        <div className="col-sm-12 border-top pt-3">
          <h2 className="m-3">Why Choose ReadaRoll?</h2>
            <p className="home-list">It brings our team great pain to see the reading of novels, articles, and other types of writing lose popularity around the world. We want to bring it back into focus.</p>
            <p className="home-list">ReadaRoll brings something new with every page, and it will make any reader or non reader engaged with extremely valuable content.</p>
        </div>
      </div>
      <div className="row px-5 pt-4 m-3 slide-up hidden">
        <div className="col-sm-12 border-top pt-3">
          <h2 className="m-3">Subscribe to ReadaRoll Premium</h2>
          <p className="home-list">Get access to exclusive content, unlimited annotations, an unlimited network, and additional features by subscribing to ReadaRoll Premium. Enhance your reading and writing experience with our premium offerings.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const NotFound: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-up");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="container text-center slide-up hidden">
      <Nav />
      <h1 className="mx-auto p-2">ReadaRoll</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
          <h4 className="m-1 mt-3">404 - Page Not Found</h4>
          <p className="p-2 py-3">The page you are looking for does not exist.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;