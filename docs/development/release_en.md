# Create a release for ces-about

- Create new release with git-flow
   - Update versions in Changelog, Makefile and package.json
- Create release package
  - checkout the previously created git tag
  - Execute 
    - `yarn install`
    - `yarn postinstall`
    - `make package`
- On Github, create a release from the tag
  - Add the information from changelog
  - Append the previously created packages to the release
    - ces-about_v[VERSION].tar.gz
    - ces-about_v[VERSION].tar.gz.sha256
- Update ces-about in the nginx Dogu
