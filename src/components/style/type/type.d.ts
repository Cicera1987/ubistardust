export interface DataProfessional {
    id: number;
    name: string;
    rg: number;
    cargo: string;
    email: string
}

export interface IClients {
    value: string;
    label: string;
    CPF: string;
    email: string
}

export interface DataDespesas {
    id: number;
    name: string;
    price: number;
}

export interface DataServices {
    label: string;
    price: number;
    value: string

}