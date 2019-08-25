import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAdminComponent } from './books-admin.component';

describe('BookadminComponent', () => {
  let component: BooksAdminComponent;
  let fixture: ComponentFixture<BooksAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
