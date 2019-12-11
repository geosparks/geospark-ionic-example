import { geospark } from "@ionic-native/geospark";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/react";
import React from "react";
const Home: React.FC = () => {
  const isBatteryOptimizationEnabled = async () => {
    geospark.isBatteryOptimizationEnabled().then(callback => {
      console.log(callback);
    });
  };
  const disableBatteryOptimization = async () => {
    geospark.disableBatteryOptimization().then(callback => {
      console.log(callback);
    });
  };
 
  const checkActivityPermission = async () => {
    geospark.checkActivityPermission().then(callback => {
      console.log(callback);
    });
  };
  const requestActivityPermission = async () => {
    geospark.requestActivityPermission().then(callback => {
      console.log(callback);
    });
  };

  const checkLocationPermission = async () => {
    geospark.checkLocationPermission().then(callback => {
      console.log(callback);
    });
  };
  const requestLocationPermission = async () => {
    geospark.requestLocationPermission().then(callback => {
      console.log(callback);
    });
  };

  const checkLocationServices = async () => {
    geospark.checkLocationServices().then(callback => {
      console.log(callback);
    });
  };
  const requestLocationServices = async () => {
    geospark.requestLocationServices().then(callback => {
      console.log(callback);
    });
  };

  const checkBackgroundLocationPermission = async () => {
    geospark.checkBackgroundLocationPermission().then(callback => {
      console.log(callback);
    });
  };
  const requestBackgroundLocationPermission = async () => {
    geospark.requestBackgroundLocationPermission().then(callback => {
      console.log(callback);
    });
  };

  const createUser = async () => {
    geospark.createUser("Ekambaram").then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const setDescription = async () => {
    geospark.setDescription("test").then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const getUser = async () => {
    geospark.getUser("test").then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const toggleEvents = async () => {
    geospark.toggleEvents(true,true,true).then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const getEventsStatus = async () => {
    geospark.getEventsStatus().then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const startTrip = async () => {
    geospark.startTrip("865586586","65656").then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const endTrip = async () => {
    geospark.endTrip("65656").then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const activeTrips = async () => {
    geospark.activeTrips().then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const getCurrentLocation = async () => {
    geospark.getCurrentLocation(10).then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };

  const updateCurrentLocation = async () => {
    geospark.updateCurrentLocation(50);
  };

  const startTracking = async () => {
    geospark.startTracking();
  };

  const stopTracking = async () => {
    geospark.stopTracking();
  };

  const isLocationTracking = async () => {
    geospark.isLocationTracking().then(callback => {
      console.log(callback);
    });
  };

  const logout = async () => {
    geospark.logout().then(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  };
  
  const register = async () => {
    const watch = geospark.onEvents().subscribe((result) => {console.log(result);});
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GeoSpark Ionic Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Test GeoSpark Methods</p>

        <IonButton
          onClick={e => {
            disableBatteryOptimization();
          }}
        >
          DisableBatteryOptimization
        </IonButton>
        <IonButton
          onClick={e => {
            isBatteryOptimizationEnabled();
          }}
        >
          IsBatteryOptimizationEnabled
        </IonButton>


        <IonButton
          onClick={e => {
            checkActivityPermission();
          }}
        >
          CheckActivityPermission
        </IonButton>
        <IonButton
          onClick={e => {
            requestActivityPermission();
          }}
        >
          RequestActivityPermission
        </IonButton>

        <IonButton
          onClick={e => {
            checkLocationPermission();
          }}
        >
          CheckLocationPermission
        </IonButton>
        <IonButton
          onClick={e => {
            requestLocationPermission();
          }}
        >
          RequestLocationPermission
        </IonButton>


        <IonButton
          onClick={e => {
            checkLocationServices();
          }}
        >
          CheckLocationServices
        </IonButton>
        <IonButton
          onClick={e => {
            requestLocationServices();
          }}
        >
          RequestLocationServices
        </IonButton>


        <IonButton
          onClick={e => {
            checkBackgroundLocationPermission();
          }}
        >
          CheckBackgroundLocationPermission
        </IonButton>
        <IonButton
          onClick={e => {
            requestBackgroundLocationPermission();
          }}
        >
          RequestBackgroundLocationPermission
        </IonButton>


        <IonButton
          onClick={e => {
            createUser();
          }}
        >
          CreateUser
        </IonButton>
        <IonButton
          onClick={e => {
            setDescription();
          }}
        >
          SetDescription
        </IonButton>



        <IonButton
          onClick={e => {
            getUser();
          }}
        >
          GetUser
        </IonButton>
        <IonButton
          onClick={e => {
            toggleEvents();
          }}
        >
          ToggleEvents
        </IonButton>



        <IonButton
          onClick={e => {
            getEventsStatus();
          }}
        >
          GetEventsStatus
        </IonButton>
        <IonButton
          onClick={e => {
            startTrip();
          }}
        >
          StartTrip
        </IonButton>


        <IonButton
          onClick={e => {
            endTrip();
          }}
        >
          EndTrip
        </IonButton>
        <IonButton
          onClick={e => {
            activeTrips();
          }}
        >
          ActiveTrips
        </IonButton>

        <IonButton
          onClick={e => {
            getCurrentLocation();
          }}
        >
          GetCurrentLocation
        </IonButton>
        <IonButton
          onClick={e => {
            updateCurrentLocation();
          }}
        >
          UpdateCurrentLocation
        </IonButton>

        <IonButton
          onClick={e => {
            startTracking();
          }}
        >
          StartTracking
        </IonButton>
        <IonButton
          onClick={e => {
            stopTracking();
          }}
        >
          StopTracking
        </IonButton>

        <IonButton
          onClick={e => {
            isLocationTracking();
          }}
        >
          IsLocationTracking
        </IonButton>
        <IonButton
          onClick={e => {
            logout();
          }}
        >
          Logout
        </IonButton>

        <IonButton
          onClick={e => {
            register();
          }}
        >
          Register
        </IonButton>


      </IonContent>
    </IonPage>
  );
};
export default Home;