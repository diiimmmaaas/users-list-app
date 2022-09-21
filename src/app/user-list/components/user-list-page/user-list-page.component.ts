import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/user-list/services/user-list.service';
import { FilterValuesService } from 'src/app/user-list/services/filter-values.service';
import { UserDataList } from 'src/app/user-list/models/user-list.model';
import { FilterValue } from 'src/app/user-list/models/filter-values.model';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent implements OnInit {
  userDataList: UserDataList = {
    total: null,
    data: [],
  };

  filterValues: FilterValue[] = [];

  filter = 'income';

  constructor(
    private userService: UserListService,
    private filterValuesService: FilterValuesService
  ) {}

  ngOnInit(): void {
    this.userDataList = this.userService.getUserList();
    this.filterValues = this.filterValuesService.getFilterValues();
  }

  onFilter(event: MouseEvent): void {
    this.filter = (event.target as HTMLDivElement).innerText;
  }
}
