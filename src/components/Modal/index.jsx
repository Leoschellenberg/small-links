import { Container, Header } from './styles';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function Modal({ closeModal, data }) {
    
    async function copyLink(){
        await navigator.clipboard.writeText(data.link);
        alert("URL Copiada com sucesso")
    }

    return (
     <Container>
        <Header>
            <h1>Link encurtado</h1>
            <button onClick={closeModal}>
               <FiX size={28} color="#9561ED"/>
            </button>
        </Header>
        
        <span>{data.long_url}</span>
        <button onClick={copyLink}>
            {data.link}
            <FiClipboard size={20} color="#fff"/>
        </button>
     </Container>
    );
  }