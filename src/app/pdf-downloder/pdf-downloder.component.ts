import { Component, OnInit } from '@angular/core';
import { PdfDwnloaderService } from './pdf-dwnloader.service';

@Component({
  selector: 'app-pdf-downloder',
  templateUrl: './pdf-downloder.component.html',
  styleUrls: ['./pdf-downloder.component.scss']
})
export class PdfDownloderComponent implements OnInit {

  constructor(private pdfService: PdfDwnloaderService) { }

  ngOnInit() {
  }

  downloadPdf(){
    // this.pdfService.savePDF()
  }

}
