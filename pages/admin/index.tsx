import dynamic from 'next/dynamic';

const DynamicHome = dynamic(() => import('../../components/admin/home/Home'), {
  loading: () => <p className="dynamic-loader">Loading Admin Panel...</p>,
});

const DynamicLogin = dynamic(
  () => import('../../components/admin/login/Login'),
  {
    loading: () => <p className="dynamic-loader">Loading....</p>,
  }
);

const AdminPanelPage = () => {
  // temp isAdmin flag
  const isAdmin = false;

  return <>{isAdmin ? <DynamicHome /> : <DynamicLogin />}</>;
};
export default AdminPanelPage;
