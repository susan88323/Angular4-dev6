import {Component, OnInit} from '@angular/core';

import {Cat} from './Cat';
import {CatService} from './cat.service';

@Component({
  selector: 'herding-cats',
  template: require("./app.component.html")
})
export class AppComponent implements OnInit {
	constructor(private catService: CatService) {}

	cats: Cat[];

	selectedCat: Cat;
	favouriteCat: Cat;

	ngOnInit() {
		this.cats = this.catService.getCatList();
		this.favouriteCat = this.catService.favouriteCat;
	}

	selectCat(cat: Cat) {
		this.selectedCat = cat;
	}

	selectFavourite(cat: Cat) {
		this.favouriteCat = cat;
		this.catService.favouriteCat = this.favouriteCat;
	}
}
