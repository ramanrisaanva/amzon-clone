import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function slider() {
        return (
            <Carousel showThumbs={false} showStatus={false}>
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