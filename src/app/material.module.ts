import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


const matModules: any[] = [
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MaterialModule {}