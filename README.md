# 📝 TaskList App

A modern React + TypeScript application for authenticated users to create, view, edit, and delete personal tasks. Powered by Auth0 authentication, React Bootstrap UI, and sessionStorage for persistence.

---

## 🚀 Features

- 🔐 **Auth0 Authentication** – Secure login/logout with user-specific session handling.
- 🗂 **Task Dashboard** – View a personal list of tasks created by the logged-in user.
- 📝 **Task Management** – Create, edit, delete, and view detailed tasks.
- 📋 **Profile Page** – View current user's full Auth0 profile and metadata.
- 🧾 **TypeScript Safety** – Strongly typed data models and props.
- 💄 **Bootstrap Styling** – Responsive and accessible UI layout.

---

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components (Navbar, Buttons, Auth)
├── context/            # TaskContext for global task state
├── models/             # TypeScript interfaces
├── pages/              # Page-level routes (Dashboard, Profile, TaskDetails)
├── App.tsx             # Main route definitions
├── Auth0Provider...    # Auth0 routing integration
```

---

## 🔧 Setup & Installation

### Prerequisites
- Node.js (v18+ recommended)
- NPM or Yarn

### 1. Clone the repository
```bash
git clone https://github.com/njcross/TaskList.git
cd TaskList
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Auth0

Update the following in `Auth0ProviderWithNavigate.tsx`:
```ts
const domain = "YOUR_AUTH0_DOMAIN";
const clientId = "YOUR_AUTH0_CLIENT_ID";
const redirectUri = "http://localhost:5173/authorize";
```

Then in your [Auth0 Application Settings](https://manage.auth0.com):
- **Allowed Callback URLs**: `http://localhost:5173/authorize`
- **Allowed Logout URLs**: `http://localhost:5173`
- **Allowed Web Origins**: `http://localhost:5173`

### 4. Run the app
```bash
npm run dev
```

---

## ✨ Usage

1. Visit `http://localhost:5173`
2. Click **Login** to sign in with Auth0
3. Navigate to:
   - **Tasks** to create and manage your task list
   - **Profile** to view user profile details
4. Tasks are stored in `sessionStorage` and filtered by the authenticated user

---

## 🔍 Implementation Details

### Task Filtering
- Each task is tagged with the logged-in user's `user.sub` (Auth0 ID)
- The Task Dashboard only loads tasks created by the current user

### State Management
- Local state (`useState`) is used for temporary state
- Global `TaskContext` manages app-wide task access

### Type Safety
- All data shapes use shared interfaces in `models/Task.model.ts`
- Component props are fully typed

### Routing
- React Router v6 handles public and protected routes
- Custom `AuthenticationGuard` ensures route-level protection

---

## 🛠 Technologies

- React 18
- TypeScript
- React Bootstrap
- Auth0 (`@auth0/auth0-react`)
- React Router DOM
- Vite (for dev server + build)

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgments

Built by [@njcross](https://github.com/njcross).  
Inspired by best practices in secure single-page React apps.