export enum StatusEnum {
  COMING = 'COMING',
  APROVE = 'APROVE',
  REJECT = 'REJECT',
  DONE = 'DONE',
}

export interface GetOrderDto {
  userName: string;

  phoneNumber: string;

  quantity: number;

  table: string;

  foods: string[];

  price: string;

  status: StatusEnum;

  time: Date;
}
