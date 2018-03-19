#!/bin/sh -x

yangpao -p
git commit -am "release cli v$(yangpao -c)"
git tag "cli-v$(yangpao -c)"
git push origin master --tags
