import test from 'node:test';
import assert from 'node:assert/strict';
import { repositoryQualityScore, isRepositoryReady } from '../quality/coverage-target.mjs';

test('calcula percentual de qualidade', () => {
  assert.equal(repositoryQualityScore(20, 20), 100);
  assert.equal(repositoryQualityScore(16, 20), 80);
  assert.equal(repositoryQualityScore(0, 0), 0);
});

test('aplica limiar de prontidão', () => {
  assert.equal(isRepositoryReady(80), true);
  assert.equal(isRepositoryReady(79), false);
});
