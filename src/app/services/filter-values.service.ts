import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DealType } from 'src/app/services/user-list.service';

export interface FilterValue {
  id: string;
  value: DealType;
}

@Injectable({
  providedIn: 'root',
})
export class FilterValuesService {
  filterValues$ = new BehaviorSubject<FilterValue[]>([
    { id: '0', value: 'income' },
    { id: '1', value: 'outcome' },
    { id: '2', value: 'loan' },
    { id: '3', value: 'investment' },
  ]);

  getFilterValues(): FilterValue[] {
    return this.filterValues$.getValue();
  }
}
