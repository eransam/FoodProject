import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood() {

    return this.http.get<any>('https://localhost:44397/FoodService.asmx/getOvdim')

  }

  getOvedByID(id: string) {
    return this.http.get<any>(`https://localhost:44397/FoodService.asmx/getOved?id=${id}`)

  }
}
