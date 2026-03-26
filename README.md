# 📱 AppTap – App Store Web Application

## 🔗 Live Link

https://your-live-link-here.com

## 🔗 GitHub Repository

https://github.com/your-username/your-repo

---

## 📖 Description

AppTap is a responsive App Store web application built with React.
Users can explore apps, view details, install apps, and manage installed apps using localStorage.
The project follows all the requirements including routing, search, sorting, chart visualization, responsive design, and deployment.

---

## 🚀 Features

### 🏠 Home Page

* Center aligned banner with heading, text, and buttons
* Redirect buttons for App Store and Play Store
* States section with three cards
* Top apps section with 8 apps
* Show All button to view all apps

### 📱 All Apps Page

* Live search (case-insensitive)
* Total apps counter
* Responsive grid layout
* App cards with image, title, downloads, rating
* Navigate to App Details page
* Not found message when search fails

### 📊 App Details Page

* App image on left, details on right
* Install button with disable state
* Success toast after install
* Review chart using Recharts
* Description section
* Not found message if app not found

### 💾 LocalStorage Features

* Install app → saved to localStorage
* Installed button disabled if already installed
* My Installation page shows installed apps
* Uninstall button removes from UI & localStorage
* Toast message on uninstall
* Sort by downloads (High → Low / Low → High)

### ⚙️ Extra Features

* Loading animation during navigation
* Custom error page
* Responsive for all devices
* Active route indication
* Custom footer
* Navbar with logo and GitHub button

---

## 🧱 Layout

* Header with logo & navigation
* Footer with custom design
* JSON data with 12+ apps
* Routing with React Router

---

## 📊 Chart Library

* Recharts used for review chart
* Fully responsive chart

---

## 🛠 Technologies Used

* React
* React Router
* Tailwind CSS
* DaisyUI
* Recharts
* React Icons
* React Hot Toast
* LocalStorage
* Vite

---

## 📦 Data Structure

Each app contains:

```
{
  image,
  title,
  companyName,
  id,
  description,
  size,
  reviews,
  ratingAvg,
  downloads,
  ratings
}
```

---

## 🚀 Deployment

This project is deployed on:

* Netlify / Vercel / Cloudflare

Reloading any route works without error.

---

## ✅ Requirements Completed

✔ Responsive design
✔ Routing
✔ Search
✔ Sorting
✔ LocalStorage
✔ Chart
✔ Toast
✔ Loading
✔ Error page
✔ Installation page
✔ Deployment
✔ Minimum commits done
✔ README added

---

## 👨‍💻 Author

Sumaya Islam
GitHub: https://github.com/sumayaislamm
