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
         cerrarRecInt

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
    regresarRecInt

} from '../JS/utils/funciones_retroceso_menu-serv.js'


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

    //Eventos de regresar al estado inicial debajo de MD
    cerrarMD.addEventListener('click', regresarInstalacionMD);
    cerrarMudanzasMD.addEventListener('click', regresarMudanzasMD);
    cerrarReconfiguracionMD.addEventListener('click', regresarReconfiguracionMD);

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


//----------Retrae los otros sevicios y enfoca los sub servicios de la seleccion debajo de MD
function desplegarMD(e) {
    
    if (e.target.classList.contains('select_instalacion-md')) {
        let insSelectMD = true;

        if (insSelectMD) {
            mudanzasMD.classList.add('ocultar');
            reconfiguracionMD.classList.add('ocultar');
            instalacionMD.classList.remove('container__servicio--instalacion-md-down');
            instalacionMD.classList.add('container__servicio--instalacion-md-down-s');
            cerrarMD.classList.remove('ocultar');
            cerrarMD.classList.add('active');
            armadoMD.classList.remove('ocultar');
            desarmadoMD.classList.remove('ocultar');
            return;
            
        } else {
            insSelectMD = false;
            return;
        }
    } 

    if (e.target.classList.contains('select_mudanzas-md-down') || e.target.classList.contains('container__servicio--mudanzas-md-down')) {
        let insSelect2MD = true;

        if (insSelect2MD) {
            instalacionMD.classList.add('ocultar');
            reconfiguracionMD.classList.add('ocultar');
            mudanzasMD.classList.remove('container__servicio--mudanzas-md-down');
            mudanzasMD.classList.add('container__servicio--mudanzas-md-down-s');
            cerrarMudanzasMD.classList.remove('ocultar');
            cerrarMudanzasMD.classList.add('active');
            mobiliarioMD.classList.remove('ocultar');
            computadorasMD.classList.remove('ocultar');
            return;

        } else {
            insSelect2MD = false;
            return;
        }
    }

    if (e.target.classList.contains('select-reconfiguracion-md') || e.target.classList.contains('container__servicio--reconfiguracion-md')) {
        let insSelect2MD = true;

        if (insSelect2MD) {
            instalacionMD.classList.add('ocultar');
            mudanzasMD.classList.add('ocultar');
            reconfiguracionMD.classList.remove('container__servicio--reconfiguracion-down-md-down');
            reconfiguracionMD.classList.add('container__servicio--reconfiguracion-md-down-s');
            cerrarReconfiguracionMD.classList.remove('ocultar');
            cerrarReconfiguracionMD.classList.add('active');
            mobiliarioRecMD.classList.remove('ocultar');
            reparacionMD.classList.remove('ocultar');
            return;

        } else {
            insSelect2MD = false;
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

