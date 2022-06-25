import { instalacion,
    mudanzas,
    reconfiguracion,
    armado,
    desarmado,
    mobiliario,
    computadoras,
    mobiliarioRec,
    recInt,
    cerrar,
    cerrarMudanzas,
    cerrarRec,
    armadoS,
    cerrarArmado,
    desarmadoS,
    cerrarDesarmado,
    mobiliarioS,
    cerrarMobiliario,
    computadorasS,
    cerrarComputadoras,
    mobiliarioRecS,
    cerrarMobiliarioRec,
    RecIntS

} from '../utils/selectores.js'

//TODO: Funciones que agregan y quitan clases para despleguar un servicio seleccionado 
 
// ! Funcion que despliega las opciones del servicio de armado y desarmado de mobiliario 
 export const mobiliarioSeleccionado = function() {

    mudanzas.classList.add('ocultar');
    reconfiguracion.classList.add('ocultar');
    cerrar.classList.remove('ocultar');
    cerrar.classList.add('active');
    armado.classList.remove('ocultar');
    desarmado.classList.remove('ocultar');

 }

 // ! Funcion que despliega las opciones del servicio de mudanzas de mobiliario o equipo de computo 
 export const mudanzasSeleccionado = function() {

    instalacion.classList.add('ocultar');
    reconfiguracion.classList.add('ocultar');
    mudanzas.classList.remove('container__servicio--mudanzas')
    mudanzas.classList.add('container__servicio--mudanzas-s');
    cerrarMudanzas.classList.remove('ocultar');
    cerrarMudanzas.classList.add('active');
    mobiliario.classList.remove('ocultar');
    computadoras.classList.remove('ocultar');

 }

 // ! Funcion que despliega las opciones del servicio de reconfiguracion o customizacion de mobiliario
 export const reconfiguracionSeleccionado = function() {

    instalacion.classList.add('ocultar');
    mudanzas.classList.add('ocultar');
    reconfiguracion.classList.remove('container__servicio--reconfiguracion');
    reconfiguracion.classList.add('container__servicio--reconfiguracion-s');
    cerrarRec.classList.remove('ocultar');
    cerrarRec.classList.add('active');
    mobiliarioRec.classList.remove('ocultar');
    recInt.classList.remove('ocultar');

 }

 //TODO: Funciones que permiten seleciionar un sub servicio ocultando el servicio principal y el sub-servicio no seleccionado, mostrando mas informacion sobre el sub-servicio.

 //? Mobiliario
 // ! Funcion que despliega mas informacion sobre el sub servicio seleccionado (Armado de mobiliario)
 export const armadoSeleccionado = function() {

    instalacion.classList.add('ocultar')
    mudanzas.classList.add('ocultar');
    reconfiguracion.classList.add('ocultar');
    cerrarArmado.classList.remove('ocultar');
    cerrarArmado.classList.add('active');
    armado.classList.remove('ocultar');
    desarmado.classList.add('ocultar');
    armadoS.classList.remove('ocultar');
    armado.classList.remove('container__servicio--armado');
    armado.classList.add('container__servicio--armado-s-s');

 }

 // ! Funcion que despliega mas informacion sobre el sub servicio seleccionado (Desarmado de mobiliario)
 export const desarmadoSeleccionado = function() {

    instalacion.classList.add('ocultar');
    armado.classList.add('ocultar');
    desarmado.classList.remove('container__servicio--desarmado')
    desarmado.classList.add('container__servicio--desarmado-s-s');
    cerrarDesarmado.classList.remove('ocultar');
    cerrarDesarmado.classList.add('active');
    desarmadoS.classList.remove('ocultar');

 }

//? Mudanzas
 // ! Funcion que despliega mas informacion sobre el sub servicio seleccionado (Mudanza de mobiliario)
 export const mudanzaMobiliarioSeleccionado = function() {

    computadoras.classList.add('ocultar');
    mudanzas.classList.add('ocultar');
    mobiliario.classList.remove('container__servicio--mobiliario')
    mobiliario.classList.add('container__servicio--mobiliario-s-s');
    cerrarMobiliario.classList.remove('ocultar');
    cerrarMobiliario.classList.add('active');
    mobiliarioS.classList.remove('ocultar'); 

 }

  // ! Funcion que despliega mas informacion sobre el sub servicio seleccionado (Mudanza de equipo de computo)
  export const mudanzaComputadorasSeleccionado = function() {

    mobiliario.classList.add('ocultar');
    mudanzas.classList.add('ocultar');
    computadoras.classList.remove('container__servicio--computadoras')
    computadoras.classList.add('container__servicio--computadoras-s-s');
    cerrarComputadoras.classList.remove('ocultar');
    cerrarComputadoras.classList.add('active');
    computadorasS.classList.remove('ocultar'); 

 }

 //? Reconfiguración
 // ! Funcion que despliega mas informacion sobre el sub servicio seleccionado (Reconfiguración de mobiliario)
 export const reconfiguraciónMobiliarioSeleccionado = function() {

   reconfiguracion.classList.add('ocultar');
   recInt.classList.add('ocultar');
   mobiliarioRec.classList.remove('container__servicio--mobiliario-rec-s')
   mobiliarioRec.classList.add('container__servicio--mobiliario-rec-s-s');
   cerrarMobiliarioRec.classList.remove('ocultar');
   cerrarMobiliarioRec.classList.add('active');
   mobiliarioRecS.classList.remove('ocultar'); 

}

 // ! Funcion que despliega mas informacion sobre el sub servicio seleccionado (Reparacion y Customización)
 export const reparacionSeleccionado = function() {

   reconfiguracion.classList.add('ocultar');
   mobiliarioRec.classList.add('ocultar');
   recInt.classList.remove('container__servicio--mobiliario-rec-s')
   recInt.classList.add('container__servicio--mobiliario-rec-s-s');
   //cerrarMobiliarioRec.classList.remove('ocultar');
   //cerrarMobiliarioRec.classList.add('active');
   RecIntS.classList.remove('ocultar'); 

}