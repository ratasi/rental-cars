export type FiltersCarsProps = {
  setFilters: (filterName: string, filterValue: string) => void;
  clearFilters: () => void;
  filters: {
    type: string;
    transmission: string;
    engine: string;
    people: string;
  };
};
