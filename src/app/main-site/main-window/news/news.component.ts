import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../../data-communication.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private passData:DataCommunicationService) { }

  ngOnInit(): void {
    sessionStorage.setItem('_showMoreFeatures2','none')
    sessionStorage.setItem('_showMoreFeaturesAdmin2','none')
    this.passData.passData()
  }

}
