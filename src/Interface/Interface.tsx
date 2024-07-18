//login Page
export interface IApiPayload {
  email: string;
  password: string;
}

//protected page
export interface ILocalStorageData {
  data: data;
  message: string;
  statusCode: number;
  success: boolean;
}

export interface data {
  loginToken: string;
  user: userData;
}

export interface userData {
  balance: number;
  email: string;
  firstName: string;
  isEmailVerify: boolean;
  lastName: string;
  mobileNumber: string;
  password: string;
  __v: number;
  _id: string;
}
