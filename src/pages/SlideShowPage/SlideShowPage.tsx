// src/components/SlideShowPage/SlideShowPage.tsx

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image2 from "../../assets/Image2.jpeg";
import image3 from "../../assets/Image3.jpeg";
import image4 from "../../assets/Image4.jpeg";
import { Container } from "./styles";

const slideImages = [image2, image3, image4];

export function SlideShowPage() {
  return (
    <Container>
      <h2>Lançamentos</h2>
      <Slide easing="ease">
        {slideImages.map((image, index) => (
          <div className="each-slide" key={index}>
            <div style={{ 
              backgroundImage: `url(${image})`, 
              height: '300px', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}>
              <span>Slide {index + 2}</span>
            </div>
          </div>
        ))}
      </Slide>
    </Container>
  );
}
