import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import {browser} from "protractor/built";

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ LoginComponent ],
            providers: [ DataService ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should display login form', () => {
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('input[name="username"]')).toBeTruthy();
        expect(compiled.querySelector('input[name="password"]')).toBeTruthy();
    });

    it('should display login failed if credentials is incorrect', () => {
        spyOn(component, 'login');
        const compiled = fixture.debugElement.nativeElement;

        const username = 'john';
        const password = 'doe';

        compiled.querySelector('input[name="username"]').val = username;
        compiled.querySelector('input[name="password"]').val = password;

        compiled.querySelector('button').click();

        fixture.whenStable().then(() => {
            spyOn(compiled, 'logout');
            expect(compiled.username).toBe(username);
            expect(compiled.password).toBe(password);
            expect(component.authFailed).toBeTruthy();
            expect(component.login).toHaveBeenCalled();
            expect(compiled.logout).toHaveBeenCalled();
            expect(component.check()).toBeFalsy();
            expect(component.authFailed).toBeTruthy();
            expect(compiled.querySelector('div').textContent).toContain('Login failed!');
        });
    });

    it('should login when credentials was correct', () => {
        spyOn(component, 'login');
        const compiled = fixture.debugElement.nativeElement;

        compiled.querySelector('input[name="username"]').value = 'admin';
        compiled.querySelector('input[name="password"]').value = 'admin';

        compiled.querySelector('button').click();

        fixture.whenStable().then(() => {
            spyOn(compiled, 'authorize');
            expect(compiled.username).toEqual('admin');
            expect(compiled.password).toEqual('admin');
            expect(component.login).toHaveBeenCalled();
            expect(compiled.authorize).toHaveBeenCalled();
            expect(component.check()).toBeTruthy();
        });
    });
});
