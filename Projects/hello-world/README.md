## Creating hello-world Project

If you try to create a repository with the name `Hello-World`, It presents this problem, because doesn't allow capital letters and special characters.

❌

```bash
$ create-react-app Hello-Wold

Cannot create a project named "Hello-Wold" because of npm naming restrictions:

  * name can no longer contain capital letters

Please choose a different project name.
```

✅ This is the right way 👇


```bash
$ create-react-app hello-world

Creating a new React app in C:\Users\Root\OneDrive\Documentos\Projects\Repositories\Learning-ReactJS\Projects\hello-world.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

Success! Created hello-world at C:\Users\Root\OneDrive\Documentos\Projects\Repositories\Learning-ReactJS\Projects\hello-world
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd hello-world
  npm start

You had a `README.md` file, we renamed it to `README.old.md`

Happy hacking!****
```

And now, you only have to access to directory and start app with npm.

```bash
$ cd hello-world/ && npm start

> hello-world@0.1.0 start
> react-scripts start

Starting the development server...
Compiled successfully!

You can now view hello-world in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.23.80.1:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

Launch first chanages in `src\App.js`.

```JS
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
      </header>
    </div>
  );
}

export default App;
```