import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes:Recipe[]=[];
 @Output()
 recipeSelected= new EventEmitter<Recipe>();
   recipe=new Recipe('demy','dem-xiong','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=f705f8261e4c510fb1c4e51a50582528/9a504fc2d5628535959cf4cf94ef76c6a6ef63db.jpg')
  constructor() { }
    onSelected(recipe:Recipe){
       this.recipeSelected.emit(recipe)
    }
  ngOnInit() {
  }

}
