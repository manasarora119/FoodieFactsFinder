import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) { }

    token = 'd011e288846464ded99871d335ac1804fe7d0b9b'
    od='60b7066beaa4a5e33d8d3ebbec837d665cba7a75'
    old= 'Bearer d0f17100b9c1f1e9a11257263162bdc40b41bf29';
    new ='1593dd3b9d70506dcc1050bcca938eeae955c631'
     
  confirmDish(body:any): Observable<any> {
  
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.old,
      }),
    };
    const req = new HttpRequest('POST', `https://api.logmeal.es/v2/image/confirm/dish/v1.0?language=eng`, body, {
      ...httpOptions
    });
    let r  = 
    {
      body: {
        "recognition_results": [
            {
                "id": 168,
                "name": "pizza",
                "prob": 1
            }
        ],
        "source": "logmeal"
    }
  }
    // return of({...r})
    return this.http.request(req);

     
  }
  getNutritionInfo(body:any){
    console.log(body, 'getNutritionInfo');
    
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.old,
      }),
    };
    const req = new HttpRequest('POST', `https://api.logmeal.es/v2/nutrition/recipe/nutritionalInfo/v1.0?language=eng`, body, {
      ...httpOptions
    });
    let r  = {body:{
        
            "foodName": [
              "french fries",
              "hamburger"
            ],
            "hasNutritionalInfo": true,
            "ids": [
              306,
              147
            ],
            "imageId": 1493289,
            "nutritional_info": {
              "calories": 897.5258242,
              "dailyIntakeReference": {
                "CHOCDF": {
                  "label": "Carbs",
                  "level": "MEDIUM",
                  "percent": 34.75215616530214
                },
                "ENERC_KCAL": {
                  "label": "Energy",
                  "level": "NONE",
                  "percent": 43.60543135325532
                },
                "FASAT": {
                  "label": "Saturated fats",
                  "level": "HIGH",
                  "percent": 56.05752251066314
                },
                "FAT": {
                  "label": "Fat",
                  "level": "HIGH",
                  "percent": 61.02916857501817
                },
                "NA": {
                  "label": "Sodium",
                  "level": "HIGH",
                  "percent": 129.42709706666668
                },
                "PROCNT": {
                  "label": "Protein",
                  "level": "MEDIUM",
                  "percent": 34.599408458937
                },
                "SUGAR": {
                  "label": "Sugars",
                  "level": "NONE",
                  "percent": 34.38114624
                },
                "SUGAR.added": {
                  "label": "Added sugars",
                  "level": "LOW",
                  "percent": 1.1199999999999999
                }
              },
              "totalNutrients": {
                "CA": {
                  "label": "Calcium",
                  "quantity": 579.2931130000001,
                  "unit": "mg"
                },
                "CHOCDF": {
                  "label": "Carbs",
                  "quantity": 80.4712308,
                  "unit": "g"
                },
                "CHOLE": {
                  "label": "Cholesterol",
                  "quantity": 88.1610786,
                  "unit": "mg"
                },
                "ENERC_KCAL": {
                  "label": "Energy",
                  "quantity": 897.5258242,
                  "unit": "kcal"
                },
                "F18D3CN3": {
                  "label": "alpha-linolenic acid (ALA)",
                  "quantity": 0.2201454,
                  "unit": "g"
                },
                "F20D5": {
                  "label": "Eicosapentaenoic acid (EPA)",
                  "quantity": 0.0044072,
                  "unit": "g"
                },
                "F22D6": {
                  "label": "Docosahexaenoic acid (DHA)",
                  "quantity": 0.0006902,
                  "unit": "g"
                },
                "FAMS": {
                  "label": "Monounsaturated fats",
                  "quantity": 24.630022000000004,
                  "unit": "g"
                },
                "FAPU": {
                  "label": "Polyunsaturated fats",
                  "quantity": 5.7600152,
                  "unit": "g"
                },
                "FASAT": {
                  "label": "Saturated fats",
                  "quantity": 14.8074318,
                  "unit": "g"
                },
                "FAT": {
                  "label": "Fat",
                  "quantity": 48.850538400000005,
                  "unit": "g"
                },
                "FATRN": {
                  "label": "Trans fat",
                  "quantity": 0.47541140000000004,
                  "unit": "g"
                },
                "FE": {
                  "label": "Iron",
                  "quantity": 5.7372104,
                  "unit": "mg"
                },
                "FIBTG": {
                  "label": "Fiber",
                  "quantity": 7.7974046,
                  "unit": "g"
                },
                "FOLAC": {
                  "label": "Folic acid",
                  "quantity": 55.9601458,
                  "unit": "\u00b5g"
                },
                "FOLDFE": {
                  "label": "Folate equivalent (total)",
                  "quantity": 237.89268520000002,
                  "unit": "\u00b5g"
                },
                "FOLFD": {
                  "label": "Folate (food)",
                  "quantity": 142.8849204,
                  "unit": "\u00b5g"
                },
                "K": {
                  "label": "Potassium",
                  "quantity": 1570.5175516,
                  "unit": "mg"
                },
                "MG": {
                  "label": "Magnesium",
                  "quantity": 111.75549140000001,
                  "unit": "mg"
                },
                "NA": {
                  "label": "Sodium",
                  "quantity": 1941.406456,
                  "unit": "mg"
                },
                "NIA": {
                  "label": "Niacin (B3)",
                  "quantity": 8.7167048,
                  "unit": "mg"
                },
                "P": {
                  "label": "Phosphorus",
                  "quantity": 595.3513324,
                  "unit": "mg"
                },
                "PROCNT": {
                  "label": "Protein",
                  "quantity": 35.607792,
                  "unit": "g"
                },
                "RIBF": {
                  "label": "Riboflavin (B2)",
                  "quantity": 0.6015440000000001,
                  "unit": "mg"
                },
                "SUGAR": {
                  "label": "Sugars",
                  "quantity": 10.7441082,
                  "unit": "g"
                },
                "SUGAR.added": {
                  "label": "Added sugars",
                  "quantity": 0.35,
                  "unit": "g"
                },
                "THIA": {
                  "label": "Thiamin (B1)",
                  "quantity": 0.9792734000000002,
                  "unit": "mg"
                },
                "TOCPHA": {
                  "label": "Vitamin E",
                  "quantity": 4.847912600000001,
                  "unit": "mg"
                },
                "VITA_RAE": {
                  "label": "Vitamin A",
                  "quantity": 335.3761888,
                  "unit": "\u00b5g"
                },
                "VITB12": {
                  "label": "Vitamin B12",
                  "quantity": 0.9467648000000001,
                  "unit": "\u00b5g"
                },
                "VITB6A": {
                  "label": "Vitamin B6",
                  "quantity": 0.9347757999999999,
                  "unit": "mg"
                },
                "VITC": {
                  "label": "Vitamin C",
                  "quantity": 32.0234402,
                  "unit": "mg"
                },
                "VITD": {
                  "label": "Vitamin D",
                  "quantity": 1.1073342000000002,
                  "unit": "\u00b5g"
                },
                "VITK1": {
                  "label": "Vitamin K",
                  "quantity": 57.46770720000001,
                  "unit": "\u00b5g"
                },
                "ZN": {
                  "label": "Zinc",
                  "quantity": 4.6311995999999995,
                  "unit": "mg"
                }
              }
            },
            "nutritional_info_per_item": [
              {
                "food_item_position": 1,
                "hasNutritionalInfo": true,
                "id": 306,
                "nutritional_info": {
                  "calories": 280.23,
                  "dailyIntakeReference": {
                    "CHOCDF": {
                      "label": "Carbs",
                      "level": "LOW",
                      "percent": 15.80147346286547
                    },
                    "ENERC_KCAL": {
                      "label": "Energy",
                      "level": "NONE",
                      "percent": 13.614705781880431
                    },
                    "FASAT": {
                      "label": "Saturated fats",
                      "level": "LOW",
                      "percent": 7.279656019469504
                    },
                    "FAT": {
                      "label": "Fat",
                      "level": "LOW",
                      "percent": 17.146571219269646
                    },
                    "NA": {
                      "label": "Sodium",
                      "level": "HIGH",
                      "percent": 39.929333933333325
                    },
                    "PROCNT": {
                      "label": "Protein",
                      "level": "LOW",
                      "percent": 4.202519537996135
                    },
                    "SUGAR": {
                      "label": "Sugars",
                      "level": "NONE",
                      "percent": 6.5324800000000005
                    },
                    "SUGAR.added": {
                      "label": "Added sugars",
                      "level": "LOW",
                      "percent": 0.0
                    }
                  },
                  "totalNutrients": {
                    "CA": {
                      "label": "Calcium",
                      "quantity": 26.445,
                      "unit": "mg"
                    },
                    "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 36.589499999999994,
                      "unit": "g"
                    },
                    "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 0.0,
                      "unit": "mg"
                    },
                    "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 280.23,
                      "unit": "kcal"
                    },
                    "F18D3CN3": {
                      "label": "alpha-linolenic acid (ALA)",
                      "quantity": 0.0,
                      "unit": "g"
                    },
                    "F20D5": {
                      "label": "Eicosapentaenoic acid (EPA)",
                      "quantity": 0.0,
                      "unit": "g"
                    },
                    "F22D6": {
                      "label": "Docosahexaenoic acid (DHA)",
                      "quantity": 0.0,
                      "unit": "g"
                    },
                    "FAMS": {
                      "label": "Monounsaturated fats",
                      "quantity": 9.854925000000001,
                      "unit": "g"
                    },
                    "FAPU": {
                      "label": "Polyunsaturated fats",
                      "quantity": 1.5192150000000002,
                      "unit": "g"
                    },
                    "FASAT": {
                      "label": "Saturated fats",
                      "quantity": 1.9229000000000003,
                      "unit": "g"
                    },
                    "FAT": {
                      "label": "Fat",
                      "quantity": 13.7249,
                      "unit": "g"
                    },
                    "FATRN": {
                      "label": "Trans fat",
                      "quantity": 0.0,
                      "unit": "g"
                    },
                    "FE": {
                      "label": "Iron",
                      "quantity": 1.94895,
                      "unit": "mg"
                    },
                    "FIBTG": {
                      "label": "Fiber",
                      "quantity": 3.806,
                      "unit": "g"
                    },
                    "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 0.0,
                      "unit": "\u00b5g"
                    },
                    "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 48.44,
                      "unit": "\u00b5g"
                    },
                    "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 48.44,
                      "unit": "\u00b5g"
                    },
                    "K": {
                      "label": "Potassium",
                      "quantity": 925.805,
                      "unit": "mg"
                    },
                    "MG": {
                      "label": "Magnesium",
                      "quantity": 48.455,
                      "unit": "mg"
                    },
                    "NA": {
                      "label": "Sodium",
                      "quantity": 598.9400089999999,
                      "unit": "mg"
                    },
                    "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 2.4393,
                      "unit": "mg"
                    },
                    "P": {
                      "label": "Phosphorus",
                      "quantity": 121.1,
                      "unit": "mg"
                    },
                    "PROCNT": {
                      "label": "Protein",
                      "quantity": 4.325,
                      "unit": "g"
                    },
                    "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 0.08304,
                      "unit": "mg"
                    },
                    "SUGAR": {
                      "label": "Sugars",
                      "quantity": 2.0414,
                      "unit": "g"
                    },
                    "SUGAR.added": {
                      "label": "Added sugars",
                      "quantity": 0.0,
                      "unit": "g"
                    },
                    "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 0.11072,
                      "unit": "mg"
                    },
                    "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 2.00645,
                      "unit": "mg"
                    },
                    "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 1.73,
                      "unit": "\u00b5g"
                    },
                    "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.0,
                      "unit": "\u00b5g"
                    },
                    "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 0.53803,
                      "unit": "mg"
                    },
                    "VITC": {
                      "label": "Vitamin C",
                      "quantity": 16.608,
                      "unit": "mg"
                    },
                    "VITD": {
                      "label": "Vitamin D",
                      "quantity": 0.0,
                      "unit": "\u00b5g"
                    },
                    "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 11.587,
                      "unit": "\u00b5g"
                    },
                    "ZN": {
                      "label": "Zinc",
                      "quantity": 0.6243,
                      "unit": "mg"
                    }
                  }
                },
                "serving_size": 188.0
              },
              {
                "food_item_position": 3,
                "hasNutritionalInfo": true,
                "id": 147,
                "nutritional_info": {
                  "calories": 617.2958242,
                  "dailyIntakeReference": {
                    "CHOCDF": {
                      "label": "Carbs",
                      "level": "LOW",
                      "percent": 18.950682702436666
                    },
                    "ENERC_KCAL": {
                      "label": "Energy",
                      "level": "NONE",
                      "percent": 29.990725571374888
                    },
                    "FASAT": {
                      "label": "Saturated fats",
                      "level": "HIGH",
                      "percent": 48.77786649119363
                    },
                    "FAT": {
                      "label": "Fat",
                      "level": "HIGH",
                      "percent": 43.88259735574852
                    },
                    "NA": {
                      "label": "Sodium",
                      "level": "HIGH",
                      "percent": 89.49776313333334
                    },
                    "PROCNT": {
                      "label": "Protein",
                      "level": "MEDIUM",
                      "percent": 30.396888920940857
                    },
                    "SUGAR": {
                      "label": "Sugars",
                      "level": "NONE",
                      "percent": 27.848666239999996
                    },
                    "SUGAR.added": {
                      "label": "Added sugars",
                      "level": "LOW",
                      "percent": 1.1199999999999999
                    }
                  },
                  "totalNutrients": {
                    "CA": {
                      "label": "Calcium",
                      "quantity": 552.848113,
                      "unit": "mg"
                    },
                    "CHOCDF": {
                      "label": "Carbs",
                      "quantity": 43.8817308,
                      "unit": "g"
                    },
                    "CHOLE": {
                      "label": "Cholesterol",
                      "quantity": 88.1610786,
                      "unit": "mg"
                    },
                    "ENERC_KCAL": {
                      "label": "Energy",
                      "quantity": 617.2958242,
                      "unit": "kcal"
                    },
                    "F18D3CN3": {
                      "label": "alpha-linolenic acid (ALA)",
                      "quantity": 0.2201454,
                      "unit": "g"
                    },
                    "F20D5": {
                      "label": "Eicosapentaenoic acid (EPA)",
                      "quantity": 0.0044072,
                      "unit": "g"
                    },
                    "F22D6": {
                      "label": "Docosahexaenoic acid (DHA)",
                      "quantity": 0.0006902,
                      "unit": "g"
                    },
                    "FAMS": {
                      "label": "Monounsaturated fats",
                      "quantity": 14.775097000000002,
                      "unit": "g"
                    },
                    "FAPU": {
                      "label": "Polyunsaturated fats",
                      "quantity": 4.2408002,
                      "unit": "g"
                    },
                    "FASAT": {
                      "label": "Saturated fats",
                      "quantity": 12.8845318,
                      "unit": "g"
                    },
                    "FAT": {
                      "label": "Fat",
                      "quantity": 35.12563840000001,
                      "unit": "g"
                    },
                    "FATRN": {
                      "label": "Trans fat",
                      "quantity": 0.47541140000000004,
                      "unit": "g"
                    },
                    "FE": {
                      "label": "Iron",
                      "quantity": 3.7882604000000004,
                      "unit": "mg"
                    },
                    "FIBTG": {
                      "label": "Fiber",
                      "quantity": 3.9914046,
                      "unit": "g"
                    },
                    "FOLAC": {
                      "label": "Folic acid",
                      "quantity": 55.9601458,
                      "unit": "\u00b5g"
                    },
                    "FOLDFE": {
                      "label": "Folate equivalent (total)",
                      "quantity": 189.45268520000002,
                      "unit": "\u00b5g"
                    },
                    "FOLFD": {
                      "label": "Folate (food)",
                      "quantity": 94.4449204,
                      "unit": "\u00b5g"
                    },
                    "K": {
                      "label": "Potassium",
                      "quantity": 644.7125516000001,
                      "unit": "mg"
                    },
                    "MG": {
                      "label": "Magnesium",
                      "quantity": 63.300491400000006,
                      "unit": "mg"
                    },
                    "NA": {
                      "label": "Sodium",
                      "quantity": 1342.466447,
                      "unit": "mg"
                    },
                    "NIA": {
                      "label": "Niacin (B3)",
                      "quantity": 6.277404800000001,
                      "unit": "mg"
                    },
                    "P": {
                      "label": "Phosphorus",
                      "quantity": 474.2513324,
                      "unit": "mg"
                    },
                    "PROCNT": {
                      "label": "Protein",
                      "quantity": 31.282792,
                      "unit": "g"
                    },
                    "RIBF": {
                      "label": "Riboflavin (B2)",
                      "quantity": 0.5185040000000001,
                      "unit": "mg"
                    },
                    "SUGAR": {
                      "label": "Sugars",
                      "quantity": 8.7027082,
                      "unit": "g"
                    },
                    "SUGAR.added": {
                      "label": "Added sugars",
                      "quantity": 0.35,
                      "unit": "g"
                    },
                    "THIA": {
                      "label": "Thiamin (B1)",
                      "quantity": 0.8685534000000001,
                      "unit": "mg"
                    },
                    "TOCPHA": {
                      "label": "Vitamin E",
                      "quantity": 2.8414626000000003,
                      "unit": "mg"
                    },
                    "VITA_RAE": {
                      "label": "Vitamin A",
                      "quantity": 333.6461888,
                      "unit": "\u00b5g"
                    },
                    "VITB12": {
                      "label": "Vitamin B12",
                      "quantity": 0.9467648000000001,
                      "unit": "\u00b5g"
                    },
                    "VITB6A": {
                      "label": "Vitamin B6",
                      "quantity": 0.3967458,
                      "unit": "mg"
                    },
                    "VITC": {
                      "label": "Vitamin C",
                      "quantity": 15.415440200000003,
                      "unit": "mg"
                    },
                    "VITD": {
                      "label": "Vitamin D",
                      "quantity": 1.1073342000000002,
                      "unit": "\u00b5g"
                    },
                    "VITK1": {
                      "label": "Vitamin K",
                      "quantity": 45.8807072,
                      "unit": "\u00b5g"
                    },
                    "ZN": {
                      "label": "Zinc",
                      "quantity": 4.0068996,
                      "unit": "mg"
                    }
                  }
                },
                "serving_size": 307.4
              }
            ],
            "serving_size": 495.4
          

    }}
  return this.http.request(req);
    // return of({...r})
  
    }

  upload(image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.old,
      }),
    };
    const req = new HttpRequest('POST', `https://api.logmeal.es/v2/image/segmentation/complete/v1.0?language=eng`, formData, {
      ...httpOptions
    });
    let r  =  {body :
    
   {"foodFamily":[{"id":1,"name":"meat","prob":0.59423828125}],"foodType":{"id":1,"name":"food"},"imageId":1492922,"model_versions":{"drinks":"v1.0","foodType":"v1.0","foodgroups":"v1.0","foodrec":"v1.0","ingredients":"v1.0","ontology":"v1.0","segmentation":"v1.0"},"occasion":"snack","processed_image_size":{"height":192,"width":262},"segmentation_results":[{"center":{"x":93,"y":98},"contained_bbox":{"h":99,"w":99,"x":44,"y":49},"food_item_position":1,"polygon":[66,49,62,53,61,53,49,65,48,65,45,68,45,69,44,70,44,89,45,90,45,91,46,92,46,93,45,94,45,98,46,99,46,107,47,108,47,112,48,113,48,115,49,116,49,118,50,119,50,120,51,121,51,122,53,124,54,124,55,125,57,125,58,126,60,126,61,127,62,127,65,130,66,130,69,133,69,134,70,135,70,136,73,139,75,139,76,140,77,140,78,141,79,141,81,143,82,143,83,144,84,144,87,147,114,147,115,146,116,146,117,145,120,145,121,144,125,144,126,143,128,143,132,139,132,138,133,137,133,136,134,135,134,134,136,132,136,129,137,128,136,127,136,124,135,123,135,122,133,120,133,118,132,117,133,116,133,114,135,112,138,112,138,111,139,110,139,108,140,107,140,106,142,104,142,99,141,98,141,97,139,95,139,94,135,94,134,93,133,93,132,92,127,92,126,91,125,91,124,90,123,90,122,89,121,89,117,85,116,85,115,84,114,84,111,81,110,81,106,77,105,77,103,75,103,73,102,72,102,71,101,70,101,69,100,68,100,65,99,64,99,60,98,59,98,58,97,57,97,55,96,54,96,53,95,52,95,51,94,50,90,50,89,49,85,49,84,50,83,49],"recognition_results":[{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":306,"name":"french fries","prob":0.32498970070486644,"subclasses":[{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":2488,"name":"potato french fries","prob":0.32498970070486644},{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":2489,"name":"yuka fries","prob":0.32498970070486644},{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":2266,"name":"sweet potato fries","prob":0.32498970070486644}]},{"foodFamily":[{"id":3,"name":"dairy products"},{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":394,"name":"poutine","prob":0.19413553243396364,"subclasses":[]},{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":892,"name":"chips potatoes","prob":0.17219096493423391,"subclasses":[]},{"foodFamily":[{"id":8,"name":"vegetables"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":75,"name":"onion rings","prob":0.1617025809879466,"subclasses":[{"foodFamily":[{"id":8,"name":"vegetables"},{"id":13,"name":"soup"}],"foodType":{"id":1,"name":"food"},"id":252,"name":"garlic soup","prob":0.1617025809879466},{"foodFamily":[{"id":8,"name":"vegetables"}],"foodType":{"id":2,"name":"ingredients"},"id":2150,"name":"zilveruitjes","prob":0.1617025809879466},{"foodFamily":[{"id":8,"name":"vegetables"},{"id":13,"name":"soup"}],"foodType":{"id":1,"name":"food"},"id":487,"name":"french onion soup","prob":0.1617025809879466}]},{"foodFamily":[{"id":8,"name":"vegetables"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":2739,"name":"carrot fries","prob":0.14698122093898947,"subclasses":[{"foodFamily":[{"id":8,"name":"vegetables"}],"foodType":{"id":1,"name":"food"},"id":2738,"name":"roasted carrot","prob":0.14698122093898947},{"foodFamily":[{"id":8,"name":"vegetables"}],"foodType":{"id":2,"name":"ingredients"},"id":1236,"name":"carrot","prob":0.14698122093898947}]}]},{"center":{"x":180,"y":111},"contained_bbox":{"h":75,"w":92,"x":134,"y":74},"food_item_position":2,"polygon":[195,74,194,75,192,75,191,76,187,76,186,77,183,77,182,78,181,78,180,79,178,79,177,80,176,80,173,83,172,83,171,84,170,84,169,85,168,85,167,86,166,86,165,85,161,85,160,86,159,86,158,85,155,85,154,86,153,86,151,88,150,88,145,93,145,100,144,101,144,102,143,103,143,104,141,106,141,107,140,108,140,110,139,111,139,112,138,113,135,113,134,114,134,119,135,120,135,121,136,122,136,123,137,124,137,125,138,126,138,127,139,128,139,130,138,131,138,134,137,135,137,136,135,138,135,142,138,145,139,145,140,146,141,146,142,147,152,147,153,148,170,148,171,147,176,147,177,146,179,146,180,145,183,145,184,144,186,144,187,143,189,143,190,142,191,142,192,141,194,141,196,139,198,139,199,138,200,138,201,137,202,137,204,135,205,135,206,134,207,134,218,123,219,123,220,122,220,121,222,119,222,118,223,117,223,116,224,115,224,111,225,110,225,105,224,104,224,102,223,101,223,100,222,99,222,98,213,89,212,89,211,88,211,87,209,85,210,84,210,83,209,82,209,81,205,77,204,77,202,75,196,75],"recognition_results":[{"foodFamily":[{"id":9,"name":"fish"},{"id":22,"name":"legumes"}],"foodType":{"id":1,"name":"food"},"id":457,"name":"white bean with cod","prob":0.448642779587405,"subclasses":[]},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":1480,"name":"schnitzel","prob":0.16254071661237784,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"},{"id":10,"name":"bread"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":2544,"name":"milanesa","prob":0.16254071661237784},{"foodFamily":[{"id":1,"name":"meat"},{"id":3,"name":"dairy products"},{"id":10,"name":"bread"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":888,"name":"cordon bleu","prob":0.16254071661237784},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":1499,"name":"vitello alla milanese","prob":0.16254071661237784}]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":114,"name":"pancetta","prob":0.14625407166123777,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":2105,"name":"bacon meat","prob":0.14625407166123777},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":390,"name":"grilled bacon","prob":0.14625407166123777}]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":390,"name":"grilled bacon","prob":0.14625407166123777,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":2105,"name":"bacon meat","prob":0.14625407166123777}]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":686,"name":"baby back ribs","prob":0.09630836047774159,"subclasses":[]}]},{"center":{"x":167,"y":58},"contained_bbox":{"h":66,"w":132,"x":101,"y":25},"food_item_position":3,"polygon":[125,25,123,27,122,27,121,28,120,28,118,30,117,30,116,31,115,31,114,32,113,32,110,35,109,35,109,36,108,37,107,37,104,40,104,42,103,43,103,44,102,45,102,46,101,47,101,57,102,58,102,59,103,60,103,72,104,73,104,75,105,76,106,76,107,77,108,77,110,79,112,79,113,80,114,80,115,81,117,81,120,84,121,84,124,87,126,87,127,88,129,88,130,89,131,89,132,90,140,90,141,89,143,89,144,88,146,88,150,84,156,84,157,83,163,83,164,84,165,84,166,83,170,83,171,82,172,82,173,81,174,81,176,79,177,79,178,78,180,78,181,77,182,77,183,76,186,76,187,75,191,75,192,74,194,74,195,73,196,74,202,74,204,76,205,76,210,81,210,82,211,83,211,85,212,86,212,87,215,87,216,86,217,86,217,85,222,80,223,80,224,79,225,79,226,78,227,78,228,77,229,77,230,76,230,75,232,73,232,70,231,69,231,68,230,67,229,67,228,66,227,66,226,65,225,65,224,64,221,64,220,63,219,63,218,62,215,62,214,61,212,61,211,60,208,60,207,59,204,59,203,58,201,58,200,57,198,57,197,56,196,56,195,55,194,55,190,51,189,51,186,48,185,48,184,47,183,47,181,45,180,45,179,44,177,44,176,43,175,43,174,42,172,42,171,41,170,41,169,40,164,40,163,39,160,39,159,38,158,38,156,36,155,36,152,33,152,32,151,31,151,29,149,27,148,27,146,25],"recognition_results":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":317,"name":"steak","prob":0.31928134221375404,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":285,"name":"grilled entrecote","prob":0.31928134221375404}]},{"foodFamily":[{"id":1,"name":"meat"},{"id":10,"name":"bread"}],"foodType":{"id":1,"name":"food"},"id":147,"name":"hamburger","prob":0.22918566036112628,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":913,"name":"chicken burger","prob":0.22918566036112628},{"foodFamily":[{"id":8,"name":"vegetables"},{"id":22,"name":"legumes"}],"foodType":{"id":1,"name":"food"},"id":1467,"name":"vegetarian hamburger","prob":0.22918566036112628},{"foodFamily":[{"id":9,"name":"fish"}],"foodType":{"id":1,"name":"food"},"id":1468,"name":"fish hamburger","prob":0.22918566036112628}]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":408,"name":"grilled chicken","prob":0.151964591888034,"subclasses":[]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":903,"name":"grilled lamb","prob":0.15021205778954386,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"},{"id":8,"name":"vegetables"}],"foodType":{"id":1,"name":"food"},"id":403,"name":"fried lamb with cumin","prob":0.15021205778954386},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":2190,"name":"lamb","prob":0.15021205778954386},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":790,"name":"baked lamb","prob":0.15021205778954386}]},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":95,"name":"fried chicken","prob":0.14935634774754197,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":273,"name":"deep fried chicken wings","prob":0.14935634774754197},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":131,"name":"fried chicken drumsticks","prob":0.14935634774754197},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":1493,"name":"chicken nuggets","prob":0.14935634774754197}]}]}]}

    }
    // return of({...r})
    return this.http.request(req);
  }
}
