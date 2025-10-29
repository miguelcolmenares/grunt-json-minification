'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('grunt-json-minification', () => {
  beforeAll(() => {
    // Clean and build before running tests
    execSync('npx grunt clean json_minification', { stdio: 'inherit' });
  });

  describe('default_options', () => {
    it('should minify JSON file correctly', () => {
      const actualPath = path.join(__dirname, '..', 'tmp', 'test.json');
      const expectedPath = path.join(__dirname, 'expected', 'test.json');
      
      expect(fs.existsSync(actualPath)).toBe(true);
      expect(fs.existsSync(expectedPath)).toBe(true);

      const actual = fs.readFileSync(actualPath, 'utf8');
      const expected = fs.readFileSync(expectedPath, 'utf8');

      expect(actual).toBe(expected);
    });

    it('should create a smaller file than the original', () => {
      const originalPath = path.join(__dirname, 'fixtures', 'test.json');
      const minifiedPath = path.join(__dirname, '..', 'tmp', 'test.json');
      
      expect(fs.existsSync(originalPath)).toBe(true);
      expect(fs.existsSync(minifiedPath)).toBe(true);

      const originalSize = fs.statSync(originalPath).size;
      const minifiedSize = fs.statSync(minifiedPath).size;

      expect(minifiedSize).toBeLessThan(originalSize);
      expect(minifiedSize).toBeGreaterThan(0);
    });

    it('should produce valid JSON output', () => {
      const minifiedPath = path.join(__dirname, '..', 'tmp', 'test.json');
      const content = fs.readFileSync(minifiedPath, 'utf8');
      
      expect(() => {
        JSON.parse(content);
      }).not.toThrow();
    });
  });
});