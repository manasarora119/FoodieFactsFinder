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
  
  
  @ViewChild('chart1', { static: false }) chartEl1:ElementRef<any> ;
  @ViewChild('chart2', { static: false }) chartEl2:ElementRef ;
   @ViewChild('chart3', { static: false }) chartEl3:ElementRef ;
 
  generatedImage: string;
  allData: any;
  allNutrition: any;
  nutrition: any;
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
        text: 'Dish 1',
        align: 'left'
    },
    subtitle: {
        text: 'Dish1',
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
            data: []
        }
    ],
   
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
    // this.result=false;
    // this.message = [];
    // this.progressInfos = [];
    // this.selectedFileNames = [];
    // this.selectedFiles = undefined;

window.location.reload();
    
  }
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
    if(!(event.target.files[0].name.includes(
      "jpeg") ||(event.target.files[0].name.includes(
        "jpg") ))
    ) {
      alert( "Please upload only file with extention .jpg or .jpeg")
      return;
    }    
   

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };
        console.log( this.previews, 'preview +++ + + ');
        var output:any = document.getElementById('output');
      output.src = URL.createObjectURL(this.selectedFiles[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
      }


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
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
        data: {values:values ,allData :allData ,segmentationResults: segmentation_results} ,

      height: '420px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(result, 'result');
      // this.result=false;
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = undefined;
    
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
               this.nutrition=nutrition?.body?.nutritional_info;
               console.log(this.nutrition , 'nutrition + + + ');
               
                this.myOptions.series[0].data=[];
                if(nutrition?.body?.nutritional_info?.dailyIntakeReference){
                this.allNutrition = Object.values(nutrition?.body?.nutritional_info?.dailyIntakeReference)
                }
                let se:any=[];
                if(nutrition?.body?.nutritional_info_per_item)
                  for (const key in nutrition?.body?.nutritional_info_per_item) {
                    se.push([]);
                      for (const key2 in nutrition?.body?.nutritional_info_per_item[key].nutritional_info.dailyIntakeReference) {
                        const element2 = nutrition?.body?.nutritional_info_per_item[key].nutritional_info.dailyIntakeReference[key2];
                          se[key].push( {
                            name: element2['label'],
                            drilldown: 
                             element2['label'],
                           y: element2['percent']
                            
                          })
                      }
                      
                   }
                   
              
                setTimeout(() => {
                  for (const key in se) {
                    switch(key) {
                      case '0':
                        this.myOptions.series[0].data=se[key]
                        
                         this.myOptions.title.text ='Dish 1'
                         this.myOptions.subtitle.text =nutrition?.body?.foodName[0]
                          
                        this.highcharts.createChart(this.chartEl1?.nativeElement, this.myOptions);
                        break;
                      case '1':
                        this.myOptions.title.text ='Dish 2'
                        this.myOptions.subtitle.text =nutrition?.body?.foodName[1]
                          
                        this.myOptions.series[0].data=se[key]
                        this.highcharts.createChart(this.chartEl2?.nativeElement, this.myOptions);

                        break;

                        case '2':
                          this.myOptions.title.text ='Dish 3'
                          
                          this.myOptions.subtitle.text =nutrition?.body?.foodName[2]
                          
                      
                          this.myOptions.series[0].data=se[key]
                          this.highcharts.createChart(this.chartEl3?.nativeElement, this.myOptions);
  
                          break;
                      default:
                        // code block
                    }
                    
                  }
                  // console.log(this.myOptions, 'this.myOptions');
                  // this.myOptions.series[0].data=se[0]

                  // this.highcharts.createChart(this.chartEl1?.nativeElement, this.myOptions);
                  // this.highcharts.createChart(this.chartEl2?.nativeElement, this.myOptions);
                  // this.highcharts.createChart(this.chartEl3?.nativeElement, this.myOptions);
                  // console.log(this.chartEl, 'this.chartEl');
           
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
          console.log(this.allData ,'this.allData');
          
          let segmentation_results :any= [];
          this.allData?.segmentation_results.forEach((element:any) => {
            if(element.recognition_results){
              element.recognition_results.map((res:any)=>{
                 res['food_item_position']=element.food_item_position
              })
            }
            segmentation_results.push(...element.recognition_results)
          });
          // segmentation_results= segmentation_results.sort((a:any,b:any)=> b['prob']-a['prob'])
          // const slicedArray = segmentation_results.slice(0, 5);
          if(segmentation_results){
            let data=segmentation_results;
            let values:any=[];
            
            data.forEach((element:any) => {
              values.push(element.name)
            });
            if(values?.length){
            this.openDialog(values,this.allData ,segmentation_results);
            }
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
        result.map((a:any) => a.id),
      "source": result.map((a:any) => 'logmeal'),
      "food_item_position":    
      [...new Set(  result.map((a:any) => a.food_item_position))]
    }
       this.dialogRef.close(obj);
  }
}