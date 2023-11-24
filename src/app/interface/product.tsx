interface Rating {
  rate: number;
  count: number;
}

interface Product {
  name?: string | undefined;
  area?: string | undefined;
  phone?: string | undefined;
  email?: string | undefined;
  _id: string;
  title: string;
  text: string;

  imageUrl: string;
}
