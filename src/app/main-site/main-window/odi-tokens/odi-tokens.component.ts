import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../../data-communication.service';
@Component({
  selector: 'app-odi-tokens',
  templateUrl: './odi-tokens.component.html',
  styleUrls: ['./odi-tokens.component.css']
})
export class OdiTokensComponent implements OnInit {

  constructor(private passData:DataCommunicationService) { }

  ngOnInit(): void {
    sessionStorage.setItem('_showMoreFeatures2','none')
    sessionStorage.setItem('_showMoreFeaturesAdmin2','none')
    this.passData.passData()

  }

}
