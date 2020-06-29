export class Booking {
  id: number;
  userId: number;
  locationId: number;
  added: Date;
  start: Date;
  end: Date;
  state: number;
  comments: any[];
}
