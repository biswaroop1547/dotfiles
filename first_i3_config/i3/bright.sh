#!/bin/bash

#read -p 'setBrightnessTo: ' brightnessvar

echo "$1" > /sys/class/backlight/intel_backlight/brightness  # Set new brightness


