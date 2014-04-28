#!/bin/bash

#curl -X POST -H "Content-Type: application/json" --data @data https://acm.cs.uic.edu/~clee231/fridge/posttest.php
curl -X POST -H "Content-Type: application/json" --data @/root/fridge/data http://jgensl2.people.uic.edu/fridge/data -v
