import {TypedRequest} from "../../utils/typed-request.interface";
import {NextFunction, Response, Request} from "express";
import {OptionalModel as Option} from "./Cars.model";
import {ModelliModel as Modelli} from "./Cars.model";
import {CategorieOptionalModel as Categories} from "./Cars.model";
import {cache} from "../../cache";
import {forEach} from "lodash";

export const getModelli = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // const temp = cache.get("getModelli");
    // if(temp != null){
    //     const response = cache.get("getModelli");
    //     res.status(200).json(response);
    //     return;
    // }
    const response = await Modelli.find();
    //cache.set("getModelli", response, process.env.TTL_NYT || 3600);
    res.status(200).json(response);
}

export const getOptional = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // if(cache.has("getOptional")){
    //     const response = cache.get("getOptional");
    //     res.status(200).json(response);
    //     return;
    // }
    const response = await Option.find();
    //cache.set("getOptional", response, process.env.TTL_NYT || 3600);
    res.status(200).json(response);
}

export const getCategorieOptional = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // if(cache.has("getCategorieOptional")){
    //     const response = cache.get("getCategorieOptional");
    //     res.status(200).json(response);
    //     return;
    // }
    const response = await Categories.find();
    //cache.set("getCategorieOptional", response, process.env.TTL_NYT || 3600);
    res.status(200).json(response);
}

export const setMongoid = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const response =  await Option.find();
    forEach(response, async (value) => {
        const modello = await Modelli.findOne({ModelloID: value.ModelloID.toString()});
        const categoria = await Categories.findOne({CategoriaOptionalID: value.CategoriaOptionalID.toString()});
        if(modello != null && categoria != null) {
            await Option.updateOne(
                {OptionalID: value.OptionalID},
                {
                    ModelloIDmongo: modello._id.toString(),
                    CategoriaOptionalIDmongo: categoria._id.toString()
                }
            );
        }
    });
    res.status(200).json({});
}