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
}

export interface UserProfileProps {
  topic: string;
  value: string | string[];
}
