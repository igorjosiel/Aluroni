import React from "react";

export interface IOption {
  name: string,
  value: IOrdinationOptions,
};

export type IOrdinationOptions = '' | 'porcao' | 'qtdPessoas' | 'preco';

export interface IOrdinationProps {
  ordination: IOrdinationOptions,
  setOrdination: React.Dispatch<React.SetStateAction<IOrdinationOptions>>
}