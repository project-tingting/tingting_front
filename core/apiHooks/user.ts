import { useMutation } from "@tanstack/react-query";

import { submitLogin, submitLogout } from "../api/user";

type userInfo = {
    userId: string;
    password: string;
}

// 개발 중
export const useUserLogin = ({ userId, password }: userInfo) => {
    return useMutation(() => submitLogin(userId, password))
}

export const useUserLogout = () => {
  return useMutation((accessToken: string | null) => submitLogout(accessToken));
}