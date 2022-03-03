import Wave from '../../assets/wave.svg';
import { Container } from './styles';

export default function WaveFooter(){
    return(
        <Container>
            <img src={Wave} alt="Wave" />
        </Container>
    )
}