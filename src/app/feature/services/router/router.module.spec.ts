import { RoutersModule } from './router.module';

describe('RouterModule', () => {
  let routerModule: RoutersModule;

  beforeEach(() => {
    routerModule = new RoutersModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
