import {Types} from "mongoose";
import {CategorieOptionalEntity} from "./CategorieOptional.entity";
import {ModelliEntity} from "./Modelli.entity";

export interface OptionalEntity{
    id?: string,
    OptionalID: number
    ModelloID: number
    CategoriaOptionalID: number
    Nome: string
    Prezzo: number
    FileImage: string
    Predefinito: Boolean
    CategoriaOptionalIDmongo:Types.ObjectId | string | CategorieOptionalEntity;
    ModelloIDmongo:Types.ObjectId | string | ModelliEntity;
}