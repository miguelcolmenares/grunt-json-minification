# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
