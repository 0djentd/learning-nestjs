import { Controller, Delete, Get, Param, Post, Request } from '@nestjs/common';

class Task {
  name = String;
  constructor(name) {
    this.name = name;
  }
}

@Controller('tasks')
export class TasksController {
  @Post()
  createNew() {
    const task = new Task('new_task');
    return task;
  }
  @Get()
  listAll() {
    const task = new Task('existing_task');
    return [task, task];
  }
  @Get(':id')
  getTask(@Param('id') id: string) {
    return id;
  }
  @Delete(':id')
  deleteTask(@Param() params) {
    return params.id;
  }
}
