import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListBookComponent } from './my-list-book.component';

describe('MyListBookComponent', () => {
  let component: MyListBookComponent;
  let fixture: ComponentFixture<MyListBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
