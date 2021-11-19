import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../../data-communication.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private passData:DataCommunicationService) { }

  ngOnInit(): void {
    sessionStorage.setItem('_showMoreFeaturesAdmin2','none')
    sessionStorage.setItem('_showMoreFeatures2','none')
    this.passData.passData()
  }

}
