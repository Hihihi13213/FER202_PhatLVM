import Carousel from "react-bootstrap/Carousel";

function Slide() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slide1.jpg"
                    alt="Slide 1"
                    height="450"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slide2.jpg"
                    alt="Slide 2"
                    height="450"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/slide3.jpg"
                    alt="Slide 3"
                    height="450"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;