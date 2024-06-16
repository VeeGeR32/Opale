import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <nav></nav>
        <Outlet />
        <footer>
            <p>&copy; 2021</p>
        </footer>
    </>
  )
};

export default Layout;
