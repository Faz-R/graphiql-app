import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import GraphiQLField from '../../Components/GraphiQLField';
import Schema from '../../Components/Schema';

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
      <Schema />
    </Container>
  );
};

export default GraphIQL;
