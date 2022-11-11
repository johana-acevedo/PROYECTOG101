import usuario from '../models/usuario.js';

//registrar un usuario
export	const regusuario= (req,res)=> {
    const  user = usuario(req.body) ;
    user
      .save()
      .then((data)=>res.json(data))
      .catch ((error)=>res.json({message:error}));
  };

  export const regusuario1 = async (req,res)=>{
    res.send("archivo agregado con exito")
    console.log (req.body)
    await usuario.create({nameuser:req.body.nameuser,password:req.body.password,correo:req.body.correo});

  }

  //mostrar todos los usuarios
  export const showuser = (req,res) => {

    usuario
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));

  };
  //mostrar un usuario especifico

  export const showoneuser = (req,res) => {
    const { id } = req.params;
    usuario
    .findById (id)
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}));
  };

  //actualizar  un usuario

  export const upuser = (req, res) => { 
    const { id } = req.params;
    const{ nameuser, password, correo } = req.body;
    usuario
     .updateOne({ _id: id }, { $set: { nameuser, password, correo} })
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error}));
  };
  
   //borrar u usuario
   export const deluser = (req,res)=> {
    const {id}=req.params;
    usuario
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
   }

  
    export default regusuario;
  
