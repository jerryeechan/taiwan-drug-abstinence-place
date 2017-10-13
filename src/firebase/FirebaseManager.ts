import * as firebase from "firebase";
//import * as firebase from "firebase"
import SnapShot = firebase.database.DataSnapshot;
//REF: https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow#token
//REF: https://competenepal.com/lets-make-a-facebook-login-system-in-electron-that-actually-works/

export default class FirebaseManager {
  database: firebase.database.Database;
  storageRef: firebase.storage.Reference;
  constructor() {
    if (firebase.initializeApp == null) {
      // userStore.currentUser = new UserObject("offline");
      // console.log(userStore.currentUser);
    } else {
      var config = {
        apiKey: "",
        authDomain: "sketch-academy-share.firebaseapp.com",
        databaseURL: "https://sketch-academy-share.firebaseio.com",
        projectId: "sketch-academy-share",
        storageBucket: "",
        messagingSenderId: ""
      };
      var app = firebase.initializeApp(config);

      // this.loginManager = new LoginManager();
      // this.storageManager = new StorageManager();

      this.database = firebase.database();
      this.storageRef = firebase.storage().ref();
      //this.test();
      this.getToken();
    }
  }
  getToken() {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        console.log("Notification permission granted.");
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
      })
      .catch(err => {
        console.log("Unable to get permission to notify.", err);
      });

    //Get Token
    firebase
      .messaging()
      .getToken()
      .then(token => {
        console.log("Token", token);
      });

    //Receive message
    firebase.messaging().onMessage(function(payload) {
      console.log("Message received. ", payload);
    });
  }

  //get data(list)
  getDataOnce(
    tableURL: string,
    orderByChild: string = null,
    equalTo: string = null,
    endAtKey: string = null,
    endAtValue: string = null,
    limitToLast: number = null
  ): Promise<Array<{ key: string; value: any }>> {
    console.log("GetDataOnce:", tableURL);

    var query: firebase.database.Query;
    var ref = this.database.ref(tableURL);
    if (this.enableLog) {
      console.warn(orderByChild);
      console.warn(tableURL);
      console.warn(equalTo);
    }

    query = ref;
    //TODO: orderby
    if (orderByChild != null && orderByChild !== "key") {
      query = query.orderByChild(orderByChild);
    } else query = query.orderByKey();

    if (equalTo != null && endAtKey != null)
      query = query.equalTo(equalTo, endAtKey);
    else if (endAtValue != null) query = query.endAt(endAtValue, endAtKey);
    else if (endAtKey != null) query = query.endAt(endAtKey);
    else if (equalTo != null) query = query.equalTo(equalTo);

    if (limitToLast != null) query = query.limitToLast(limitToLast);
    console.log(query);

    return new Promise<
      Array<{ key: string; value: any }>
    >((resolve, reject) => {
      query.once("value").then((snapShot: SnapShot) => {
        if (snapShot.val() == undefined) return null;
        else {
          var pairs: Array<{ key: string; value: any }> = [];
          snapShot.forEach(a => {
            pairs.push({ key: a.key, value: a.val() });
            return false;
          });
          console.log("GetDataOnce result", pairs);
          resolve(pairs);
        }
      });
    });
  }

  transactionAddValue(url: string, value: number) {
    return this.database
      .ref(url)
      .transaction(ori_val => {
        return (ori_val || 0) + value;
      })
      .then(ph => {
        console.log(ph);
        return ph.snapshot.val();
      });
  }
  setValue(url: string, obj: any) {
    return new Promise((resolve, reject) => {
      if (this.database) resolve(this.database.ref(url).set(obj));
      else reject("offline");
    });
  }
  updateValue(url: string, obj: any) {
    return this.database.ref(url).update(obj);
  }
  getValue(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.database) {
        this.database
          .ref(url)
          .once("value")
          .then((snapShot: SnapShot) => {
            console.log("GetValue", url, snapShot.val());
            resolve(snapShot.val());
          });
      } else reject("offline");
    });
  }
  removeValue(url: string) {
    return this.database.ref(url).remove();
  }
  enableLog = true;
  log(message: any) {
    if (this.enableLog) console.log(message);
  }
}

//REF:https://stackoverflow.com/questions/41527058/many-to-many-relationship-in-firebase
