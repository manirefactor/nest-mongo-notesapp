import { Injectable } from '@nestjs/common';
import { Note,NoteDocument } from './note.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('note') private readonly noteModel:Model<NoteDocument>){}

  //creating a note
  async createNote(note:Note):Promise<Note>{
    const newNote=new this.noteModel(note);
    return newNote.save()
  }

  //reading the notes
  async readNote(){
    return this.noteModel.find()
    .then((note)=>{return note})
    .catch((err)=>console.log('Error Reading Bro!'+err))
  }

  //reading by Id
  async readNotebyid(id){
    return this.noteModel.findById(id)
  }

  //updating the notes
  async updateNote(id,data):Promise<Note>{
    return this.noteModel.findByIdAndUpdate(id,data,{new:true})
  }

  //Deleting the notes
  async deleteNote(id){
    return this.noteModel.findByIdAndDelete(id)
  }
}
