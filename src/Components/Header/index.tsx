import { AppBar, Button, ButtonGroup, Container, SvgIcon, Toolbar } from '@mui/material';
import { ReactComponent as GraphIcon } from '../../assets/icon/graphql.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar disableGutters>
          <Link to="/" style={{marginRight: 'auto', flex: "0 0 auto"}}>
            <SvgIcon component={GraphIcon} inheritViewBox sx={{width: '30px', height:"30px", mr: 'auto', flex: "0 0 auto"}}/>
          </Link>
          <ButtonGroup variant="text" aria-label="text button group" color='inherit'>
            <Button color='inherit'>Sign In</Button>
            <Button color='inherit'>Sign Up</Button>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
