import { Typography } from '@stardust-ds/react'
import {
  ContainerDados,
  ContainerHeader,
  ContainerGlobal,
} from "../../pages/Home/style";
import { DataDespesas } from '../../style/type/type';


const ListDespesas = () => {
  const menuDespesas: DataDespesas[] = [
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
          Despesas
        </Typography>
        <ContainerHeader>
          <Typography type="h2" color="#ccc">
            Tipo de Serviço prestado
          </Typography>
          <Typography type="h2" color="#ccc">
            Valor do serviço
          </Typography>
        </ContainerHeader>
        {menuDespesas.map((item) => (
          <ContainerGlobal key={item.id}>
            <div style={{ paddingRight: "10em" }}>{item.name}</div>
            <div style={{ paddingRight: "6em" }}>R$ {item.price},00</div>
          </ContainerGlobal>
        ))}
      </ContainerDados>
    </>
  );
};

export default ListDespesas