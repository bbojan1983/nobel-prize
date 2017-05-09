import {Component, Injectable, Input} from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})

@Injectable()

/**
 * Login component
 */
export class LoginComponent {

    /**
     * TwoWay binding input name username.
     */
    @Input() public username: String = '';

    /**
     * TwoWay binding input name password.
     */
    @Input() public password: String = '';

    /**
     * Display flash message if auth failed.
     *
     * @type {boolean}
     */
    public authFailed = false;

    /**
     * Inject services to component.
     *
     * @param data
     */
    constructor(public data: DataService) {}

    /**
     * Try to authenticate.
     */
    login() {
        if (this.username === this.data.username && this.password === this.data.password) {
            this.authorize();
        } else {
            this.logout();
        }
    }

    /**
     * Check for auth.
     *
     * @returns {Boolean}
     */
    check() {
        return this.data.authorized;
    }

    /**
     * Authorize access.
     */
    authorize() {
        this.data.authorized = true;
    }

    /**
     * Logout.
     */
    logout() {
        this.data.authorized = false;
        this.authFailed = true;
    }

}
