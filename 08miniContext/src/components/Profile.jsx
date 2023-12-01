import { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    
    const { user } = useContext(UserContext);
    
    if (!user)  return <h2>Please login</h2>
    

    return (
        <div>
            <h2>Welcome { user.username }</h2>
        </div>
    )
}

export default Profile