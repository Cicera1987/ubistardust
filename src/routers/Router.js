import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/molecules/Sidebar/Sidebar'
import ListClients from '../components/organisms/ListClients/ListClients'
import ListDespesas from '../components/organisms/ListDespesas/ListDespesas'
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
        </Routes>
      </Sidebar>
    </BrowserRouter>

  )
};

export default Routers;