# Introduction

We are using an *R* package called *bookdown* to produce our books. A major advantage of this approach is that it allows us to automatically produce .html output for interactive use, a .pdf version for offline viewing, and an .epub version for mobile devices. To illustrate, you can check out three versions of our book:

* [Online Version from R Bookdown](http://instruction.bus.wisc.edu/jfrees/UWCAELearn/LossDataAnalytics/index.html) 
* [R Bookdown - pdf version](http://instruction.bus.wisc.edu/jfrees/UWCAELearn/LossDataAnalytics/LossDataAnalytics.pdf)
* [R Bookdown - EPUB version](http://instruction.bus.wisc.edu/jfrees/UWCAELearn/LossDataAnalytics/LossDataAnalytics.epub)

For end users (especially students), you can direct them to these sites and you are done. However, many others will wish to adapt our materials for their own use and (hopefully) contribute improvements to the the project. By downloading/cloning this GitHub site, you have all the source materials needed to replicate the book.

Assuming that you wish to adapt the material, the next thing to do is to read our [licensing information](http:../LICENSE.md). Essentially, you are free to use all the material on this site for non-commerical purposes. Just tell people where you got the materials.

## GitHub Site Structure

The root directory of our *GitHub* is messy in that it contains many small files that you probably will not want to spend time on. Many of these files are critical for compiling the text using *R bookdown* so we left them here. For making changes, you will want to start with the folders/directors:
* *Bibliography* - reference files
* *Chapters* - the actual content of the chapters
* *Data* - data sets
* *Figures*, *Figures4* (the latter is figures for chapter 4)
* *GettingStarted* - this file and others to help you start

The other folders are output from the compiled version of the book.

## The First Compile
Here is a set of procedures needed to compile these files. There are many ways to do so, this is one set that works. This assumes that you are working with *R Studio* in a Windows operating system.

1. Get the latest version of *R-studio* (>1.0) and *R*
2. install the packages "markdown" and "bookdown". For this book, you also need the packages "VGAM" and "doBy", "pander"", "moments"" (and probably a few others)
3. install *Miktek 2.9* or above

Note: you need to ensure that *latex/miktek* and *R* are talking to one another. I (Jed) just wound up re-installing miktek. There are probably better ways of doing this but this seems to work.

4. Download the repository.
5. Within your local folder, open *Rstudio* and *R* by double-clicking on the *R* Project file "LossDataAnalyticsRcodeVer1.0.Rproj"
6. Also open "index.Rmd" in *Rstudio* (by double-clicking...)
7. Go to Tools ==> Project Options ==> Sweave and select *Typeset LaTex into PDF using XeLateX*. (Also, make sure that under Tools ==> Project Options ==> Build Tools that *Build Project Tools: Website* is selected, sometimes that seems to get reset....)
8. In the upper right hand corner, select the "Build" tab. From there, hit *Build Book*

Hopefully you are done. 

## Making Changes

The next step is to upload your changes to this repository in GitHub. Need some instructions for doing that...

## Word Files

You may have some notes written in *Microsoft Word* that you wish to convert to the *R markdown* format that we are using. We have a bit of experience in this process - see our overview in the file *ConvertingWordFiles*. 
