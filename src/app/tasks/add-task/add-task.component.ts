import { Component, EventEmitter, Output, Input } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required: true}) userId!: string;
  
  @Output() closeAddTaskDialog = new EventEmitter<void>();

  constructor(private tasksService: TasksService) { }

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseAddTaskDialog(){
    this.closeAddTaskDialog.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId);
    this.onCloseAddTaskDialog()
  }
}
