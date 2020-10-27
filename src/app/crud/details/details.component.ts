import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  currentTutorial: any = null;
  message = '';
  constructor(public crudService: CrudService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.message = '';
    console.log();
    this.getTutorial(this.route.snapshot.paramMap.get('tutorialId'));
  }

  getTutorial(id: any): void {
    this.crudService.get(id).subscribe(
      (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePublished(status: any): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status,
    };

    this.crudService.update(this.currentTutorial.id, data).subscribe(
      (response) => {
        this.currentTutorial.published = status;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTutorial(): void {
    this.crudService.update(this.currentTutorial.id, this.currentTutorial).subscribe(
      (response) => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteTutorial(): void {
    this.crudService.delete(this.currentTutorial.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/tutorials']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
