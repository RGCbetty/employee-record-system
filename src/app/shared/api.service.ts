import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IEmployee } from '../employee/employee';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.url}/employees`).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  postEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.url}/employees`, employee).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http
      .put<IEmployee>(`${this.url}/employees/${employee.id}`, employee)
      .pipe(
        tap((data) => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteEmployee(id: string): Observable<string> {
    return this.http.delete<string>(`${this.url}/employees/${id}`).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
