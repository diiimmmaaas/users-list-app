export interface UserData {
  _id: string;
  amount: string;
  type: DealType;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface UserDataList {
  total: number | null;
  data: UserData[];
}

export type DealType = 'outcome' | 'loan' | 'income' | 'investment';
