import {createContext} from 'react';
import { defaultUserProps } from './api/defaultVarible';
import { UserContextProps } from './interfaces/UserContextProps';

export const UserContext = createContext<UserContextProps>({data : defaultUserProps});