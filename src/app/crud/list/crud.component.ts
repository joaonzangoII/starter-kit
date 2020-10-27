import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  tutorials: any;
  currentTutorial: any = null;
  currentIndex = -1;
  title = '';

  constructor(public crudService: CrudService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.crudService.getAll().subscribe(
      (data) => {
        this.tutorials = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: any, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.crudService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.retrieveTutorials();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchTitle(): void {
    this.crudService.findByTitle(this.title).subscribe(
      (data) => {
        this.tutorials = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
