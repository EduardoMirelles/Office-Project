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
         cerrarDesarmadoMD,
         cerrarMudanzaMobiliarioMD,
         cerrarMudanzaComputadorasMD,
         cerrarRecMobiliarioMD,
         cerrarReperacionMD

} from '../JS/utils/selectores.js'

import {
    armadoSeleccionado, 
    desarmadoSeleccionado, 
    mobiliarioSeleccionado, 
    mudanzaComputadorasSeleccionado, 
    mudanzaMobiliarioSeleccionado, 
    mudanzasSeleccionado, 
    reconfiguracionSeleccionado,
    reconfiguraciónMobiliarioSeleccionado,
    reparacionSeleccionado

} from '../JS/utils/funciones_menu-serv.js'

import { 
    regresarInstalacion, 
    regresarmudanzas, 
    regresarRec,
    regresarInstalacionMD,
    regresarMudanzasMD,
    regresarReconfiguracionMD,
    regresarArmado,
    regresarDesarmado,
    regresarMobiliario,
    regresarComputadoras,
    regresarMobiliarioRec,
    regresarRecInt,
    regresarArmadoMD,
    regresarDesrmadoMD,
    regresarMudanzaMobiliarioMD,
    regresarMudanzaComputadorasMD,
    regresarReconfiguraciónMobiliarioMD,
    regresarReparacionMD

} from '../JS/utils/funciones_retroceso_menu-serv.js'

import {
    mobiliarioSeleccionadoMD, 
    mudanzasSeleccionadoMD,
    reconfiguracionSeleccionadoMD,
    armadoSeleccionadoMDS,
    desarmadoSeleccionadoMDS,
    mudanzaMobiliarioSeleccionadoMDS,
    mudanzaComputadorasSeleccionadoMDS,
    recMobiliarioSeleccionadoMDS,
    reparacionMobiliarioSeleccionadoMDS
} from '../JS/utils/funciones_menu-sev-md.js'


//Eventos
eventListeners();
function eventListeners() {

    //Eventos de despiegue de servicio y retroceso
    instalacion.addEventListener('click', desplegar);
    mudanzas.addEventListener('click', desplegar);
    reconfiguracion.addEventListener('click', desplegar);

    //Eventos de regresar al estado inicial
    cerrar.addEventListener('click', regresarInstalacion);
    cerrarMudanzas.addEventListener('click', regresarmudanzas);
    cerrarRec.addEventListener('click', regresarRec);

    //Eventos de despiegue de servicio y retroceso debajo de MD
    instalacionMD.addEventListener('click', desplegarMD);
    mudanzasMD.addEventListener('click', desplegarMD)
    reconfiguracionMD.addEventListener('click', desplegarMD);

    //Eventos de despliegue de servicio espesifico debajo de MD
    armadoMD.addEventListener('click', desplegarMDS);
    desarmadoMD.addEventListener('click', desplegarMDS);

    mobiliarioMD.addEventListener('click', desplegarMDS);
    computadorasMD.addEventListener('click', desplegarMDS);

    mobiliarioRecMD.addEventListener('click', desplegarMDS);
    reparacionMD.addEventListener('click', desplegarMDS);

    //Eventos de regresar al estado inicial debajo de MD
    cerrarMD.addEventListener('click', regresarInstalacionMD);
    cerrarMudanzasMD.addEventListener('click', regresarMudanzasMD);
    cerrarReconfiguracionMD.addEventListener('click', regresarReconfiguracionMD);

    //Eventos de regresar al estado inicial de servicio espesifico debajo de MD
    cerrararmadoMD.addEventListener('click', regresarArmadoMD);
    cerrarDesarmadoMD.addEventListener('click', regresarDesrmadoMD);

    cerrarMudanzaMobiliarioMD.addEventListener('click', regresarMudanzaMobiliarioMD);
    cerrarMudanzaComputadorasMD.addEventListener('click', regresarMudanzaComputadorasMD);

    cerrarRecMobiliarioMD.addEventListener('click', regresarReconfiguraciónMobiliarioMD);
    cerrarReperacionMD.addEventListener('click', regresarReparacionMD)

    //Eventos de despliegue de el servicio especifico seleccionado
    armado.addEventListener('click', desplegarS);
    desarmado.addEventListener('click', desplegarS);

    mobiliario.addEventListener('click', desplegarS);
    computadoras.addEventListener('click', desplegarS);

    mobiliarioRec.addEventListener('click', desplegarS);
    recInt.addEventListener('click', desplegarS)

    //Eventos de regresar a las opciones de servicios desde un servicio espescifico
    cerrarArmado.addEventListener('click', regresarArmado); 
    cerrarDesarmado.addEventListener('click', regresarDesarmado);

    cerrarMobiliario.addEventListener('click', regresarMobiliario);
    cerrarComputadoras.addEventListener('click', regresarComputadoras);

    cerrarMobiliarioRec.addEventListener('click', regresarMobiliarioRec);
    cerrarRecInt.addEventListener('click', regresarRecInt);

}

//Funciones

//!Aplicacion de Dispositivos de Escritorio 
//----------Retrae los otros sevicios y enfoca los sub servicios de la seleccion
function desplegar(e){

    if (e.target.classList.contains('select_instalacion')) {

        if (true) {
            mobiliarioSeleccionado();
            return;
            
        }
    }  
    
    else if (e.target.classList.contains('select_mudanzas') || e.target.classList.contains('container__servicio--mudanzas')) {

        if (true) {
            mudanzasSeleccionado();
            return;

        }
    }
    
    else if (e.target.classList.contains('select-reconfiguracion') || e.target.classList.contains('container__servicio--reconfiguracion')) {

        if (true) {
            reconfiguracionSeleccionado();
            return;

        }
    } 
}


function desplegarS(e) {

    // ! Eventos al seleccionar sub-servicios de la seccion MOBILIARIO
    if (e.target.classList.contains('select_armado')) {

        if (true) {
            armadoSeleccionado();
            return;   
        }
    }
    
    if (e.target.classList.contains('select-desarmado') || e.target.classList.contains('container__servicio--desarmado')) {

        if (true) {
            desarmadoSeleccionado();
            return;
        }
    }

    // ! Eventos al seleccionar sub-servicios de la seccion Mudanzas
    if (e.target.classList.contains('select-mobiliario') || e.target.classList.contains('container__servicio--mobiliario')) {

        if (true) {
            mudanzaMobiliarioSeleccionado();   
            return;

        }
    }

    if (e.target.classList.contains('select-computadoras') || e.target.classList.contains('container__servicio--computadoras')) {

        if (true) {
            mudanzaComputadorasSeleccionado();
            return;

        }
    }

    // ! Eventos al seleccionar sub-servicios de la seccion Reconfiguración
    if (e.target.classList.contains('select-mobiliario-rec') || e.target.classList.contains('container__servicio--mobiliario-rec')) {

        if (true) {
            reconfiguraciónMobiliarioSeleccionado();
            return;

        }
    }

    if (e.target.classList.contains('select-rec_int') || e.target.classList.contains('container__servicio--rec_int')) {

        if (true) {
            reparacionSeleccionado();
            return;

        }
    }
    
}

//!Aplicacion de Dispositivos moviles
//----------Retrae los otros sevicios y enfoca los sub servicios de la seleccion debajo de MD
function desplegarMD(e) {
    
    if (e.target.classList.contains('select_instalacion-md')) {

        if (true) {
            mobiliarioSeleccionadoMD();
            return;         
        }
    } 

    if (e.target.classList.contains('select_mudanzas-md-down') || e.target.classList.contains('container__servicio--mudanzas-md-down')) {

        if (true) {
            mudanzasSeleccionadoMD();
            return;
        } 
    }

    if (e.target.classList.contains('select-reconfiguracion-md') || e.target.classList.contains('container__servicio--reconfiguracion-md')) {

        if (true) {
            reconfiguracionSeleccionadoMD();
            return;
        } 
    } 

}

function desplegarMDS(e) {

    if (e.target.classList.contains('select-armado-md-down') || e.target.classList.contains('container__servicio--armado-md-down')) {

        if (true) {
            armadoSeleccionadoMDS();
            return;         
        }
    }
    
    if (e.target.classList.contains('select-desarmado') || e.target.classList.contains('container__servicio--desarmado-md-down')) {

        if (true) {
            desarmadoSeleccionadoMDS();
            return;         
        }
    }

    if (e.target.classList.contains('select-mobiliario-md') || e.target.classList.contains('container__servicio--mobiliario-md-down')) {

        if (true) {
            mudanzaMobiliarioSeleccionadoMDS();
            return;         
        }
    }

    if (e.target.classList.contains('select-computadoras-md') || e.target.classList.contains('container__servicio--computadoras-md-down')) {

        if (true) {
            mudanzaComputadorasSeleccionadoMDS();
            return;         
        }
    }

    if (e.target.classList.contains('select-mobiliario-rec-md') || e.target.classList.contains('container__servicio--mobiliario-rec-md-down')) {

        if (true) {
            recMobiliarioSeleccionadoMDS();
            return;         
        }
    }

    if (e.target.classList.contains('select-rec_int-md') || e.target.classList.contains('container__servicio--rec_int-md-down')) {

        if (true) {
            reparacionMobiliarioSeleccionadoMDS();
            return;         
        }
    }
}

