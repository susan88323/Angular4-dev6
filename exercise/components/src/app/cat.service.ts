import { Injectable } from '@angular/core';
import { Cat } from './Cat';

@Injectable()
export class CatService {
	boots: Cat = new Cat(1, "Boots", "Calico", "purrs like a kitten", new Date(2011, 9, 30));
	mittens: Cat = new Cat(2, "Mittens", "Manx", "no-tailed", new Date(2014, 9, 16));
	kitty: Cat = new Cat(3, "Kitty", "Calico", "little cat", new Date(2016, 7, 20));

	private cats: Cat[] = [this.boots, this.mittens, this.kitty];

	favouriteCat: Cat;

	getCatList() {
		return this.cats;
	}

	getCat(id: number) {
		return this.cats.find(cat => cat.id === id);
	}
}