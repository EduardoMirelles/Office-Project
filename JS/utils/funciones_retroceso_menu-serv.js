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
    instalacionMD,
    armadoMD,
    desarmadoMD,
    cerrarMD,
    mudanzasMD,
    reconfiguracionMD,
    mobiliarioMD,
    computadorasMD,
    cerrarMudanzasMD,
    reparacionMD,
    mobiliarioRecMD,
    cerrarReconfiguracionMD,
    armadoS,
    cerrarArmado,
    desarmadoS,
    cerrarDesarmado,
    mobiliarioS,
    cerrarMobiliario,
    computadorasS,
    cerrarComputadoras,
    cerrarMobiliarioRec,
    mobiliarioRecS

} from '../utils/selectores.js'

//TODO: Regresa la pagina a su estado inicial con lo servicios

// ? Menu principal de Servicios
//! Regresa de haber seleccionado "MOBILIARIO" al estado normal del menú de servicios
export function regresarInstalacion() {
    mudanzas.classList.remove('ocultar');
    reconfiguracion.classList.remove('ocultar');
    cerrar.classList.add('ocultar');
    cerrar.classList.remove('active');
    armado.classList.add('ocultar');
    desarmado.classList.add('ocultar');
}

//! Regresa de haber seleccionado "MUDANZAS" al estado normal del menú de servicios
export function regresarmudanzas() {
    instalacion.classList.remove('ocultar');
    reconfiguracion.classList.remove('ocultar');
    mudanzas.classList.remove('container__servicio--mudanzas-s');
    mudanzas.classList.add('container__servicio--mudanzas')
    cerrarMudanzas.classList.add('ocultar');
    cerrarMudanzas.classList.remove('active');
    mobiliario.classList.add('ocultar');
    computadoras.classList.add('ocultar')
}

//! Regresa de haber seleccionado "RECONFIGURACION" al estado normal del menú de servicios
export function regresarRec() {
    instalacion.classList.remove('ocultar');
    mudanzas.classList.remove('ocultar');
    reconfiguracion.classList.remove('container__servicio--reconfiguracion-s');
    reconfiguracion.classList.add('container__servicio--reconfiguracion')
    cerrarRec.classList.add('ocultar');
    cerrarRec.classList.remove('active');
    mobiliarioRec.classList.add('ocultar');
    recInt.classList.add('ocultar');
}

// ? Menu principal de Servicios debajo de tamaño de pantalla MEDIANO
//! Regresa de haber seleccionado "MOBILIARIO" al estado normal del menú de servicios debajo de tamaño mediano de pantalla
export function regresarInstalacionMD() {
    mudanzasMD.classList.remove('ocultar');
    reconfiguracionMD.classList.remove('ocultar');
    cerrarMD.classList.add('ocultar');
    cerrarMD.classList.remove('active');
    armadoMD.classList.add('ocultar');
    desarmadoMD.classList.add('ocultar');
}

//! Regresa de haber seleccionado "MUDANZAS" al estado normal del menú de servicios debajo de tamaño mediano de pantalla
export function regresarMudanzasMD() {
    instalacionMD.classList.remove('ocultar');
    reconfiguracionMD.classList.remove('ocultar');
    mudanzasMD.classList.remove('container__servicio--mudanzas-md-down-s');
    mudanzasMD.classList.add('container__servicio--mudanzas-md-down')
    cerrarMudanzasMD.classList.add('ocultar');
    cerrarMudanzasMD.classList.remove('active');
    mobiliarioMD.classList.add('ocultar');
    computadorasMD.classList.add('ocultar')
}

//! Regresa de haber seleccionado "RECONFIGURACIÓN" al estado normal del menú de servicios debajo de tamaño mediano de pantalla
export function regresarReconfiguracionMD() {
    instalacionMD.classList.remove('ocultar');
    mudanzasMD.classList.remove('ocultar');
    reconfiguracionMD.classList.remove('container__servicio--reconfiguracion-md-down-s');
    reconfiguracionMD.classList.add('container__servicio--reconfiguracion-md-down')
    cerrarReconfiguracionMD.classList.add('ocultar');
    cerrarReconfiguracionMD.classList.remove('active');
    mobiliarioRecMD.classList.add('ocultar');
    reparacionMD.classList.add('ocultar');
}

// ? Menu de Sub-ervicio especifico seleccionado
//? Mobiliario
//! Regresa de haber sellecionado "Armado" a los sub-servicios de "MOBILIARIO"
export function regresarArmado() {
    armadoS.classList.add('ocultar')
    cerrarArmado.classList.add('ocultar');
    cerrarArmado.classList.remove('active');
    desarmado.classList.remove('ocultar');
    instalacion.classList.remove('ocultar');
    armado.classList.add('container__servicio--armado');
    armado.classList.remove('container__servicio--armado-s-s');
}

//! Regresa de haber sellecionado "Desarmado" a los sub-servicios de "MOBILIARIO"
export function regresarDesarmado() {
    desarmadoS.classList.add('ocultar')
    cerrarDesarmado.classList.add('ocultar');
    cerrarDesarmado.classList.remove('active');
    desarmado.classList.remove('ocultar');
    instalacion.classList.remove('ocultar');
    armado.classList.remove('ocultar');
    desarmado.classList.add('container__servicio--desarmado');
    desarmado.classList.remove('container__servicio--desarmado-s-s');
}

//?Mudanza
//! Regresa de haber sellecionado "Mobiliario" a los sub-servicios de "MUDANZA"
export function regresarMobiliario() {
    mobiliarioS.classList.add('ocultar')
    cerrarMobiliario.classList.add('ocultar');
    cerrarMobiliario.classList.remove('active');
    mobiliario.classList.remove('ocultar');
    mudanzas.classList.remove('ocultar');
    computadoras.classList.remove('ocultar');
    mobiliario.classList.add('container__servicio--mobiliario');
    mobiliario.classList.remove('container__servicio--mobiliario-s-s');
}

//! Regresa de haber sellecionado "Computadoras" a los sub-servicios de "MUDANZA"
export function regresarComputadoras() {
    computadorasS.classList.add('ocultar')
    cerrarComputadoras.classList.add('ocultar');
    cerrarComputadoras.classList.remove('active');
    computadoras.classList.remove('ocultar');
    mudanzas.classList.remove('ocultar');
    mobiliario.classList.remove('ocultar');
    computadoras.classList.add('container__servicio--computadoras');
    computadoras.classList.remove('container__servicio--computadoras-s-s');
}

//? Reconfiguración
export function regresarMobiliarioRec() {
    mobiliarioRecS.classList.add('ocultar')
    cerrarMobiliarioRec.classList.add('ocultar');
    cerrarMobiliarioRec.classList.remove('active');
    recInt.classList.remove('ocultar');
    reconfiguracion.classList.remove('ocultar');
    mobiliarioRec.classList.remove('ocultar');
    mobiliarioRec.classList.add('container__servicio--mobiliario-rec');
    mobiliarioRec.classList.remove('container__servicio--mobiliario-rec-s-s');
}