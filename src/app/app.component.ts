import { Component, ElementRef, Inject, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UploadService } from './upload.service';
// import {  } from "highcharts-angular";
import { Chart } from 'angular-highcharts';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HighChartsService } from './highcharts.service';
import {WebcamImage} from 'ngx-webcam';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  @ViewChild('chartTransportationVariableCost', { static: false }) chartEl:ElementRef ;
  generatedImage: string;
  allData: any;
  allNutrition: any;
  ngAfterViewInit() {
     }
  type='ss';
  color = ["#f5c000", "#f58f10", "#2e80a7", "#51CBB0"]
  data:any;
  
  types:any;
  ngOnInit(){
    console.log('init');
   }
  myOptions = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Browser market shares. January, 2022',
        align: 'left'
    },
    subtitle: {
        text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
        align: 'left'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Browsers',
            colorByPoint: true,
            data: [
                {
                    name: 'Chrome',
                    y: 61.04,
                    drilldown: 'Chrome'
                },
                {
                    name: 'Safari',
                    y: 9.47,
                    drilldown: 'Safari'
                },
                {
                    name: 'Edge',
                    y: 9.32,
                    drilldown: 'Edge'
                },
                {
                    name: 'Firefox',
                    y: 8.15,
                    drilldown: 'Firefox'
                },
                {
                    name: 'Other',
                    y: 11.02,
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: 'Chrome',
                id: 'Chrome',
                data: [
                    [
                        'v97.0',
                        36.89
                    ],
                    [
                        'v96.0',
                        18.16
                    ],
                    [
                        'v95.0',
                        0.54
                    ],
                    [
                        'v94.0',
                        0.7
                    ],
                    [
                        'v93.0',
                        0.8
                    ],
                    [
                        'v92.0',
                        0.41
                    ],
                    [
                        'v91.0',
                        0.31
                    ],
                    [
                        'v90.0',
                        0.13
                    ],
                    [
                        'v89.0',
                        0.14
                    ],
                    [
                        'v88.0',
                        0.1
                    ],
                    [
                        'v87.0',
                        0.35
                    ],
                    [
                        'v86.0',
                        0.17
                    ],
                    [
                        'v85.0',
                        0.18
                    ],
                    [
                        'v84.0',
                        0.17
                    ],
                    [
                        'v83.0',
                        0.21
                    ],
                    [
                        'v81.0',
                        0.1
                    ],
                    [
                        'v80.0',
                        0.16
                    ],
                    [
                        'v79.0',
                        0.43
                    ],
                    [
                        'v78.0',
                        0.11
                    ],
                    [
                        'v76.0',
                        0.16
                    ],
                    [
                        'v75.0',
                        0.15
                    ],
                    [
                        'v72.0',
                        0.14
                    ],
                    [
                        'v70.0',
                        0.11
                    ],
                    [
                        'v69.0',
                        0.13
                    ],
                    [
                        'v56.0',
                        0.12
                    ],
                    [
                        'v49.0',
                        0.17
                    ]
                ]
            },
            {
                name: 'Safari',
                id: 'Safari',
                data: [
                    [
                        'v15.3',
                        0.1
                    ],
                    [
                        'v15.2',
                        2.01
                    ],
                    [
                        'v15.1',
                        2.29
                    ],
                    [
                        'v15.0',
                        0.49
                    ],
                    [
                        'v14.1',
                        2.48
                    ],
                    [
                        'v14.0',
                        0.64
                    ],
                    [
                        'v13.1',
                        1.17
                    ],
                    [
                        'v13.0',
                        0.13
                    ],
                    [
                        'v12.1',
                        0.16
                    ]
                ]
            },
            {
                name: 'Edge',
                id: 'Edge',
                data: [
                    [
                        'v97',
                        6.62
                    ],
                    [
                        'v96',
                        2.55
                    ],
                    [
                        'v95',
                        0.15
                    ]
                ]
            },
            {
                name: 'Firefox',
                id: 'Firefox',
                data: [
                    [
                        'v96.0',
                        4.17
                    ],
                    [
                        'v95.0',
                        3.33
                    ],
                    [
                        'v94.0',
                        0.11
                    ],
                    [
                        'v91.0',
                        0.23
                    ],
                    [
                        'v78.0',
                        0.16
                    ],
                    [
                        'v52.0',
                        0.15
                    ]
                ]
            }
        ]
    
  }
  };
  title = 'ML';
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;
  result: any;
  constructor(private uploadService : UploadService,
    
    private highcharts:HighChartsService,
    public dialog: MatDialog){
    

  }
  reset(){
    console.log('reset');
    this.result=false;
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = undefined;

    
  }
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }
  getClassOf(val:any){
    if (val == 'HIGH') {
      return 'high';
    } else if (val == 'MEDIUM') {
      return 'medium';
    }
    else if (val == 'LOW') {
      return 'low';
    }  else {
      return 'none'
    }
  
  }

  openDialog(values?:any[],allData?:any , segmentation_results?:any) {
    console.log(values,'values');
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
        data: {values:values ,allData :allData ,segmentationResults: segmentation_results} ,

      height: '320px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(result, 'result');
      
      this.uploadService.confirmDish(result).subscribe(
        (res: any) => {
          console.log(res , 'res confirm dish');
          if(res?.body?.recognition_results){
            this.result =true
            let body  = { 
              "imageId": result.imageId,
              // "class_id": 481
            }
            this.uploadService.getNutritionInfo(body).subscribe(
              (nutrition: any) => {
                console.log(nutrition ,'getNutritionInfo info ++ + + ');
              
                this.allNutrition = Object.values(nutrition?.body?.nutritional_info?.dailyIntakeReference)
              console.log( this.allNutrition,' this.allNutrition');
              
                setTimeout(() => {
                  this.highcharts.createChart(this.chartEl?.nativeElement, this.myOptions);
                  console.log(this.chartEl, 'this.chartEl');
           
                }, 1500);
               },
              error=>{
              })
          }
        },error=>{
        })
    });
  }
  public webcamImage: any = null;

    /**Method to Generate a Name for the Image */
    generateName(): string {
      const date: number = new Date().valueOf();
      let text: string = "";
      const possibleText: string =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 5; i++) {
        text += possibleText.charAt(
          Math.floor(Math.random() * possibleText.length)
        );
      }
      // Replace extension according to your media type like this
      return date + "." + text + ".jpeg";
    }


    dataURItoBlob(dataURI: string): Observable<Blob> {
      return Observable.create((observer: Observer<Blob>) => {
        const byteString: string = window.atob(dataURI);
        const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: "image/jpeg" });
        observer.next(blob);
        observer.complete();
      });
    }
  createBlobImageFileAndShow(base64TrimmedURL :any): void {
    this.dataURItoBlob(base64TrimmedURL).subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName: string = this.generateName();
      const imageFile: File = new File([imageBlob], imageName, {
        type: "image/jpeg"
      });
      this.generatedImage = window.URL.createObjectURL(imageFile);
      // on demo image not open window
      // if(this.windowOPen) {
      //   window.open(this.generatedImage);
      // }
    });
  }

  dataURItoBlob2(dataURI:any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });    
    return blob;
 }
  handleImage(webcamImage: any) {
    this.webcamImage = webcamImage;
    let s:any = [webcamImage];
    console.log(webcamImage,'webcamImage');
    console.log( this.selectedFiles ,'ss');
  // let d =this.createBlobImageFileAndShow(webcamImage)
  // console.log(d)
  //  this.selectedFiles =d;
  const base64 = webcamImage;
  const imageName = 'name.png';
  const imageBlob :any = this.dataURItoBlob2(base64._imageAsDataUrl);
  const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

this.selectedFiles =s;
// var url  = window.URL.createObjectURL(file);
   
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }
  upload(idx: number, file: File): void {
    
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          this.allData=event?.body
          let segmentation_results :any= [];
          this.allData?.segmentation_results.forEach((element:any) => {
            if(element.recognition_results){
              element.recognition_results.map((res:any)=>{
                 res['food_item_position']=element.food_item_position
              })
            }
            segmentation_results.push(...element.recognition_results)
          });
          segmentation_results= segmentation_results.sort((a:any,b:any)=> b['prob']-a['prob'])
          const slicedArray = segmentation_results.slice(0, 5);
          if(slicedArray){
            let data=slicedArray;
            let values:any=[];
            
            data.forEach((element:any) => {
              values.push(element.name)
            });
          
            this.openDialog(values,this.allData ,segmentation_results);

          }
          // if (event.type === HttpEventType.UploadProgress) {
          //   this.progressInfos[idx].value = Math.round(
          //     (100 * event.loaded) / event.total
          //   );
          // } else if (event instanceof HttpResponse) {
          //   const msg = 'Uploaded the file successfully: ' + file.name;
          //   this.message.push(msg);
          //   this.imageInfos = this.uploadService.getFiles();
          // }
        },
        (err: any) => {
          console.log(event , 'errro');
          
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        }
      );
    }
  }
  
  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  favoriteSeason: any;
  // seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(private dialogRef : MatDialogRef<any>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {values:any ,allData:any ,segmentationResults:any}
    ){}
    form:any;
    webData :any= [
    ];
    
    get ordersFormArray() {
      return this.form.controls.orders as FormArray;
    }
  

  ngOnInit(){
    this.form = this._formBuilder.group({
      orders: new FormArray([])
    });
    this.addCheckboxesToForm()

  }
  private addCheckboxesToForm() {
    this.data.values.forEach((val :any,id:any)=>{
      this.webData.push({
        id:id,
        name :val
    })
  })
    this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }
  confirm(){
    
    
     const selectedOrderIds = this.form.value.orders
      .map((checked:any, i:any) => checked ? this.webData[i].id : null)
      .filter((v:any) => v !== null);
    let result = this.data?.segmentationResults.filter((el:any,i:any)=>selectedOrderIds.some((j:any) => i === j))
    let obj=
    {
      "imageId": this.data.allData.imageId,
      "confirmedClass": 
        result.map((a:any) => a.id)
        ,
      "source": result.map((a:any) => 'logmeal')
       ,
      "food_item_position": 
      [...new Set(  result.map((a:any) => a.food_item_position))]
      
      
    }
        this.dialogRef.close(obj);
  }
}