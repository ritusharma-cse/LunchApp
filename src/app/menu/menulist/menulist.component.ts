import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu-model';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
// export class MenulistComponent implements OnInit {
// menu: Menu[];
//   constructor(private menuService:MenuService) { }

//   ngOnInit() {
//     this.menu = this.menuService.getMenulist();
//   }

// }
export class MenulistComponent implements OnInit {
  id: number;
  editMode = false;
  menuForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    // if (this.editMode) {
    //   this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    // } else {
    //   this.recipeService.addRecipe(this.recipeForm.value);
    // }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.menuForm.get('ingredients')).push(
      new FormGroup({
        truckName: new FormControl(null, Validators.required),
        description: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.menuForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.menuService.getRecipe(this.id);
      recipeName = recipe.truckName;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              truckName: new FormControl(ingredient, Validators.required),
              amount: new FormControl(ingredient, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.menuForm = new FormGroup({
      truckName: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }
}
