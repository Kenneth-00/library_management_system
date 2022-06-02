import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class AuthguardGuard implements CanActivate, CanActivateChild {

    constructor(private dataService: ApiService, private router: Router) {}
    
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
            if (this.dataService.isLoggedIn()) {
                return true;
            }
            this.router.navigate(['/login']);
            return false
        }
    
    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean {
            return true;
    }  
        
}