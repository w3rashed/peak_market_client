import { Outlet } from "react-router-dom";
import NavMenu from "../Pages/NavMenu/NavMenu";
import Footer from "../SharePage/Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
