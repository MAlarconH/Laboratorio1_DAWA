import express from "express";

const app = express();
app.use(express.json()); // Sirve para que nuestro codigo entienda el envio

const people = []

app.get("/", (request, response) => {
    response.json({
        ok: true,
        data: people,
    })
})

app.post("/create", function(req,res){

    const data = req.body;
    data.id = people.length + 1;
    people.push(data);

    return res.status(201).json({
        ok: true,
        data: "Persona creada",
    })
})

app.put("/update", (req, res)=>{
    
    const data = req.body;

    people[data.id-1].name = data.name;
    
    return res.status(204).json({
        ok: true,
        data: "Persona modificada",
    })
});

app.delete("/delete", (req, res)=>{
    
    const data = req.body;

    let i;

    for(i=0;i<people.length;i++){
        if(data.id==people[i].id){
            people.splice(i,1);
            i=0;
        }
    };
    

    return res.status(201).json({
        ok: true,
        data: "Persona eliminada",
    })
});



app.listen(6004, ()=> console.log(`El servidor inicio en http://localhost:6004`));