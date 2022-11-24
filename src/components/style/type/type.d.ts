export interface DataProfessional {
    id: number;
    name: string;
    rg: number;
    cargo: string;
    email: string
}

export interface Clients {
    id: number;
    name: string;
    CPF: string;
    email: string
}

export interface DataDespesas {
    id: number;
    name: string;
    price: number;
}

export interface DataServices {
    id: number;
    name: string;
    price: number;
}