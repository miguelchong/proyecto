const formulario = document.getElementsByName('formulario')[0];
const elements = formulario.elements;
const boton = document.getElementById('btn');
var datos = {
  nomEnt: '',
  pobreza: []
};

const Estado={
  "Aguascalientes": [27.6, 2.4],
  "Baja California": [22.5, 1.5],
  "Baja California Sur": [27.6, 2.9],
  "Campeche": [50.5, 12.0],
  "Coahuila de Zaragoza": [25.6, 2.6],
  "Colima": [26.7, 1.9],
  "Chiapas": [75.5, 29.0],
  "Chihuahua": [25.3, 2.9],
  "Ciudad de México": [32.6, 4.3],
  "Durango": [38.7, 4.3],
  "Guanajuato": [42.7, 4.5],
  "Guerrero": [66.4, 25.5],
  "Hidalgo": [50.8, 8.1],
  "Jalisco": [31.4, 3.0],
  "México": [48.9, 8.2],
  "Michoacán de Ocampo": [44.5, 7.6],
  "Morelos": [50.9, 8.4],
  "Nayarit": [30.4, 3.8],
  "Nuevo León": [24.3, 2.1],
  "Oaxaca": [61.7, 20.6],
  "Puebla": [62.4, 12.7],
  "Querétaro": [31.3, 2.9],
  "Quintana Roo": [47.5, 10.6],
  "San Luis Potosí": [42.8, 8.8],
  "Sinaloa": [28.1, 2.4],
  "Sonora": [29.9, 3.5],
  "Tabasco": [54.5, 13.7],
  "Tamaulipas": [34.9, 3.8],
  "Tlaxcala": [59.3, 9.8],
  "Veracruz de Ignacio de la Llave": [58.6, 13.9],
  "Yucatán": [49.5, 11.3],
  "Zacatecas": [45.8, 3.9]}


boton.addEventListener('click', e => {
  e.preventDefault();
  datos.nomEnt = elements.estado.value;
  const ent = datos.nomEnt
  datos.pobreza = Estado[ent];
  console.log('En el año 2020 en el Estado de ', ent)
  console.log('la proporción de pobreza y pobreza extrema era de:')
  console.log(datos.pobreza[0],'y', datos.pobreza[1],'restpectivamente.')
  document.write('En el año 2020 en el Estado de ', ent)
  document.write(' la proporción de pobreza y pobreza extrema era de: ')
  document.write(datos.pobreza[0],' y ', datos.pobreza[1],' restpectivamente.')
/*   console.log(ent)
  console.log(datos.pobreza) */
return datos
})