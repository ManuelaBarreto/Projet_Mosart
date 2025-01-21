# Projet : Guide pour Exécuter le Projet

Ce README explique comment configurer et exécuter le projet, qui est divisé en deux grandes étapes : **Backend** et **Frontend**. Suivez les instructions ci-dessous.

---

## Étape 1 : Exécuter le Backend

Le backend est responsable de la création et de la gestion de la base de données. Il utilise le framework **FastAPI** pour fournir une API fonctionnelle et documentée. Le code backend se trouve dans le dossier `backend`.

### Étapes pour exécuter le backend :

1. Accéder au dossier backend
   ```bash
   cd backend
   ```
   
2. Création d'un environnement virtuel
   ```shell
   python -m venv .venv
   # Sur Windows           | # Sur MacOS
   .venv\Scripts\activate  | source .venv/bin/activate
   ```

3. Installation des dépendances
   ```shell
   pip install -r requirements.txt
   ```

4. Lancement du serveur  
   ```shell
   fastapi dev main.py
   ```

   Le serveur démarrera et affichera dans le terminal des informations telles que l’adresse locale où il est accessible (par exemple, `http://127.0.0.1:8000`).

### Comment utiliser les pages générées par FastAPI :

- Accédez à la documentation interactive de l’API en visitant :  
  [`http://127.0.0.1:8000/docs`](http://127.0.0.1:8000/docs)  
  Vous pouvez explorer les endpoints disponibles et tester les fonctionnalités directement depuis l’interface.

- Une autre version de la documentation, au format **Redoc**, est disponible à :  
  [`http://127.0.0.1:8000/redoc`](http://127.0.0.1:8000/redoc)

---

## Étape 2 : Exécuter le Frontend

Le frontend est développé en **JavaScript** à l’aide du framework **React**. Le code se trouve dans le dossier `frontend`.

### Étapes pour exécuter le frontend :

1. **Accéder au dossier frontend**  
   Naviguez vers le répertoire `frontend` dans le terminal :  
   ```bash
   cd frontend
   ```

2. **Installer les dépendances**  
   Assurez-vous que **Node.js** est installé sur votre système, puis installez les dépendances du projet :  
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement React**  
   Démarrez le serveur de développement avec la commande :  
   ```bash
   npm start
   ```

   Cette commande ouvrira automatiquement une fenêtre dans votre navigateur avec l’application en cours d’exécution. Si cela ne se produit pas, vous pouvez accéder manuellement à l’adresse locale par défaut :  
   [`http://localhost:3000`](http://localhost:3000)

---

### Remarques finales :

- Assurez-vous que le backend est en cours d’exécution avant de démarrer le frontend, afin que l’application fonctionne correctement.  
- En cas de doute, consultez la documentation de chaque outil ou contactez l’équipe de développement.  

Amusez-vous bien avec le projet ! 🚀

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
