    export interface ReceitaFederal {
        atividade_principal: AtividadePrincipal[];
        data_situacao: string;
        complemento: string;
        tipo: string;
        nome: string;
        abertura: string;
        telefone: string;
        atividades_secundarias: AtividadesSecundaria[];
        qsa: Qsa[];
        situacao: string;
        bairro: string;
        logradouro: string;
        numero: string;
        cep: string;
        municipio: string;
        porte: string;
        natureza_juridica: string;
        uf: string;
        cnpj: string;
        ultima_atualizacao: Date;
        status: string;
        fantasia: string;
        email: string;
        efr: string;
        motivo_situacao: string;
        situacao_especial: string;
        data_situacao_especial: string;
        capital_social: string;
        extra: Extra;
        billing: Billing;
    }

    interface AtividadePrincipal {
        code: string;
        text: string;
    }

    interface AtividadesSecundaria {
        code: string;
        text: string;
    }

    interface Qsa {
        nome: string;
        qual: string;
    }

    interface Extra {
    }

    interface Billing {
        free: boolean;
        database: boolean;
    }


