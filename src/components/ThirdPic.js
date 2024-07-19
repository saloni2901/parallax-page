import { Parallax } from 'react-parallax';
import beachThree from "../assets/img3.jpg";

const background = () => (
    <Parallax className='image' bgImage={beachThree} bgImageAlt="Third picture of a beach." strength={1200}>
        <div className='content'>
            <span className='imageText'>
                Enjoy the breathtaking view!
            </span>
        </div>
    </Parallax>
);
export default background; 