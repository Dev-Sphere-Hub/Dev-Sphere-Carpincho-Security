/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['Nunito', 'sans-serif'],
        parrafo: ['Poppins', 'sans-serif']
      },
      colors: {
        colorCustom1: 'var(--colorCustom1)',
        colorCustom2: 'var(--colorCustom2)',
        colorCustom3: 'var(--colorCustom3)',
        colorCustom4: 'var(--colorCustom4)',
        colorCustom5: 'var(--colorCustom5)'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.botonBase': {
          background: '#ff6347;',
          boxShadow: '3px 3px 3px #729228, -3px -3px 3px  #ccff48',
          color: 'var(--colorCustom5)',
          border: '1px solid var(--colorCustom5)',
          borderRadius: '30px',
          transition: 'all .2s linear',
          padding: '5px 20px',
          '&:hover': {
            background: '#f32703',
            boxShadow: '3px 3px 3px #3d3d3d, -3px -3px 3px #5a5a5a',
            color: 'var(--colorCustom5)',
            border: '1px solid var(--colorCustom1)'
          }
        }

      })
    })
  ]
}

