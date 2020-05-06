# firebase-boilerplate

A template for creating google firebase cross platform applications

## Getting Started

1. Install latest version of Node.js

```
https://nodejs.org/en/download/
```

2. Clone repository to your system using the following command or git desktop

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY
```

3. Install repository dependencies

```
npm install
```

4. Create firebase project (application container) on online account

5. Configure firebase project

```
setup real time database || firestore in native mode
```

6. Install firebase

```
npm i firebase --save
```

7. Login to firebase from command line

```
firebase login
```

8. Initialise firebase project

```
firebase init
```

9. Configure CI/CD

    1. Get firebase token
    
    ```
    firebase login:ci
    ```
    
    2. Add FIREBASE_TOKEN to git repository 

    ```
    Github repo setting -> Secrets
    ```

    3. Automatic deployments will now occur on commits to master branch

10. Ready to start development

## Test

1. Test on localhost

```
firebase serve
```

## Deploy

1. Run Gulp task runner to lint and compile application

```
gulp
```

2. Run CI/CD process

```
git push <REMOTENAME> master 
```

3. Review CI/CD outputs in GitHub actions
