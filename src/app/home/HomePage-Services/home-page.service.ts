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
    let result=this.http.post<number>('https://quickcart-functionapp.azurewebsites.net/api/LoginFunction?code=kDxJUURhVektI3q0G7_k0zea7O9yKG0FG-VfWfLqbLzpAzFuZJP6ww==',user)
    return result

  }

  

  
}

export class User{

  emailID:string='';
  password:string='';
  usertype:string='';


}
