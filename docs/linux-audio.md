- [Enable high quality audio](https://medium.com/@gamunu/enable-high-quality-audio-on-linux-6f16f3fe7e1f)

## Web applications

- [Wavacity](https://wavacity.com/): Audacity in the web browser
- [AutoEg](https://autoeq.app/): common pro headphone profiles in various formats

## Finding your Tidal API token

_Note: this no longer works in the app in 2023._

- Install Tidal on your Android phone and login
- Connect your phone to your Linux computer via USB and make sure it's allowing file transfer
- Navigate to `/Android/data/com.aspiro.tidal/cache/okhttp` in a file browser
- Open a terminal here (the full path will be something crazy)
- `grep -r "X-Tidal-Token"`

## Mimi on Tidal web player

- Insert DragonFly DAC
- Install Mimi and test your hearing
- Create account
- Install the Mimi Chrome extension and log in
- Enable in the extension and enjoy Tidal with your hearing profile

Additionally, if your DAC isn't changing sample rate (or is stuck on 48000) you can do it on the command line.

```bash
# dump all settings
pw-metadata -n settings n
```

```bash
# set clock rate
pw-metadata -n settings 0 clock.force-rate 44100
pw-metadata -n settings 0 clock.allowed-rates = [44100,48000,96000]
```

```bash
┌──────────────────────┐
│Tidal (Chrome player) │
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│Mimi                  │
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│Easy Effects          │
└──────────────────────┘
```

