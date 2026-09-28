import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

test('baseline de qualidade está presente', () => {
  for (const path of ['README.md','LICENSE','.env.example','.github/workflows/quality.yml','Dockerfile','api/chat.js']) assert.equal(existsSync(path), true, path + ' deve existir');
});
test('README possui documentação útil', () => assert.ok(readFileSync('README.md','utf8').trim().length > 200));
test('segredo da IA não é exposto via VITE_', () => assert.equal(readFileSync('.env.example','utf8').includes('VITE_GOOGLE_API_KEY'), false));
test('cliente usa endpoint server-side', () => assert.match(readFileSync('src/hooks/useAuthAPI.tsx','utf8'), /\/api\/chat/));
