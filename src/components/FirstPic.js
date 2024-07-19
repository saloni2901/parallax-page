import { Parallax } from 'react-parallax';
import beachOne from "../assets/img1.jpg";

const background = () => (
    <Parallax className='image' bgImage={beachOne} bgImageAlt="First picture of a beach." strength={1200}>
        <div className='content'>
            <span className='imageText'>
                Welcome To The Maldives Stunning Beaches!
            </span>
        </div>
    </Parallax>
);
export default background; 