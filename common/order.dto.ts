export enum StatusEnum {
  COMING = 'COMING',
  APPROVE = 'APPROVE',
  REJECT = 'REJECT',
  DONE = 'DONE'
}

export interface OrderDto {
  userName: string;

  phoneNumber: string;

  quantity: number;

  table: string;

  foods: string[];

  price: string;

  status: StatusEnum;

  time: Date;
}
