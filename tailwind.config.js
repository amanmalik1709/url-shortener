/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      
      colors: {
        primary: '#1a202c',    // Adjust primary text color
        secondary: '#2d3748',  // Adjust secondary text color
        tertiary: '#4a5568',   // Adjust tertiary text color
        'primary-hover': '#2d3748',    // Hover state for primary text color
        'secondary-hover': '#4a5568',  // Hover state for secondary text color
        'tertiary-hover': '#718096',   // Hover state for tertiary text color
        'bg-primary': '#1a202c',       // Primary background color
        'bg-secondary': '#f7fafc',     // Secondary background color
        'bg-tertiary': '#edf2f7',      // Tertiary background color
        'light-blue': '#ebf8ff',  // Light blue color
        'light-green': '#d4f5e7', // Light green color
        'gray-100': '#edf2f7',   // Secondary background color
        'gray-200': '#cbd5e0',   // Another gray shade for gradient
      },
      backgroundImage: {
        'gradient-to-right': 'linear-gradient(to right, #ebf8ff, #d4f5e7)', // Define new gradient
        'gradient-to-right-1': 'linear-gradient(to right, #edf2f7, #cbd5e0)', // Define gradient
      },
    },
  },
  plugins: [],
}