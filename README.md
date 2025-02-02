# Sayyid Technical Test

## 🚀 Overview

Sayyid Technical Test is a frontend project built with React, Vite, Tailwind CSS, and Storybook. This project aims to develop flexible, reusable UI components that can be independently tested using Storybook.

---

## 📂 Project Structure

```
sayyid-technical-test/
  ├── .eslintrc.cjs            # ESLint configuration
  ├── .gitignore               # Git ignored files list
  ├── README.md                # Project documentation
  ├── index.html               # Application entry point
  ├── package.json             # NPM dependencies configuration
  ├── tailwind.config.js       # Tailwind CSS configuration
  ├── vite.config.js           # Vite configuration
  ├── .storybook/              # Storybook configuration
  ├── public/                  # Public assets folder
  ├── src/                     # Main source code
  │   ├── App.jsx              # Main application component
  │   ├── main.jsx             # React entry point
  │   ├── assets/              # Assets folder
  │   ├── stories/             # Storybook components folder
  │   │   ├── Button.jsx       # Button component
  │   │   ├── Dropdown.jsx     # Interactive dropdown component
  │   │   ├── Header.jsx       # Header component
  │   │   ├── InputSearch.jsx  # Search input component
  │   │   ├── Page.jsx         # Main Storybook page
```

---

## 🛠️ Technologies Used

- **React with Vite** → Modern frontend framework with a fast build tool.
- **Tailwind CSS** → Efficient and flexible CSS framework.
- **Storybook** → For developing and testing UI components independently.
- **ESLint** → To maintain clean and standardized code.
- **PostCSS** → Used with Tailwind to manage CSS.
- **Vite** → Fast build tool for React, replacing CRA.

---

## 🎯 Key Features

- **Interactive Dropdown**
  - Supports searching within the option list.
  - Allows both single and multiple selections.
  - Portal support for compatibility with high z-index elements.
  - Customizable option rendering.
  - Automatic filtering based on user input.
  - Toggleable features (enable/disable search, multiple selection, etc.).
- **Storybook UI Testing**
  - Independent development and testing of components.
  - Interactive documentation for each component.

---

## 🔧 How to Run the Project

1. **Clone the repository**
   ```sh
   git clone https://github.com/sayyidisal/sayyid-technical-test.git
   cd sayyid-technical-test
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the project**
   ```sh
   npm run dev
   ```
4. **Run Storybook**
   ```sh
   npm run storybook
   ```

---

## 📝 How to Use the Dropdown Component

### **1. Import Dropdown in Your Component**

```jsx
import Dropdown from './stories/Dropdown';
```

### **2. Using Dropdown with Static Data**

```jsx
const options = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' }
];

<Dropdown options={options} searchable multiple />
```

### **3. Using with API (Dynamic Data)**

```jsx
const [data, setData] = useState([]);
useEffect(() => {
  fetch('https://api.example.com/options')
    .then(response => response.json())
    .then(data => setData(data));
}, []);

<Dropdown options={data} searchable multiple />
```

---

## 📌 Contributors

If you want to contribute:

1. Fork this repository
2. Create a new branch (`feature/feature-name`)
3. Commit your changes
4. Submit a pull request (PR)

---

## 📢 Additional Information

- **GitHub Repository**: [GitHub Link](https://github.com/sayyidisal/sayyid-technical-test)
- **Deployment URL**: [Live Demo](https://sayyid-technical-test-7bon.vercel.app/])
- **Storybook URL**: [Storybook Preview](https://679f351857c80fd9fab945ea-ktgehxaqdo.chromatic.com/)

Thank you! Happy coding! 🚀

---

## 🇮🇩 Bahasa Indonesia

# Sayyid Technical Test

## 🚀 Overview

Sayyid Technical Test adalah proyek frontend berbasis React dengan Vite, Tailwind CSS, dan Storybook. Proyek ini bertujuan untuk mengembangkan komponen UI yang fleksibel, dapat digunakan ulang, dan diuji secara mandiri menggunakan Storybook.

---

## 📂 Struktur Proyek

(Lihat struktur proyek di bagian sebelumnya)

---

## 🛠️ Teknologi yang Digunakan

(Lihat bagian sebelumnya)

---

## 🎯 Fitur Utama

(Lihat bagian sebelumnya)

---

## 🔧 Cara Menjalankan Proyek

(Lihat bagian sebelumnya)

---

## 📝 Cara Menggunakan Komponen Dropdown

(Lihat bagian sebelumnya)

---

## 📌 Kontributor

(Lihat bagian sebelumnya)

---

## 📢 Informasi Tambahan

(Lihat bagian sebelumnya)

Terima kasih! Selamat coding! 🚀

