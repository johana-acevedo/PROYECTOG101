import express from "express";
import c_uri from "../conectarbd.js";
import { regusuario,showuser,showoneuser, upuser,deluser } from "../controllers/usercontrollers.js";
export const router =express.Router();
import { regevento, sheventos,shevent,delevent,upevent } from '../controllers/ceventocontrollers.js'
//app.use(router);

router.get('/' ,(req,res) => {
    res.send('Bienvenidos a NoldeJS desde la Raiz');
    })

    router.get('/login',(req,res)=>{
        res.send('Bienvenidos a Mi modulo de login');
    })

    //Rutas del usuario
    router.post('/reguser',regusuario);
    router.get('/shuser',showuser);
    router.get('/shuser/:id',showoneuser);
    router.delete('/deluser/:id',deluser)
    router.put('/upuser/:id',upuser);
    

    //rutas para mis eventos deportivos

    router.post('/regevento',regevento);
    router.get('/shevents',sheventos);
    router.get('/shevents/:id',shevent);
    router.delete('/delevent/:id' ,delevent );
    router.put('/upevent/:id',upevent );

    
    router.post('agregar',(req,res)=>{
        res.send('archivo grabado con exito');
    })
    
    router.delete('/delete',(req,res)=>{
        res.send('Archivo eliminado con exito');
        
    })

    export default router ; 