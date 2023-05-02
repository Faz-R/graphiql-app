import { GitHub } from "@mui/icons-material";
import { Container, Link, Paper, SvgIcon, Toolbar, Typography } from "@mui/material";
import { ReactComponent as Logo } from '../../assets/rs_school.svg';

const Footer = () => {
  return (
    <Paper component="footer" color="primary" sx={{position: 'fixed', bottom: 0, borderRadius:0, width: '100%', boxShadow: "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)"}} variant="elevation">
      <Container>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Typography color="#fff">
            <GitHub color="inherit" fontSize="small" sx={{verticalAlign: 'top'}}></GitHub>
            {` `}
          <Link href="https://github.com/Faz-R" color="#fff" underline="none">Fazar</Link>
          {` & `}
          <Link href="https://github.com/DrabantBY" color="#fff" underline="none">DrabantBY</Link>
          {` & `}
          <Link href="https://github.com/sneguroma" color="#fff" underline="none">SneguRoma</Link>
          </Typography>
          <Typography color="#fff">2023</Typography>
          <Link href="https://rs.school/react/" color="#fff" underline="none"><SvgIcon component={Logo} inheritViewBox sx={{width: '60px', mr: 'auto'}}/></Link>
        </Toolbar>
      </Container>

    </Paper>
  );
};

export default Footer;
