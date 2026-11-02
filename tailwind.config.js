/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{js,jsx}'], theme: { extend: { colors: { opbi: { teal:'#087b91', blue:'#1aa6ca', navy:'#15253e', pale:'#f5f7ff', yellow:'#ffd52d' } }, fontFamily: { sans:['DM Sans','sans-serif'], display:['Manrope','sans-serif'] }, boxShadow: { soft:'0 12px 35px rgba(19,39,66,.08)' } } }, plugins: [] }
