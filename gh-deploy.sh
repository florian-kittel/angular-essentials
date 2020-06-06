#!/bin/sh
rm -rf docs
cp -r dist/showcase docs
git subtree push --prefix docs/ origin gh-pages
