import Home from '../../components/admin/home/Home';
import Login from '../../components/admin/login/Login';

const AdminPanelPage = () => {
  // temp isAdmin flag
  const isAdmin = false;

  return <>{isAdmin ? <Home /> : <Login />}</>;
};
export default AdminPanelPage;
