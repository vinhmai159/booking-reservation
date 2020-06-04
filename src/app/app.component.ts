import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  timeStamp: string;

  constructor(
    private exampleService: ExampleService
  ) {}
  ngOnInit() {
    }
  }
