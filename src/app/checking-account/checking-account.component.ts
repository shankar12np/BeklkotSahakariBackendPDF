import {Component, OnInit} from '@angular/core';
import {CheckingAccountService} from "../checking-account.service";

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.css']
})
export class CheckingAccountComponent implements OnInit{
  public activities: any[] = [];

  constructor(public checkingAccountService: CheckingAccountService) {
  }

  ngOnInit(): void {
    this.checkingAccountService.getAllActivities().subscribe(data => {
      this.activities = data;
    }, error => {
      console.error('Error fetching activities:', error);
    });
  }


  // private loadActivities() {
  //   this.checkingAccountService.getAllActivities().subscribe(
  //     data => {
  //       this.activities = data;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  downloadActivitiesReport() {
    this.checkingAccountService.downloadPDF().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'activities_report.pdf';
      link.click();
    }, error => {
      console.error('Error downloading the file.');
    });
  }

  pdfUrl: string = "";



}
