import { Typography } from '@stardust-ds/react';
import React from 'react'
import { ContainerDados, ContainerGlobal, ContainerHeader } from '../../pages/Home/style';
import { DataServices } from '../../style/type/type';

const ListServices = () => {
  const menuServices: DataServices[] = [
    {
      id: 1,
      name: "Consultoria Financeira",
      price: 1200
    },
    {
      id: 1,
      name: "Consultoria Fiscal Cont",
      price: 1390
    },
    {
      id: 1,
      name: "Consultoria Jurídica Dir",
      price: 2000
    },
  ];


  return (
    <>
      <ContainerDados>
        <Typography type="h2" color="#ccc">
          Serviços
        </Typography>
        <ContainerHeader>
          <Typography type="h5" color="#ccc">
            Tipo de Serviço prestado
          </Typography>
          <Typography type="h5" color="#ccc">
            Valor do serviço
          </Typography>
        </ContainerHeader>
        {menuServices.map((item) => (
          <ContainerGlobal key={item.id}>
            <div style={{ paddingRight: "10em" }}>{item.name}</div>
            <div style={{ paddingRight: "6em" }}>R$ {item.price},00</div>
          </ContainerGlobal>
        ))}
      </ContainerDados>
    </>
  )
};

export default ListServices