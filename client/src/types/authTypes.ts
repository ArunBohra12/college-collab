// Type for user input while making api call to log the user in
export type LoginParams = {
  email: string;
  password: string;
};

// Type for user input while making api call to signup the user
export type SignupParams = {
  name: string;
  collegeName: string;
  collegeEmail: string;
  personalEmail: string;
  password: string;
  passwordConfirm: string;
};

// Type for the User object
export type User = {
  _id: string;
  name?: string;
  collegeEmail?: string;
  personalEmail?: string;
  password?: string;
  credits?: number;
  photo?: string;
  college?: { [key: string]: string } | string;
};
