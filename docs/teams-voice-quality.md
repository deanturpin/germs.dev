# Improving Microsoft Teams Voice Quality on macOS

Teams can make an expensive microphone sound surprisingly cheap. The problem is often **Teams' audio processing rather than the microphone itself**.

## 1. Change Teams audio settings

Open **Teams → Settings → Devices**.

| Setting | Recommendation |
|---|---|
| Microphone | Select your actual microphone or audio interface |
| Noise suppression | **Off** |
| Voice isolation | Off |
| Automatically adjust mic sensitivity | Off initially, if available |
| High fidelity music mode | On, as an experiment |

Noise suppression can be counterproductive with a high-quality microphone in a quiet room.

## 2. Try High Fidelity Music Mode

In a meeting, click the arrow beside the microphone icon, then go to **More audio settings** and enable **High fidelity music mode** (the precise wording or location may vary by Teams version).

Microsoft's published specifications for this mode include:

- **Sampling rate:** 32 kHz
- **Maximum bitrate:** 128 kbps, when network conditions permit

Although designed for music, it is worth comparing for natural-sounding speech. **Use headphones** to avoid feedback, since some noise and echo processing may be reduced.

## 3. Check macOS microphone processing

While Teams is using the microphone:

1. Open **Control Centre** in the Mac menu bar.
2. Find **Mic Mode**, if available.
3. Choose **Standard** rather than **Voice Isolation**.

Otherwise macOS may process the audio before Teams does.

## 4. Check the audio interface

For an XLR microphone connected through an audio interface:

- Set microphone gain manually, avoiding clipping.
- In **Audio MIDI Setup**, try **48 kHz** if supported.
- Avoid Bluetooth headphones operating in headset mode.
- Temporarily bypass compression, gating or other processing to compare.

## 5. Compare recordings

Record the same 15 seconds of speech using:

1. **QuickTime Player**, selecting the microphone.
2. **Teams → Devices → Make a test call**.
3. **A real Teams meeting**, with another participant listening or recording the received audio.

If QuickTime sounds excellent but Teams sounds like a telephone, the likely bottleneck is Teams processing, encoding or transmission rather than the microphone.

**Note:** Teams test-call playback is not necessarily an exact representation of what other participants hear.

## Troubleshooting clues

- **Muffled or lacking treble:** Check microphone selection, processing, Bluetooth headset mode and noise suppression.
- **Metallic, underwater or pumping:** Check noise suppression, voice isolation, automatic gain and connection quality.

## Useful references

- [Microsoft Support — Search for Teams high-fidelity music mode](https://support.microsoft.com/en-us/search/results?query=Teams%20high%20fidelity%20music%20mode)
- [Microsoft Support — Search for Teams noise suppression](https://support.microsoft.com/en-us/search/results?query=Teams%20noise%20suppression)
