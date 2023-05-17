import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { lazy, useEffect, Suspense } from 'react';
import GraphiQLField from '../../Components/GraphiQLField';

const LazySchema = lazy(() => import('../../Components/Schema'));

const GraphIQL = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [navigate, user]);
  return (
    <Container>
      <h2>The most difficult content must be here</h2>
      <GraphiQLField />
      <Suspense fallback={<h1>Loading....</h1>}>
        <LazySchema />
      </Suspense>
    </Container>
  );
};

export default GraphIQL;
