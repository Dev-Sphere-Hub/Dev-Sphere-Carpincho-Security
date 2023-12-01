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
        titulo: ['Plus Jakarta Sans', 'sans-serif'],
        parrafo: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        custom: '2px 3px 6px #969696, -3px -3px 4px #ffffff'
      },
      colors: {
        colorCustom1: '#f1b95e',
        colorCustom2: '#ff6347',
        colorCustom3: '#b2e43f',
        colorCustom4: '#302c25',
        colorCustom5: '#f8f9fa'
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
        },
        '.ellipsisText': {
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      })
    })
  ]
}
