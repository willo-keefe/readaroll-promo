import React, { useEffect, useState, useContext, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import logo from '../android-chrome-192x192.png';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Nav from './Nav';
import Footer from './Footer';
import AuthContext, { AuthProvider } from './AuthContext';
import CoverGrid from './CoverGrid';

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
          <p className="home-list border-top p-2 py-3">Read through an extensive collection of novels, short stories, articles, and more with custom formatting and a smooth scrolling experience.</p>
        </div>
        <div className="col-sm-4 p-4">
          <h4 className="m-3 sub">Contribute</h4>
          <p className="home-list border-top p-2 py-3">Contribute to the community by giving your annotations on individual pages and reviews on the books.</p>
        </div>
        <div className="col-sm-4 p-4">
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
  const [displayName, setDisplayName] = useState<string>("");
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
          body: JSON.stringify({ username, displayName, email, password, matchingPassword }),
        });
        if (res.ok) {
          setLoading(false);
          MySwal.fire({
            title: "Welcome!",
            text: "You have been registered, welcome! Please check your email to verify your account and begin.",
            icon: "success",
          });
        }
        else {
          setLoading(false);
          MySwal.fire({
            title: "Error",
            text: "There was an error signing up. Try again.",
            icon: "error",
          });
        }
      }
      catch (error: any) {
        console.log(error);
        setLoading(false);
        MySwal.fire({
          title: "Error",
          text: "There was an error signing up. Try again.",
          icon: "error",
        });
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
          <div className="col-sm-12">
            <h4 className="m-1 mt-3">Username (no spaces or capital letters)</h4>
            <input type="text" className="m-3 p-2 w-50 rounded" name="username" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} required />
            <h4 className="m-1 mt-3">Display Name</h4>
            <input type="text" className="m-3 p-2 w-50 rounded" name="displayName" placeholder="Display Name..." value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
            <h4 className="m-1 mt-3">Email</h4>
            <input type="email" placeholder="Email..." name="email" value={email} className="m-3 p-2 w-50 rounded" onChange={(e) => setEmail(e.target.value)} required />
            <h4 className="m-1 mt-3">Password</h4>
            <input type="password" placeholder="********" name="password" className="rounded m-3 w-50 p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <h4 className="m-1 mt-3">Confirm Password</h4>
            <input type="password" placeholder="********" name="matchingPassword" className="rounded m-3 w-50 p-2" value={matchingPassword} onChange={(e) => setMatchingPassword(e.target.value)} required />
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
  const { isAuthenticated, setIsAuthenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      if (data.requiresTwoFactor) {
        navigate('/2fa/challenge', { state: { pendingToken: data.pendingToken } });
        return;
      }
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error", error);
    }
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
          <div className="col-sm-12">
            <h4 className="m-1 mt-3">Email or Username</h4>
            <input type="text" placeholder="Email or Username..." name="email" value={email} className="m-3 p-2 w-50 rounded" onChange={(e) => setEmail(e.target.value)} required />
            <h4 className="m-1 mt-3">Password</h4>
            <input type="password" placeholder="********" name="password" className="rounded m-3 w-50 p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <button className="rounded m-3 p-3 w-25 border-none" type="submit">Login</button>
      </form>
       <Link to="/join" className="m-3 link">Create a New Account Here</Link>
      <Footer />
    </div>
  );
};

interface User {
  id: string;
  username: string;
  display_name: string;
  email: string;
  description: string;
  two_fa_enabled: boolean;
}

const Dashboard: React.FC = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [user, setUser] = useState<User>({
    id: '',
    username: '',
    display_name: '',
    email: '',
    description: '',
    two_fa_enabled: false,
  });
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value ?? '' }));
  };

  useEffect(() => {
    fetch("https://readaroll-backend-production.up.railway.app/me", {
      method: "GET",
      credentials: "include"
    }).then(r => r.json()).then(data => {
      setUser(data);
    }).catch(() => {
      MySwal.fire({
        title: "Error",
        text: "There was an error getting your information, please try reloading the dashboard.",
        icon: "error",
      });
    });
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://readaroll-backend-production.up.railway.app/profile", {
        method: "PATCH",
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: user.description ?? '', displayName: user.display_name ?? '' }),
      });
      if (!res.ok) {
        MySwal.fire({
          title: "Error",
          text: "There was an error saving your profile information. Please try again.",
          icon: "error",
        });
      }
      MySwal.fire({
        title: "Success!",
        text: "Your profile information was saved successfully!",
        icon: "success",
      });
    }
    catch (err: any) {
      MySwal.fire({
        title: "Error",
        text: "There was an error saving your profile information. Please try again.",
        icon: "error",
      });
    }
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
      <h1 className="mx-auto p-2">ReadaRoll Dashboard</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 mt-5 slide-up hidden border border-4 rounded-pill">
        <div className="col-sm-12 p-2">
          <input type="text" name="display_name" className="m-3 p-2 w-50 rounded" style={{ textAlign: 'center' }} value={user.display_name ?? ''} placeholder="Display Name..." onChange={handleFieldChange} />
          <h4 className="m-1 mb-4">{user ? user.username : 'Unknown'}</h4>
          <textarea className="m-1 p-2 w-75 rounded" style={{ textAlign: 'center' }} name="description" placeholder="User Description..." value={user.description ?? ''} onChange={handleFieldChange} />
          <br />
          <button className="rounded m-3 p-3 w-25 border-none" onClick={handleSubmit}>
            Save
          </button>
        </div>
        {!user.two_fa_enabled ? (
          <Link to="/2fa/setup" className="m-3 link">Enable Two Factor Authentication</Link>
        ) : (
          <Link to="/2fa/disable" className="m-3 link">Disable Two Factor Authentication</Link>
        )}
      </div>
      <button className="rounded m-1 mt-5 p-3 w-50 border-none" onClick={() => logout().catch(() => {})}>Logout</button>
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
        MySwal.fire({
          title: "Error",
          text: "The 2FA setup was not successful. Please try again.",
          icon: "error",
        });
      }
      const data = await res.json();
      setQrUrl(data.qrDataUrl);
      setManualKey(data.manuelKey);
      setLoading(false);
      console.log(qrUrl, manualKey);
    }
    catch (err: any) {
      MySwal.fire({
        title: "Error",
        text: "The 2FA setup was not successful. Please try again.",
        icon: "error",
      });
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
        MySwal.fire({
          title: "Error in 2FA Confirmation",
          text: "The 2FA confirmation was not successful. Please try again.",
          icon: "error",
        });
      }
      const data = await res.json();
      setBackupCodes(data.backup_codes);
    }
    catch (err: any) {
      MySwal.fire({
        title: "Error",
        text: "The 2FA confirmation was not successful. Please try again.",
        icon: "error",
      });
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
          <div className="col-sm-12 p-4">
            <h4 className="m-1 mt-3">2FA Enabled</h4>
            <p className="p-2 py-3">Save these backup codes somewhere safe. Each can only be used once.</p>
            <ul style={{ listStyleType: 'none', padding: 10, backgroundColor: 'black', borderRadius: 5, border: '1px solid #dee2e6' }}>
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
        <p className="p-2 py-3"><i className="fa-solid fa-copy" onClick={() => navigator.clipboard.writeText(backupCodes.join('\n'))}></i></p>
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
        <div className="col-sm-12 p-4">
          {!qrUrl ? (
            <button className="rounded m-3 p-3 w-25 border-none" onClick={startSetup} disabled={loading}>
              {loading ? '...' : 'Enable 2FA'}
            </button>
          ) : (
            <div>
              <img src={qrUrl} alt="Scan with Google Authenticator" />
              <p className="p-2 py-3 m-3">Scan this code with Google Authenticator. After that, enter the 6 digit code below: <code>{manualKey}</code></p>
              <input type="text" name="token" inputMode="numeric" className="m-1 p-2 w-25 rounded" maxLength={6} placeholder="6 Digit Code" value={token} onChange={e => setToken(e.target.value)} />
            </div>
          )}
        </div>
      </div>
      <button className="rounded m-3 p-3 w-25 border-none" onClick={confirm}>Confirm</button>
      <Footer />
    </div>
  );
};

const TwoFactorAuthDisable: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  async function disable() {
    try {
      const res = await fetch("https://readaroll-backend-production.up.railway.app/mfa/disable", {
        method: "POST",
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        MySwal.fire({
          title: "Error",
          text: "There was an error disabling 2FA. Please try again.",
          icon: "error",
        });
      }
      MySwal.fire({
        title: "Success",
        text: "Two Factor Authentication has been disabled.",
        icon: "success",
      });
      navigate('/dashboard');
    }
    catch (err: any) {
      MySwal.fire({
        title: "Error",
        text: "There was an error disabling 2FA. Please try again.",
        icon: "error",
      });
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

  return (
    <div className="container text-center slide-up hidden">
      <Nav />
      <h1 className="mx-auto p-2">ReadaRoll Dashboard</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
          <h4 className="m-1 mt-3">Disable Two Factor Authentication</h4>
          <p className="p-2 py-3">Enter the 6 digit code from your authenticator app to disable 2FA.</p>
          <input type="text" name="token" inputMode="numeric" className="m-1 p-2 w-25 rounded" maxLength={6} placeholder="6 Digit Code" value={token} onChange={e => setToken(e.target.value)} />
        </div>
      </div>
      <button className="rounded m-3 p-3 w-25 border-none" onClick={disable}>Disable 2FA</button>
      <Footer />
    </div>
  );
};

interface Props {
  pendingToken: string,
  onSuccess: () => void;
};

function TwoFactorChallenge({ pendingToken, onSuccess }: Props) {
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
        MySwal.fire({
          title: "Error",
          text: "There was an error authenticating your account. Please try again",
          icon: "error",
        });
      }
      onSuccess();
    }
    catch (err: any) {
      MySwal.fire({
        title: "Error",
        text: "There was an error authenticating your account. Please try again.",
        icon: "error",
      });
    }
  }
  return (
    <div className="container text-center slide-up hidden">
      <Nav />
      <h1 className="mx-auto p-2">ReadaRoll</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
          <h4 className="m-1 mt-3">Two Factor Authentication</h4>
          {!useBackup ? (
            <input type="text" name="totpToken" className="m-3 p-2 w-25 rounded" inputMode="numeric" maxLength={6} placeholder="6 digit code from authenticator" value={totpToken} onChange={e => setTotpToken(e.target.value)} />
          ) : (
            <input type="text" name="backupCode" className="m-3 p-2 w-25 rounded" placeholder="XXXXX-XXXXX backup code" value={backupCode} onChange={e => setBackupCode(e.target.value)} />
          )}
          <br />
          <button onClick={submit} className="rounded m-3 mt-4 p-3 w-25 border-none">Verify</button>
          <br />
          <button className="rounded m-3 mt-4 p-3 w-25 border-none" onClick={() => setUsedBackup(v => !v)}>
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
  const { setIsAuthenticated } = useContext(AuthContext);
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
    <TwoFactorChallenge pendingToken={pendingToken} onSuccess={() => {
      setIsAuthenticated(true);
      navigate('/dashboard');
    }} />
  );
};

interface UploadResponse {
  manuscript: {
    id: string;
    storagePath: string;
    contentType: string;
    originalName: string;
  };
  cover: {
    storagePath: string;
    contentType: string;
  };
}

interface FormFields {
  title: string;
  author: string;
  description: string;
  pageCount: string;
}

const ACCEPTED_MANUSCRIPTS = '.pdf,.epub';
const ACCEPTED_COVERS = '.jpg,.jpeg,.png,.webp,.gif';

function formatBytes(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

const Upload: React.FC = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<FormFields>({
    title: '',
    author: '',
    description: '',
    pageCount: '',
  });
  const [manuscript, setManuscript] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const manuscriptInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const xhrRef = useRef<XMLHttpRequest | null>(null);

  const MySwal = withReactContent(Swal);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value ?? '' }));
  };

  const handleManuscriptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      return;
    }
    if (file.size > 100. * 1024 * 1024) {
      MySwal.fire("Your manuscript file is too big. Please submit a file under 100 MB.");
      e.target.value = '';
      return
    }
    setManuscript(file);
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      MySwal.fire("Your cover file is too big. Please submit a file under 10 MB.");
      e.target.value = '';
      return;
    }
    setCover(file);
    const url = URL.createObjectURL(file);
    setCoverPreview(prev => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }
      return url;
    });
  };

  const handleSubmit = () => {
    if (!manuscript) {
      MySwal.fire("You must have a manuscript and a cover file uploaded.");
      return;
    }
    if (!fields.title.trim()) {
      MySwal.fire("A title is required for the work.");
      return;
    }
    setProgress(0);
    setUploading(true);

    const formData = new FormData();
    formData.append('manuscript', manuscript);
    formData.append('title', fields.title.trim());
    formData.append('author', fields.author.trim() || 'Anonymous');
    formData.append('description', fields.description.trim());
    if (cover) {
      formData.append('cover', cover);
    } 
    if (fields.pageCount) {
      formData.append('page_count', fields.pageCount);
    }

    const xhr = new XMLHttpRequest();
    xhrRef.current = xhr;

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        setProgress(Math.round((e.loaded / e.total) * 100));
      }
    });

    xhr.addEventListener('load', () => {
      setUploading(false);
      if (xhr.status === 201) {
        const data: UploadResponse = JSON.parse(xhr.responseText);
        navigate(`/manuscripts/${data.manuscript.id}`);
      }
      else {
        try {
          const data = JSON.parse(xhr.responseText);
          console.error(data.error ?? 'Upload failed');
          MySwal.fire({
            title: "Error",
            text: "Upload failed. Try again.",
            icon: "error",
          });
        }
        catch {
          MySwal.fire({
            title: "Error",
            text: "Upload failed. Try again.",
            icon: "error",
          });
        }
      }
    });

    xhr.addEventListener('error', () => {
      setUploading(false);
      MySwal.fire({
        title: "Error",
        text: "There was a network error. Please try again.",
        icon: "error",
      });
    });

    xhr.addEventListener('abort', () => {
      setUploading(false);
      setProgress(0);
    });

    xhr.open('POST', 'https://readaroll-backend-production.up.railway.app/upload');
    xhr.withCredentials = true;
    xhr.send(formData);
  };

  const handleCancel = () => {
    xhrRef.current?.abort();
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
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
          <div onClick={() => coverInputRef.current?.click()} style={{ cursor: 'pointer', marginBottom: 20, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            {coverPreview ? (
              <img src={coverPreview} alt="Cover Preview" style={{ width: 160, height: 240, objectFit: 'cover' }} />
            ) : (
              <div style={{ width: 160, height: 240, border: '2px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>Click to add cover (800x1200 recommended)</span>
              </div>
            )}
          </div>
          <input ref={coverInputRef} type="file" accept={ACCEPTED_COVERS} onChange={handleCoverChange} style={{ display: 'none' }} />
          <div>
            <button className="rounded m-3 p-3 w-25 border-none" onClick={() => manuscriptInputRef.current?.click()}>
              {manuscript ? manuscript.name : 'Choose manuscript (PDF or EPUB)'}
            </button>
            {manuscript && (
              <span>{formatBytes(manuscript.size)}</span>
            )}
            <input ref={manuscriptInputRef} type="file" accept={ACCEPTED_MANUSCRIPTS} onChange={handleManuscriptChange} style={{ display: 'none' }} />
          </div>
          <div>
            <input className="m-1 p-2 w-50 rounded" type="text" name="title" placeholder="Title" value={fields.title} onChange={handleFieldChange} disabled={uploading} />
            <input className="m-1 p-2 w-50 rounded" type="author" name="author" placeholder="Author" value={fields.author} onChange={handleFieldChange} disabled={uploading} />
            <textarea className="m-1 p-2 w-50 rounded" name="description" placeholder="Description" value={fields.description} onChange={handleFieldChange} disabled={uploading} />
            <input className="m-1 p-2 w-50 rounded" name="pageCount" type="number" placeholder="Page Count" min={1} value={fields.pageCount} onChange={handleFieldChange} disabled={uploading} />
          </div>
          {uploading && (
            <div>
              <div style={{ background: '#eee', borderRadius: 4, overflow: 'hidden', height: 8 }}>
                <div style={{ width: `${progress}%`, height: '100%', background: '#F5F5F5', transition: 'width 0.2s' }} />
              </div>
              <span>{progress}%</span>
              <button className="rounded m-3 p-3 w-25 border-none" onClick={handleCancel}>Cancel</button>
            </div>
          )}
          {!uploading && (
            <button className="rounded m-3 p-3 w-25 border-none" onClick={handleSubmit}>
              Upload
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Library: React.FC = () => {
  const [library, setLibrary] = useState<Cover[]>([]);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch("https://readaroll-backend-production.up.railway.app/users/library", {
      method: "GET",
      credentials: "include"
    }).then(r => {
      if (!r.ok) {
        MySwal.fire({
          title: "Error",
          text: "There was an error getting your library. Please try reloading.",
          icon: "error",
        });
      }
      return r.json();
    }).then(data => {
      setLibrary(data);
    }).catch(() => {
      MySwal.fire({
        title: "Error",
        text: "There was an error getting your library. Please try reloading.",
        icon: "error",
      });
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
      <h1 className="mx-auto p-2">ReadaRoll Library</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        {(library?.length ?? 0) === 0 ? (
          <p className="p-2 py-3">Your library is empty. Start by getting a manuscript!</p>
        ) : (
          library.map((cover) => (
            <div key={cover.id} className="col-sm-6 col-md-4 col-lg-3 p-2">
              <Link to={`/manuscripts/${cover.id}`} className="text-decoration-none text-dark">
                <div className="card h-100" style={{ transition: 'transform 0.1s ease-in-out', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
                  {cover?.cover_path ? (
                    <div className="d-flex justify-content-center">
                      <img src={cover.cover_path} className="card-img-top" alt={`${cover.title} cover`} />
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <div className="card-img-top flex-column bg-light d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                        <span className="m-3">{cover.title}</span>
                        <span className="m-3">{cover.author}</span>
                      </div>
                    </div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{cover.title}</h5>
                    <p className="card-text">{cover.author}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

const CreatorDashboard: React.FC = () => {
  const [manuscripts, setManuscripts] = useState<Cover[]>([]);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch("https://readaroll-backend-production.up.railway.app/users/manuscripts", {
      method: "GET",
      credentials: "include"
    }).then(r => {
      if (!r.ok) {
        MySwal.fire({
          title: "Error",
          text: "There was an error getting your manuscripts. Please try reloading.",
          icon: "error",
        });
      }
      return r.json();
    }).then(data => {
      setManuscripts(data);
    }).catch(() => {
      MySwal.fire({
        title: "Error",
        text: "There was an error getting your manuscripts. Please try reloading.",
        icon: "error",
      });
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
      <h1 className="mx-auto p-2">ReadaRoll Creator Dashboard</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        {manuscripts.length === 0 ? (
          <p className="p-2 py-3">You have not uploaded any manuscripts yet. Start by uploading one!</p>
        ) : (
          manuscripts.map((cover) => (
            <div key={cover.id} className="col-sm-6 col-md-4 col-lg-3 p-2">
              <Link to={`/manuscripts/${cover.id}/edit`} className="text-decoration-none text-dark">
                <div className="card h-100">
                  {cover?.cover_path ? (
                    <img src={cover.cover_path} className="card-img-top" alt={`${cover.title} cover`} />
                  ) : (
                    <div className="card-img-top bg-light d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                      <span className="m-3">{cover.title}</span>
                      <span className="m-3">{cover.author}</span>
                    </div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{cover.title}</h5>
                    <p className="card-text">{cover.author}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
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

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User>({
    id: '',
    username: '',
    display_name: '',
    email: '',
    description: '',
    two_fa_enabled: false,
  });
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch(`https://readaroll-backend-production.up.railway.app/users/${username}`, {
      method: "GET",
      credentials: "include"
    }).then(r => r.json()).then(data => {
      setUser(data);
    }).catch(() => {
      MySwal.fire({
        title: "Error",
        text: "There was an error getting your profile information. Please try reloading.",
        icon: "error",
      });
    })
  }, [username]);

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
      <div className="row px-5 pt-1 m-2 slide-up hidden">
        <div className="col-sm-12 p-1">
          <h4 className="m-1 mb-4">{user.display_name}</h4>
          <h6 className="m-1 mb-4">{user ? user.username : 'Unknown User'}</h6>
          <p className="home-list border-top p-2 py-3">{user.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

interface Cover {
  id: string;
  title: string;
  description: string;
  author: string;
  page_count: number;
  cover_path: string | null;
  rating_avg: number;
  rating_count: number;
};

function StarModal({ isOpen, manuscriptId, currentRating, onClose, onSuccess }: { isOpen: boolean; manuscriptId: string; currentRating: number; onClose: () => void; onSuccess: (ratingAvg: number, ratingCount: number) => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<number>(currentRating ?? 0);
  const [hovered, setHovered] = useState<number>(0);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const MySwal = withReactContent(Swal);

  const activeRating = hovered || selected;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (isOpen) {
      dialog.showModal();
    }
    else {
      dialog.close();
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!selected) {
      MySwal.fire("Please select a rating before submitting.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`https://readaroll-backend-production.up.railway.app/manuscripts/${manuscriptId}/rate`, {
        method: "POST",
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: selected }),
      });
      if (!res.ok) {
        MySwal.fire({
          title: "Error",
          text: "There was an error submitting your rating. Please try again.",
          icon: "error",
        });
      }
      const data = await res.json();
      onSuccess(data.rating_avg, data.rating_count);
      onClose();
    }
    catch {
      MySwal.fire({
        title: "Error",
        text: "There was an error submitting your rating. Please try again.",
        icon: "error",
      });
    }
    finally {
      setSubmitting(false);
    }
  };

  return (
    <dialog ref={dialogRef} onClose={onClose} style={{ border: 'none', borderRadius: 8, padding: 20, backgroundColor: '#222222', width: '400px', textAlign: 'center' }}>
      <h3 className="text-light">Rate this Manuscript</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 24, transition: 'color 0.1s, transform 0.1s', padding: 2 }}
            onClick={() => setSelected(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
          >
            <i className={star <= activeRating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
        <button className="rounded m-2 p-3 border-none" style={{ fontSize: '16px' }} onClick={onClose} disabled={submitting}>
          Close
        </button>
        <button className="rounded m-2 p-3 border-none" style={{ fontSize: '16px' }} onClick={handleSubmit} disabled={submitting || !selected}>
          {submitting ? 'Submitting...' : currentRating ? 'Update Rating' : 'Submit Rating'}
        </button>
      </div>
    </dialog>
  );
}

const Manuscript: React.FC = () => {
  const { manuscriptId } = useParams<{ manuscriptId: string }>();
  const [manuscript, setManuscript] = useState<Cover | null>(null);
  const [showRatingModal, setShowRatingModal] = useState<boolean>(false);
  const [ratingAvg, setRatingAvg] = useState<number>(0);
  const [ratingCount, setRatingCount] = useState<number>(0);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://readaroll-backend-production.up.railway.app/manuscripts/${manuscriptId}`, {
      method: "GET",
      credentials: "include",
    }).then(r => {
      if (!r.ok) {
        MySwal.fire({
          title: "Error",
          text: "There was an error fetching the manuscript.",
          icon: "error",
        });
      }
      return r.json();
    }).then(data => {
      setManuscript(data);
      setRatingAvg(Number(data.rating_avg));
      setRatingCount(data.rating_count);
    }).catch(() => {
      MySwal.fire({
        title: "Error",
        text: "There was an error fetching the manuscript.",
        icon: "error",
      });
    });
  }, []);

  const handleGetManuscript = async () => {
    try {
      const res = await fetch(`https://readaroll-backend-production.up.railway.app/manuscripts/${manuscriptId}/get`, {
        method: "POST",
        credentials: "include",
      });
      if (res.status === 409) {
        MySwal.fire("You already have access to this manuscript.");
        navigate(`/manuscripts/${manuscriptId}/read`);
        return;
      }
      if (!res.ok) {
        MySwal.fire({
          title: "Error Getting Manuscript",
          text: "There was an error retrieving this manuscript. Please try again",
          icon: "error",
        });
        return;
      }
      const data = await res.json();
      MySwal.fire({
        title: "Manuscript Retrieved",
        text: data.message ?? "You have successfully retrieved the manuscript.",
        icon: "success",
      });
      navigate('/library');
    }
    catch (err: any) {
      MySwal.fire({
        title: "Error Getting Manuscript",
        text: "There was an error retrieving this manuscript. Please try again",
        icon: "error",
      });
    }
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
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
          <h4 className="m-1 mb-4">{manuscript?.title}</h4>
          {manuscript?.cover_path ? (
            <div className="d-flex justify-content-center">
              <img src={manuscript.cover_path} alt="Cover" style={{ width: 160, height: 240, objectFit: 'cover' }} />
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: 180, height: 240, border: '2px solid #ccc', margin: '20px' }}>
                <span className="m-1">{manuscript?.title}</span>
                <span className="m-1">{manuscript?.author}</span>
              </div>
            </div>
          )}
          <p className="home-list p-2 py-1">Author: {manuscript?.author}</p>
          <p className="home-list p-2 py-1">Page Count: {manuscript?.page_count}</p>
          <p className="home-list border-top pt-3">{manuscript?.description}</p>
        </div>
      </div>
      <div className="row px-5 slide-up hidden">
        <div className="col-sm-12 p-1">
          <p className="home-list border-top p-2 py-3">Rating: {ratingAvg.toFixed(2)} ({ratingCount} reviews)</p>
          <button className="rounded m-3 p-3 w-25 border-none" onClick={() => setShowRatingModal(true)}>
            {manuscript?.rating_count ? 'Update Rating' : 'Rate'}
          </button>
          <button className="rounded m-3 p-3 w-25 border-none" onClick={handleGetManuscript}>
            Get <i className="fa-solid fa-book"></i>
          </button>
        </div>
      </div>
      <Footer />
      {showRatingModal && manuscript && (
        <StarModal isOpen={showRatingModal} manuscriptId={manuscript.id} currentRating={manuscript.rating_avg} onClose={() => setShowRatingModal(false)} onSuccess={(avg, count) => {
          setRatingAvg(avg);
          setRatingCount(count);
        }} />
      )}
    </div>
  );
};

const EditManuscript: React.FC = () => {
  const { manuscriptId } = useParams<{ manuscriptId: string }>();
  const [manuscript, setManuscript] = useState<Cover | null>(null);
  const [fields, setFields] = useState<FormFields>({
    title: '',
    description: '',
    author: '',
    pageCount: '',
  });
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value ?? '' }));
  };

  useEffect(() => {
    fetch(`https://readaroll-backend-production.up.railway.app/manuscripts/${manuscriptId}`, {
      method: "GET",
      credentials: "include",
    }).then(r => {
      if (!r.ok) {
        MySwal.fire({
          title: "Error",
          text: "There was an error fetching the manuscript.",
          icon: "error",
        });
      }
      return r.json();
    }).then(data => {
      setManuscript(data);
      setFields({
        title: data.title,
        description: data.description,
        author: data.author,
        pageCount: data.page_count
      });
    }).catch(() => {
      MySwal.fire({
        title: "Error",
        text: "There was an error fetching the manuscript.",
        icon: "error",
      });
    });
  }, [manuscriptId]);

  const handleSubmit = async () => {
    if (!fields.title.trim()) {
      MySwal.fire("A title is required for the work.");
      return;
    }
    try {
      const res = await fetch(`https://readaroll-backend-production.up.railway.app/manuscripts/${manuscriptId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) {
        MySwal.fire({
          title: "Error",
          text: "There was an error updating the manuscript.",
          icon: "error",
        });
      }
      MySwal.fire({
        title: "Success!",
        text: "Manuscript updated successfully!",
        icon: "success",
      });
      navigate(`/manuscript/${manuscriptId}`);
    }
    catch (err: any) {
      MySwal.fire({
        title: "Error",
        text: "There was an error updating the manuscript.",
        icon: "error",
      });
    }
  };

  const handleDelete = async () => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone. The manuscript will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://readaroll-backend-production.up.railway.app/manuscripts/${manuscriptId}/remove`, {
          method: "PATCH",
          credentials: "include",
        });
        if (!res.ok) {
          MySwal.fire({
            title: "Error",
            text: "There was an error deleting the manuscript.",
            icon: "error",
          });
        }
        MySwal.fire({
          title: "Success",
          text: "Manuscript deleted successfully.",
          icon: "success",
        });
        navigate('/dashboard/creator');
      }
      catch (err: any) {
        MySwal.fire({
          title: "Error",
          text: "There was an error deleting the manuscript.",
          icon: "error",
        });
      }
    }
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
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
          <input className="m-1 p-2 w-50 rounded" type="text" name="title" placeholder="Title" value={manuscript?.title} onChange={handleFieldChange} />
          <input className="m-1 p-2 w-50 rounded" type="author" name="author" placeholder="Author" value={manuscript?.author} onChange={handleFieldChange} />
          <textarea className="m-1 p-2 w-50 rounded" name="description" placeholder="Description" value={manuscript?.description} onChange={handleFieldChange} />
          <input className="m-1 p-2 w-50 rounded" name="pageCount" type="number" placeholder="Page Count" min={1} value={manuscript?.page_count} onChange={handleFieldChange} />
          <button className="rounded m-3 p-3 w-25 border-none" onClick={handleSubmit}>
            Update Manuscript
          </button>
        </div>
      </div>
      <button className="rounded m-3 p-3 w-25 border-none" onClick={handleDelete}>
        Delete Manuscript
      </button>
      <Footer />
    </div>
  );
};

interface PreviewSection {
  content: string;
}

interface PreviewData {
  format: 'epub' | 'pdf';
  sections: PreviewSection[];
}

const Reader: React.FC = () => {
  const { manuscriptId } = useParams<{ manuscriptId: string }>();
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`readaroll-backend-production.up.railway.app/manuscripts/${manuscriptId}/preview`, {
          method: "GET",
          credentials: "include",
        });
        if (res.status === 403) {
          const data = await res.json();
          if (data.owned) {
            MySwal.fire({
              title: "Owner",
              text: "You already own this manuscript",
              icon: "info",
            });
            navigate('/library');
            return;
          }
        }
        if (!res.ok) {
          MySwal.fire({
            title: "Error",
            text: "There was an error getting the preview.",
            icon: "error",
          });
          return;
        }
        const data = await res.json();
        setPreview(data);
      }
      catch {
        MySwal.fire({
          title: "Error",
          text: "There was an error getting this preview",
          icon: "error",
        });
      }
      finally {
        setLoading(false);
      }
    }
    load();
  }, [manuscriptId, navigate]);

  if (loading) {
    return <p>Loading Preview...</p>
  }
  if (!preview || preview.sections.length === 0) {
    return <p>No preview available</p>;
  }
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '32px 16px' }}>
      <div style={{
        background: '#fffbe6',
        border: '1px solid #f0e68c',
        borderRadius: 8,
        padding: '12px 16px',
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span>You are reading a preview — {preview.sections.length} sections shown</span>
        <button onClick={() => navigate(`/manuscripts/${manuscriptId}`)}>
          Get full manuscript
        </button>
      </div>

      {preview.sections.map((section, i) => (
        <div
          key={i}
          dangerouslySetInnerHTML={{ __html: section.content }}
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 18,
            lineHeight: 1.8,
            color: '#1a1a1a',
            marginBottom: 48,
            paddingBottom: 48,
            borderBottom: i < preview.sections.length - 1 ? '1px solid #eee' : 'none',
          }}
        />
      ))}

      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <p style={{ marginBottom: 16 }}>You've reached the end of the preview</p>
        <button onClick={() => navigate(`/manuscripts/${manuscriptId}`)}>
          Get full manuscript
        </button>
      </div>
    </div>
  );
};

const Explore: React.FC = () => {
  const [trending, setTrending] = useState<Cover[]>([]);
  const [recent, setRecent] = useState<Cover[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const [library, setLibrary] = useState<Cover[]>([]);
  const [search, setSearch] = useState<string>('');
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch("https://readaroll-backend-production.up.railway.app/trending", {
      method: "GET",
      credentials: "include",
    }).then(r => {
      if (!r.ok) {
        MySwal.fire({
          title: "Error Getting Certain Content",
          text: "There was an error fetching the most recent trending text.",
          icon: "info",
        });
        return r.json();
      }
    }).then(data => {
      setTrending(data);
    }).catch(() => {
      MySwal.fire({
        title: "Error Getting Certain Content",
        text: "There was an error fetching the most recent trending text.",
        icon: "info",
      });
    });

    fetch("https://readaroll-backend-production.up.railway.app/recent", {
      method: "GET",
      credentials: "include",
    }).then(r => {
      if (!r.ok) {
        MySwal.fire({
          title: "Error Getting Certain Content",
          text: "There was an error fetching recently added texts.",
          icon: "info",
        });
      }
      return r.json();
    }).then(data => {
      setRecent(data);
    }).catch(() => {
      MySwal.fire({
        title: "Error Getting Certain Content",
        text: "There was an error fetching the most recently added text.",
        icon: "info",
      });
    })
  }, []);

  const loadMore = async () => {
    const res = await fetch(`https://readaroll-backend-production.up.railway.app/collection?cursor=${cursor || 0}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setLibrary(prev => [...prev, data.manuscripts]);
    setCursor(data.nextCursor);
  };

  const runSearch = async () => {
    if (!search || search.trim().length === 0) {
      return;
    }
    const res = await fetch(`https://readaroll-backend-production.up.railway.app/search?query=${encodeURIComponent(search)}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setLibrary(data);
    setCursor(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runSearch();
    }
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
      <h1 className="mx-auto p-2">Explore ReadaRoll</h1>
      <img src={logo} alt="ReadaRoll Logo" className="m-3 logo" title="ReadaRoll Logo" width={100} height={100} />
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
          <input type="text" className="m-4 p-2 rounded border w-75 d-inline" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
          <p className="d-inline w-25"><i className="fas fa-search" onClick={runSearch}></i></p>
        </div>
      </div>
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
          <h4 className="m-3">Trending</h4>
          {(trending?.length ?? 0) > 0 && (
            <CoverGrid covers={trending} />
          )}
        </div>
      </div>
      <div className="row px-5 pt-2 m-2 slide-up hidden">
          <h4 className="m-3">Recently Added</h4>
          {(recent?.length ?? 0) > 0 && (
            <CoverGrid covers={recent} />
          )}
      </div>
      <div className="row px-5 pt-2 m-2 slide-up hidden">
        <div className="col-sm-12 p-4">
            <h4 className="m-3">Library</h4>
            {(library?.length ?? 0) > 0 && (
              <CoverGrid covers={library} />
            )}
            {cursor && (
              <button className="rounded m-3 p-3 border-none" onClick={loadMore}>Load More</button>
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
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
          <Route path="/dashboard/creator" element={<CreatorDashboard />} />
          <Route path="/2fa/setup" element={<TwoFactorAuthSetup />} />
          <Route path="/2fa/disable" element={<TwoFactorAuthDisable />} />
          <Route path="/2fa/challenge" element={<TwoFactorAuthChallenge />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/library" element={<Library />} />
          <Route path="/users/:username" element={<Profile />} />
          <Route path="/manuscripts/:manuscriptId" element={<Manuscript />} />
          <Route path="/manuscripts/:manuscriptId/edit" element={<EditManuscript />} />
          <Route path="/manuscripts/:manuscriptId/read" element={<Reader />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;