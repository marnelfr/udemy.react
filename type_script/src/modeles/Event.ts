export default class Event {
  id: string;
  image: string;
  title: string;
  date: Date;
  description: string;

  constructor(
    title: string,
    image: string,
    description: string,
    date: string,
    id?: string
  ) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.date = new Date(date);
    this.id = id ?? this.date.toISOString();
  }
}
