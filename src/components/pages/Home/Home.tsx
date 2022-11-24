
import { useState } from "react";
import { Typography } from "@stardust-ds/react";
import { DataProfessional } from "../../style/type/type";
import { ContainerDados, ContainerGlobal, ContainerHeader } from "./style";

function Home() {
  const menuProfessional: DataProfessional[] = [
    {
      id: 1,
      name: "Luiza F Farias",
      rg: 256355,
      cargo: "Analista Financeiro",
      email: "luiza_fa@gmail.com",
    },
    {
      id: 2,
      name: "Mara Santos",
      rg: 236633,
      cargo: "Analista Contábil",
      email: "mara_san@gmail.com",
    },
    {
      id: 3,
      name: "Luiz  Gustavo",
      rg: 456655,
      cargo: "Analista Jurídico",
      email: "gustavo_lu@gmail.com",
    },
  ];

  return (
    <>
      <ContainerDados>
        <Typography type="h2" color="#ccc">Profissionais</Typography>
        <ContainerHeader>
          <Typography type="h5" color="#ccc">Nome</Typography>
          <Typography type="h5" color="#ccc"> RG </Typography>
          <Typography type="h5" color="#ccc">Cargo</Typography>
          <Typography type="h5" color="#ccc"> E-mail</Typography>
        </ContainerHeader>
        {menuProfessional.map((item) => (
          <ContainerGlobal key={item.id}>
            <div>{item.name}</div>
            <div>{item.rg}</div>
            <div>{item.cargo}</div>
            <div>{item.email}</div>
          </ContainerGlobal>
        ))}
      </ContainerDados>
    </>
  );
}

export default Home;
