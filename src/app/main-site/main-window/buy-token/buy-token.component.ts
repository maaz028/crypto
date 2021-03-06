import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginApiService } from '../login-api.service'

@Component({
  selector: 'app-buy-token',
  templateUrl: './buy-token.component.html',
  styles: [`
      .dropdown {
        height: 50px;
        padding: 10px;
        border: 0;
        font-size: 15px;
        width: 200px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
}
        `],
  styleUrls: ['./buy-token.component.css']
})


export class BuyTokenComponent implements OnInit {

  prices: any;
  items: any;
  bnb: any;
  tokenId: any;
  //tokenAddress: string = "0x246F4b668dd7fE55888EF50aF9F4aeF6C39d4Bdc";//test token address

  tokenAddress: string = "0x7bA9a42bcB796cEF1e8cA72F29642594D9274279";//client token address

  records: any;

  balanceHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('X-API-Key', 'lMp8i9xNPuqQ2k7A31l78dpGKwa7UyXDA1s1fv6sTfF6uLiGRbOI8C2YTLRP6PaD')
    .set('Access-Control-Allow-Origin', '*');

    tokenHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('X-API-Key', 'DggIFSx9e0a9MwyVUIrAf8Onm2kRX3JV7hQwbQAHIe8HKV6mzz7AWpBgTFACgsGG')
    .set('Access-Control-Allow-Origin', '*');

  priceHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');

  closeResult = '';


  constructor(private _obj: LoginApiService, private modalService: NgbModal, private http: HttpClient) { }

  ngOnInit() {
  }

  fetchClientWallet() {

    //get balance of user wallet
    https://deep-index.moralis.io/api/v2/0x7bA9a42bcB796cEF1e8cA72F29642594D9274279/balance?chain=bsc
    this.tokenId = this.tokenAddress;
    this.http.get('https://deep-index.moralis.io/api/v2/0x7bA9a42bcB796cEF1e8cA72F29642594D9274279/balance?chain=bsc',
      { 'headers': this.balanceHeaders }
    ).subscribe(data => {
      this.items = data;
      this.items = Array.of(this.items)
     // console.log("records " + this.items.balance.slice(0,4))
       //console.log("records " + this.items.balance.length);
    });

    // get user tokens
    this.tokenId = this.tokenAddress;
    this.http.get('https://deep-index.moralis.io/api/v2/' + this.tokenId + '/erc20?chain=bsc',
      { 'headers': this.tokenHeaders }
    ).subscribe(data => {
     this.bnb = data;
     //this.bnb = Array.of(this.bnb)
      console.log("symbol " + this.bnb)
    });



    this._obj.SaveTokenData({
      EmailId: sessionStorage.getItem('_email'),
      WalletAddress: this.tokenAddress
    }).subscribe(
      data => {
        console.log(data)
      });
  }


  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}


