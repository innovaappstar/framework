/**
 * Created by kenny on 19/06/2017.
 */
// import PersonaBusiness = require("./../dev/app/business/IPersonaBusiness");
import PersonaBusiness = require("./dev/app/business/PersonaBusiness");
import IBaseController = require("./controllers/BaseController");
import IPersonaModel = require("./dev/app/model/interfaces/IPersonaModel");



class PersonaController implements IBaseController <PersonaBusiness> {
    // let persona : IPersonaModel;
    //
    // constructor(persona : IPersonaModel) {
    //     this.persona = persona;
    // }
    constructor(){}
// create(req: express.Request, res: express.Response): void {
    create(personaModel : IPersonaModel): void {
        try {
            console.log("creando persona..");
            // let persona: IPersonaModel = <IPersonaModel>req.body;
            // let persona: IPersonaModel = <IPersonaModel>{
            //     nombre : "dev",
            //     edad : 12,
            //     pais: "perú"
            // };
            var personaBusiness = new PersonaBusiness();
            personaBusiness.create(personaModel, (error, result) => {
                if(error) console.log({"error": "error"});
                else console.log({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            console.log({"error": "error in your request"});

        }
    }
    // update(req: express.Request, res: express.Response): void {
    update(_id : string, personaModel : IPersonaModel): void {
        try {
            // var persona: IPersonaModel = <IPersonaModel>personaModel;
            // var _id: string = "1";// personaModel.nombre;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.update(_id, personaModel, (error, result) => {
                if(error) console.log({"error": "error"});
                else console.log({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            console.log({"error": "error in your request"});

        }
    }
    updateByNombre(nombre : string, personaModel : IPersonaModel): void {
        try {
            // var persona: IPersonaModel = <IPersonaModel>personaModel;
            // var _id: string = "1";// personaModel.nombre;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.updateByNombre(nombre, personaModel, (error, result) => {
                if(error) console.log({"error": "error"});
                else console.log({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            console.log({"error": "error in your request"});

        }
    }
    // delete(req: express.Request, res: express.Response): void {
    delete(_id : string): void {
        try {
            // var _id: string = "1";// personaModel.nombre;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.delete(_id, (error, result) => {
                if(error) console.log({"error": "error"});
                else console.log({"success": "se eliminó el registro"});
            });
        }
        catch (e)  {
            console.log(e);
            console.log({"error": "error in your request"});
        }
    }
    // retrieve(req: express.Request, res: express.Response): void {
    retrieve(): void {
        try {

            var personaBusiness = new PersonaBusiness();
            personaBusiness.retrieve((error, result) => {
                if(error) console.log({"error": "error"});
                else console.log({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            console.log({"error": "error in your request"});
        }
    }
    // findById(req: express.Request, res: express.Response): void {
    findById(_id : string): void {
        try {

            // var _id: string = req.params._id;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.findById(_id, (error, result) => {
                if(error) console.log({"error": "error"});
                else console.log({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            console.log({"error": "error in your request"});
        }
    }
}
// export = PersonaController;


var timer = null;
iniciarTimer(1000); // milisegundos

/**
 * función timer para consultar constantemente
 * la tabla datagrama de cd bd.. fixmee 20/12/2016 DERIVAR FUNCIÓN A HERENCIA DE CLASES!!
 */
function iniciarTimer(delay)
{
    try
    {
        timer =  setInterval(function()
        {
            new PersonaController().create({
                nombre : "dev " + new Date,
                edad : 12,
                pais: "perú"
            });

        }, delay);
    } catch (error){ console.error(error);}
}


// new PersonaController().update("5948954c445fd521f44545bc", {
//     nombre : "arnolds",
//     edad : 222,
//     pais: "bolivia"
// });

// new PersonaController().updateByNombre("developer", {
//     nombre : "kenny",
//     edad : 123456,
//     pais: "argentina"
// });

// new PersonaController().delete("5948958108793218f4606871");

// new PersonaController().retrieve();

// new PersonaController().findById("5948954c445fd521f44545bc");