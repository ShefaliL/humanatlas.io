import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LongCard } from '../../components/card-button-long/long-card';
import { TileItems } from '../../components/simple-tile/tile-items';


@Component({
  selector: 'overview-data',
  templateUrl: './overview-data.component.html',
  styleUrls: ['./overview-data.component.scss']
})
export class OverviewDataComponent {
  pageTitle: string;
  description: TileItems[];
  longButtonItems: LongCard[];

  constructor(private router: Router, route: ActivatedRoute) { 
    const data = route.snapshot.data['content'];
    this.pageTitle = data.pageTitle;
    this.description = data.description;
    this.longButtonItems = data.longButtonItems;
  }

  clicked(card: LongCard): void {
    this.router.navigate([card.route])
  }
}
