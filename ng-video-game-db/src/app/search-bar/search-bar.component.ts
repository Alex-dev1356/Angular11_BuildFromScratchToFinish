import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  //Adding Constructor for the router to route our search when triggered
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  //We'll have a parameter of from the directive #form in our html file, and we use the router module to
  //route our search based on the input of the user and triggered submit button.
  onSubmit(form: NgForm){
    this.router.navigate(['search',form.value.search]); //Output: search/{input search by the user}
  }
}
