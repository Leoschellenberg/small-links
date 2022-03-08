import { Container } from './styles';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
     <Container>
        <a href="https://www.facebook.com/leonardo.schellenberg" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare size={24} color='#fff'/> 
        </a>
        <a href="https://www.linkedin.com/in/leonardo-martins-schellenberg/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} color='#fff'/>
        </a>
        <a href="https://github.com/Leoschellenberg" target="_blank" rel="noopener noreferrer">
         <FaGithubSquare size={24} color='#fff'/>
        </a>
         
         <Link to="/links">
            <button type='button'>Meus Links</button>
         </Link>
     </Container>
    );
  }