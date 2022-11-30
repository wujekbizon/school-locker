import MainHeader from './MainHeader';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};
export default Layout;
