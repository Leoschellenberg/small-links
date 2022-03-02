import { FiChevronLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, ListItem } from './styles';
import Empty from '../../assets/empty.svg'
import Modal from '../Modal';

import { useState, useEffect } from 'react';

import { getLinksSave, deleteLink } from '../../services/storeLinks';

export default function LinksContainer() {

  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emtyList, setEmtyList] = useState(false);

  useEffect(() => {
      async function getLinks(){
        const result = await getLinksSave('@chaveEncurtaLink')

        if(result.length === 0){
          setEmtyList(true);
        }

        setMyLinks(result);
      }
      getLinks();
  }, [])

  function handleOpenLink(link){
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id);

    if(result.length === 0){
      setEmtyList(true);
    }

    setMyLinks(result);
  }

    return (
      <Container>
       <div className="links-header">
         <Link to="/">
          <FiChevronLeft size={38} color="#fff"/>
         </Link>
         <h1>Meus Links</h1>
       </div>

       { emtyList && (
         <div className='empty-list'>
           
           <img src={Empty} alt="Sem Links em Lista" />
           <h2>Você não tem Links salvos!</h2>
         </div>
       )}

       { myLinks.map(link => (
         <ListItem key={link.id}>
            <button className='link' onClick={() => handleOpenLink(link)}>
              <FiLink size={18} color="#fff"/>
              {link.long_url}
            </button>
            <button onClick={() => handleDelete(link.id)}>
              <FiTrash size={24} color="#fff"/>
            </button>
          </ListItem>
       )) }
       
       { showModal && (
         <Modal 
            closeModal={() => setShowModal(false)}
            data={data}
         />
       ) }
      </Container>
    );
  }