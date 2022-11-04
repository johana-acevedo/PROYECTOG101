    import express from "express";
    import cors from  'cors'



    const  app =express()
    app.use(cors())
    app.use(express.json())



    app.get('/', (req, res)=> {
        res.send('HOLA MUNDO ')
    })

    app.listen(8000, ()=> {
        console.log('servidor corriendo en http://localhost:8000/')
})