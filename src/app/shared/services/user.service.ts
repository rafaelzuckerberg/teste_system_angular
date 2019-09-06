import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  customer: Customer;

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post<User>(environment.api + 'dashboard/administradores', user)
  }

  getUsers() {
    return this.http.get<User[]>(environment.api + 'dashboard/administradores');
  } 

  update(user: User) {
    return this.http.put<User>(`${environment.api}dashboard/administradores/${user.id}`, user);
  }


  delete(id: number) {
    return this.http.delete(`${environment.api}dashboard/administradores/${id}`);
  }


  // Services Customer
  createCustomer(user: User) {
    return this.http.post<User>(environment.api + 'dashboard/clientes', user)
  }


  getCustomers() {
    return this.http.get<User[]>(environment.api + 'dashboard/clientes');
  } 


  updateCustomer(user: User) {
    return this.http.put<User>(`${environment.api}dashboard/clientes/${user.id}`, user);
  }


  deleteCustomer(id: number) {
    return this.http.delete(`${environment.api}dashboard/clientes/${id}`);
  }


}
