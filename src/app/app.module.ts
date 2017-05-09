import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { NobelPrizesService } from './nobel-prizes.service';
import { NobelPrizeComponent } from './nobel-prize/nobel-prize.component';
import { Prize } from './prize';
import { CapitalizePipe } from './capitalize.pipe';
import { SortPipe } from './sort.pipe';
import { FilterYearPipe } from './filter-year.pipe';
import { FilterCategoryPipe } from './filter-category.pipe';
import { FilterFirstnamePipe } from './filter-firstname.pipe';
import { FilterSurnamePipe } from './filter-surname.pipe';

@NgModule({

    declarations: [
        AppComponent,
        LoginComponent,
        NobelPrizeComponent,
        CapitalizePipe,
        SortPipe,
        FilterYearPipe,
        FilterCategoryPipe,
        FilterFirstnamePipe,
        FilterSurnamePipe
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],

    providers: [
        DataService,
        NobelPrizesService,
        Prize,
    ],

    bootstrap: [ AppComponent ],

})

export class AppModule { }
