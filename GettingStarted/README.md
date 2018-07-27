# Introduction

We are using an *R* package called *bookdown* to produce our books. A major advantage of this approach is that it allows us to automatically produce .html output for interactive use, a .pdf version for offline viewing, and an .epub version for mobile devices. You can see these at our [Open Actuarial Textbooks Project GitHub Landing Site](https://ewfrees.github.io/). 

For end users (especially students), you can direct them to these sites and you are done. However, others will wish to adapt our materials for their own use and (hopefully) contribute improvements to the the project. By downloading/cloning this GitHub site, you have all the source materials needed to replicate the book.

Assuming that you wish to adapt the material, the next thing to do is to read our [licensing information](http:../LICENSE.md). Essentially, you are free to use all the material on this site for non-commerical purposes. Just tell people where you got the materials.

## GitHub Site Structure

The root directory of our *GitHub* is messy in that it contains many small files that you probably will not want to spend time on. Many of these files are critical for compiling the text using *R bookdown* so we left them here. For making changes, you will want to start with the folders/directors:
* *Bibliography* - reference files
* *Chapters* - the actual content of the chapters
* *Data* - data sets
* *Figures* (figures that were not generated on the fly using `R`)
* *GettingStarted* - this file and others to help you start

The other folders are output from the compiled version of the book.

## Making Changes to a Chapter

You may to want to make changes to a specific chapter, just to get a feel for things. In this case, you can use the following process to do so using only *markdown*, not the more complete *bookdown* package.

1. Get the latest version of *R-studio* and *R*.
2. Download the *Loss Data Analytics* repository.
3. Create a new directory folder and put in it the *HeaderCode.Rmd* and the .Rmd file for the chapter that you wish to modify (in the "Chapters" folder), for example, "AggregateLossModels.Rmd".
4. Install the package *markdown*.
5. Open the chapter .Rmd file in Rstudio and insert the following code at the beginning of the file

``````
---
title: Chapter from Loss Data Analytics
output:
  html_document:
    toc: yes
    toc_depth: '3'
    number_sections: yes
---

```{r echo = FALSE}
INSTALLPACKAGES <- FALSE
# Remove the hashtag (#) if you want to install packages
#INSTALLPACKAGES <- TRUE
```

```{r child = 'HeaderCode.Rmd'}
```

``````

6. Hit the *knit* button to compile.

The HeaderCode.Rmd file contains some javascript and code to install needed `R` packages. 

Note that in step (5) is the opportunity to install packages. You will want to install these packages the first time that you run this by removing the hashtag (#). You only need to install the packages once.

This procedure should give you a version that you can compile, edit, and disseminate to others.


## Making Changes to the Book
Here is a set of procedures needed to compile the entire book. There are many ways to do so, this is one set that works. This assumes that you are working with *R Studio* in a Windows operating system.

1. Get the latest version of *R-studio* (>1.0) and *R*
2. install the packages *markdown* and *bookdown*. For this book, you also need the packages in the *HeaderCode.Rmd*.
3. install *Miktek 2.9* or above, needed for pdf/latex.

Note: you need to ensure that *latex/miktek* and *R* are talking to one another. If there are difficulties, you might just try re-installing miktek. There are probably better ways of doing this but this seems to work.

4. Download the  *Loss Data Analytics* repository.
5. Within your local folder, open *Rstudio* and *R* by double-clicking on the *R* Project file "Loss-Data-Analytics.Rproj"
6. Also open "index.Rmd" in *Rstudio* (by double-clicking...) just to see some options
7. Go to Tools ==> Project Options ==> Sweave and select *Typeset LaTex into PDF using XeLateX*. (Also, make sure that under Tools ==> Project Options ==> Build Tools that *Build Project Tools: Website* is selected, sometimes that seems to get reset....)
8. In the upper right hand corner, select the "Build" tab. From there, hit *Build Book*

Hopefully you are done. 

## Making Your Changes Public

The next step is to upload your changes to this repository in GitHub and so you will need to learn about GitHub. We recommend the site
[Happy Git and GitHub for the useR](http://happygitwithr.com/).

## Word Files

You may have some notes written in *Microsoft Word* that you wish to convert to the *R markdown* format that we are using. We have a bit of experience in this process - see our overview in the file *ConvertingWordFiles*. 
