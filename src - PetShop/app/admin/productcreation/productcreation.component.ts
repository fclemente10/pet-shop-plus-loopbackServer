import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductControllerService} from '../../shared/sdk';



@Component({
  selector: '/admin/new-product',
  templateUrl: './productcreation.component.html',
  styleUrls: ['./productcreation.component.scss']
})
export class ProductcreationComponent implements OnInit {

   public productEditionForm: FormGroup;
   nombresProhibidos = ['Test','test', 'TEST'];
   submitted: true;

   public product;

   API_URL: string = "http://localhost:3000/";

   public product2 = {
     id:'',
     name:'',
     price:'',
     description:'',
   };



  constructor(protected formBuilder: FormBuilder,
              protected router: Router,
              protected productControllerService: ProductControllerService) { }

  ngOnInit(): void {

    this.productEditionForm = this.formBuilder.group({
    userData: new FormGroup({
      'id' : new FormControl(null,[Validators.required, Validators.min(1)] ),
      'name': new FormControl(null, [Validators.required, this.esProhibido.bind(this)]),
      'description': new FormControl(null, [Validators.required]),
      'price' : new FormControl(null, [Validators.required, Validators.pattern("^\\d+([.,]\\d+)?$")]),
      }),
    });

    //  this.productEditionForm.get('name').valueChanges
      //    .pipe(
      //      debounceTime(1000)
      //   )
      //   .subscribe(value => {
      //     console.log(value);
      //  });

  }

  @ViewChild('f', {static: false}) FormGroup: NgForm;

  public onSubmit() {


    console.log('ProductEditForm = ' + this.productEditionForm.value.userData);
    console.log('Products2 = ' + this.product2);
    this.submitted = true;

    this.product2.id = this.productEditionForm.value.userData.id;
    this.product2.name = this.productEditionForm.value.userData.name;
    this.product2.description = this.productEditionForm.value.userData.description;
    this.product2.price = this.productEditionForm.value.userData.price;

     this.productControllerService.productControllerCreate(this.productEditionForm.value.userData).subscribe(product => {
      this.router.navigate(['this.API_URL+products'])
    });

    this.productEditionForm.reset();

  }

  esProhibido(nombre: FormControl): {[s: string]: boolean} {
    if (this.nombresProhibidos.indexOf(nombre.value) !== -1) {
      return  {nombreEsProhibido: true};
    }
    return null;
  }

}
// this.productControllerService.productControllerDeleteById(this.product2.id2).subscribe(product => {
//   this.product = product;
// })
