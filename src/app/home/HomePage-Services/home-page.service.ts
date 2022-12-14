import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Home-Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {



 

  products: IProduct[]=[];
  constructor(private http: HttpClient) 
  {
   
  }

  //Getting the Products from backend API
  getProducts():Observable<IProduct[]>{
    let tempVar = this.http.get<IProduct[]>('https://quick-kart-webservice.azurewebsites.net/api/home/Getproducts')
    console.log(tempVar)
    return tempVar
  }

  PostNewSubscriber(emailID:string):Observable<boolean>{
  

    let tempVar = this.http.get<boolean>('https://quick-kart-webservice.azurewebsites.net/AddNewSubscriber?emailID='+emailID)
    console.log(tempVar)
    return tempVar
  }

  
  ValidateUser(userEmailID:string, userPassword:string, type:string):Observable<number>
  {
    var user:User
    user={emailID:userEmailID, password:userPassword,usertype:type};
    console.log(user)
    let result=this.http.post<number>('https://loginfn-team1-solaikannan.azurewebsites.net/api/LoginFunction?code=FHrz1vDlA8W5gmskuqnH6VTBAdXEr-2s9S9t28K3M_5MAzFu170abg==',user)
    return result

  }

  

  
}

export class User{

  emailID:string='';
  password:string='';
  usertype:string='';


}
