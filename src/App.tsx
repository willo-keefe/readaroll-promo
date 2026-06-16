import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import logo from '../android-chrome-192x192.png';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Nav from './Nav';
import Footer from './Footer';
import AuthContext, { AuthProvider } from './AuthContext';

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
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={125} height={125} />
      <div className="row pt-2 m-2 slide-up hidden">
        <div className="col-sm-4 p-4 info-box">
          <h4 className="m-3 sub">Read</h4>
          <p className="home-list border-top p-2 py-3">Read through an extensive collection of novels, short stories, articles, and more with custom formatting and a smooth scrolling experience.</p>
        </div>
        <div className="col-sm-4 p-4 info-box">
          <h4 className="m-3 sub">Contribute</h4>
          <p className="home-list border-top p-2 py-3">Contribute to the community by giving your annotations on individual pages and reviews on the books.</p>
        </div>
        <div className="col-sm-4 p-4 info-box">
          <h4 className="m-3 sub">The Mission</h4>
          <p className="home-list border-top p-2 py-3">Our mission is to create a seamless reading experience for our users while also creating a stronger and more genuine community around reading and discussion. It's like a big book club!</p>
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
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={125} height={125} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 pt-3">
          <h2 className="m-3">How does ReadaRoll Work?</h2>
          <p className="home-list">ReadaRoll lets you discover new writing and connect with others in a setting that is similar to social media.</p>
          <p className="home-list">Make an account, choose a book, and scroll through the book, seeing the communities feedback on each page.</p>
          <p className="home-list">ReadaRoll makes reading not only far easier, but it makes it a social experience.</p>
          <p className="home-list"><strong>ReadaRoll is primarily a mobile app. So download it on your app store today for the best experience!</strong></p>
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
            <p className="home-list">It brings our team great pain to see reading novels, articles, and other types of writing lose popularity around the world. We want to bring it back into focus.</p>
            <p className="home-list">ReadaRoll brings something new with every page read, and it will make any reader or non reader engaged with extremely valuable content.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Join: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [match, setMatch] = useState<string>("");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
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

  const join = async () => {
    if (password === match) {
      try {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);

        const res = await fetch("https://readaroll-backend-production.up.railway.app/register", {
          method: "POST",
          body: formData
        });
        if (res.ok) {
          MySwal.fire("You have been registered, welcome! Please check your email to verify your account and begin.");
        }
        else {
          MySwal.fire("There was an error signing up. Try again.");
        }
      }
      catch (error) {
        console.log(error);
        MySwal.fire("There was an error signing up.");
      }
    }
    else {
      MySwal.fire("Your passwords do not match");
    }
  };
  return (
    <div className="container text-center slide-up hidden">
      <Nav />
      <h1 className="mx-auto p-2">ReadaRoll</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={125} height={125} />
      <form onSubmit={join}>
      <div className="row px-5 pt-2 m-2 slide-up hidden">
          <div className="col-sm-12 info-box border-top">
            <h4 className="m-1 mt-3">Username</h4>
            <input type="text" className="m-3 p-2 w-25 rounded" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} required />
            <h4 className="m-1 mt-3">Email</h4>
            <input type="email" placeholder="Email..." value={email} className="m-3 p-2 w-25 rounded" onChange={(e) => setEmail(e.target.value)} required />
            <h4 className="m-1 mt-3">Password</h4>
            <input type="password" placeholder="********" className="rounded m-3 w-25 p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <h4 className="m-1 mt-3">Confirm Password</h4>
            <input type="password" placeholder="********" className="rounded m-3 w-25 p-2" value={match} onChange={(e) => setMatch(e.target.value)} required />
          </div>
      </div>
      <button className="rounded m-3 p-3 w-25" type="submit">Join ReadaRoll</button>
      </form>
      <Link to="/login" className="m-3 link">Login</Link>
      <Footer />
    </div>
  );
};

const Login: React.FC = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
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
     <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={125} height={125} />
      <form onSubmit={() => login(email, password)}>
        <div className="row px-5 pt-2 m-2 slide-up hidden">
          <div className="col-sm-12 info-box">
            <h4 className="m-1 mt-3">Email</h4>
            <input type="email" placeholder="Email..." value={email} className="m-3 p-2 w-25 rounded" onChange={(e) => setEmail(e.target.value)} required />
            <h4 className="m-1 mt-3">Password</h4>
            <input type="password" placeholder="********" className="rounded m-3 w-25 p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <button className="rounded m-3 p-3 w-25 border-none" type="submit">Login</button>
      </form>
       <Link to="/join" className="m-3 link">Create a New Account Here</Link>
      <Footer />
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
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
      <h1 className="mx-auto p-2">ReadaRoll Dashboard</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={125} height={125} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4 info-box">
          <h4 className="m-1 mt-3">Username</h4>
          <p className="border-top p-2 py-3"></p>
        </div>
      </div>
      <button className="rounded m-3 p-3 w-25 border-none" onClick={logout}>Logout</button>
      <Footer />
    </div>
  );
};
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
