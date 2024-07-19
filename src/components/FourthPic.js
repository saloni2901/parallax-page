import { Parallax } from 'react-parallax';
import beachFour from "../assets/img4.jpg";

const background = () => (
    <Parallax className='image' bgImage={beachFour} bgImageAlt="Last picture of a beach." strength={1200}>
        <div className='content'>
            <span className='imageText'>
                Private pools and villa!
            </span>
        </div>
    </Parallax>
);
export default background; 