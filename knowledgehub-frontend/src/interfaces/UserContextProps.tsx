import { UserProps } from "./UserProps";

export interface UserContextProps {
    data : UserProps,
    setData? : (x:UserProps) => void,
}