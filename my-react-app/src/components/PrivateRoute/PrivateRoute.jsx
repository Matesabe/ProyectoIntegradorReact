import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({children}) => {
    const userData = useSelector((state) => state.userSlice.userData);
    if (!userData || !userData.token) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default PrivateRoute;