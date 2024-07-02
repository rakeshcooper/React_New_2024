import Propstype from "prop-types"
function UsergreetCondition(props){
    
    const welcome = <h2>Welcome {props.name}</h2>
    const notlogged = <h2>Please login {props.user}</h2>
    return(
         props.isLoggedin ? welcome : notlogged
    )
}

UsergreetCondition.prototype = {
    name: Propstype.string,
    isLoggedin: Propstype.bool
}

// UsergreetCondition.defaultProps = {
//     user : "User",
//     isLoggedin: false
// }

export default UsergreetCondition