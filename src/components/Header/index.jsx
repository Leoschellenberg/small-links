import facebookImg from '../../assets/facebook.svg';
import linkedinImg from '../../assets/linkedin.svg'
import { Container } from './styles';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
     <Container>
        <img src={facebookImg} alt="Facebook" /> 
         <img src={linkedinImg} alt="LinkedIn" />
         <Link to="/links">
            <button type='button'>Meus Links</button>
         </Link>
     </Container>
    );
  }