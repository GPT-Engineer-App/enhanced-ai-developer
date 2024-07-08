import { Module } from '@nestjs/common';
import { EnhancedAIService } from './enhanced-ai.service';
import { QuantumEnhancedMLService } from './quantumEnhancedML.service';
import { AdaptiveLearningService } from './adaptiveLearning.service';
import { FederatedLearningService } from './federatedLearning.service';
import { NaturalLanguageCodeGenService } from './naturalLanguageCodeGen.service';
import { AIDeveloperService } from './autonomousDevelopment/aiDeveloper.service';
import { GeneticCodeOptimizerService } from './codeEvolution/geneticCodeOptimizer.service';
import { IntentRecognitionService } from './naturalLanguage/intentRecognition.service';

@Module({
  providers: [
    EnhancedAIService,
    QuantumEnhancedMLService,
    AdaptiveLearningService,
    FederatedLearningService,
    NaturalLanguageCodeGenService,
    AIDeveloperService,
    GeneticCodeOptimizerService,
    IntentRecognitionService,
  ],
  exports: [EnhancedAIService],
})
export class AIModule {}