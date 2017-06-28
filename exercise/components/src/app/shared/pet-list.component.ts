import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";

import {Pet} from "./pet";
import {PetService} from "../core/pet.service";

@Component({
    selector: "pet-list",
    template: require("./pet-list.component.html")
})
export class PetListComponent implements OnInit {
    pets: Pet[];
  	favouritePet: Pet;

    constructor(private petService: PetService, private router: Router) {}

    ngOnInit () {
        this.pets = this.petService.getPetList();
        this.favouritePet = this.petService.favouritePet;
    }

    selectPet(pet: Pet) {
        this.router.navigate(['cats', pet.id]);
    }
}