interface Card {
  _id?: string;
  title?: string;
  text?: string;
  imageUrl?: string;
  name?: string;
  area?: string;
  phone?: string;
  email?: string;
  type: "news" | "rent";
}
