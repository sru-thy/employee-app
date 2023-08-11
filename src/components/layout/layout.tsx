import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <section>
      <Sidebar></Sidebar>
      <div className='sectionRight'>
        <Header></Header>
        <div className='feed'>{children}</div>
      </div>
    </section>
  );
};

export default Layout;
