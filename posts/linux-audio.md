# Linux audio

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
