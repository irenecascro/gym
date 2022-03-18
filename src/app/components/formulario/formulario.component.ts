import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutsService } from 'src/app/services/workouts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  constructor(
    private workoutService: WorkoutsService,
    private router: Router
  ) {

    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      time: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([0-9])*$/)
      ]),
      rep: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([0-9])*$/)
      ]),
    }, [])
  }

  ngOnInit(): void {
  }

  getDataForm() {
    //tengo que enviar esta información para guardarla, el servicio
    let estado = this.workoutService.saveWorkOut(this.form.value);

    if (estado) {
      //redirigir a la tabla estadistica
      this.router.navigate(['/estadisticas']);
    } else {
      alert('No se ha podido insertar el ejercicio')
    }
  }

  checkControl(controlName: string, validatorName: string): boolean {
    if (this.form.get(controlName)?.hasError(validatorName) && this.form.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
