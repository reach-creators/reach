# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Signup Features

- **Brand and Creator Signup:**
  - Separate flows for brands and creators, each with their own form and validation.
  - Brand signup collects: name, logo, revenue, items sold, average unit price, niches, region, username, and password.
  - Creator signup collects: name, sales per month, items sold, niches, region, username, and password.

- **Password Restrictions:**
  - Minimum 8 characters
  - Must contain at least one uppercase letter, one lowercase letter, one number, and one symbol
  - Real-time validation feedback in the UI

- **Password Hashing:**
  - Passwords are hashed using SHA-256 in the browser before being sent to the backend for improved security.

- **Modern UI/UX:**
  - Responsive, modern design using Tailwind CSS and PrimeNG
  - Clear error and success messages
  - Loading and disabled states for buttons

- **Navigation:**
  - Signup button on the home page routes to the signup form
  - After successful signup, users are redirected to the home page
