# React-Node-Login-System
### Getting started
1. Clone the repository
2. Go to the client folder and run
    ```
     npm install or yarn install
    ```
    This will install all the dependencies mentioned in the ```package.json``` file for client. 
3. Now run ```npm start```  into client folder to start client.
4. Go to the server folder and run
   ```
     npm install or yarn install
    ```
    This will install all the dependencies mentioned in the ```package.json``` file for server.
5. Now run ```npm start```  into server folder to start server.
6. Go to ```locahost:1234``` in your browser. If the installation was fine, you should be able to see the landing page.

### Folder structure  
The entire project is consists of 2 major blocks:
#### 1. Client- ```client/```
  - All React Components :- ```src/components```
  - Authentication Servie :- ```src/auth/index```
  
#### 2. Server- ```server/```
  - Server Code : - ```server.js```
  - Routes :- ```routes/index```
  - Routes Controllers :- ```controllers/```
  - User's Fake Date :- ```fakeData/users```
