import { FiLink, FiTrash } from 'react-icons/fi';
import { Container, ListItem} from './styles';
import Empty from '../../assets/empty.svg'
import Modal from '../Modal';

import { toast } from 'react-toastify';
import Breadcrumbs from '../Breadcrumbs';

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
    setShowModal(false)
    toast.warning("Link apagado com sucesso!", 
    { autoClose: 2000, 
      theme: "colored"
    })
  }

    return (
      <Container>
        
       <Breadcrumbs />

       { emtyList && (
         <div className='empty-list'>
           <img src={Empty} alt="Sem Links em Lista" />
           <h2>Ops ...você não tem Links salvos!</h2>
         </div>
       )}

       { myLinks.map(link => (
         <ListItem key={link.id}>
            <button className='link' onClick={() => handleOpenLink(link)}>
              <FiLink size={18} color="#fff"/>
              {link.long_url}
            </button>
            <button onClick={() => handleDelete(link.id)}>
              <FiTrash size={20} color="#fff"/>
            </button>
          </ListItem>
       )) }
       
       { showModal && (
         <Modal 
            closeModal={() => setShowModal(false)}
            data={data}
            className="Modal"
         />
       ) }
      </Container>
    );
  }