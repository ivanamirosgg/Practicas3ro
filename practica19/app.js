const { createApp } = Vue

const canciones = [
  {
    autor : 'Juan Gabriel',
    nombre : 'Hasta que te conoci'
  },
  {
    autor : 'Roberto Cantoral',
    nombre : 'El triste'
  },
  {
    autor : 'Juan Carlos Calderon',
    nombre : 'La incondicional'
  },
];

createApp({
  data() {
    return{
      canciones : canciones
    }
  }
}).mount('#miApp');