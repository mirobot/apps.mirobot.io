# Mirobot Apps

**Note: Mirobot is no longer supported - however, you can use these apps by visiting [http://mirobot.github.io/apps.mirobot.io](http://mirobot.github.io/apps.mirobot.io)**

This is the repository for Mirobot apps, whick is [hosted here](http://apps.mirobot.io). New apps are welcome, see below for how to get started.

# Contributing

Mirobot apps is a [Jekyll](http://jekyllrb.com/) project which means it's quite straightforward to add apps as you create them. Here's how to get started:

1. Fork the repository into your own GitHub account (just click the fork button at the top of the page)

2. Check out the repository from your account to your local computer

3. Optionally create a branch to work on your new app in (git checkout -b <your-branch-name>)

4. Add an app html file into the \_apps directory like the others. It's easiest to just copy the point and click app as that's relatively simple

5. Create a directory in the assets/apps directory that mathces the name you gave your app - this can contain all of your assets like css and javascript files. At a minimum it should contain a 250px x 250px jpeg image called icon.jpg which will be used in the index listing.

6. Everything is static so you'll only be able to use Javascript but since that's what Mirobot uses to communicate that should be enough. There are two automatically included Javascript libraries which make your life easier. mirobot.js handles all communication with Mirobot and mirobot-app.js which sets up the connection and autoconfigures it based on the address in the URL. The way to set up your app is like this:

   // This is your app ready to receive a mirobot object once it is set up
   var t = new Turtle(document.getElementById('turtle'));
   // MirobotApp sets up the connection to mirobot and hands you an object once it's done
   var app = new MirobotApp(function(mirobot){
   t.setMirobot(mirobot);
   });

7. Ideally, users should be able to use your app without a mirobot connection to get a feel for what it does so try not to wait until it has connected to do all of the setup. See the other examples.

8. Once you're happy with your app, push it to your repository and submit a pull request to get it included.

9. Thanks for contributing to the Mirobot community!
