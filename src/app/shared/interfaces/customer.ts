import { User } from "./user";

export interface Customer {

    user?: User;
    cnpj?: string;
    responsavel_nome?: string;
 	responsavel_telefone?: string;
 	responsavel_celular?: string;
 	responsavel_email?: string;
 	responsavel2_nome?: string;
 	responsavel2_telefone?: string;
 	responsavel2_celular?: string;
    responsavel2_email?: string;
    fk_id_pais?: number;
	fk_id_estado?: number;
	fk_id_regiao?: number;
	fk_id_cidade?: number;
	fk_id_bairro?: number;
	fk_id_logradouro?: string;
    numero?: string;
    complemento_endereco?: string;
    valor_cliente_parecer?: string;
    valor_fornecedor_parecer?: string;
    valor_cliente_negociacao?: string;
    valor_proposto_negociacao?: string;
    valor_negociado_negociacao?: string;
    valor_negociadoC_negociacao?: string; 
	logo?: string;
    data_expiracao?: string;
    

}
