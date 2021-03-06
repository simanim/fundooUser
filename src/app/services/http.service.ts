import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  URL="http://34.213.106.173/api";
  constructor(private http: HttpClient) { }

  getData(path){
    return this.http.get(this.URL+"/"+path);
  }
  getDataNotes(path,accesstoken)
  {
    var httpAuthOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': accesstoken
      })

    };
    return this.http.get(this.URL+"/"+path,httpAuthOptions1)
  }

  postData(path,body){
    return this.http.post(this.URL+"/"+path,body);
  }

  postDataReset(path,body,acessToken)
  {
    var httpAuthOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': acessToken
      })

    };
    return this.http.post(this.URL+"/"+path,this.getFormUrlEncoded(body),httpAuthOptions1)
  }
  postDataMore(path,body,acessToken)
  {
    var httpAuthOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': acessToken
      })
    };
    return this.http.post(this.URL+"/"+path,body,httpAuthOptions1);
  }

  deleteDate(path){
    return this.http.delete(this.URL+"/"+path);
  }
  
  getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
   }


}