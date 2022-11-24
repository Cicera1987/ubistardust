import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/molecules/Sidebar/Sidebar'
import ListHeaderProfessional from '../components/organisms/listHeaderProfessional/ListHeaderProfessional'
import ListProfessional from '../components/organisms/ListProfessional/ListProfessional'

import Dashbord from '../components/pages/Dashbord/Dashbord'
import Home from '../components/pages/Home/Home'

const Routers = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/listHeaderProfessional" element={<ListHeaderProfessional />} />
          <Route path="/listProfessional" element={<ListProfessional />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>

  )
};

export default Routers;