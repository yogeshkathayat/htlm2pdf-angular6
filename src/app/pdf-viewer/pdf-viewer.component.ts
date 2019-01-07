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
  data: any;

  CheckList = [{ name: "asdfasdf", status: "asdfasdf" }]


  constructor() { }

  ngOnInit() {
    let data = `<div><h1>Trip ID: ` + this.trip.TripId + `</h1><hr/>`;
    data += `<p>Driver: <b>${this.trip.Driver}</b></p>`;
    data += `<p>Vehicle: <b>${this.trip.Driver}</b></p>`;
    data += `<p>Time: <b>${new Date()}</b></p>`;
    if (this.trip) {
      data += `<p>Remarks: <b>${this.trip.TripId}</b></p>`;
    }
    data += `<hr><table>
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
                              <td> ${cList.name}</td>
                              <td class="text-center">  ${cList.status}  </td>
                            </tr>`;
    });

    data += `</tbody>
                 </table></div>`;

    data = data.trim();
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
        <title>${this.trip.TripId} | Checklist | Tristar</title>
        <style>
              html,
              body {
                margin:0; padding: 0;
                font-family: 'Roboto', sans-serif;
                max-width: 100%;
                font-size: 12px;
              }
              body{
               padding:0 10px;
              }
              table{width: 100%;}
              h1{
                font-size: 18px;
                margin:16px 4px 2px 4px;
              }
              th, td{
                 padding: 4px 8px;
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
    var imgWidth = 400;
    var pageHeight = 500;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    let imgData = canvas.toDataURL('image/png') // optional
    var position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight) // imgData or canva
    pdf.save('MYPdf.pdf');
  }
}