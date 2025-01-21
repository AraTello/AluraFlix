import { Link } from "react-router-dom"

function HeaderLinks({url, children}){
    return(
        <Link to={url} style={{textDecoration: 'none'}}>
            {children}
        </Link>
    )
}

export default HeaderLinks