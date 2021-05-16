
import './App.css';
import SideMenu from '../components/sideMenu';
import Header from '../components/Header';
import { CssBaseline, Grid, makeStyles } from '@material-ui/core';

function App() {

  const useStyles = makeStyles({
    appMain: {
      marginLeft: '320px',
      width: '100%'
    }
  })
  const classes = useStyles();
  return (
    <div>

      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>

      <CssBaseline />
    </div>
  );
}

export default App;
