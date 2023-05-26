import React from "react";
import { Container, BannerContainer, Banner, FuturePageContainer, CenterContent, FutureCard, FutureImage, FutureText } from "./styles";
import bannerImg from './images/future-image.png';
import { futureTextData } from "../../pageData/futureText";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';

const FuturePage = () => {

    return (
        <FuturePageContainer>
            <BannerContainer>
                <Banner src={bannerImg} alt="Banner" />
            </BannerContainer>

            <CenterContent>
                <h1>Mi futuro</h1>
            </CenterContent>
            
            <CenterContent>                    
                    <FutureCard>
                        <FutureImage src={img1} />
                        <FutureText>{futureTextData.text1}</FutureText>
                    </FutureCard>

                    <FutureCard>
                        <FutureImage src={img2} />
                        <FutureText>{futureTextData.text2}</FutureText>
                    </FutureCard>

                    <FutureCard>
                        <FutureImage src={img3} />
                        <FutureText>{futureTextData.text3}</FutureText>
                    </FutureCard>

                    <FutureCard>
                        <FutureImage src={img4} />
                        <FutureText>{futureTextData.text4}</FutureText>
                    </FutureCard>
            </CenterContent>
        </FuturePageContainer>
    );
}

export default FuturePage;