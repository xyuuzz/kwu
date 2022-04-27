import {
    IonBadge, IonCard, IonCardContent,
    IonCol,
    IonContent, IonImg,
    IonPage,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useState} from "react";


const History: React.FC = () => {

    const [status, setStatus] = useState<string>("selesai")

    const selesai = () => {
        return (
            <>
                <IonCard>
                    <IonCardContent style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "between"
                    }}>
                        <div>
                            <IonRow>
                                <IonCol style={{
                                    color: "black",
                                }}>
                                    <IonText style={{
                                        fontWeight: "bold",
                                        marginTop: "-30px"
                                    }}>
                                        Bisnis Center
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{
                                marginTop: "-20px",
                                paddingTop: "10px"
                            }}>
                                <IonCol>
                                    <IonText style={{
                                        fontSize: "13px",
                                    }}>
                                        Total Pengeluaran: Rp. 15.000
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText style={{
                                        fontWeight: "light",
                                        fontSize: "12px",
                                    }}>
                                        22 Mar 2022 09.32
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </div>
                        <IonImg src="https://idalamat.com/images/addresses/3180258-alfamart-salatiga-jawa-tengah.jpeg" style={{
                            width: "100px",
                            marginLeft: "20px"
                        }} />
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "between"
                    }}>
                        <div>
                            <IonRow>
                                <IonCol style={{
                                    color: "black",
                                }}>
                                    <IonText style={{
                                        fontWeight: "bold",
                                        marginTop: "-30px"
                                    }}>
                                        Bisnis Center
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{
                                marginTop: "-20px",
                                paddingTop: "10px"
                            }}>
                                <IonCol>
                                    <IonText style={{
                                        fontSize: "13px",
                                    }}>
                                        Total Pengeluaran: Rp. 15.000
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText style={{
                                        fontWeight: "light",
                                        fontSize: "12px",
                                    }}>
                                        22 Mar 2022 09.32
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </div>
                        <IonImg src="https://idalamat.com/images/addresses/3180258-alfamart-salatiga-jawa-tengah.jpeg" style={{
                            width: "100px",
                            marginLeft: "20px"
                        }} />
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "between"
                    }}>
                        <div>
                            <IonRow>
                                <IonCol style={{
                                    color: "black",
                                }}>
                                    <IonText style={{
                                        fontWeight: "bold",
                                        marginTop: "-30px"
                                    }}>
                                        Bisnis Center
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{
                                marginTop: "-20px",
                                paddingTop: "10px"
                            }}>
                                <IonCol>
                                    <IonText style={{
                                        fontSize: "13px",
                                    }}>
                                        Total Pengeluaran: Rp. 15.000
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText style={{
                                        fontWeight: "light",
                                        fontSize: "12px",
                                    }}>
                                        22 Mar 2022 09.32
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </div>
                        <IonImg src="https://idalamat.com/images/addresses/3180258-alfamart-salatiga-jawa-tengah.jpeg" style={{
                            width: "100px",
                            marginLeft: "20px"
                        }} />
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "between"
                    }}>
                        <div>
                            <IonRow>
                                <IonCol style={{
                                    color: "black",
                                }}>
                                    <IonText style={{
                                        fontWeight: "bold",
                                        marginTop: "-30px"
                                    }}>
                                        Bisnis Center
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{
                                marginTop: "-20px",
                                paddingTop: "10px"
                            }}>
                                <IonCol>
                                    <IonText style={{
                                        fontSize: "13px",
                                    }}>
                                        Total Pengeluaran: Rp. 15.000
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText style={{
                                        fontWeight: "light",
                                        fontSize: "12px",
                                    }}>
                                        22 Mar 2022 09.32
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </div>
                        <IonImg src="https://idalamat.com/images/addresses/3180258-alfamart-salatiga-jawa-tengah.jpeg" style={{
                            width: "100px",
                            marginLeft: "20px"
                        }} />
                    </IonCardContent>
                </IonCard>
            </>
        )
    }

    const diProses = () => {
        return (
            <>
                <IonCard>
                    <IonCardContent style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "between"
                    }}>
                        <div>
                            <IonRow>
                                <IonCol style={{
                                    color: "black",
                                }}>
                                    <IonText style={{
                                        fontWeight: "bold",
                                        marginTop: "-30px"
                                    }}>
                                        Bisnis Center
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{
                                marginTop: "-20px",
                                paddingTop: "10px"
                            }}>
                                <IonCol>
                                    <IonText style={{
                                        fontSize: "13px",
                                    }}>
                                        Total: Rp. 15.000
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText style={{
                                        fontWeight: "light",
                                        fontSize: "12px",
                                    }}>
                                        Status Pesanan: Diproses
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText style={{
                                        fontWeight: "light",
                                        fontSize: "12px",
                                    }}>
                                        Metode Pembayaran: Lewat Aplikasi
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </div>
                        <IonImg src="https://idalamat.com/images/addresses/3180258-alfamart-salatiga-jawa-tengah.jpeg" style={{
                            width: "100px",
                            marginLeft: "20px"
                        }} />
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "between"
                    }}>
                        <div>
                            <IonRow>
                                <IonCol style={{
                                    color: "black",
                                }}>
                                    <IonText style={{
                                        fontWeight: "bold",
                                        marginTop: "-30px"
                                    }}>
                                        Bisnis Center
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{
                                marginTop: "-20px",
                                paddingTop: "10px"
                            }}>
                                <IonCol>
                                    <IonText style={{
                                        fontSize: "13px",
                                    }}>
                                        Total: Rp. 15.000
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText style={{
                                        fontWeight: "light",
                                        fontSize: "12px",
                                    }}>
                                        Status Pesanan: Diproses
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText style={{
                                        fontWeight: "light",
                                        fontSize: "12px",
                                    }}>
                                        Metode Pembayaran: Kartu
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </div>
                        <IonImg src="https://idalamat.com/images/addresses/3180258-alfamart-salatiga-jawa-tengah.jpeg" style={{
                            width: "100px",
                            marginLeft: "20px"
                        }} />
                    </IonCardContent>
                </IonCard>
            </>
        )
    }

    return (
        <IonPage>
            <IonContent>
                <IonRow style={{
                    marginTop: "25px"
                }}>
                    <IonCol>
                        <IonText style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            wordSpacing: "2px",
                            marginLeft: "12px"
                        }}>
                            Riwayat Pembelianku
                        </IonText>
                    </IonCol>
                </IonRow>

                <IonSegment color="primary" value={status} onIonChange={(e) => setStatus(e.detail.value!)} style={{
                    marginTop: "20px",
                }}>
                    <IonSegmentButton value="selesai">Selesai</IonSegmentButton>
                    <IonSegmentButton value="diproses">Di Proses</IonSegmentButton>
                </IonSegment>

                {
                    status == "selesai" ? selesai() : diProses()
                }
            </IonContent>
        </IonPage>
    )
}

export default History