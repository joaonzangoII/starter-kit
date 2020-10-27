import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ListService } from './list-example.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  users: any = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
