import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import "./styles/global.css";

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      
      <main className="content-area">
        <Login />
      </main>

      <Footer />
    </div>
  );
}

export default App
