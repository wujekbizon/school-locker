export type Items = {
  id: number;
  product: string;
  description: string;
};

export type Pages = {
  page: string;
  items?: Items[];
  links: {
    idTag?: 'one' | 'two' | 'three' | 'all';
    label: string;
    title?: string;
    icon: JSX.Element;
    url: string;
  }[];
};
