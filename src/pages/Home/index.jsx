import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ContainerInputs, Form, Input, InputLabel } from './styles'
import UsersImage from '../../assets/users.png'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import  Title  from '../../components/Title'

function Home() {
const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

const handleClick = async() => {
  await registerNewUser();
  navigate('/lista-de-usuarios');
};

const navigate = useNavigate()

 async function registerNewUser(){
 const data = await api.post('/usuarios',{
    email: inputEmail.current.value,
    age: parseInt(inputAge.current.value),
    name: inputName.current.value
  })
    console.log(data)
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="Imagem-Usuários" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
          
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input ref={inputName} type='text' placeholder="Nome do usuário" />
            </div>

            <div>
              <InputLabel>Idade<span>*</span></InputLabel>
              <Input ref={inputAge} type='number' placeholder="Idade do usuário" />
            </div>
           
          </ContainerInputs>

            <div style={{width:'100%'}}>
              <InputLabel>Email<span>*</span></InputLabel>
              <Input ref={inputEmail} type='email' placeholder="E-mail do usuário" />
            </div>

          

          <Button type='button' onClick={handleClick} theme='primary' >Cadastrar Usuário</Button>
        
         <Button type='button' onClick={()=>navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
      </Form>

    </Container>
  )
}


export default Home