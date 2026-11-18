import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { postsArr } from 'src/app/const/postsArr';
import { IpostsArr } from 'src/app/model/interfaces';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-post-crud01',
  templateUrl: './post-crud01.component.html',
  styleUrls: ['./post-crud01.component.scss']
})
export class PostCrud01Component implements OnInit {
  postsArr = postsArr

  @ViewChild('title')
  titleRef !: ElementRef

  @ViewChild('content')
  contentRef !: ElementRef

  isInEditMode: boolean = false;

  updateId !: string

  constructor(private _uuid: UuidService,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onAddPost() {
    let post: IpostsArr = {
      id: this._uuid.getUuid(),
      title: this.titleRef.nativeElement.value,
      content: this.contentRef.nativeElement.value
    }
    this.postsArr.unshift(post)
    this.titleRef.nativeElement.value = ''
    this.contentRef.nativeElement.value = ''
    this._snackbar.snackbar(`New Post with name ${post.title} Created successfully!!`)
  }
  onEditPost(post: IpostsArr) {
    this.titleRef.nativeElement.value = post.title
    this.contentRef.nativeElement.value = post.content

    this.isInEditMode = true
    this.updateId = post.id
  }
  onUpdatePost() {
    let updateObj: IpostsArr = {
      id: this.updateId,
      title: this.titleRef.nativeElement.value,
      content: this.contentRef.nativeElement.value
    }

    let getIdx = this.postsArr.findIndex(e => e.id === this.updateId)
    this.postsArr[getIdx] = updateObj

    this.titleRef.nativeElement.value = ''
    this.contentRef.nativeElement.value = ''
    this.isInEditMode = false
    this._snackbar.snackbar(`Post with name ${updateObj.title} updated successfully!!`)

  }
  onDeletePost(post: string) {
    let getConfirm = confirm('Are you sure you want to delete this post')

    if (getConfirm) {
      let getIdx = this.postsArr.findIndex(e => e.id === post)
      this.postsArr.splice(getIdx, 1)
      this._snackbar.snackbar(`Post with id ${post} deleted successfully!!`)
    }

  }


}
