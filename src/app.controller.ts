import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { AppService } from './app.service';
import { Note } from './note.models';
import { NoteUpdateDto } from './noteUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post()
  async createNote(@Body() noteDto:Note){
    return this.appService.createNote(noteDto);
  }

  @Get()
  async readNote(){
    return this.appService.readNote()
  }

  @Get(':id')//by Id
  async readNotebyid(@Param('id') id:string){
    return this.appService.readNotebyid(id)
  }

  @Put(':id')
  async updateNote(
    @Param('id')id:String,
    @Body() updateData:NoteUpdateDto):Promise<Note>{
    return this.appService.updateNote(id,updateData)
  }

  @Delete(':id')
  async deleteNote(@Param('id') id:string){
    return this.appService.deleteNote(id)
  }


}
