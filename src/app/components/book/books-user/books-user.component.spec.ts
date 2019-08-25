import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksUserComponent } from './books-user.component';

describe('BooksUserComponent', () => {
  let component: BooksUserComponent;
  let fixture: ComponentFixture<BooksUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
