import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobstorageComponent } from './blobstorage.component';

describe('BlobstorageComponent', () => {
  let component: BlobstorageComponent;
  let fixture: ComponentFixture<BlobstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlobstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlobstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
