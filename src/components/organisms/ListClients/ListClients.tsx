import { Typography } from '@stardust-ds/react'
import { ContainerDados, ContainerHeader, ContainerGlobal } from '../../pages/Home/style';
import { IClients } from "../../style/type/type";

  export const menuClients: IClients[] = [
    {
      value: "1",
      label: "Costuras",
      CPF: "025.365.604-68",
      email: "casa@hotmail.com",
    },
    {
      value: "2",
      label: "MenusPelo",
      CPF: "025.365.604-33",
      email: "depil@hotmail.com",
    },
    {
      value: "3",
      label: "Manicure",
      CPF: "325.365.604-78",
      email: "unhas@hotmail.com",
    },
    {
      value: "4",
      label: "Casa amor",
      CPF: "555.365.604-33",
      email: "love@hotmail.com",
    },
    {
      value: "5",
      label: "Farias café",
      CPF: "359.365.604-51",
      email: "cafe@hotmail.com",
    },
  ];

function ListClients() {


  return (
    <>
      <ContainerDados>
        <Typography type="h2" color="#ccc">
          Clientes
        </Typography>
        <ContainerHeader>
          <Typography type="h5" color="#ccc">
            Nome
          </Typography>
          <Typography type="h5" color="#ccc">
            CPF
          </Typography>
          <Typography type="h5" color="#ccc">

            E-mail
          </Typography>
        </ContainerHeader>
        {menuClients.map((item) => (
          <ContainerGlobal key={item.value}>
            <div>{item.label}</div>
            <div>{item.CPF}</div>
            <div>{item.email}</div>
          </ContainerGlobal>
        ))}
      </ContainerDados>
    </>
  );
}

export default ListClients