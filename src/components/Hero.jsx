import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import herobg from '../assets/herobg.png';
import { login, signup } from '../assets';
import { supabase } from '../supabaseClient';

const Hero = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    region: '',
    province: '',
    city_town: '',
    birthdate: '',
    sex: '',
    civilstatus: '',
  });
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  const [isUserActive, setIsUserActive] = useState(false);

  useEffect(() => {
    generateRegions(); // Load regions when component mounts
  }, []);

  const toggleLoginForm = () => {
    setShowLogin((prev) => !prev);
    setShowSignup(false);
  };

  const toggleSignupForm = () => {
    setShowSignup((prev) => !prev);
    setShowLogin(false);
  };

  const generateRegions = async () => {
    try {
      const url = 'https://psgc.gitlab.io/api/regions/';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const results = await response.json();
      setRegions(results); // Set regions in state
    } catch (error) {
      console.log(error);
    }
  };

  const generateProvinces = async (selectedRegionCode) => {
    try {
      const url = `https://psgc.gitlab.io/api/regions/${selectedRegionCode}/provinces/`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const results = await response.json();
      setProvinces(results); // Set provinces in state
      setCities([]); // Clear cities when region changes
    } catch (error) {
      console.log(error);
    }
  };

  const generateCities = async (selectedProvinceCode) => {
    try {
      const url = `https://psgc.gitlab.io/api/provinces/${selectedProvinceCode}/cities/`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const results = await response.json();
      setCities(results); // Set cities in state
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert('Please fill out all login fields!');
      return;
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) {
        alert(`Login failed: ${error.message}`);
      } else {
        const { error: updateError } = await supabase
          .from('users')
          .update({ status: true })
          .eq('email', loginData.email);

        if (updateError) {
          console.error('Failed to update user status:', updateError);
        } else {
          setIsUserActive(true);
          alert('Login successful!');
          navigate('/newpage');
        }
        toggleLoginForm();
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (
      !signupData.name ||
      !signupData.region ||
      !signupData.province ||
      !signupData.city_town ||
      !signupData.birthdate ||
      !signupData.sex ||
      !signupData.civilstatus ||
      !signupData.email ||
      !signupData.password ||
      !signupData.confirmPassword
    ) {
      alert('Please fill out all signup fields!');
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Find the region, province, and city names from the selected codes
    const selectedRegion = regions.find(region => region.code === signupData.region)?.name || '';
    const selectedProvince = provinces.find(province => province.code === signupData.province)?.name || '';
    const selectedCity = cities.find(city => city.code === signupData.city_town)?.name || '';

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
          data: {
            full_name: signupData.name,
            region: selectedRegion,
            province: selectedProvince,
            city_town: selectedCity,
            birthdate: signupData.birthdate,
            sex: signupData.sex,
            civil_status: signupData.civilstatus,
          },
        },
      });

      if (error) {
        alert(`Signup failed: ${error.message}`);
      } else {
        const { error: dbError } = await supabase.from('users').insert({
          id: data.user.id,
          email: signupData.email,
          full_name: signupData.name,
          status: true,
          region: selectedRegion,
          province: selectedProvince,
          city_town: selectedCity,
          birthdate: signupData.birthdate,
          sex: signupData.sex,
          civilstatus: signupData.civilstatus,
        });

        if (dbError) {
          console.error('Error inserting user data:', dbError);
          alert('Signup succeeded, but failed to save user details.');
        } else {
          setIsUserActive(true);
          alert('Signup successful! Please log in to proceed.');
          toggleSignupForm();
          toggleLoginForm();
        }
      }
    } catch (err) {
      console.error('Error during signup:', err);
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-tertiary overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-white text-2xl font-bold">Senior Bridge</h1>
          <div className="text-white">
            {isUserActive ? 'Status: Active' : 'Status: Inactive'}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-col justify-between ml-12`}>
        {/* Hero Text */}
        <div className="mt-auto z-10">
          <h1 className={`${styles.heroHeadText} text-yellow-400 font-bold leading-tight`}>EXPERT GUIDANCE</h1>
        </div>
        <div className="mb-32 z-10">
          <p className={`${styles.heroSubText} text-white max-w-md mb-8`}>
            Our mission is to provide exceptional support and resources tailored specifically for seniors,
            ensuring they receive the care and connection they deserve.
          </p>
          <div className="flex gap-4">
            <button
              onClick={toggleLoginForm}
              type="button"
              className="bg-black-200 py-3 px-6 text-white font-bold rounded-full flex items-center hover:bg-blue-900 transition-colors"
            >
              <img src={login} alt="login" className="w-6 h-6 mr-2" />
              LOGIN
            </button>
            <button
              onClick={toggleSignupForm}
              type="button"
              className="bg-blue-900 py-3 px-6 text-white font-bold rounded-full flex items-center hover:bg-blue-700 transition-colors"
            >
              <img src={signup} alt="signup" className="w-6 h-6 mr-2" />
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={herobg}
          alt="Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Login Form */}
      {showLogin && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
          <form onSubmit={handleLoginSubmit} className="bg-white p-8 rounded-lg max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button type="submit" className="bg-blue-900 py-3 px-6 text-white rounded-full w-full">
              Login
            </button>
            <button
              type="button"
              onClick={toggleLoginForm}
              className="text-gray-500 mt-4 w-full text-center"
            >
              Close
            </button>
          </form>
        </div>
      )}

      {/* Signup Form */}
      {showSignup && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
          <form onSubmit={handleSignupSubmit} className="bg-white p-8 rounded-lg max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {/* Region Dropdown */}
            <select
              value={signupData.region}
              onChange={(e) => {
                setSignupData({ ...signupData, region: e.target.value });
                generateProvinces(e.target.value);
              }}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="">Select Region</option>
              {regions.map((region) => (
                <option key={region.code} value={region.code}>
                  {region.name}
                </option>
              ))}
            </select>
            {/* Province Dropdown */}
            <select
              value={signupData.province}
              onChange={(e) => {
                setSignupData({ ...signupData, province: e.target.value });
                generateCities(e.target.value);
              }}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="">Select Province</option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>
            {/* City Dropdown */}
            <select
              value={signupData.city_town}
              onChange={(e) => setSignupData({ ...signupData, city_town: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="">Select City/Town</option>
              {cities.map((city) => (
                <option key={city.code} value={city.code}>
                  {city.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={signupData.birthdate}
              onChange={(e) => setSignupData({ ...signupData, birthdate: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {/* Sex Dropdown */}
            <select
              value={signupData.sex}
              onChange={(e) => setSignupData({ ...signupData, sex: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="">Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {/* Civil Status Dropdown */}
            <select
              value={signupData.civilstatus}
              onChange={(e) => setSignupData({ ...signupData, civilstatus: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="">Select Civil Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button type="submit" className="bg-blue-900 py-3 px-6 text-white rounded-full w-full">
              Sign Up
            </button>
            <button
              type="button"
              onClick={toggleSignupForm}
              className="text-gray-500 mt-4 w-full text-center"
            >
              Close
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Hero;
