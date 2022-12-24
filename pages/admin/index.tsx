import { useRouter } from 'next/router';
import Home from '../../components/admin/home/Home';

const AdminPanelPage = () => {
  // temp isAdmin flag
  const isAdmin = false;
  const router = useRouter();
  if (!isAdmin) {
    router.replace('/admin/login');
  }

  return <Home />;
};
export default AdminPanelPage;
