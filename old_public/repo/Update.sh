#!/bin/bash
rm Packages
rm -f Packages.bz2
dpkg-scanpackages -m ./debs > Packages
bzip2 -k Packages