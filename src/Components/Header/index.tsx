import { AppBar, Button, ButtonGroup, Container, IconButton, SvgIcon, Toolbar } from '@mui/material';
import { ReactComponent as GraphIcon } from '../../assets/graphql.svg';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <SvgIcon component={GraphIcon} inheritViewBox sx={{width: '30px', height:"30px", mr: 'auto'}}/>
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
