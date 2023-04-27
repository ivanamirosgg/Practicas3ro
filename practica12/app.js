console.log(Vue);

const app = Vue.createApp({
    data(){
        return{
            mensaje : 'Este es un texto generado por Vue!!',
            nombre : 'Mario',
            profesion : 'maestro'
        }
    }
  
});

app.mount('#miApp');