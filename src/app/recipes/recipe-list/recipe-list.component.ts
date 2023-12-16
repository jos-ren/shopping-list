import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'my test recipe',
      'this is a test describe',
      'https://cdn-icons-png.flaticon.com/512/4080/4080032.png'
    ),
    new Recipe(
      'my test recipe',
      'this is a test describe',
      'https://cdn-icons-png.flaticon.com/512/4080/4080032.png'
    ),
  ];

  constructor() {}

  ngOnInIt() {}
}
