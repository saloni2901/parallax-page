import { Parallax } from 'react-parallax';
import beachTwo from "../assets/img2.jpg";

const background = () => (
    <Parallax className='image' bgImage={beachTwo} bgImageAlt="Second picture of a beach." strength={1200}>
        <div className='content'>
            <span className='imageText'>
                Come on a vacation with your loved ones!
            </span>
        </div>
    </Parallax>
);
export default background; 