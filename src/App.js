import logo from './logo.svg';
import './App.css';
import video from './media/glasses.mp4';
import Clubpass from './media/clubpass.png';
import QRScan from './media/qrscan.jpg';
import Chart from './media/chart.jpg';
import { useEffect, useRef, useState } from 'react';

function App() {

  const videoRef = useRef(null);

  const [count, setCount] = useState(0);
  const [boxTranslate, setBoxTranslate] = useState(0);
  const [boxScale, setBoxScale] = useState(0);
  const [boxRotate, setBoxRotate] = useState(0);

  useEffect(() => {
    videoRef.current.playbackRate = 0.6;
  }, []);

  // Ogni 10 secondi voglio che sectionBox1 e sectionBox2 vadano su, e poi dopo altyri 10 secondi voglio che tornino giù
  useEffect(() => {
    const interval = setInterval(() => {
      if (count % 2 === 0) {
        setBoxTranslate(-206);
        setBoxScale(1);
        setBoxRotate(90);
      } else {
        setBoxTranslate(0);
        setBoxScale(0);
        setBoxRotate(0);
      }
      setCount(count + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [count]);


  return (
    <div className="App">
      <img src={Clubpass} alt="Clubpass" style={{ position: "absolute", top: 0, left: 40, width: "20%", minWidth: "300px", maxWidth: "400px", borderRadius: "10px", margin: "auto", marginBottom: 0 }} />

      <video ref={videoRef} loop autoPlay muted style={{
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <hr style={{ position: "absolute", top: "50%", left: 0, width: 600, margin: 0, border: 0, borderTop: "1px solid white" }} />
      <p style={{ color: "white", position: "absolute", left: 20, top: "50%" }}>Forniamo un modo nuovo di vivere gli eventi,<br /> una nuova esperienza per organizzatori e clienti</p>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "end", alignItems: "end" }}>
        <div className='section-box' style={{ margin: "40px", overflow: 'hidden', height: '210px' }}>
          <div className='section' style={{ transform: `translateY(${boxTranslate}px) rotateX(${boxRotate}deg)` }}>
            <img src={QRScan} alt="QRScan" style={{ width: 250, borderRadius: "10px" }} />
            <div style={{ marginLeft: 20, width: 250, height: 150 }}>
              <h2>Codice QR</h2>
              <hr style={{ width: "100%", margin: 0, border: 0, borderTop: "1px solid white" }} />
              <p>Scansione facile e veloce</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='white'><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
          </div>
          <div className='section' style={{ transform: `translateY(${boxTranslate}px) rotateX(${boxRotate - 90}deg)` }}>
            <img src={Chart} alt="Chart" style={{ width: 250, borderRadius: "10px" }} />
            <div style={{ marginLeft: 20, width: 250, height: 150 }}>
              <h2>Dati in tempo reale</h2>
              <hr style={{ width: "100%", margin: 0, border: 0, borderTop: "1px solid white" }} />
              <p>Forniamo statistiche in tempo reale sull'andamento dei tuoi eventi</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='white'><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "40px", marginTop: 0,  width: 590 }}>
          <button className='feed-button'>Richiedi una demo</button>
          <button className='feed-button'>Contattaci</button>
        </div>
      </div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
