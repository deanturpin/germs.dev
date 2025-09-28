---
tags:
  - raspberry-pi
  - single-board-computers
  - projects
  - embedded
---




# Raspberry Pi Setup Guide

> Always be careful when running scripts and commands copied from the Internet.

Anyway, that said...

---

## Getting start
Download [Raspberry Pi imager](https://www.raspberrypi.org/%20downloads/) from
the Play Store to write images to an SD card from your phone.

You can use a wall charger but they run happily off a large powerbank if you
wanna dev from the sofa.

## Connection differences between the Pi 4 and Zero

| type | 4 | Zero |
| --- |---|---|
| HDMI | Micro | Mini |
| Power | USB-C | Micro-USB |

## Operating systems
It's by far easiest to install Raspbian 32-bit.

You might also consider:
- [Raspbian
64-bit](https://raspberrytips.com/raspberry-pi-os-64-bits-vs-32-bits/) -- see
[direct link](https://downloads.raspberrypi.org/raspios_arm64/images/)
- Kali is a bit slow and painful with a full desktop environment -- might be worsened by powering over USB rather
than a dedicated power supply -- but the headless, command line only version is great for auditing your home network.

## Additional software
- [motioneyeos](https://github.com/ccrisan/motioneyeos/releases/tag/nightly-dev)
-- camera system, just install and go
- [Raspotify](https://pimylifeup.com/raspberry-pi-spotify/) -- Spotify client

## Configuring the network without a display
- https://www.raspberrypi-spy.co.uk/2017/04/manually-setting-up-pi-wifi-using-wpa_supplicant-conf/

```
country=us
update_config=1
ctrl_interface=/var/run/wpa_supplicant

network={
scan_ssid=1
ssid="MyNetworkSSID"
psk="Pa55w0rd1234"
}
```

Also, to enable ssh, touch an empty file named "ssh" at the top level on the SD card to enable it.

---

## Project ideas
- https://projects.raspberrypi.org/en
- Plant irrigation system
- ANPR -- car number plate detection system
- Webcam -- with upload/sync to GoogleCloud (rsync, cron)
- Signal triangulation -- calculate relative position of multiple devices using audio, Bluetooth etc.
- https://hackaday.com/2015/02/08/automated-mushroom-cultivation/
- https://hackaday.com/2010/06/24/mushroom-terrarium-automation/
- Media server using [Kodi](https://en.wikipedia.org/wiki/Kodi_(software))
- [Send SMS message](https://github.com/modmypi/SIM800)
- Send periodic UDP broadcasts from multiple devices and log in Wireshark
- Home certificate authority
- Mail server
- PXE boot [server](https://linuxconfig.org/how-to-configure-a-raspberry-pi-as-a-pxe-boot-server) and [client](https://brainsnapped.com/2020/10/27/pxe-booting-raspberry-pi-os-part-1-client-setup/)
- Regularly port-scan all devices on your home network
- Pigeon deterrent
- Automatic Shazam
- Home web server (nginx)
- Shy robot: solar powered robot that hides in the shadows when disturbed
- https://learn.pimoroni.com/tutorial/hel/auto-watering-with-grow
- SMPTE timecode - clapperboard
- [Pi-hole](https://pi-hole.net/) ad blocked -- even works on a Zero but you do
need a router that can have its DNS config updated

## Stores
- [The Pi Hut](https://thepihut.com/)
- [Pimeroni](https://shop.pimoroni.com/)
- [Radio Spares](https://uk.rs-online.com/web/p/raspberry-pi/1373331/)
- [Amazon](https://www.amazon.co.uk/MakerFun-Dongle-Expansion-Board-Raspberry/dp/B07KR5PM7J/ref=sr_1_5?dchild=1&keywords=Raspberry+Pi+zero&qid=1620719318&sr=8-5)
- [sparkfun](https://www.sparkfun.com/)

## Operating systems
### Pico
- http://cowlark.com/2021-02-16-fuzix-pi-pico/

## Kits and peripherals
### Models/kits
- [Raspberry Pi 4 Model B](https://thepihut.com/products/raspberry-pi-4-model-b?variant=20064052740158)
- [Raspberry Pi 3 Model A+](https://thepihut.com/collections/raspberry-pi/products/raspberry-pi-3-model-a-plus)
- [Raspberry Pi Zero WH](https://thepihut.com/collections/raspberry-pi/products/raspberry-pi-zero-wh-with-pre-soldered-header)
- [Raspberry Pi Zero v1.3](https://thepihut.com/collections/raspberry-pi/products/raspberry-pi-zero)
- https://thepihut.com/collections/raspberry-pi/products/raspberry-pi-400 (pi built in to keyboard)
- https://thepihut.com/collections/raspberry-pi/products/raspberry-pi-pico
- [pi4 with DAC](https://thepihut.com/collections/latest-raspberry-pi-products/products/allo-boss2-player-including-raspberry-pi-4-2gb)
- [pi4 starter kit](https://thepihut.com/collections/raspberry-pi-kits-and-bundles/products/raspberry-pi-starter-kit?variant=20336446079038)
- [Naturebytes Wildlife Camera Kit: Raspberry Pi model A+ v1 (the most energy-efficient model available)](https://thepihut.com/collections/raspberry-pi-kits-and-bundles/products/naturebytes-wildlife-camera-kit)

## GPIO
- http://raspberrypi-aa.github.io/session2/bash.html
- http://manpages.ubuntu.com/manpages/eoan/en/man1/gpio.1.html
- http://wiringpi.com/the-gpio-utility/
- https://www.raspberrypi.org/documentation/usage/gpio/
- https://pinout.xyz/

## Gardening
- https://thepihut.com/products/ecoduino-an-auto-planting-kit
- [Peristaltic Liquid Pump with Silicone Tubing - 12V DC Power](https://thepihut.com/products/peristaltic-liquid-pump-with-silicone-tubing-12v-dc-power)
- https://thepihut.com/products/capacitive-soil-moisture-sensor
- https://learn.pimoroni.com/tutorial/hel/auto-watering-with-grow

## Cases
- https://thepihut.com/products/flirc-raspberry-pi-zero-case

## Audio
- https://thepihut.com/products/pirate-audio-headphone-amp-for-raspberry-pi
- https://thepihut.com/products/hifiberry-dac-light
- https://thepihut.com/products/hifiberry-dac-hat-standard-rca
- https://thepihut.com/products/hifiberry-dac-phone

## Displays
- https://thepihut.com/products/medium-16x32-rgb-led-matrix-panel
- https://thepihut.com/products/adafruit-1-44-color-tft-lcd-display-with-microsd-card-breakout-st7735r
- https://www.waveshare.com/wiki/1.28inch_LCD_Module

## Solar
- https://thepihut.com/products/flexible-solar-panel-1-5v-250ma

## GSM
- https://thepihut.com/products/modmypis-raspberry-pi-gsm-gprs-board-sim800

## Misc
- [Control electrical sockets](https://tutorials-raspberrypi.com/control-raspberry-pi-wireless-sockets-433mhz-tutorial/)

## ARM
- M-series: bare metal
- A-series: run OS
- [STM electronics](https://www.digikey.co.uk/en/supplier-centers/stmicroelectronics)
- https://www.mediatek.com/
- [Tinkerboard](https://www.asus.com/us/motherboards-components/single-board-computer/all-series/tinker-board/)

