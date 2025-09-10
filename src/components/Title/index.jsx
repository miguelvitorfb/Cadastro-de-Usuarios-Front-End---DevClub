import {Title} from './styles'


function DefaultTitle({children,theme,...props}){

    return(
        <Title>{children}</Title>
    )
}

export default DefaultTitle