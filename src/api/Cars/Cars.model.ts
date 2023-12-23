//create the mongodb model for CategorieOptional entities
import {CategorieOptionalEntity} from "./CategorieOptional.entity";
import mongoose, {mongo, Schema, Types} from "mongoose";
import {OptionalEntity} from "./Optional.entity";
import {ModelliEntity} from "./Modelli.entity";

export const CategorieOptionalSchema = new Schema<CategorieOptionalEntity>({
    CategoriaOptionalID: String,
    Nome: String
});

CategorieOptionalSchema.set("toJSON", {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    },
});

CategorieOptionalSchema.set("toObject", {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    },
});

export const CategorieOptionalModel = mongoose.model<CategorieOptionalEntity>("tcategorieoptionals", CategorieOptionalSchema);

export const OptionalSchema = new Schema<OptionalEntity>({
    OptionalID: Number,
    ModelloID: Number,
    CategoriaOptionalID: Number,
    Nome: String,
    Prezzo: Number,
    FileImage: String,
    Predefinito: Boolean,
    CategoriaOptionalIDmongo:  { type: Schema.Types.ObjectId, ref: "tcategorieoptionals" },
    ModelloIDmongo:  { type: Schema.Types.ObjectId, ref: "tmodellis" }
});

OptionalSchema.pre("find", function (next) {
    this.populate("CategoriaOptionalIDmongo");
    this.populate("ModelloIDmongo");
    next();
});


OptionalSchema.set("toJSON", {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    },
});
OptionalSchema.set("toObject", {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    },
});
export const OptionalModel = mongoose.model<OptionalEntity>("toptionals", OptionalSchema);

//create the mongodb model for Modelli entities
export const ModelliSchema = new Schema<ModelliEntity>({
    ModelloID: String,
    Nome: String,
    PrezzoBase: Number,
    FileImageSfondo: String
});
ModelliSchema.set("toJSON", {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    },
});
ModelliSchema.set("toObject", {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    },
});
export const ModelliModel = mongoose.model<ModelliEntity>("tmodellis", ModelliSchema);
