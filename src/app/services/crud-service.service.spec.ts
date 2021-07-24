import { BASE_URL } from './../configs/api/index';
import { mockData } from './crud-service.mock';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'

import { CrudServiceService } from './crud-service.service';

describe(CrudServiceService.name, () => {
  let service: CrudServiceService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudServiceService],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(CrudServiceService);
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${CrudServiceService.prototype.getAll.name}
    expects to return the mock of the value when the service stops calling`,() => {
      const mockValue = mockData

      service.getAll().subscribe(user => {
        expect(user.name).toEqual(mockValue.name)
        expect(user.id).toEqual(1)
      })
      const req = httpTestingController.expectOne(BASE_URL)
      expect(req.cancelled).toBeFalsy()
      expect(req.request.responseType).toEqual('json')
      req.flush(mockValue)
  })
});
