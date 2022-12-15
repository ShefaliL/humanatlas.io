import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable } from 'rxjs';
import { ChooseVersion } from '../../components/choose-version/choose-version';
import { PageDataItems } from '../../components/page-data/page-data';
import { PageHeaderItems } from '../../components/page-header/page-header-items';
import { SopLinks } from '../../components/sop-links/sop-links';
import { TableData } from '../../components/table/table';
import { TableDataService } from '../../services/table-data/tabledata.service';
import { columnHeaders, displayedColumnsData, goalsForOmaps } from './omaps.contents';


@Component({
  selector: 'omap',
  templateUrl: './omaps.component.html',
  styleUrls: ['./omaps.component.scss']
})
export class OmapsComponent implements OnInit {
  columns: Observable<string[]> = EMPTY;
  omapsHeading: PageHeaderItems[];
  overviewData: PageDataItems[];
  sopData: SopLinks[];
  acknowledgementsData: PageDataItems[];
  omapsVersionData: ChooseVersion[];
  referencesData: PageDataItems[];
  displayedColumnsData = displayedColumnsData;
  columnHeaders = columnHeaders;
  goalsForOmaps = goalsForOmaps;
  placeholderDate: ChooseVersion;
  tableData: Observable<TableData[]> = EMPTY;
  
  constructor(private readonly dataService: TableDataService, readonly route: ActivatedRoute) { 
    const data = route.snapshot.data['omaps'];
    this.omapsHeading = data.omapsHeading;
    this.overviewData = data.overviewData;
    this.sopData = data.sopData;
    this.acknowledgementsData = data.acknowledgementsData;
    this.omapsVersionData = data.omapsVersionData;
    this.referencesData = data.referencesData;
  }

  setOmapsData(version: ChooseVersion): void {
    const data = this.dataService.getData(version.file, displayedColumnsData);
    this.tableData = data.pipe(map(result => result.data));
    this.columns = data.pipe(map(result => result.columns));
  }

  ngOnInit(): void {
    this.setOmapsData(this.omapsVersionData[0]);
    this.placeholderDate = this.omapsVersionData[0];
  }
}
