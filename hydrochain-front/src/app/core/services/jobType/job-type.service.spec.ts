import { TestBed } from '@angular/core/testing';

import { JobTypeService } from './job-type.service';

describe('JobServiceService', () => {
  let service: JobTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
