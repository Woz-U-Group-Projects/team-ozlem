import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./models/task";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TaskService {

  apiUrl: string = "http://localhost:3001/tasks";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  //create update and delete functions to complete CRUD
}
