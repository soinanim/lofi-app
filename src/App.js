import styles from './App.module.css';
import Header from './components/Header/Header';
import TodayWidget from './components/TodayWidget/TodayWidget';

function App() {
  return (
    <div className={styles.app}>
      <video
        src='/videos/room-night.mp4'
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}></video>
      <Header />
      <TodayWidget />
    </div>
  );
}

export default App;
