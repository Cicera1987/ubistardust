import { Typography, Button, useTheme } from '@stardust-ds/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContainerDados, ContainerGlobal, ContainerHeader } from '../../pages/Home/style';
import { DataServices } from '../../style/type/type';

  export const menuServices: DataServices[] = [
    {
      value: "1",
      label: "Consultoria Financeira",
      price: 1200,
    },
    {
      value: "2",
      label: "Consultoria Fiscal Cont",
      price: 1390,
    },
    {
      value: "3",
      label: "Consultoria Jurídica Dir",
      price: 2000,
    },
  ];

const ListServices = () => {
const { brand } = useTheme();
const[toggle, setTogle] = useState<Boolean>(false)
const navigate = useNavigate()


function addServices(){
  setTogle(!toggle)
  navigate("/addservices")
}

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
          <ContainerGlobal key={item.value}>
            <div style={{ paddingRight: "10em" }}>{item.label}</div>
            <div style={{ paddingRight: "6em" }}>R$ {item.price},00</div>
          </ContainerGlobal>
        ))}
        <div style={{ marginTop: "30px", paddingLeft: "22em" }}>
          <Button onClick={addServices} bgColor={brand.color.primary.medium}>
            Cadastrar Serviço
          </Button>
        </div>
      </ContainerDados>
    </>
  );
};

export default ListServices