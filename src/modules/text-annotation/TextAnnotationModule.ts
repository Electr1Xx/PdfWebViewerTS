import { CanvasModule, CanvasModuleRegistration } from '../CanvasModule'
import { createAnnotationbar, AnnotationbarActions } from './AnnotationBar'
import { AddTextAnnotationLayer } from './AddTextAnnotationLayer'

export class TextAnnotationModule extends CanvasModule {
  public annotationbarElement: HTMLElement | null = null
  public toolbarElement: HTMLElement | null = null
  private annotationbar: AnnotationbarActions | null = null

  constructor() {
    super()
    this.name = 'TextAnnotationModule'
    this.onBtnAddClicked = this.onBtnAddClicked.bind(this)
    this.activate = this.activate.bind(this)
  }

  public onRegister() {
    this.annotationbarElement = document.createElement('div')
    this.annotationbarElement.classList.add('pwv-commandbar-group')
    this.annotationbar = createAnnotationbar(
      {
        onBtnAddClicked: this.onBtnAddClicked,
      },
      this.annotationbarElement,
    )
    this.toolbarElement = document.createElement('div')

    return {
      annotationbar: this.annotationbarElement,
      toolbar: this.toolbarElement,
    }
  }

  public activate() {
    this.onBtnAddClicked()
  }

  private onBtnAddClicked() {
    /* tslint:disable-next-line:no-string-literal */
    if (!this.canvasLayers['add']) {
      this.annotationbar && this.annotationbar.setActive(true)
      this.createCanvasLayer('add', AddTextAnnotationLayer)
    } else {
      this.annotationbar && this.annotationbar.setActive(false)
      this.removeCanvasLayer('add')
    }
  }
}
