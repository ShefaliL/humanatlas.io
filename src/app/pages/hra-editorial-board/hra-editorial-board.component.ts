import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardMemberItems } from '../../components/board-members/board-members';
import { PageDataItems } from '../../components/page-data/page-data';
import { PageHeaderItems } from '../../components/page-header/page-header-items';


@Component({
  selector: 'editorial-board',
  templateUrl: './hra-editorial-board.component.html',
  styleUrls: ['./hra-editorial-board.component.scss']
})
export class HraEditorialBoardComponent {
  overviewData: PageDataItems[];
  boardHeader: PageHeaderItems[];
  boardMembersData: BoardMemberItems[];
  acknowledgmentsData: PageDataItems[];

  constructor(route: ActivatedRoute){
    const data = route.snapshot.data['content'];
    this.overviewData=[data.overviewData];
    this.boardHeader = [data.boardHeader];
    this.acknowledgmentsData = [data.acknowledgmentsData];
    this.boardMembersData = data.boardMembersData;
  }
}
