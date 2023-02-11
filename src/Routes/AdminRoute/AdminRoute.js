import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hook/useAdmin';

const AdminRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (isAdminLoading) {
        return <Loading />
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' />;
};

export default AdminRoute;