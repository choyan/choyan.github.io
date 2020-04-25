---
layout: post
title: "Downloading mp3 from Youtube with Youtube-dl and Bash"
date: 2020-04-15 12:18:02 +0300
tags: [Tech, Bash]
---

I was tired of searching for online tools to download youtube lectures as mp3. First of all, It was not an efficient 
solution and secondly every now and then some of the domains were getting blocked or were expired. And extensions also had
the same kind of problems as well.

Today edited my previously wrotten oneline Youtube-dl mp4 downloader bash command to download mp3 from Youtube.

# Installing Youtube-dl
Installing youtube-dl in Ubuntu is very straight forward. Just copy and paste this two command into your terminal. It'll be installed.
```
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
```

# Downloading audio
Basically it is a simple bash function. It will only take one argument which is your youtube video link.

![Bash function for youtube-dl mp3](/assets/img/article/bash-youtube-mp3.png)

```
ymp3() {
	youtube-dl -x --embed-thumbnail --audio-format mp3 "$1"
}
```

Copy the code above and paste it to the other alias inside of your `.bashrc` / `.zshrc` file. Now restart your terminal. 

If your desired Youtube video is this. `https://www.youtube.com/watch?v=-_1DQzh3GDY`, then you can just type 

```
ymp3 https://www.youtube.com/watch?v=-_1DQzh3GDY
```

If the command doesn't finish successfully and you find any error like `ERROR: ffprobe/avprobe and ffmpeg/avconv not found. Please install one.`, you have to install an additional package the continue. To instal that package, type
```
sudo apt-get install ffmpeg
```
After the installataion try downloading your audio again with previous command.
When the task is finished you will find your desired mp3 with thumbnail included 😎️