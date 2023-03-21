# Working in a Google Cloud VM
Whilst cloning via `https` might just work, for `ssh` you will need to configure the firewall.

```bash
# https
git clone https://gitlab.com/germs-dev/deanturpin.git

# ssh
git clone git@gitlab.com:germs-dev/deanturpin.git
```

## Testing your ssh connection setup
```bash
ssh -Tvvv git@gitlab.com
```
