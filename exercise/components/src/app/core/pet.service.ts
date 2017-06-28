import { Injectable } from '@angular/core';
import { Pet } from '../shared/pet';

@Injectable()
export class PetService {
	boots: Pet = new Pet(1, "Boots", "Calico", "purrs like a kitten", new Date(2011, 9, 30));
	mittens: Pet = new Pet(2, "Mittens", "Manx", "no-tailed", new Date(2014, 9, 16));
	kitty: Pet = new Pet(3, "Kitty", "Calico", "little cat", new Date(2016, 7, 20));

	private cats: Pet[] = [this.boots, this.mittens, this.kitty];

	favouritePet: Pet;

	getPetList() {
		return this.cats;
	}

	getPet(id: number) {
		return this.cats.find(cat => cat.id === id);
	}
}