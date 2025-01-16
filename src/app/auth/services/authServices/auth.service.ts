import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, UserWithPassword } from '../../models/user.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser$ = this.currentUserSubject.asObservable();

    // Simulated users database
    private users: UserWithPassword[] = [
        { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
        { id: 2, username: 'user', password: 'user123', role: 'user' }
    ];

    login(username: string, password: string): Observable<boolean> {
        const user = this.users.find(u =>
            u.username === username && u.password === password
        );

        if (user) {
            // Remove password before storing user info
            const { password: _, ...userWithoutPassword } = user;
            this.currentUserSubject.next(userWithoutPassword);
            localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
            return of(true);
        }

        return of(false);
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    isAdmin(): boolean {
        const user = this.currentUserSubject.value;
        return user?.role === 'admin';
    }

    isAuthenticated(): boolean {
        return this.currentUserSubject.value !== null;
    }
}
