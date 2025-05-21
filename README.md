# 📘 Blog Angular - Static Blog Challenge Of sithec

This project is a static blog application built with **Angular 15** and **Angular Material**, as part of a development challenge.

## 🚀 Features

- Landing page with a responsive list of blog posts.
- Post detail view with full content.
- Routing between views.
- Navigation bar with Material Design.
- Posts managed via a mock service.
- Use of `@Input()` and `@Output()`.
- Bonus features:
  - Animations when displaying post detail.
  - Last viewed post stored in `localStorage`.

---

## 🛠 Requirements

- Node.js 16.x (recommended: `16.20.2`)
- Angular CLI 15

You can install Node.js using [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 16.20.2
nvm use 16.20.2
npm install -g @angular/cli@15
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## 💻 Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

The app will automatically reload if you change any of the source files.

---

## 🏗 Build

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

---

## 🧪 Testing

- **Unit tests**: `ng test`
- **E2E tests**: `ng e2e` *(requires configuration)*

---

## 📁 Project Structure Highlights

```
src/
  app/
    core/
        components/
        models/
        services/
    pages/
      blog/             // Feature module
        post-list/
        post-card/
        post-detail/
        blog-routing.module.ts
        blog.module.ts
    app.component.ts
    app-routing.module.ts
```

---

## 📬 Submission

Please clone or download the project and run using the instructions above.  
Alternatively, you can view the source code in the repository provided.

---

## ✍️ Author

Developed by **Juan Rogelio Franco Martinez**
[portfolio](https://juanrofranco.com/)

---