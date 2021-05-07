# Clarabridge Engage Unified Components :construction:

Clarabridge Engage Unified Components is a set of React components that implement our unified design.

https://engagor.github.io/unified-components-react

## Installation

Clarabridge Engage Unified Components can be installed as an [npm package](https://www.npmjs.com/package/@clarabridge/unified-react-components):

```bash
$ npm i @clarabridge/unified-react-components
```

## Basic usage

`import { SwitchButton, Button } from @clarabridge/unified-react-components`

## Contributing

Components that are added to this repository should be pre-approved by the design team. Only unified components that adhere to the global brand guidelines are added.
For an overview of these components refer to 
https://clarabridge.atlassian.net/wiki/spaces/PD/pages/884703293/System+Log

![Unified UI Diagram](https://user-images.githubusercontent.com/2686028/116995707-b08fe380-acda-11eb-8bf2-0e7be0afe92d.jpg)
https://miro.com/app/board/o9J_lJ6IxlE=/?fromRedirect=1

1. Do your changes on a feature branch `feature-{ticket number}-{optional description}`
2. Make sure your changes are covered by a test
3. Make a PR for your commit
4. Assign a reviewer from the Design team (@goOve)
5. Follow up on the review and the remarks
6. Merge after approval and make a release

### Reviewing

The design review should focus on whether or not the design guidelines were correctly implemented.
- Is it consistent with the mockups? 
- Is the component following the accessbility guidelines?  

When needed the design reviewer circles back to the design team about the implementation remarks. An interaction can't work as envisioned? Then it is up to the design reviewer to propose changes and work out changes to the guidelines.

## How to make a release

1. Pull and make sure you got the most recent code
2. Make a release with `release-major`, `release-minor`, `release-patch`.

This will update version numbers, create a Github release and create a new version of the NPM package.

## License
````
See license at LICENSE.txt
