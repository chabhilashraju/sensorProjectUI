import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChartService {

    constructor(private http: HttpClient) { }

    // URLS
    chartApiUrl = 'http://18.207.201.37:8089/message/getVoltage';

    studentRegisterApiUrl = 'https://vqasnyrloi.execute-api.us-east-1.amazonaws.com/dev/message/getVoltage';

    studentCreateRequestApiUrl = 'http://34.204.98.79:8086/message/getVoltage/';

    // studentCreateRequestApiUrl = 'https://q39k0vuggb.execute-api.us-east-1.amazonaws.com/dev/message/getvoltage';

    studentRequestsApiUrl = 'https://trznm8ccsi.execute-api.us-east-1.amazonaws.com/dev/student/getStudentRequests/';
    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    // Http Options
    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    // // HttpClient API get() method => Fetch Student
    // getDetails(studentRequestDetails): Observable<any> {
    //     return this.http.get<any>(this.studentCreateRequestApiUrl + studentRequestDetails)
    //         .pipe(
    //             retry(1),
    //             catchError(this.handleError)
    //         );
    // }


    // // HttpClient API get() method => Fetch Student
    // getStudentRequests(id): Observable<Student> {
    //     return this.http.get<Student>(this.studentRequestsApiUrl + id)
    //         .pipe(
    //             retry(1),
    //             catchError(this.handleError)
    //         );
    // }


    // // HttpClient API post() method => Create Student
    getDetails(chartDate): Observable<any> {
        return this.http.post<any>(this.chartApiUrl, JSON.stringify(chartDate), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    // // HttpClient API post() method => Create Student Request
    // studentCreateRequest(studentRequestDetails): Observable<Student> {
    //     return this.http.post<Student>(this.studentCreateRequestApiUrl, JSON.stringify(studentRequestDetails), this.httpOptions)
    //         .pipe(
    //             retry(1),
    //             catchError(this.handleError)
    //         );
    // }

    // Error handling
    handleError(error) {
        // let errorMessage = '';
        // if (error.error instanceof ErrorEvent) {
        //     // Get client-side error
        //     errorMessage = error.error.message;
        // } else {
        //     // Get server-side error
        //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        // }
        // window.alert(errorMessage);
        console.log(error);

        return throwError(error);
    }
}
