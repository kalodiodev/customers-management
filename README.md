# Customers Management

> Customers management helps you easily store your customers info, like email, phone, address, notes.
> A very simple Vue.js application using Google Firebase Realtime database REST API.
> This application is built for demonstration purposes.

### Firebase Rules required

```
{
  "rules": {
    ".write": false,
    ".read": false,
      
    "customers": {
      "$user_id": {
        ".write": "auth != null && $user_id === auth.uid",
        ".read": "auth != null && $user_id === auth.uid"
      }
    },
      
    "users": {
      "$user_id": {
        ".write": "auth != null && $user_id === auth.uid",
        ".read": "auth != null && $user_id === auth.uid"
      }
    }
  }
}
```

## Build Setup
Rename or Copy `config-example.json` to `config.json` file.

Edit `config.json` file and provide your Firebase Realtime database properties required
```
{
  "axios": {
    "baseURL": "Insert here firebase base URL",
    "authBaseURL": "Authentication Base URL",
    "authAPIKey": "Authentication API key"
  }
}
```
Then,
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Credits
* [vuejs/vue](https://github.com/vuejs/vue) A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
* [vuejs/vue-router](https://github.com/vuejs/vue-router/) The official router for Vue.js.
* [vuejs/vuex](https://github.com/vuejs/vuex/) Centralized State Management for Vue.js
* [monterail/vuelidate](https://github.com/monterail/vuelidate) Simple, lightweight model-based validation for Vue.js
* [axios/axios](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js
* [jgthms/bulma](https://github.com/jgthms/bulma) Modern CSS framework based on Flexbox
