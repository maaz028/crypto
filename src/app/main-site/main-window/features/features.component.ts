import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../../data-communication.service';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private passData:DataCommunicationService) { }

  ngOnInit(): void {
    sessionStorage.setItem('_showMoreFeatures2','none')
    sessionStorage.setItem('_showMoreFeaturesAdmin2','none')
    this.passData.passData()
  }

}
