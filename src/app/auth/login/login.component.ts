import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authServices/auth.service';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.css'],
    template: `
        <div class="login-container">
            <h2>Login</h2>
            <form (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        [(ngModel)]="username"
                        name="username"
                        required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        [(ngModel)]="password"
                        name="password"
                        required>
                </div>
                <button type="submit" class="btn-submit">Login</button>
                <p *ngIf="error" class="error">{{ error }}</p>
            </form>
        </div>
    `,
    styles: [`
        .login-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 30px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .btn-submit {
            display: inline-block;
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        .btn-submit:hover {
            background-color: #0056b3;
        }
        .error {
            color: red;
            margin-top: 10px;
        }
    `]
})
export class LoginComponent {
    username: string = '';
    password: string = '';
    error: string = '';

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    onSubmit() {
        // Resetea el mensaje de error antes de intentar loguearse
        this.error = '';

        // Llama al servicio de autenticación y maneja el éxito o el error
        this.authService.login(this.username, this.password).subscribe({
            next: (success) => {
                if (success) {
                    // Redirige al dashboard si el login es exitoso
                    this.router.navigate(['/dashboard']);
                } else {
                    // Muestra un mensaje de error si las credenciales son incorrectas
                    this.error = 'Invalid credentials';
                }
            },
            error: (err) => {
                // Maneja errores del servidor o conexión
                console.error('Login failed:', err);
                this.error = 'An unexpected error occurred. Please try again.';
            }
        });
    }
}
