import '../style/navbar.css';
import { Link } from "react-router-dom";
import '../style/inAndOutPage.css';

export default function FarewellPage() {
    return (
        <div className='farewell_page'>
            <img src={'https://i.ytimg.com/vi/EgXdAexnEFY/maxresdefault.jpg'} alt='Bye' className='bye_image'/>;
            <Link to="/">
                <button className='btn_farewell'>
                    Oh, no! I want to go back!
                </button>
            </Link>
        </div>
    );
}

