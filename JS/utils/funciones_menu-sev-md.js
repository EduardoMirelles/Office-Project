import { instalacion,
    mudanzas,
    reconfiguracion,
    armado,
    desarmado,
    mobiliario,
    computadoras,
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
    cerrarArmado,
    cerrarDesarmado,
    cerrarMobiliario,
    cerrarComputadoras,
    mobiliarioRec,
    cerrarMobiliarioRec,
    RecIntS,
    recInt,
    cerrarRecInt,
    selectArmadoMD,
    cerrararmadoMD,
    selectDesarmadoMD,
    cerrarDesarmadoMD,
    selectMudanzaMobiliarioMD,
    cerrarMudanzaMobiliarioMD,
    selectMudanzaComputadorasMD,
    cerrarMudanzaComputadorasMD,
    selectMobiliarioRecMD,
    cerrarRecMobiliarioMD,
    selectReparacionMD,
    cerrarReperacionMD

} from '../utils/selectores.js'

// ! Funcion que despliega las opciones del servicio de armado y desarmado de mobiliario debajo de MD
export const mobiliarioSeleccionadoMD = function() {
    mudanzasMD.classList.add('ocultar');
    reconfiguracionMD.classList.add('ocultar');
    instalacionMD.classList.remove('container__servicio--instalacion-md-down');
    instalacionMD.classList.add('container__servicio--instalacion-md-down-s');
    cerrarMD.classList.remove('ocultar');
    cerrarMD.classList.add('active');
    armadoMD.classList.remove('ocultar');
    desarmadoMD.classList.remove('ocultar');
}

// ! Funcion que despliega las opciones del servicio de mudanzas de mobiliario y equipo de computo debajo de MD
export const mudanzasSeleccionadoMD = function() {
    instalacionMD.classList.add('ocultar');
    reconfiguracionMD.classList.add('ocultar');
    mudanzasMD.classList.remove('container__servicio--mudanzas-md-down');
    mudanzasMD.classList.add('container__servicio--mudanzas-md-down-s');
    cerrarMudanzasMD.classList.remove('ocultar');
    cerrarMudanzasMD.classList.add('active');
    mobiliarioMD.classList.remove('ocultar');
    computadorasMD.classList.remove('ocultar');
}

// ! Funcion que despliega las opciones del servicio de reconfiguración de mobiliario debajo de MD
export const reconfiguracionSeleccionadoMD = function() {
    instalacionMD.classList.add('ocultar');
    mudanzasMD.classList.add('ocultar');
    reconfiguracionMD.classList.remove('container__servicio--reconfiguracion-down-md-down');
    reconfiguracionMD.classList.add('container__servicio--reconfiguracion-md-down-s');
    cerrarReconfiguracionMD.classList.remove('ocultar');
    cerrarReconfiguracionMD.classList.add('active');
    mobiliarioRecMD.classList.remove('ocultar');
    reparacionMD.classList.remove('ocultar');
}

export const armadoSeleccionadoMDS = function() {

    desarmadoMD.classList.add('ocultar');
    instalacionMD.classList.add('ocultar');
    armadoMD.classList.remove('container__servicio--armado-md-down');
    armadoMD.classList.add('container__servicio--armado-md-down-s');
    selectArmadoMD.classList.remove('ocultar');
    cerrararmadoMD.classList.remove('ocultar');
}

export const desarmadoSeleccionadoMDS = function() {

    instalacionMD.classList.add('ocultar');
    armadoMD.classList.add('ocultar');
    desarmadoMD.classList.remove('container__servicio--desarmado-md-down');
    desarmadoMD.classList.add('container__servicio--desarmado-md-down-s');
    selectDesarmadoMD.classList.remove('ocultar');
    cerrarDesarmadoMD.classList.remove('ocultar');
}

export const mudanzaMobiliarioSeleccionadoMDS = function() {

    mudanzasMD.classList.add('ocultar');
    computadorasMD.classList.add('ocultar');
    mobiliarioMD.classList.remove('container__servicio--mobiliario-md-down');
    mobiliarioMD.classList.add('container__servicio--mobiliario-md-down-s');
    selectMudanzaMobiliarioMD.classList.remove('ocultar');
    cerrarMudanzaMobiliarioMD.classList.remove('ocultar');
}

export const mudanzaComputadorasSeleccionadoMDS = function() {
    
    mudanzasMD.classList.add('ocultar');
    mobiliarioMD.classList.add('ocultar');
    computadorasMD.classList.remove('container__servicio--computadoras-md-down');
    computadorasMD.classList.add('container__servicio--computadoras-md-down-s');
    selectMudanzaComputadorasMD.classList.remove('ocultar');
    cerrarMudanzaComputadorasMD.classList.remove('ocultar');
}

export const recMobiliarioSeleccionadoMDS = function() {

    reconfiguracionMD.classList.add('ocultar');
    reparacionMD.classList.add('ocultar');
    mobiliarioRecMD.classList.remove('container__servicio--mobiliario-rec-md-down');
    mobiliarioRecMD.classList.add('container__servicio--mobiliario-rec-md-down-s');
    selectMobiliarioRecMD.classList.remove('ocultar');
    cerrarRecMobiliarioMD.classList.remove('ocultar');
}

export const reparacionMobiliarioSeleccionadoMDS = function() {
    
    reconfiguracionMD.classList.add('ocultar');
    mobiliarioRecMD.classList.add('ocultar');
    reparacionMD.classList.remove('container__servicio--rec_int-md-down');
    reparacionMD.classList.add('container__servicio--rec_int-md-down-s');
    selectReparacionMD.classList.remove('ocultar');
    cerrarReperacionMD.classList.remove('ocultar');
}