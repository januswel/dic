#!/bin/sh

yangpao -p
git commit -am "release v$(yangpao -c)"
git tag v$(yangpao -c)
git push origin master --tags

# TODO: setup CI
npm publish --access public
