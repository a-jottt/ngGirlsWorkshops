import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListStorageService } from '../todo-list-storage.service';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  private todoList;

  constructor(private todoListStorageService: TodoListStorageService) { }

  ngOnInit() {
    this.todoList = this.todoListStorageService.get();
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }
}
