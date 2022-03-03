import facebookImg from '../../assets/facebook.svg';
import linkedinImg from '../../assets/linkedin.svg';
import github from '../../assets/github.svg'
import { Container } from './styles';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
     <Container>
        <a href="https://www.facebook.com/leonardo.schellenberg" target="_blank" rel="noopener noreferrer">
         <img src={facebookImg} alt="Facebook" /> 
        </a>
        <a href="https://www.linkedin.com/in/leonardo-martins-schellenberg/" target="_blank" rel="noopener noreferrer">
         <img src={linkedinImg} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Leoschellenberg" target="_blank" rel="noopener noreferrer">
         <img src={github} alt="LinkedIn" />
        </a>
         
         <Link to="/links">
            <button type='button'>Meus Links</button>
         </Link>
     </Container>
    );
  }