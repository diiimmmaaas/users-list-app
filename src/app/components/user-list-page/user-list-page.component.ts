import { Component, OnInit } from '@angular/core';
import { UserListService, UserDataList } from 'src/app/services/user-list.service';

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

  filter = 'income';

  constructor(private appService: UserListService) {}

  ngOnInit(): void {
    this.userDataList = this.appService.getUserList();
  }

  onFilter(event: MouseEvent): void {
    this.filter = (event.target as HTMLDivElement).innerText;
  }
}
