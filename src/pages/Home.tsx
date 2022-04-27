import {
    IonButton, IonCard, IonCardContent, IonCardTitle,
    IonCol,
    IonContent, IonGrid,
    IonIcon, IonImg,
    IonItemDivider,
    IonPage,
    IonRow, IonSearchbar,
    IonText,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {arrowDownCircle, caretForwardOutline, paperPlane, paperPlaneOutline, personCircleOutline} from "ionicons/icons";

const Home: React.FC = () => {
    return (
        <IonPage className="container">
            <IonContent>
                <IonRow>
                    <IonCol className="ion-justify-content-between">
                        <IonSearchbar placeholder="Apa yang ingin kamu beli?" />
                    </IonCol>
                </IonRow>
                <IonCard style={{
                    backgroundColor: "#77f382",
                }}>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="4.2">
                                    <IonCard style={{
                                        width: "max-content",
                                        height: "100%",
                                        margin: 0,
                                        boxShadow: "none",
                                        borderRadius: "13px",
                                    }}>
                                        <IonCardContent>
                                            <IonRow style={{
                                                marginBottom: "7px"
                                            }}>
                                                <IonText style={{
                                                    fontWeight: "500"
                                                }}>
                                                    Saldoku
                                                </IonText>
                                            </IonRow>
                                            <IonText style={{
                                                fontWeight: "bold",
                                                fontSize: ".8rem",
                                            }}>
                                                Rp750.000
                                                {/*<IonButton color="none" style={{*/}
                                                {/*    fontSize: "11px",*/}
                                                {/*    color: "#144391",*/}
                                                {/*    fontWeight: "bold",*/}
                                                {/*    border: "none",*/}
                                                {/*    shadow: "none",*/}
                                                {/*    boxShadow: "none",*/}
                                                {/*    marginLeft: "-10px",*/}
                                                {/*    padding: 0*/}
                                                {/*}} href="/login">*/}
                                                {/*    Cek Riwayat*/}
                                                {/*</IonButton>*/}
                                            </IonText>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6.5" offset="1">
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "transparent",
                                        marginTop: "10px"
                                    }}>
                                        <div style={{
                                            backgroundColor: "transparent",
                                            marginRight: "30px"
                                        }}>
                                            <IonText style={{
                                                fontWeight: "bold",
                                                display: "block",
                                                textAlign: "center",
                                                paddingTop: "5px",
                                                fontSize: "12px"
                                            }}>
                                                <IonIcon icon={paperPlane} style={{
                                                    display: "block",
                                                    margin: "auto",
                                                    fontSize: "20px"
                                                }}/>
                                                Riwayat Pembelian
                                            </IonText>
                                        </div>
                                        <div style={{
                                            backgroundColor: "transparent",
                                        }}>
                                            <IonText style={{
                                                fontWeight: "bold",
                                                display: "block",
                                                textAlign: "center",
                                                paddingTop: "5px",
                                                fontSize: "12px"
                                            }}>
                                                <IonIcon icon={arrowDownCircle} style={{
                                                    display: "block",
                                                    margin: "auto",
                                                    fontSize: "22px"
                                                }} />
                                                Isi Saldo
                                            </IonText>
                                        </div>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonItemDivider style={{
                    marginTop: "35px",
                    paddingBottom: "10px"
                }}>
                    <IonText style={{
                        fontWeight: "bold",
                        fontSize: "22px",
                    }}>
                        Alat Tulis
                    </IonText>
                </IonItemDivider>

                <div style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                }}>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://cdn-image.hipwee.com/wp-content/uploads/2018/07/hipwee-images-17.jpeg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Pen
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://cdn-image.hipwee.com/wp-content/uploads/2018/07/hipwee-images-17.jpeg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Pen
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://cdn-image.hipwee.com/wp-content/uploads/2018/07/hipwee-images-17.jpeg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Pen
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </div>

                <IonItemDivider style={{
                    marginTop: "35px",
                    paddingBottom: "10px"
                }}>
                    <IonText style={{
                        fontWeight: "bold",
                        fontSize: "22px",
                    }}>
                        Makanan
                    </IonText>
                </IonItemDivider>
                <div style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                }}>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="http://kbu-cdn.com/dk/wp-content/uploads/ayam-goreng-pedas.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Ayam
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="http://kbu-cdn.com/dk/wp-content/uploads/ayam-goreng-pedas.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Ayam
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="http://kbu-cdn.com/dk/wp-content/uploads/ayam-goreng-pedas.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Ayam
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </div>

                <IonItemDivider style={{
                    marginTop: "35px",
                    paddingBottom: "10px"
                }}>
                    <IonText style={{
                        fontWeight: "bold",
                        fontSize: "22px",
                    }}>
                        Minuman
                    </IonText>
                </IonItemDivider>
                <div style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                }}>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://dcostseafood.id/wp-content/uploads/2021/12/Es-teh-tawar-manis.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Es Teh
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://dcostseafood.id/wp-content/uploads/2021/12/Es-teh-tawar-manis.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Es Teh
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://dcostseafood.id/wp-content/uploads/2021/12/Es-teh-tawar-manis.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                Es Teh
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </div>

                <IonItemDivider style={{
                    marginTop: "35px",
                    paddingBottom: "10px"
                }}>
                    <IonText style={{
                        fontWeight: "bold",
                        fontSize: "22px",
                    }}>
                        Makanan Ringan
                    </IonText>
                </IonItemDivider>
                <div style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                }}>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://cdn-2.tstatic.net/jambi/foto/bank/images/cara-membuat-sosis-bakar.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                Sosis B.
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://cdn-2.tstatic.net/jambi/foto/bank/images/cara-membuat-sosis-bakar.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                Sosis B.
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://cdn-2.tstatic.net/jambi/foto/bank/images/cara-membuat-sosis-bakar.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "medium",
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                Sosis B.
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;

// <IonButton color="primary" style={{
//     borderRadius: "50%"
// }}>
//     <IonIcon icon={personCircleOutline} />
// </IonButton>
