import './App.css';
import Footer from './components/shared/footer/footer';
import Navbar from './components/shared/navbar/navbar';
import Whatsapp from './components/shared/whatsapp/whatsapp';
import Router from './router/router';
import Snniper from './components/pages/home/components/snniper/snniper';
import { useEffect, useState } from 'react';

function App() {

  let [loading, setLoaading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoaading(false), 5000);
  }, [])
  if (loading) { return <Snniper /> }

  return (
    <>
      <Navbar />
      <Whatsapp />
      <Router />
      <Footer />
    </>
  )
}

export default App;
