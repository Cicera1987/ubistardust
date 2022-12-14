import "../../../App.css";
import {
  FaTh,
  FaUserAlt,
  FaBars,
  FaIdCardAlt,
  FaRegChartBar,
  FaShoppingBag

} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/home",
      name: "Profissionais",
      icon: <FaUserAlt />,
    },
    {
      path: "/listClients",
      name: "Clientes",
      icon: <FaIdCardAlt />,
    },
    {
      path: "/ListDespesas",
      name: "Despesas",
      icon: <FaRegChartBar />,
    },
    {
      path: "/ListServices",
      name: "Serviços",
      icon: <FaShoppingBag />,
    },



  ]
  return (
    <div className="container">
      <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
          <h2 style={{ display: isOpen ? "block" : "none" }} className="logo">Controle</h2>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className='link_text'>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar