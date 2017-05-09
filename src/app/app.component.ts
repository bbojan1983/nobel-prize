import { Component, Injectable } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

@Injectable()

export class AppComponent {

    constructor(public data: DataService) {}

}
