import react, {useRef} from "react";
import { useSelector } from "react-redux";
import { Container, DivImage, Container2, DivTitle, DivDate , DivButtons} from "./styled";
import certification from '../../assets/images/certificate-hardware-fundations.png'
import { IoExpand } from "react-icons/io5";


export default function CardCertification() {
    const { currentColorConfig } = useSelector((state) => state.theme);
    const expandContainerRef = useRef(null);

const handleHoverImage = () => {
    expandContainerRef.current.classList.toggle("visble");

}

    return (
    <Container colorConfig={currentColorConfig}>
        <DivImage onMouseEnter={handleHoverImage} onMouseLeave={handleHoverImage}>
             <div className="expand-container" ref={expandContainerRef}>
                <IoExpand color="black" size={50}/>
            </div>
            <img src={certification} alt=""/>
            
            

        </DivImage>
        <Container2>
        <span style={{color: "rgb(85, 82, 82)", textIndent: "25px", fontSize: "11pt", marginTop: "5px", fontWeight: "700"}}>CERTIFICADO</span>
        <DivTitle colorConfig={currentColorConfig}><h3>Fundamentos do Hardaware do Computador</h3></DivTitle>
        <DivDate colorConfig={currentColorConfig}>
            <p style={{fontSize: "12pt", fontWeight: '400'}}>Cisco Networking Academy</p>
            <p style={{fontSize: "12pt" , fontWeight: '400'}}>26 Fevereiro 2025</p>
            </DivDate>

        </Container2>
    </Container>
    )
}