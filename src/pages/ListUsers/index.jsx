import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import api from '../../services/api'
import { useEffect,useState } from 'react'
import Title from '../../components/Title'
import { CardUsers, Container,ContainerUsers,TrashIcon,AvatarUser } from '../ListUsers/styles'
import Trash from '../../assets/trash.svg'
import { useNavigate } from 'react-router-dom'

function listUsers() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
            console.log(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id){
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)
    }

    return (
        <Container>
            <TopBackground></TopBackground>
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
            {users.map(user => (
                <CardUsers key={user.id}>
                <AvatarUser src={`https://avatar.iran.liara.run/public/boy?username=${user.id}`}/>
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div>
                <TrashIcon src={Trash} onClick={()=>deleteUsers(user.id)}/>
                </CardUsers>
            ))}
            </ContainerUsers>
            <Button type='button' onClick={()=>navigate('/')}>Retornar ao formulário</Button>
        </Container>
    )
}

export default listUsers