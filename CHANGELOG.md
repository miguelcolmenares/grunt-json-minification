# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2024-11-14

### Security

- 🔒 Fixed CVE-2025-64718: js-yaml prototype pollution vulnerability
  - Added npm override to force js-yaml@4.1.1+ (fixes moderate severity issue)

### Changed

- ⬆️ **BREAKING**: Dropped Node.js 16 support - now requires Node.js >=18.14.0
- 🧪 Updated Jest from v29.7.0 to v30.2.0 for latest testing features
- 📦 Updated npm requirement to >=8.0.0
- 🔄 Updated CI/CD workflows to test against Node.js 18, 20, and 22
- ✅ Enhanced compatibility workflow with multi-Node version matrix testing
- ⬆️ Updated dependencies to latest versions:
  - chalk: 5.0.0 → 5.6.2
  - clean-css: 5.1.2 → 5.3.3
  - jsonminify: 0.4.1 → 0.4.2
  - grunt-cli: 1.4.3 → 1.5.0
  - grunt-contrib-clean: 2.0.0 → 2.0.1
  - grunt-contrib-jshint: 3.0.0 → 3.2.0
  - minimist: 1.2.6 → 1.2.8

### Notes

- This is a breaking change due to Node.js version requirement
- Users on Node.js 16 should use v0.3.1 (last compatible version)
- All tests passing on Node.js 18, 20, and 22

## [0.3.1] - 2024-11-14

### Changed

- 📝 Moved changelog from README.md to dedicated CHANGELOG.md file
- 📦 Maintenance release - last version with Node.js 16 support
- 🔒 Locked Jest at v29.7.0 for Node.js 16 compatibility

### Notes

- This is the final release supporting Node.js 16
- Future versions (0.4.0+) will require Node.js 18.14.0 or higher

## [0.3.0] - 2024 - Major Modernization Release

### Security
- 🛡️ **ELIMINATED ALL VULNERABILITIES** - From 8 critical alerts to 0
  - Fixed CVE-2024-37890 (ws DoS vulnerability)  
  - Fixed CVE-2025-27789 (@babel/helpers ReDoS)
  - Fixed CVE-2025-5889 (brace-expansion ReDoS)
  - Resolved 2 CodeQL security alerts

### Changed
- 🧪 **BREAKING**: **Migrated from nodeunit to Jest** for modern, secure testing
  - Enhanced test coverage: 3 comprehensive tests vs 1 basic test
  - Added `test:watch` script for development
  - Maintained Node.js 16+ compatibility

### Added
- ⚙️ **CI/CD**: **Complete infrastructure overhaul**
  - 4 modern GitHub Actions workflows (Test, CodeQL, Compatibility, Release)
  - Multi-version testing: Node.js 16-22, Grunt 1.4-1.6, cross-platform
  - Automated security scanning and compatibility verification
- 📚 **DOCS**: **Professional-grade documentation**
  - Completely rewritten README with modern badges
  - GitHub installation instructions and compatibility matrix
  - Added `.github/copilot-instructions.md` for AI-assisted development

### Technical
- 🔧 **Modernized package configuration**
  - Updated engines: Node.js >=16.0.0, npm >=7.0.0
  - Added peerDependencies: Grunt >=1.4.0
  - Enhanced scripts and maintainer information
- ✅ **VERIFIED**: All workflows passing, zero vulnerabilities, production-ready

## [0.2.2]

### Security
- 🔒 Fixed critical vulnerabilities in dependencies using npm overrides

### Documentation
- 📝 Added comprehensive GitHub Copilot instructions

### Infrastructure
- 🏗️ Modern GitHub Actions workflows for CI/CD

## [0.2.1]

### Changed
- ⬆️ Updated dependencies to support modern Node.js versions

### Build
- 🏗️ Improved Grunt configuration

## [0.2.0]

### Added
- 🚀 JSON syntax validation

### Fixed
- 🐛 Improved error handling

## [0.1.0] - Original Release

### Added
- 🎉 Initial release by redpancho
