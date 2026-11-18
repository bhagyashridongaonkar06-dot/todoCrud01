const cl = console.log;
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { studentArr } from 'src/app/const/studentArr';
import { City, IStudent } from 'src/app/model/interfaces';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-student-crud01',
  templateUrl: './student-crud01.component.html',
  styleUrls: ['./student-crud01.component.scss']
})
export class StudentCrud01Component implements OnInit {

  studentArr = studentArr
  
  isInEditMode : boolean = false

  private updateId !: string

  @ViewChild('fname') fnameRef !: ElementRef<HTMLInputElement>
  @ViewChild('lname') lnameRef !: ElementRef<HTMLInputElement>
  @ViewChild('email') emailRef !: ElementRef<HTMLInputElement>
  @ViewChild('contact') contactRef !: ElementRef<HTMLInputElement>
  @ViewChild('city') cityRef !: ElementRef<HTMLSelectElement>


  constructor(private _uuidService : UuidService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onAddStd(){
    let newStd : IStudent ={
      fname : this.fnameRef.nativeElement.value,
      lname : this.lnameRef.nativeElement.value,
      email : this.emailRef.nativeElement.value,
      contact : +this.contactRef.nativeElement.value,
      city : this.cityRef.nativeElement.value as City,
      id : this._uuidService.getUuid()
    }

    cl(newStd)
    this.studentArr.unshift(newStd)
    this.fnameRef.nativeElement.value = ''
    this.lnameRef.nativeElement.value = ''
    this.emailRef.nativeElement.value = ''
    this.contactRef.nativeElement.value = ''
    this.cityRef.nativeElement.value = '--select City--'
    this._snackbar.snackbar(`New Student with name ${newStd.fname} ${newStd.lname} created successfully`)
  }

  onEditStd(std : IStudent){
    this.fnameRef.nativeElement.value = std.fname
    this.lnameRef.nativeElement.value = std.lname
    this.emailRef.nativeElement.value = std.email
    this.contactRef.nativeElement.value = String(std.contact)
    this.cityRef.nativeElement.value= std.city

    this.isInEditMode = true
    this.updateId = std.id

    cl(studentArr)
  }
  
  onUpdateStd(){
    let updateObj:IStudent = {
      fname : this.fnameRef.nativeElement.value,
      lname : this.lnameRef.nativeElement.value,
      email : this.emailRef.nativeElement.value,
      contact : +this.contactRef.nativeElement.value,
      city : this.cityRef.nativeElement.value as City,
      id : this.updateId
    }

    let getIdx = studentArr.findIndex(e => e.id === this.updateId)
    studentArr[getIdx] = updateObj

    this.isInEditMode = false

    this.fnameRef.nativeElement.value = ''
    this.lnameRef.nativeElement.value = ''
    this.emailRef.nativeElement.value = ''
    this.contactRef.nativeElement.value = ''
    this.cityRef.nativeElement.value = '--select City--'
    this._snackbar.snackbar(`Student with name ${updateObj.fname} ${updateObj.lname} updated successfully`)

  }

  onDeleteStd(std : string){
    let getConfirm = confirm('Are you sure you want to remove this student')

    if(getConfirm){
      let getIdx = studentArr.findIndex(e => e.id === std)
      studentArr.splice(getIdx, 1)
      this._snackbar.snackbar('Student deleted successfully')
    }
  }


}
