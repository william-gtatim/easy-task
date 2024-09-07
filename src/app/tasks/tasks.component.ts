import { Component, Input } from '@angular/core';
import type { User } from '../types/types';
import type { NewTaskData } from '../types/types';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) user!:User;
 
  isAddingTask:boolean = false;

  private tasksService: TasksService;
  constructor(tasksService: TasksService){
    this.tasksService = tasksService;
  }


  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.user.id);
  }

  onCompleteTask(id: string){
   this.tasksService.removeTask(id);
  }

  onStartaddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTaskDialog(){
    this.isAddingTask = false;
  }

  onAddTask(task: NewTaskData){
    this.tasksService.addTask(task, this.user.id)
    this.onCloseAddTaskDialog()
  }

}
