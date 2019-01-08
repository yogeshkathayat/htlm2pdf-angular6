import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  trip = {
    TripId: "123sedrf",
    Driver: "asdfasdf",
  }
  purchaseOrderInformation = {
    costCenter: "costCenter",
    createdDate: "0026-10-18T05:59:45.000+0000",
    grossAmount: null,
    netAmount: null,
    paymentId: "PYMT_181227095945301",
    poName: "PO_20181227095945627",
    poNumber: "PO_20181227095945627",
    poStage: "poStage",
    project: "project",
    termsOfPurchase: "termsOfPurchase"
  }
  //shipment details
  //payment details
  //buyer info
  buyerInformation = {
    billingAddress: null,
    buyer: "Life Fitness Trading LLC",
    buyerAddress: "Office No.101, Al Shamsi Building,  Karama Al A'amal Street, Dubai",
    buyerReferenceContact: "971-9496133624",
    deliveryToBranch: "Al Karma Branch",
    shippingAddress: "Life Fitness Trading LLC, Office No.101, Al Shamsi Building,  Karama Al A'amal Street, Dubai"
  }

  //supplier info
  supplierInformation = {
    supplierAddress: "PO Box #62548, Omar Bin Al Khattab Street, Near Fish Round About, Deira, Dubai",
    supplierContact: "971-728689423",
    supplierName: "Yamaha Music Gulf FZE LLC",
    supplierReference: "Naveen Sharma"
  }
  //seller logo address contact
  //product details table
  //notes

  data: any;

  CheckList = [{ name: "asdfasdf", status: "asdfasdf" }]


  constructor() { }

  ngOnInit() {
    let data = `<div>
    <h1 class="pdf-h1" style="text-align:center; margin: 2px;">Purchase Order</h1>`;

    //seller logo and info
   // data += `<div class="pdf-box"><img src="https://media.glassdoor.com/sqll/1818291/block-gemini-squarelogo-1520432061799.png" alt="logo" height="42" width="42"> </div>`;
    data += `<div class="pdf-box"><h1>Purchase Order Info</h1><hr/>`;
    data += `<p>Purchase Order Name: <b>${this.purchaseOrderInformation.poName}</b></p>`;
    data += `<p>Purchase Order No: <b>${this.purchaseOrderInformation.poNumber}</b></p>`;
    data += `<p>Purchase Order Stage:<b>${this.purchaseOrderInformation.poStage}</b></p>`;
    data += `<p>Project: <b>${this.purchaseOrderInformation.project}</b></p>`;
    data += `<p>Terms Of Purchase: <b>${this.purchaseOrderInformation.termsOfPurchase}</b></p></div>`;

    //buyer info
    data += `<div class="pdf-box"><h1>Buyer Info</h1><hr/>`;
    data += `<p>Buyer Name: <b>${this.buyerInformation.buyer}</b></p>`;
    data += `<p>Buyer Address: <b>${this.buyerInformation.buyerAddress}</b></p>`;
    data += `<p>Buyer Reference Contact:<b>${this.buyerInformation.buyerReferenceContact}</b></p>`;
    data += `<p>Delivery to Branch: <b>${this.buyerInformation.deliveryToBranch}</b></p>`;
    data += `<p>Shipping Address: <b>${this.buyerInformation.shippingAddress}</b></p></div>`;


        //shipment details
        data += `<div class="pdf-box"><h1>Shipment Details</h1><hr/>`;
        data += `<p>Purchase Order Name: <b>${this.purchaseOrderInformation.poName}</b></p>`;
        data += `<p>Purchase Order No: <b>${this.purchaseOrderInformation.poNumber}</b></p>`;
        data += `<p>Purchase Order Stage:<b>${this.purchaseOrderInformation.poStage}</b></p>`;
        data += `<p>Project: <b>${this.purchaseOrderInformation.project}</b></p>`;
        data += `<p>Terms Of Purchase: <b>${this.purchaseOrderInformation.termsOfPurchase}</b></p></div>`;
    
       //supplier details
       data += `<div class="pdf-box"><h1>Supplier Details</h1><hr/>`;
       data += `<p>Supplier Name: <b>${this.supplierInformation.supplierName}</b></p>`;
       data += `<p>Supplier Address: <b>${this.supplierInformation.supplierAddress}</b></p>`;
       data += `<p>Supplier Contact:<b>${this.supplierInformation.supplierContact}</b></p>`;
       data += `<p>Supplier Reference: <b>${this.supplierInformation.supplierReference}</b></p></div>`;

        //payment details
        data += `<div class="pdf-box"><h1>Payment Details</h1><hr/>`;
        data += `<p>Purchase Order Name: <b>${this.purchaseOrderInformation.poName}</b></p>`;
        data += `<p>Purchase Order No: <b>${this.purchaseOrderInformation.poNumber}</b></p>`;
        data += `<p>Purchase Order Stage:<b>${this.purchaseOrderInformation.poStage}</b></p>`;
        data += `<p>Project: <b>${this.purchaseOrderInformation.project}</b></p>`;
        data += `<p>Terms Of Purchase: <b>${this.purchaseOrderInformation.termsOfPurchase}</b></p></div>`;

    data += `<table class="pdf-table">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                 <tbody>`;

    this.CheckList.forEach((cList, i) => {
      data += `<tr>
                              <td class="text-center ">${i + 1}</td>
                              <td class="text-center "> ${cList.name}</td>
                              <td class="text-center">  ${cList.status}  </td>
                            </tr>`;
    });

    data += `</tbody>
                 </table></div>`;

    data = data.trim();
    console.log("data after trim",data);
    this.data = data;
  }
  printPage() {
    window.print();
  }
  printCheckList() {


    this.print(this.data);
  }


  print(data): void {
    let popupWin;
    popupWin = window.open('', '_blank', 'fullscreen=1,channelmode=1,status=1,resizable=1,top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
    <html>
      <head>
        <title></title>
        <style>
              html,
              body {
                margin:0; padding: 0;
                font-family: 'Roboto', sans-serif;
                max-width: 100%;
                font-size: 8px;
              }
              body{
               padding:0 10px;
              }
              table{width: 100%;
                clear: left;}
              h1{
                font-size: 10px;
                margin:8px 4px 2px 4px;
              }
              th, td{
                 padding: 2px 4px;
                 border-bottom: 1px solid #e2e2e2;
              }
              thead {
                border-bottom:1px solid #ddd;
                background: #cccccc;
              }
              tr:nth-child(even) td{
                background-color: #e2e2e2;
              }

              .text-center{
                 text-align: center;
              }
              .text-left{
                 text-align: right;
              }

              .pdf-box{
                border: 2px solid gray;
                padding: 10px;
                margin: 10px;
                float:left;
                position: relative;
            }
            
            .pdf-h1{
             text-align: center;
             margin: 2px;
            }
            
            .pdf-table{
                clear: left;
            }
        </style>
      </head>
  <body onload="window.print();window.close()">${data}</body>
    </html>`
    );
    popupWin.document.close();
  }

  async downloadPdf() {

    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
    let canvas = await html2canvas(document.getElementById('pdf-data'));
    var imgWidth =240;
    var pageHeight =500;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    let imgData = canvas.toDataURL('image/png') // optional
    var position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight) // imgData or canva
    pdf.save('MYPdf.pdf');
  }
}