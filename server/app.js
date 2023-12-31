const express = require('express');
const path = require('path')
const app = express();

const port = 3000;


//plantillas
app.set('view engine','ejs')

//rutas de view y configuracion de plantillas
app.set('views',path.join(__dirname,'../view'))


app.use(express.static(path.join(__dirname,'../public')));



app.get('/',(req,res)=>{
  res.status(200).render('index',{titulo:'Child go Home',subtitulo:'mi titulo dinamico'})
})

app.get('/servicios',(req,res)=>{
  res.status(200).render('servicios',{titulo:'servicios',subtitulo:'Pagina de servicios'})
})
app.get('/tutores',(req,res)=>{
  res.status(200).render('tutores',{titulo:'tutores',subtitulo:'Tutores'})
})
app.get("/grados",(req,res)=>{
  res.status(200).render("grados",{titulo:"grados",subtitulo:"Grados"})
})
app.get("/regsalon",(req,res)=>{
  res.status(200).render("regsalon",{titulo:"regsalon",subtitulo:"Registrar Salón"})
})
app.get("/regtutor",(req,res)=>{
  res.status(200).render("regtutor",{titulo:"regtutor",subtitulo:"Registrar Tutor"})
})
app.get("/listatutores",(req,res)=>{
  res.status(200).render("listatutores",{titulo:"listatutores",subtitulo:"Lista Tutores"})
})
app.get("/listasalon",(req,res)=>{
  res.status(200).render("listasalon",{titulo:"listasalon",subtitulo:"Lista Salones"})
})
app.post("/grados",(req,res)=>{
  res.status(200).render("grados",{titulo:"grados",subtitulo:"Grados"})
})
app.post("/listasalon",(req,res)=>{
  res.status(200).render("listasalon",{titulo:"listasalon",subtitulo:"Lista Salon"})
})
app.post("/listatutores",(req,res)=>{
  res.status(200).render("listatutores",{titulo:"listatutores",subtitulo:"Lista Tutores"})
})
app.use((req,res,next)=>{
  res.status(404).render('404',{titulo:'Pagina 404', message:"The page you are trying to get doesn't exists"})
})

app.listen(port,()=>{
  console.log(`example app listening at http://localhost:${port}`)
})