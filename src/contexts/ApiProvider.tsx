
import {
    createContext,
    useContext,
    useCallback,
    useMemo,
} from 'react';
import type { Context, ReactNode, JSX } from 'react';
import ClientApi from '../ClientApi';
import { useFlash } from '../components/FlashMessage';
import { message_500, message_400 } from '../pages/error/ErrorData';
import type {ApiContextType, Any, HTTPResult} from '../scripts/DataTypes';

const ApiContext: Context<ApiContextType | undefined> = createContext<ApiContextType | undefined>(undefined);

function ApiProvider({ children }: {children: ReactNode}): JSX.Element {
  const flash: Any = useFlash();

  const onError: (response: HTTPResult) => void = useCallback((response: HTTPResult): void => {
    if (response.status >= 500) {
       flash({...message_500}, message_500.alert);

    }
    else if (response.status >= 400 && response.status < 500) {
      message_400["description"] = response.body?.description ?? response.body?.data?.message;
      flash({...message_400}, message_400.alert);
    }

  }, [flash]);

  const api: Any = useMemo((): ClientApi => new ClientApi(onError), [onError]);

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi(): ApiContextType {
  const context: ApiContextType | undefined = useContext(ApiContext);
    if (context === undefined) {
        throw new Error('useApi must be used within a ApiProvider');
    }
    return context;
}

export default ApiProvider;