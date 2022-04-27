import {
    IonAlert,
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon, IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRow, IonText,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab1.css';
import {arrowForwardOutline, bagHandleOutline, walletOutline} from "ionicons/icons";
import {useState} from "react";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    // let username: string = "";
    // let password: string = "";

    // const setEmail = (e: string) => {
    //     username = e
    // }
    // const setPassword = (e: string) => {
    //     password = e
    // }

    return (
        <IonPage>
            <IonContent>
                {/*<IonRow style={{*/}
                {/*    marginTop: "130px",*/}
                {/*    marginBottom: "20px"*/}
                {/*}}>*/}
                {/*    <IonCol class="ion-text-center">*/}
                {/*        <IonText style={{*/}
                {/*            fontSize: "24px",*/}
                {/*        }}>*/}
                {/*            WithCard SMKN 2 Semarang*/}
                {/*        </IonText>*/}
                {/*    </IonCol>*/}
                {/*</IonRow>*/}

                {/*<IonRow style={{*/}
                {/*    marginBottom: "50px"*/}
                {/*}}>*/}
                {/*    <IonCol class="ion-text-center">*/}
                {/*        <IonIcon icon={walletOutline} style={{*/}
                {/*            fontSize: "85px",*/}
                {/*        }} />*/}
                {/*    </IonCol>*/}
                {/*</IonRow>*/}

                <IonRow style={{
                    width: "90%",
                    display: "block",
                    margin: "auto"
                }}>
                    <IonCol>
                        <h3 style={{
                            fontWeight: 900
                        }}>Masuk</h3>
                        <p>Silahkan masuk dengan username dan password akun kamu yaa!</p>
                    </IonCol>
                </IonRow>

                <IonRow style={{
                    marginLeft: "15px"
                }}>
                    <IonCol>
                        <IonItem style={{
                            marginBottom: "15px",
                            width: "85%"
                        }}>
                            <IonLabel position="floating">
                                username
                            </IonLabel>
                            <IonInput
                                type="text"
                                value={username}
                                onIonChange={ (e) => setUsername(e.detail.value!)}
                            />
                        </IonItem>
                        <IonItem style={{
                            width: "85%"
                        }}>
                            <IonLabel position="floating">
                                password
                            </IonLabel>
                            <IonInput
                                type="password"
                                value={password}
                                onIonChange={ (e) => setPassword(e.detail.value!)}
                            />
                        </IonItem>
                        <IonButton  color="success" style={{
                            marginTop: "25px",
                            fontWeight: "bold",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "150px",
                            left: "270px"
                        }} href="/">
                            <IonIcon icon={arrowForwardOutline} />
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;
