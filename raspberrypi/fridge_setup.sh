#!/bin/bash

echo 17 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio17/direction

