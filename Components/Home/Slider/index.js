import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './style.module.css'
function slider() {
        return (
            <Carousel showThumbs={false} showStatus={false} className={styles.custom_carousel} autoPlay={true}>
                <div>
                    <img src="slider-1.jpg" />
                </div>
                <div>
                    <img src="slider-2.jpg" />
                </div>
                <div>
                    <img src="slider-3.jpg" />
                </div>
            </Carousel>
        );
    }

export default slider;