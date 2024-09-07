import { Component, Input} from '@angular/core';
import type { Task } from '../../types/types';
import  {DatePipe} from '@angular/common'
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  constructor(private tasksService: TasksService){}

  onCompletTask(){
    this.tasksService.removeTask(this.task.id)
  }
}
