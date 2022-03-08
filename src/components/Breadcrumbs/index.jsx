import { Container } from './styles';

import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

export default function Breadcrumbs() {

    const { pathname } = useLocation();
    const pathName = pathname.split('/').filter( x => x);

    return (
     <Container>
        <Link to='/'>Home</Link>
        <FiChevronRight  size={18} color="#fff"/>
        <span>{pathName}</span>
     </Container>
     
    );
  }