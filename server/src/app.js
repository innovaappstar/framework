"use strict";
/**
 * Created by kenny on 19/06/2017.
 */
// import PersonaBusiness = require("./../dev/app/business/IPersonaBusiness");
var PersonaBusiness = require("./dev/app/business/PersonaBusiness");
var PersonaController = (function () {
    // let persona : IPersonaModel;
    //
    // constructor(persona : IPersonaModel) {
    //     this.persona = persona;
    // }
    function PersonaController() {
    }
    // create(req: express.Request, res: express.Response): void {
    PersonaController.prototype.create = function (personaModel) {
        try {
            console.log("creando persona..");
            // let persona: IPersonaModel = <IPersonaModel>req.body;
            // let persona: IPersonaModel = <IPersonaModel>{
            //     nombre : "dev",
            //     edad : 12,
            //     pais: "perú"
            // };
            var personaBusiness = new PersonaBusiness();
            personaBusiness.create(personaModel, function (error, result) {
                if (error)
                    console.log({ "error": "error" });
                else
                    console.log({ "success": result });
            });
        }
        catch (e) {
            console.log(e);
            console.log({ "error": "error in your request" });
        }
    };
    // update(req: express.Request, res: express.Response): void {
    PersonaController.prototype.update = function (_id, personaModel) {
        try {
            // var persona: IPersonaModel = <IPersonaModel>personaModel;
            // var _id: string = "1";// personaModel.nombre;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.update(_id, personaModel, function (error, result) {
                if (error)
                    console.log({ "error": "error" });
                else
                    console.log({ "success": result });
            });
        }
        catch (e) {
            console.log(e);
            console.log({ "error": "error in your request" });
        }
    };
    PersonaController.prototype.updateByNombre = function (nombre, personaModel) {
        try {
            // var persona: IPersonaModel = <IPersonaModel>personaModel;
            // var _id: string = "1";// personaModel.nombre;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.updateByNombre(nombre, personaModel, function (error, result) {
                if (error)
                    console.log({ "error": "error" });
                else
                    console.log({ "success": result });
            });
        }
        catch (e) {
            console.log(e);
            console.log({ "error": "error in your request" });
        }
    };
    // delete(req: express.Request, res: express.Response): void {
    PersonaController.prototype.delete = function (_id) {
        try {
            // var _id: string = "1";// personaModel.nombre;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.delete(_id, function (error, result) {
                if (error)
                    console.log({ "error": "error" });
                else
                    console.log({ "success": "se eliminó el registro" });
            });
        }
        catch (e) {
            console.log(e);
            console.log({ "error": "error in your request" });
        }
    };
    // retrieve(req: express.Request, res: express.Response): void {
    PersonaController.prototype.retrieve = function () {
        try {
            var personaBusiness = new PersonaBusiness();
            personaBusiness.retrieve(function (error, result) {
                if (error)
                    console.log({ "error": "error" });
                else
                    console.log({ "success": result });
            });
        }
        catch (e) {
            console.log(e);
            console.log({ "error": "error in your request" });
        }
    };
    // findById(req: express.Request, res: express.Response): void {
    PersonaController.prototype.findById = function (_id) {
        try {
            // var _id: string = req.params._id;
            var personaBusiness = new PersonaBusiness();
            personaBusiness.findById(_id, function (error, result) {
                if (error)
                    console.log({ "error": "error" });
                else
                    console.log({ "success": result });
            });
        }
        catch (e) {
            console.log(e);
            console.log({ "error": "error in your request" });
        }
    };
    return PersonaController;
}());
// export = PersonaController;
var timer = null;
iniciarTimer(1000); // milisegundos
/**
 * función timer para consultar constantemente
 * la tabla datagrama de cd bd.. fixmee 20/12/2016 DERIVAR FUNCIÓN A HERENCIA DE CLASES!!
 */
function iniciarTimer(delay) {
    try {
        timer = setInterval(function () {
            new PersonaController().create({
                nombre: "dev " + new Date,
                edad: 12,
                pais: "perú"
            });
        }, delay);
    }
    catch (error) {
        console.error(error);
    }
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
