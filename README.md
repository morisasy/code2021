# Node API Proxy Server



## Usage

### Install dependencies

```
npm install
npm i express dotenv  cors needle
npm i -D nodemon ( D devDependency)
npm i express-rate-limit apicache
```

### Run on http://localhost:####

```
npm run dev
```
## Databases
- https://astra.datastax.com/
- 

### Add public API info

Rename **.env.example** to **.env** and edit the values

If the public API URL is **https://#={city}&appid={APIkey}**

- API_BASE_URL = "#"
- API_KEY_NAME = "appid"
- API_KEY_VALUE = "YOUR API KEY"

You can add on any other query params as needed when hitting the /api endpoint such as https://yourdomain/api?q=detroit without having to add your key in the client

- Add new routes as you see fit
- Change rate limiting and caching to desired values
