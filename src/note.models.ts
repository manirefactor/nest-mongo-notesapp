import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NoteDocument= Note & Document
@Schema()
export class Note{
    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    date: number;

    @Prop()
    month:string;

    @Prop()
    year:number;

    @Prop()
    hour:number;

    @Prop()
    min:number;
}

export const NoteSchema = SchemaFactory.createForClass(Note);