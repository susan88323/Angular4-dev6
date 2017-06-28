import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {Pet} from "../shared/pet";
import {PetService} from "../core/pet.service";

@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent implements OnInit {
	cat: Pet;

	constructor(private petService: PetService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		if ( isNaN(id)) {
			this.goBack();
		}
		this.cat = this.petService.getPet(id);
	}

	setAsFavourite() {
		this.petService.favouritePet = this.cat;
	}

	goBack() {
		this.router.navigate(["cats"]);
	}
}
