import {
  Button,
  Input,
  Select,
  Typography,
  useTheme,
} from "@stardust-ds/react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ContainerDados, ContainerGlobal } from "../../pages/Home/style";
import { DataServices, IClients } from "../../style/type/type";
import { menuClients } from "../ListClients/ListClients";
import { menuServices } from "./ListServices";

const AddServices = () => {
  const [servico, setServico] = useState<string[]>([]);
  const [valor, setValor] = useState<number>(Number);
  const [client, setClient] = useState<string[]>([]);
  const { brand } = useTheme();

  function handleServerces() {
    if (menuClients && valor && menuServices) {
      return toast.success("Tarefa cadastrada com sucesso!");
    }
  }
console.log(valor);

  return (
    <form action="" onSubmit={handleServerces}>
      <ContainerDados>
        <ToastContainer
          autoClose={2000}
          pauseOnHover={false}
          position="bottom-left"
        />
        <Typography type="h2" color="#ccc">
          Cadastro de Serviços
        </Typography>
        <ContainerGlobal>
          <Select
            options={menuClients}
            placeholder="Clientes"
            label="Selecione o Cliente"
          />
          <Select
            options={menuServices}
            placeholder="Serviços"
            label="Selecione o tipo de serviço"
          />
          <Input
            type="number"
            isFullWidth
            placeholder="Valor"
            label="Valor do Serviço"
            value={valor}
            onChange={(e) => setValor(e.target.valueAsNumber)}
          />
          <Button
            style={{ marginTop: "1.5em" }}
            bgColor={brand.color.primary.medium}
            type="submit"
          >
            Cadastrar
          </Button>
        </ContainerGlobal>
      </ContainerDados>
    </form>
  );
};

export default AddServices;
