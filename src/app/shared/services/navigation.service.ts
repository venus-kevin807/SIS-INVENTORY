import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isExpandedSubject = new BehaviorSubject<boolean>(false);
  isExpanded$ = this.isExpandedSubject.asObservable();

  toggleSidebar() {
    this.isExpandedSubject.next(!this.isExpandedSubject.value);
  }

  collapse() {
    this.isExpandedSubject.next(false);
  }
}
