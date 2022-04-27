import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {bagHandleOutline, cartOutline, homeOutline} from 'ionicons/icons';
import Login from "./pages/Login"
import Home from "./pages/Home"
import Order from "./pages/Order"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import "./css/style.css"

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import History from "./pages/History";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            {/*<Redirect to="/tab1" />*/}
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="top" style={{
          display: window.location.pathname == "/login" ? "none" : ""
        }}>
          <IonTabButton tab="home" href="/">
            <IonIcon icon={homeOutline} />
            <IonLabel>Beranda</IonLabel>
          </IonTabButton>
          <IonTabButton tab="order" href="/order">
            <IonIcon icon={cartOutline} />
            <IonLabel>Beli Barang</IonLabel>
          </IonTabButton>
          <IonTabButton tab="history" href="/history">
            <IonIcon icon={bagHandleOutline} />
            <IonLabel>Riwayat Pesanan</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
