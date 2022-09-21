import { Component, OnInit } from '@angular/core';
import { UserDataList, UserListService } from 'src/app/services/user-list.service';
import { FilterValue, FilterValuesService } from 'src/app/services/filter-values.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent implements OnInit {
  userDataList: UserDataList = {
    total: 0,
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
