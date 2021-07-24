import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe(TableComponent.name, () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy();
  });
});
