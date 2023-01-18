# Host a Jekyll website on GitLab
You can create it from a template but still.

See [the official docs](https://jekyllrb.com/docs/installation/ubuntu/).

## Install
```bash
sudo apt install --yes ruby-full build-essential zlib1g-dev

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install jekyll bundler
```

## Create a blog
```bash
jekyll new blogmeup
cd blogmeup/
bundle exec jekyll serve
```

It will tell you where it's getting served.
```bash
Server address: http://127.0.0.1:4000/
```

