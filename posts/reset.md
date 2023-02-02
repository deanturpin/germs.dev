# Resetting a forgotten Windows password

When you've misplaced the password to a local Windows account. Seen to work on
Windows 2000, 7 and 10.

> Prerequisites: a 4GB USB stick and a machine capable of creating a USB boot
> disk (Ubuntu is good).

> Time to complete: half an hour to download Kali and
> create the stick and a few minutes to reset a password.

---

Download the latest [Kali Linux ISO](https://www.kali.org/downloads/) and
create a USB boot disk on another machine. Then enter the BIOS on the
troublesome Windows machine and boot into Kali Live from the USB stick. If
there's a BIOS password you'll need to research techniques to overcome that.

Open a terminal and find the Windows partition using `mount`. You might have to
try a few `sda` devices, my Windows 10 laptop was on `sda4`.

# mount and unmount partitions
mount /dev/sda4 /mnt
umount /mnt

Navigate to the password directory (the top level was `WINNT` on Windows 2000).

cd /mnt/Windows/System32/config

Inspect the local users.

chntpw -l SAM

Select the user you'd like to reset and follow the prompts.

chntpw -u Administrator

Reboot and you're done.

This feels hacky but really you're just clearing the locally stored hashed
password. If nothing else, it might convince you to encrypt your installs. But
of course this technique wouldn't work on an encrypted partition and it would
be game over.

