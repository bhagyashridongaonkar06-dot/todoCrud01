import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { productArr } from '../../../const/productsArr';
import { IProduct } from '../../../model/interfaces';
import { SnackbarService } from '../../../service/snackbar.service';
import { UuidService } from '../../../service/uuid.service';

@Component({
  selector: 'app-product-crud01',
  templateUrl: './product-crud01.component.html',
  styleUrls: ['./product-crud01.component.scss']
})
export class ProductCrud01Component implements OnInit {

  productArr = productArr

  isInEditMode: boolean = false
  private updateId !: string;

  @ViewChild('name') name!: ElementRef<HTMLInputElement>;
  @ViewChild('category') category!: ElementRef<HTMLSelectElement>;
  @ViewChild('description') description!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('price') price!: ElementRef<HTMLInputElement>;
  @ViewChild('quantity') quantity!: ElementRef<HTMLInputElement>;
  @ViewChild('brand') brand!: ElementRef<HTMLInputElement>;
  @ViewChild('isAvailable') isAvailable!: ElementRef<HTMLSelectElement>;
  @ViewChild('image') image!: ElementRef<HTMLInputElement>;

  constructor(private _uuidService: UuidService,
    private _snackar: SnackbarService
  ) { }

  ngOnInit(): void {
  }


  onProAdd() {
    let newProObj: IProduct = {
      name: this.name.nativeElement.value,
      category: this.category.nativeElement.value,
      description: this.description.nativeElement.value,
      price: +this.price.nativeElement.value,
      quantity: +this.quantity.nativeElement.value,
      brand: this.brand.nativeElement.value,
      isAvailable: this.isAvailable.nativeElement.value === 'yes',
      image: this.image.nativeElement.value,
      id: this._uuidService.getUuid(),
    };

    // if(!newProObj.name || !newProObj.category || !newProObj.brand){
    //   this._snackar.snackbar('Product Name Category and brand are required')
    //   return
    // }

    this.productArr.unshift(newProObj)

    this.name.nativeElement.value = ''
    this.category.nativeElement.value = '--select--'
    this.description.nativeElement.value = ''
    this.price.nativeElement.value = ''
    this.quantity.nativeElement.value = ''
    this.brand.nativeElement.value = ''
    this.isAvailable.nativeElement.value = ''
    this.image.nativeElement.value = ''

    this._snackar.snackbar(`New Product with name ${newProObj.name} created successfully!!`)
  }


  onProEdit(pro: IProduct) {
    this.name.nativeElement.value = pro.name
    this.category.nativeElement.value = pro.category
    this.description.nativeElement.value = pro.description
    this.price.nativeElement.value = String(pro.price)
    this.quantity.nativeElement.value = String(pro.quantity)
    this.brand.nativeElement.value = pro.brand
    this.isAvailable.nativeElement.value = pro.isAvailable ? 'yes' : 'no'
    this.image.nativeElement.value = pro.image

    this.isInEditMode = true

    this.updateId = pro.id
  }


  onProUpdate() {
    let updatedProObj: IProduct = {
      name: this.name.nativeElement.value,
      category: this.category.nativeElement.value,
      description: this.description.nativeElement.value,
      price: +this.price.nativeElement.value,
      quantity: +this.quantity.nativeElement.value,
      brand: this.brand.nativeElement.value,
      isAvailable: this.isAvailable.nativeElement.value === 'yes',
      id: this.updateId,
      image: this.image.nativeElement.value
    }

    let getIdx = this.productArr.findIndex(e => e.id === this.updateId)

    // if(getIdx === -1){
    //   this._snackar.errorMessage('Product is not updated')
    //   return
    // }
    this.productArr[getIdx] = updatedProObj

    this.isInEditMode = false

    this.name.nativeElement.value = ''
    this.category.nativeElement.value = ''
    this.description.nativeElement.value = ''
    this.price.nativeElement.value = ''
    this.quantity.nativeElement.value = ''
    this.brand.nativeElement.value = ''
    this.isAvailable.nativeElement.value = ''
    this.image.nativeElement.value = ''


    this._snackar.snackbar(`Product with name ${updatedProObj.name} updated successfully!!`)

  }


  onProDelete(pro: string) {
    let getConfirm = confirm('Are you sure you want to remove that product?')

    if(getConfirm){
      let getIndex = this.productArr.findIndex(e => e.id === pro)
      this.productArr.splice(getIndex, 1)
      this._snackar.snackbar(`Product with id ${pro} removed successfully!!`)
    }
    // if (getIndex === -1) {
    //   this._snackar.errorMessage('Your product will not remove')
    //   return
    // }

  }

}


