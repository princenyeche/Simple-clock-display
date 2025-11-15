import { Navigate } from 'react-router-dom';
import type {JSX} from 'react';
import { useUser } from '../contexts/UserProvider';

function PublicRoute({ children }: {children: JSX.Element}): JSX.Element  {
  const { user } = useUser();

  if (user === undefined) {
    return <Navigate to={"/fail"} />;
  }
  else if (user) {
    let next: string = '/dashboard';
    return <Navigate to={next} />
  }
  else {
    return children;
  }
}

export default PublicRoute;