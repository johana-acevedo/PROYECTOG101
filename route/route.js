import express from "express";
export const router =express.Router();
//app.use(router);

router.get('/' ,(req,res) => {
    res.send('Bienvenidos a NoldeJS desde la Raiz');
    })

    router.get('/login',(req,res)=>{
        res.send('Bienvenidos a Mi modulo de login');
    })

    router.post('/agregar',(req,res)=>{
        res.send('Archivo grabado con exito')
    })

    router.delete('/delete',(req,res)=>{
        res.send('Archivo eliminado con exito');
        
    })

    export default router ; 