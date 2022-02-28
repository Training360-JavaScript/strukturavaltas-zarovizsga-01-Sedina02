import { DrugService } from './service/drug.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Drug } from './model/drug';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';

  list$: Observable<Drug[]> = this.drugService.getAll();

  constructor(
    private drugService: DrugService,
  ) { }

}
