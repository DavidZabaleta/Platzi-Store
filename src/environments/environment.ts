// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'http://platzi-store.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyB7v0Q-taBG6VnihxihsmsH_tqR_3gHDQc',
    authDomain: 'platzi-store-61a2d.firebaseapp.com',
    databaseURL: 'https://platzi-store-61a2d.firebaseio.com',
    projectId: 'platzi-store-61a2d',
    storageBucket: 'platzi-store-61a2d.appspot.com',
    messagingSenderId: '666131087121',
    appId: '1:666131087121:web:3447dc7f891acefc9296b0'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
