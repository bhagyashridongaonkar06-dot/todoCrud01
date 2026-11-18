const cl = console.log;

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { todosArr } from 'src/app/const/todoArr';
import { ItodosArr } from 'src/app/model/interfaces';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-todo-crud01',
  templateUrl: './todo-crud01.component.html',
  styleUrls: ['./todo-crud01.component.scss']
})
export class TodoCrud01Component implements OnInit {

  todosArr = todosArr

  @ViewChild('todoName')
  todoNameRef !: ElementRef

  @ViewChild('isCompleted')
  isCompleted !: ElementRef

  isInEditMode : boolean = false

  updateId !: string

  constructor(private _uuid : UuidService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onAddTodo(){
    let todo : ItodosArr = {
      todoName : this.todoNameRef.nativeElement.value,
      todoId : this._uuid.getUuid(),
      isCompleted : this.isCompleted.nativeElement.value === 'yes'
    }

    // cl(todo)
    this.todosArr.unshift(todo)
    this.todoNameRef.nativeElement.value = ''
    this.isCompleted.nativeElement.value = 'yes'

    this._snackbar.snackbar(`New todo with name ${todo.todoName} created successfully`)
  }

  onEditTodo(todo : ItodosArr){
     this.todoNameRef.nativeElement.value = todo.todoName
     this.isCompleted.nativeElement.value = todo.isCompleted ? 'yes' : 'no'

     this.isInEditMode = true
     this.updateId = todo.todoId
  }
  onUpdateTodo(){
    let updateObj :  ItodosArr ={
      todoId : this.updateId,
      todoName : this.todoNameRef.nativeElement.value,
      isCompleted : this.isCompleted.nativeElement.value === 'yes'
    }

    let getIndex = this.todosArr.findIndex(e => e.todoId === this.updateId)
    this.todosArr[getIndex] = updateObj

    this.isInEditMode = false
    this.todoNameRef.nativeElement.value = ''
    this.isCompleted.nativeElement.value = ''

    this._snackbar.snackbar(`Todo with id ${this.updateId} updated successfully`)
  }

  onDeleteTodo(todo : string){
    let getConfirm = confirm('Are you sure you want to delete todo?')

    if(getConfirm){
      let getIndex = this.todosArr.findIndex(e => e.todoId === todo)
    this.todosArr.splice(getIndex, 1)

    this._snackbar.snackbar(`todo with id ${todo} deleted successfully`)
    }
  }


  onChangeCheck(todo : ItodosArr){
    todo.isCompleted = !todo.isCompleted

    let getIdx = this.todosArr.findIndex(e => e.todoId === todo.todoId)
    this.todosArr[getIdx] = todo

    this._snackbar.snackbar(`status changed successfully!!!`)
  }

}
