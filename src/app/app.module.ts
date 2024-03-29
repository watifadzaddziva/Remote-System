import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SetThresholdComponent } from './components/set-threshold/set-threshold.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { JWT_OPTIONS } from '@auth0/angular-jwt';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    SetThresholdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzTableModule,
    BrowserAnimationsModule,
   NzLayoutModule,
   NzMenuModule,
   NzFormModule,
   NzCheckboxModule,
   NzInputModule,
   NzButtonModule,
   ReactiveFormsModule,
   NzButtonModule,
   NzCardModule,
   FormlyModule,
   FormlyNgZorroAntdModule,
   NzSelectModule,
  FormlyModule,
  FormlyNgZorroAntdModule,
  NgxPermissionsModule.forRoot(),

  ],
  providers: [
    { provide: NZ_I18N,useValue: en_US },
    { provide:  JWT_OPTIONS, useValue: JWT_OPTIONS},
       provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
