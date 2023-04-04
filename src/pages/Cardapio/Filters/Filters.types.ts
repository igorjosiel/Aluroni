import filters from './filters.json';

export interface IFiltersProps {
  filter: number | null,
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export type IOption = typeof filters[0];