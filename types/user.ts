export interface LoginProps {
  id: string;
  password: string;
}

export interface RegisterProps {
  userId: string;
  password: string;
  birthDay: string;
  gender: string;
  userEmail: string;
  university: string;
  phoneNumber: string;
}

export interface ProfileProps {
  topic: string;
  valueList: string[];
}
