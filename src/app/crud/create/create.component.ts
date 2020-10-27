import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    published: false,
  };
  submitted = false;

  constructor(public crudService: CrudService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
    };

    this.crudService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
    };
  }
}
