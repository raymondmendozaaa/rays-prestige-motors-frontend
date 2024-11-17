import { useUser } from "./UserContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {username, loading} = useUser();

    if(loading)
        return <div>Loading...</div>;
    if(!username)
        return <Navigate to='/' replace/>;

    return children;

}
export default ProtectedRoute;