import { Button, Typography, useTheme } from "@stardust-ds/react";
import {
  ContainerDados,
  ContainerHeader,
  ContainerGlobal,
} from "../../pages/Home/style";
import { DataDespesas } from '../../style/type/type';


const ListDespesas = () => {
      const { brand } = useTheme();
  const menuDespesas: DataDespesas[] = [
    {
      id: 1,
      name: "Aluguel Mensal",
      price: 1200,
    },
    {
      id: 1,
      name: "Energia eletrica",
      price: 850,
    },
    {
      id: 1,
      name: "Agua e esgoto",
      price: 500,
    },
    {
      id: 1,
      name: "Contabilidade",
      price: 900,
    },
    {
      id: 1,
      name: "Impostos Mes ",
      price: 3000,
    },
  ];


  return (
    <>
      <ContainerDados>
        <Typography type="h2" color="#ccc">
          Despesas
        </Typography>
        <ContainerHeader>
          <Typography type="h5" color="#ccc">
            Tipo de Dispesa
          </Typography>
          <Typography type="h5" color="#ccc">
            Valor
          </Typography>
        </ContainerHeader>
        {menuDespesas.map((item) => (
          <ContainerGlobal key={item.id}>
            <div style={{ paddingRight: "5em" }}>{item.name}</div>
            <div style={{ paddingRight: "3em" }}>R$ {item.price},00</div>
          </ContainerGlobal>
        ))}
        <div style={{ marginTop: "30px", paddingLeft: "180px" }}>
          <Button bgColor={brand.color.primary.medium}>
            Cadastrar Despesa
          </Button>
        </div>
      </ContainerDados>
    </>
  );
};

export default ListDespesas