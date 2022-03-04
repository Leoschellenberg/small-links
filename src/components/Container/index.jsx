import { useState } from 'react'

import Logo from '../../assets/logo.svg';
import { FiLink } from 'react-icons/fi';
import { Container } from './styles';
import Modal from '../Modal';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';


export default function Header() {

    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false)


    async function handleShortLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link
            })
            setData(response.data);

            saveLink('@chaveEncurtaLink', response.data);

            setShowModal(true)
        }catch{
            alert("Ops parece que algo deu errado!")
        } finally{
            setLink('');
        }
       
    }

    return (
     <Container>
         <div className='logo'>
            <img src={Logo} alt="Logo" />
            <h1>Small Link</h1>
            <span>Cole abaixo seu link para encurtar 👇</span>
         </div>
        
         <div className='area-input'>
            <div className='input'>
                <FiLink size={24} color='#fff'/>
                <input type="text" 
                placeholder='Cole aqui seu link'
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />
            </div>

            <button onClick={handleShortLink}>Encurtar Link</button>
         </div>

         { showModal && (
            <Modal 
                closeModal={() => setShowModal(false)}
                data={data}
            />
         ) }
        
     </Container>

    
    );
  }