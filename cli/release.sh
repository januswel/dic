#!/bin/sh -x

yangpao -p
git commit -am "release v$(yangpao -c)"
git tag "release cli v$(yangpao -c)"
git push origin master --tags
