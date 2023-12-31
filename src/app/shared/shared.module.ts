import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
// form - am
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
// table -am
import { MatTableModule } from '@angular/material/table';
import { FullNamePipePipe } from './pipes/full-name-pipe.pipe';
import { SizesDirective } from './directives/sizes.directive';
// Angular Material Nvos
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    FullNamePipePipe,
    SizesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    FullNamePipePipe,
    SizesDirective,
    MatProgressSpinnerModule
  ],

})
export class SharedModule { }
