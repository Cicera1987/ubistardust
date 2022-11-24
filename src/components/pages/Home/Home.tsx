
import { useState } from "react";
import { Typography } from "@stardust-ds/react";
import { DataProfessional } from "../../style/type/type";
import { ContainerDados, ContainerGlobal, ContainerHeader } from "./style";

function Home() {
  const menuProfessional: DataProfessional[] = [
    {
      id: 1,
      name: "Luiza F Farias",
      rg: 256655,
      email: "luiza1@gmail.com",
    },
    {
      id: 2,
      name: "Mara Santos",
      rg: 236633,
      email: "mara@gmail.com",
    },
    {
      id: 3,
      name: "Luiz Gustavo",
      rg: 456655,
      email: "gusta@gmail.com",
    },
  ];

  return (
    <>
      <ContainerDados>
        <Typography type="h2" color="#ccc">Profissionais </Typography>
        <ContainerHeader>
          <Typography type="h5" color="#ccc">Nome</Typography>
          <Typography type="h5" color="#ccc">RG</Typography>
          <Typography type="h5" color="#ccc">E-mail</Typography>
        </ContainerHeader>
        {menuProfessional.map((item) => (
          <ContainerGlobal key={item.id}>
            <div>{item.name}</div>
            <div>{item.rg}</div>
            <div>{item.email}</div>
          </ContainerGlobal>
        ))}
      </ContainerDados>
    </>
  );
}

export default Home;
