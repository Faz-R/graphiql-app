import { AppBar, Container, IconButton, SvgIcon, Toolbar } from '@mui/material';
import { ReactComponent as GraphIcon } from '../../assets/graphql.svg';
import { AccountCircle } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <SvgIcon component={GraphIcon} inheritViewBox sx={{width: '30px', height:"30px", mr: 'auto'}}/>
          <IconButton color='inherit'>{<AccountCircle />}</IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
