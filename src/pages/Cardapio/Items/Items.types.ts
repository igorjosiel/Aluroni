import { IOrdinationOptions } from '../Ordination/Ordination.types';

export type IOrdinationType = 'size' | 'serving' | 'price';

export interface IItemsProps {
  searchEngine: string;
  filter: number | null;
  ordination: IOrdinationOptions;
}