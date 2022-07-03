import '../style/navbar.css';
import Navbar from "./Navbar";
import RandomMovies from "./RandomMovies";

export default function MainPage() {
    return (
      <div className='main_page'>
        <Navbar />
        <RandomMovies />
      </div>
  );
}
