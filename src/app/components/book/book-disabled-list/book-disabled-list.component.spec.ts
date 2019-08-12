import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDisabledListComponent } from './book-disabled-list.component';

describe('BookDisabledListComponent', () => {
  let component: BookDisabledListComponent;
  let fixture: ComponentFixture<BookDisabledListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDisabledListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDisabledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
