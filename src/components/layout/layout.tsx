import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './layout.css';
import Subheader from '../subheader/subheader';

const Layout = ({ subheaderProps, children }) => {
  return (
    <section>
      <Sidebar></Sidebar>
      <div className='sectionRight'>
        <Header></Header>
        <div className='feed'>
          <Subheader {...subheaderProps}></Subheader>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
