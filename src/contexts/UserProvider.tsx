
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type {Context, JSX, ReactNode} from 'react';
import { useApi } from './ApiProvider';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import type {UserContextType, ApiContextType, HTTPResult} from '../scripts/DataTypes';

const UserContext: Context<UserContextType | undefined> = createContext<UserContextType | undefined>(undefined);

function UserProvider({ children }: {children: ReactNode}): JSX.Element {
  const [user, setUser] = useState<string | null | object>(null);
  const api: ApiContextType = useApi();
  const navigate: NavigateFunction = useNavigate();


  useEffect((): void => {
    (async (): Promise<void> => {
      if (api.isAuthenticated()) {
        const response: HTTPResult = await api.get('/myself');
        setUser(response.ok ? response.body : null);
      }
      else {
        setUser(null);
      }
    })();
  }, [api]);

  const login: (jwt_string: string) => Promise<string> = useCallback(async (jwt_string: string): Promise<string> => {
    const result: string = await api.login(jwt_string);
    if (result === 'ok') {
      const response: HTTPResult = await api.get('/myself');
      setUser(response.ok ? response.body : null);
      return `${response.ok}`;
    }
    return result;
  }, [api]);

  const logout: () => Promise<void> = useCallback(async (): Promise<void> => {
    await api.logout();
    navigate("/logout");
    setUser(null);
  }, [navigate, api]);

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context: UserContextType | undefined = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

export default UserProvider;