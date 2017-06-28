import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Cat} from "./Cat";

@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent {
	@Input() cat: Cat;
	@Output() isFavourite: EventEmitter<Cat> = new EventEmitter<Cat>();

	setAsFavourite() {
		this.isFavourite.emit(this.cat);
	}
}
