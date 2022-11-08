    import express from "express";
    import cors from  'cors';
    import { router } from  './route/route.js'
    import pkg from 'colors';

    const color = pkg;
    const  app =express();
    app.use(cors());
    app.use(express.json());
    app.use('/usuarios',router);

     



    app.listen(8000, ()=> {
        console.log('servidor corriendo en http://localhost:8000/'.bgYellow)
})