import { AfterViewInit, Component, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-hoc',
  template: ` <ng-template #hoc />`,
})
export class HocComponent implements AfterViewInit {
  @ViewChild('hoc', { read: ViewContainerRef })
  private container!: ViewContainerRef;
  @Input()
  component: Type<Component> | undefined;
  @Input()
  options: unknown;

  ngAfterViewInit(): void {
    if (this.component === undefined) {
      throw new Error('this.component can not be undefined');
    }
    const ref = this.container.createComponent(this.component);
    if (!this.options) return;
    Object.assign(ref.instance, this.options);
    ref.changeDetectorRef.detectChanges();
  }
}
