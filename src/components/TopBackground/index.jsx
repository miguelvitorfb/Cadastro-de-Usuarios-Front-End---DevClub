import { TopBackground } from "./styles"
import UsersImage from '../../assets/users.png'

function DefaultTopBackground({children,...props}){


    return(
        <TopBackground><img src={UsersImage} alt="Imagem-Usuários" /></TopBackground>
    )

    
}

export default DefaultTopBackground