import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo';
  private todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(title: string): void {
    console.log(title);
    this.todoList.push({ title });
  }

}
