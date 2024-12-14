/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados
        primary: "#FF5733",    // Color principal
        secondary: "#33FF57",  // Color secundario
        background: "#f7f7f7", // Color de fondo
        dark: "#333",          // Color oscuro para el texto
      },
      spacing: {
        // Espaciados personalizados
        '18': '4.5rem',  // Ejemplo: espacio de 4.5rem
      },
      fontFamily: {
        // Fuente personalizada
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        // Sombra personalizada
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
