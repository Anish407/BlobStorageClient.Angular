import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { IBlobModel } from './models/IBlobModel';

declare var require: any;

@Component({
  selector: 'app-blobstorage',
  templateUrl: './blobstorage.component.html',
  styleUrls: ['./blobstorage.component.css']
})

export class BlobstorageComponent implements OnInit {
  constructor(private http: HttpClient) { }
  files: string[] = [];
  fileToUpload: FormData;
  fileUpload: any;
  fileUpoadInitiated: boolean;
  fileDownloadInitiated: boolean;
  private baseUrl = 'https://localhost:44396/api/BlobStorage/';
  private getAllUrl: string = "GetAllBlobs";
  allBlobs: IBlobModel[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.getAllBlobs();
  }

  getAllBlobs() {
    this.http.get<IBlobModel[]>(`${this.baseUrl}${this.getAllUrl}`)
      .subscribe(res => this.allBlobs = res, err => this.errorMessage = err)
  }

  play(file) {
    file.paused ? file.play() : file.pause();
  }

  uploadToBLob(files) {
    let formData: FormData = new FormData();
    formData.append("asset", files[0], files[0].name);
    this.http.post(this.baseUrl + 'insertfile', formData)
      .subscribe(result => console.log(result));
  }

  downloadFile(fileName: string) {
    return this.http.get(this.baseUrl + 'DownloadBlob/' + fileName, { responseType: "blob" })
      .subscribe((result: any) => {
        if (result) {
          var blob = new Blob([result]);
          let saveAs = require('file-saver');
          let file = fileName;
          saveAs(blob, file);
          this.fileDownloadInitiated = false;
        }
      }, err => this.errorMessage = err
      );
  }
  deleteFile(fileName: string, index: number) {
    var del = confirm('Are you sure want to delete this file');
    if (!del) return;
    this.http.delete(this.baseUrl + 'DeleteBlob/' + fileName).subscribe(result => {
       this.allBlobs.splice(index,1);
    }, error => console.error(error));
  }
}
