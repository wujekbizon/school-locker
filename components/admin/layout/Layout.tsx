import './Layout.scss';
import '../../../styles/light.scss';
import Sidebar from './Sidebar';
import MainHeader from './MainHeader';
import { useContext } from 'react';
// import { LightModeContext } from '../../context/lightModeContext';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  // const { state } = useContext(LightModeContext);
  return (
    <>
      {/* <div className={state.lightMode ? 'light' : ''}> */}
      <MainHeader />
      <div className="container">
        <Sidebar />
        <main className="home">{children}</main>
      </div>
      {/* </div> */}
    </>
  );
};
export default Layout;
