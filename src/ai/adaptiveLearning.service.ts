import { Injectable } from '@nestjs/common';

@Injectable()
export class AdaptiveLearningService {
  async getInsights(code: string): Promise<string> {
    // Simulating adaptive learning to provide insights
    console.log('Generating adaptive insights for code');
    return 'Adaptive learning insights generated';
  }
}