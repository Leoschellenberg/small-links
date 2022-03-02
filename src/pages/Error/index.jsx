import React from 'react'

import facebookImg from '../../assets/404.svg';
import { Container } from './styles';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
     <Container>
        <img src={facebookImg} alt="Facebook" />

            <Link to="/" className='link'>
                    <FiChevronLeft size={38} color="#9561ED"/>
                    Voltar para Home
            </Link>
     </Container>
    );
  }