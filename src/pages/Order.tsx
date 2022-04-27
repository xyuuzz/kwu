import {
    IonCard, IonCardContent, IonCardTitle,
    IonCol,
    IonContent, IonImg,
    IonPage, IonRow, IonSearchbar, IonText
} from '@ionic/react';

import "./Order.css"

const Order: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <div style={{
                    width: "100%",
                    height: "150px",
                    // background: "rgb(17,133,181)",
                    background: "linear-gradient(148deg, rgba(17,133,181,1) 0%, rgba(107,179,114,1) 31%, rgba(33,210,110,1) 79%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <IonText style={{
                        color: "#fff5de",
                        fontWeight: "bold",
                        fontSize: "24px"
                    }}>
                        Mau Beli Apa di SMKN 2?
                    </IonText>
                </div>

                <div style={{
                    marginTop: "-20px"
                }}>
                    <IonSearchbar placeholder="Bakso Spesial"  />
                </div>

                <div className="container" style={{
                    marginTop: "20px",
                }}>
                    <IonText style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        display: "block"
                    }}>
                        Makanan Paling Laris Minggu Ini
                    </IonText>
                    <IonText style={{
                        fontSize: "14px"
                    }}>
                        Coba Yuk!
                    </IonText>
                </div>

                <div style={{
                    marginTop: "-15px",
                    display: "flex",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                }}>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://kbu-cdn.com/dk/wp-content/uploads/kulit-ayam-crispy-geprek.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Ayam Geprek
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://kbu-cdn.com/dk/wp-content/uploads/kulit-ayam-crispy-geprek.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Ayam Geprek
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://kbu-cdn.com/dk/wp-content/uploads/kulit-ayam-crispy-geprek.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Ayam Geprek
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </div>

                {/* Batas */}

                <div className="container" style={{
                    marginTop: "30px",
                }}>
                    <IonText style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        display: "block"
                    }}>
                        Alat Tulis Paling dicari Minggu Ini
                    </IonText>
                    <IonText style={{
                        fontSize: "14px"
                    }}>
                        Jaga baik-baik barang milikmu ya!
                    </IonText>
                </div>

                <div style={{
                    marginTop: "-15px",
                    display: "flex",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                }}>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://img.my-best.id/press_eye_catches/945010671efd4b2a33122991faaf1a90.png?ixlib=rails-4.2.0&q=70&lossless=0&w=1400&h=787&fit=crop" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Penghapus
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://img.my-best.id/press_eye_catches/945010671efd4b2a33122991faaf1a90.png?ixlib=rails-4.2.0&q=70&lossless=0&w=1400&h=787&fit=crop" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Penghapus
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://img.my-best.id/press_eye_catches/945010671efd4b2a33122991faaf1a90.png?ixlib=rails-4.2.0&q=70&lossless=0&w=1400&h=787&fit=crop" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Penghapus
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </div>

                {/* Batas */}

                <div className="container" style={{
                    marginTop: "30px",
                }}>
                    <IonText style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        display: "block"
                    }}>
                        Barang yang Mungkin Kamu Butuhkan
                    </IonText>
                    <IonText style={{
                        fontSize: "14px"
                    }}>
                        Kamu bisa membeli ini semua di Bisnis Center
                    </IonText>
                </div>

                <div style={{
                    marginTop: "-15px",
                    display: "flex",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                }}>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://filebroker-cdn.lazada.co.id/kf/S719aadb0c32c485dad41d130fa491038T.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Pembalut
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://filebroker-cdn.lazada.co.id/kf/S719aadb0c32c485dad41d130fa491038T.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Pembalut
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://filebroker-cdn.lazada.co.id/kf/S719aadb0c32c485dad41d130fa491038T.jpg" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Pembalut
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </div>

                {/* Batas */}

                <div className="container" style={{
                    marginTop: "30px",
                }}>
                    <IonText style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        display: "block"
                    }}>
                        Mau Ngemil Jajan Tapi Bingung Beli apa?
                    </IonText>
                    <IonText style={{
                        fontSize: "14px"
                    }}>
                        Sini, aku punya rekomendasi buat kamu
                    </IonText>
                </div>

                <div style={{
                    marginTop: "-15px",
                    display: "flex",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                    marginBottom: "15px"
                }}>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://www.popmie.com/uploads/product/pedes-gledeek_text.png" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Pop Mie
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://www.popmie.com/uploads/product/pedes-gledeek_text.png" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Pop Mie
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonCard style={{
                        width: "100px"
                    }}>
                        <IonCardTitle>
                            <IonImg src="https://www.popmie.com/uploads/product/pedes-gledeek_text.png" />
                        </IonCardTitle>
                        <IonCardContent>
                            <IonText style={{
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                color: "black"
                            }}>
                                Pop Mie
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Order;
