import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/molecules/Sidebar/Sidebar'
import ListClients from '../components/organisms/ListClients/ListClients'
import AddDespesas from '../components/organisms/ListDespesas/AddDespesas'
import ListDespesas from '../components/organisms/ListDespesas/ListDespesas'
import AddServices from '../components/organisms/Serviços/AddServices'
import ListServices from '../components/organisms/Serviços/ListServices'
import Dashbord from '../components/pages/Dashbord/Dashbord'
import Home from '../components/pages/Home/Home'



const Routers = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/listservices' element={<ListServices />} />
          <Route path="/listClients" element={<ListClients />} />
          <Route path="/listDespesas" element={<ListDespesas />} />
          <Route path="/adddespesas" element={<AddDespesas/>}/>
          <Route path='/addservices'element={<AddServices/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>

  )
};

export default Routers;