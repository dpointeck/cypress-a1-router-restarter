# Use cypress to restart a A1 router

I had the problem that during the day the bandwidth of our internet connection decreased.
The customer support told me to restart the router so that it has to reconnect to the LTE network.
So I made this little project to automatically restart the router twice a day via crontab.

```zsh
# the first time you use this you need to install the node packages
npm install
# to start cypress type this
npx mix cypress run --headless
```