import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
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
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
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
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
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
  const [matchingPassword, setMatchingPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
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

  const join = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (password === matchingPassword) {
      try {
        const res = await fetch("https://readaroll-backend-production.up.railway.app/register", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password, matchingPassword }),
        });
        if (res.ok) {
          setLoading(false);
          MySwal.fire("You have been registered, welcome! Please check your email to verify your account and begin.");
        }
        else {
          setLoading(false);
          MySwal.fire("There was an error signing up. Try again.");
        }
      }
      catch (error) {
        console.log(error);
        setLoading(false);
        MySwal.fire("There was an error signing up.");
      }
    }
    else {
      setLoading(false);
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
          <div className="col-sm-12 info-box">
            <h4 className="m-1 mt-3">Username</h4>
            <input type="text" className="m-3 p-2 w-25 rounded" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} required />
            <h4 className="m-1 mt-3">Email</h4>
            <input type="email" placeholder="Email..." value={email} className="m-3 p-2 w-25 rounded" onChange={(e) => setEmail(e.target.value)} required />
            <h4 className="m-1 mt-3">Password</h4>
            <input type="password" placeholder="********" className="rounded m-3 w-25 p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <h4 className="m-1 mt-3">Confirm Password</h4>
            <input type="password" placeholder="********" className="rounded m-3 w-25 p-2" value={matchingPassword} onChange={(e) => setMatchingPassword(e.target.value)} required />
          </div>
      </div>
      <button className="rounded m-3 p-3 w-25" type="submit" disabled={loading}>{loading ? '...' : 'Join ReadaRoll'}</button>
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

  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };
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
      <form onSubmit={handleLogin}>
        <div className="row px-5 pt-2 m-2 slide-up hidden">
          <div className="col-sm-12 info-box">
            <h4 className="m-1 mt-3">Email or Username</h4>
            <input type="text" placeholder="Email or Username..." value={email} className="m-3 p-2 w-25 rounded" onChange={(e) => setEmail(e.target.value)} required />
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
  const [user, setUser] = useState<{ email: string, username: string, avatar_url: string} | null>(null);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    fetch("https://readaroll-backend-production.up.railway.app/me", {
      method: "GET",
      credentials: "include"
    }).then(r => r.json()).then(data => {
      setUser(data);
    }).catch(error => {
      console.error('There was an error fetching the user', error);
      MySwal.fire("There was an error getting your information, please try reloading the dashboard.");
    });
  }, []);

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
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4 info-box">
          <h4 className="m-1 mb-4">{user ? user.username : 'Unknown'}</h4>
          <Link to="/2fa/setup" className="link">Enable Two Factor Authentication</Link>
        </div>
      </div>
      <button className="rounded m-3 p-3 w-25 border-none" onClick={logout}>Logout</button>
      <Footer />
    </div>
  );
};

const TwoFactorAuthSetup: React.FC = () => {
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [manualKey, setManualKey] = useState<string | null>(null);
  const [token, setToken] = useState<string>('');
  const [backupCodes, setBackupCodes] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const MySwal = withReactContent(Swal);

  async function startSetup() {
    setLoading(true);
    try {
      const res = await fetch("https://readaroll-backend-production.up.railway.app/mfa/setup", {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        console.error("Error setting up 2fa");
        MySwal.fire("The 2FA setup was not successful. Please try again.");
      }
      const data = await res.json();
      setQrUrl(data.qrDataUrl);
      setManualKey(data.manuelKey);
      setLoading(false);
      console.log(qrUrl, manualKey);
    }
    catch (err: any) {
      console.error('2FA error', err);
      MySwal.fire("The 2FA setup was not successful. Please try again.");
      setLoading(false);
    }
  }

  async function confirm() {
    try {
      const res = await fetch("https://readaroll-backend-production.up.railway.app/mfa/verify", {
        method: "POST",
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        console.error("Error in 2FA setup.");
      }
      const data = await res.json();
      setBackupCodes(data.backup_codes);
    }
    catch (err: any) {
      console.error('2FA error', err);
      MySwal.fire("The 2FA confirmation was not successful. Please try again.");
    }
  }

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

  if (backupCodes) {
    return (
      <div className="container text-center slide-up hidden">
        <Nav />
        <h1 className="mx-auto p-2">ReadaRoll Dashboard</h1>
        <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
        <div className="row px-5 pt-2 m-2 slide-up hidden">
          <div className="col-sm-12 p-4 info-box">
            <h4 className="m-1 mt-3">2FA Enabled</h4>
            <p className="p-2 py-3">Save these backup codes somewhere safe. Each can only be used once.</p>
            <ul>
              {backupCodes.map(c => (
                <li key={c}>
                  <code>
                    {c}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="container text-center slide-up hidden">
      <Nav />
      <h1 className="mx-auto p-2">ReadaRoll Dashboard</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4 info-box">
          {!qrUrl ? (
            <button className="rounded m-3 p-3 w-25 border-none" onClick={startSetup} disabled={loading}>
              {loading ? '...' : 'Enable 2FA'}
            </button>
          ) : (
            <div>
              <img src={qrUrl} alt="Scan with Google Authenticator" />
              <p className="p-2 py-3 m-3">Scan this code with Google Authenticator. After that, enter the 6 digit code below: <code>{manualKey}</code></p>
              <input type="text" inputMode="numeric" className="m-1 p-2 w-25 rounded" maxLength={6} placeholder="6 Digit Code" value={token} onChange={e => setToken(e.target.value)} />
            </div>
          )}
        </div>
      </div>
      <button className="rounded m-3 p-3 w-25 border-none" onClick={confirm}>Confirm</button>
      <Footer />
    </div>
  );
};

interface Props {
  pendingToken: string,
  onSuccess: () => void;
};

async function TwoFactorChallenge({ pendingToken, onSuccess }: Props) {
  const [totpToken, setTotpToken] = useState<string>('');
  const [backupCode, setBackupCode] = useState<string>('');
  const [useBackup, setUsedBackup] = useState<boolean>(false);
  const MySwal = withReactContent(Swal);

  async function submit() {
    try {
      const res = await fetch("https://readaroll-backend-production.up.railway.app/mfa/challenge", {
        method: "POST",
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pendingToken, ...(useBackup ? { backupCode } : { totpToken })}),
      });
      if (!res.ok) {
        MySwal.fire("There was an error authenticating your account. Please try again");
      }
      onSuccess();
    }
    catch (err: any) {
      console.error('2FA error', err);
      MySwal.fire("There was an error authenticating your account. Please try again.");
    }
  }

  return (
    <div className="container text-center slide-up hidden">
      <Nav />
      <h1 className="mx-auto p-2">ReadaRoll</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4 info-box">
          <h4 className="m-1 mt-3">Two Factor Authentication</h4>
          {!useBackup ? (
            <input type="text" className="m-3 p-2 w-25 rounded" inputMode="numeric" maxLength={6} placeholder="6 digit code from authenticator" value={totpToken} onChange={e => setTotpToken(e.target.value)} />
          ) : (
            <input type="text" className="m-3 p-2 w-25 rounded" placeholder="XXXXX-XXXXX backup code" value={backupCode} onChange={e => setBackupCode(e.target.value)} />
          )}
          <button onClick={submit} className="rounded m-3 p-3 w-25 border-none">Verify</button>
          <button onClick={() => setUsedBackup(v => !v)}>
            {useBackup ? 'Use authenticator app instead' : 'Use a backup code'}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

interface LocationState {
  pendingToken?: string;
};

const TwoFactorAuthChallenge: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;
  const pendingToken = state?.pendingToken;

  useEffect(() => {
    if (!pendingToken) {
      navigate('/login');
    }
  }, [pendingToken, navigate]);

  if (!pendingToken) {
    return null;
  }

  return (
    <TwoFactorChallenge pendingToken={pendingToken} onSuccess={() => navigate('/dashboard')} />
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
          <Route path="/2fa/setup" element={<TwoFactorAuthSetup />} />
          <Route path="/2fa/challenge" element={<TwoFactorAuthChallenge />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
