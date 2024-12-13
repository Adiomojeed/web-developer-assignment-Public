# Lema AI assessment - Mojeed

This is the frontend directory on this full stack application. Development is built upon React/Next, React Query for data fetching and state management, Tailwind CSS for stylings, and Axios for API calls

## Getting Started

1. Change directory to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy environment variables and fill accordingly with correct credentials (API url and environment state - development | production):

   ```bash
   cp .env.example .env
   ```

4. Ensure you have at least node version 20 installed. You can set that with the command below:

   ```bash
   nvm use 20
   ```

5. Start the development server

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

6. Build the project:

   ```bash
   npm run build
   ```

   This will compile TypeScript files from `src/` into JavaScript in the `.next/` directory.

7. Start the server in production mode:

   ```bash
   npm start
   ```

   Production URL is [https://lema-assessment-mojeed.vercel.app/](https://lema-assessment-mojeed.vercel.app/)

## Other application commands

1. Check for linting error:

   ```bash
   npm run lint
   ```

2. Check for Typescript error:

   ```bash
   npm run ts-error
   ```

3. Run the unit tests:

   ```bash
   npm run test
   ```

## Project Structure

```
frontend/
├── public/        # All static assets are stored here
├── src/           # All application source codes are here, including API calls and unit tests
├── others         # Other configuration files are listed below
└── ...
```

> Happy Development !!!
