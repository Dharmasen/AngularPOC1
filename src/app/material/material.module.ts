import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
const modulesList = [
  FormsModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  FormsModule,
  CommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: modulesList,
  exports: modulesList,
})
export class MaterialModule {}
