export interface LoginProps {
  id: string;
  password: string;
}

export interface RegisterProps {
  userId: string;
  password: string;
  birthYear: string;
  gender: string;
  university: string;
}

export interface UserProfileProps {
  topic: string;
  value: string | object;
}
