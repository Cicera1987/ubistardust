import { Typography } from '@stardust-ds/react'
import { ContainerDados, ContainerHeader, ContainerGlobal } from '../../pages/Home/style';
import { Clients } from '../../style/type/type';

function ListClients() {
  const menuClients: Clients[] = [
    {
      id: 1,
      name: "Fernando Ribeiro",
      CPF: "025.365.604-68",
      email: "fernando@hotmail.com"
    },
    {
      id: 1,
      name: "Felipe Ribeiro",
      CPF: "025.365.604-33",
      email: "felipe@hotmail.com"
    },
    {
      id: 1,
      name: "Alessandra Lucinda",
      CPF: "325.365.604-78",
      email: "lucinda@hotmail.com"
    },
    {
      id: 1,
      name: "Carlos Jose Ribeiro",
      CPF: "555.365.604-33",
      email: "carlo@hotmail.com"
    },
    {
      id: 1,
      name: "Silvano da Silva",
      CPF: "359.365.604-51",
      email: "silvanoo@hotmail.com"
    },
  ];


  return (
    <>
      <ContainerDados>
        <Typography type="h2" color="#ccc"> Clientes</Typography>
        <ContainerHeader>
          <Typography type="h5" color="#ccc">Nome</Typography>
          <Typography type="h5" color="#ccc"> CPF </Typography>
          <Typography type="h5" color="#ccc"> E-mail</Typography>
        </ContainerHeader>
        {menuClients.map((item) => (
          <ContainerGlobal key={item.id}>
            <div>{item.name}</div>
            <div>{item.CPF}</div>
            <div>{item.email}</div>
          </ContainerGlobal>
        ))}
      </ContainerDados>
    </>
  )
}

export default ListClients