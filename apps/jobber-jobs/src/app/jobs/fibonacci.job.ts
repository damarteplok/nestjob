import { Job } from '../decorators/job.decorator';
import { AbstractJob } from './abstract-job';

@Job({
  name: 'Fibonacci',
  description: 'Calculates the Fibonacci sequence up to a given number.',
})
export class FibonacciJob extends AbstractJob {}
