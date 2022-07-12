import { Injectable } from '@nestjs/common';
import { Note,NoteDocument } from './note.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';

@Injectable()
export class AppService {
  constructor(@InjectModel('note') private readonly noteModel:Model<NoteDocument>){}

  //creating a note
  async createNote(note:Note):Promise<Note>{
    try{const newNote=new this.noteModel(note);
    return newNote.save()}
    catch(err){console.log('Error creating note: ',err);}
  }

  //reading the notes
  async readNote(){
    try{
    return this.noteModel.find()
    .then((note)=>{return note})}
    catch(err){console.log('Error reading note: ',err);}
  }

  //reading by Id
  async readNotebyid(id){
    try{
      return this.noteModel.findById(id)
    }
    catch(err){
      console.log('Reading by Id Error: ',err);
    }
  }

  //updating the notes
  async updateNote(id,data):Promise<Note>{
    try{
      return this.noteModel.findByIdAndUpdate(id,data,{new:true})
    }
    catch(err){console.log('Updating Note Error: ',err);
  }
}

  //Deleting the notes
  async deleteNote(id){
    try{
    return this.noteModel.findByIdAndDelete(id)
  }
  catch(err){console.log('Deleting Note Error: ',err);}
}
}
