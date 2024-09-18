#  CES About Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Relicense to AGPL-3.0-only

## [v0.5.0] - 2024-07-01
### Added
- Add "written offer"-page

### Changed
- Chang address to new cloudogu-address
- Delete wrong information of imprint
- Separate open source 3rd party licenses and dogu licenses
- Fix licenses and add missing licenses

## [v0.4.0] - 2023-11-07
### Added
- Release docs (see [docs](docs/development/release_en.md))
- yarn added for building the ces-about project

### Removed
- Most of the images in the release package which were not required by the web page
  - this reduces the package size from 2.8MB to 235kB

### Fixed
- Prepend `/info/` to each hyperlink
- Missing favicon

### Changed
- README updated with instructions of how to run the project locally

## [v0.3.0] - 2023-10-25
### Changed
- ces-about no longer uses angular and instead runs on vanilla js / plain html
- protactor e2e tests have been replaced by cypress e2e integration tests
- unit tests were moved into cypress integration tests
