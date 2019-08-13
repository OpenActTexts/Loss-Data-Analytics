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

### How to contribute via Linux

1. In order to contribute to any Github repo in general, and the actuarial open book project in particular, it is strongly recommended that you familiarize yourself with a linux system such as Ubuntu 16.04/18.04. If you have never used linux, there would be some learning curves, but the long term benefit is very clear: as long as you are interested in data science, open source software, and scientific computing, getting used to the linux-based environment is critically important! Why not start right now. If you still need your Windows system etc., you can at least try using [virtualbox](https://www.virtualbox.org/) with a Ubuntu system as the guest operation system.

2. Now assume that you are working with a linux terminal, and the following steps will let you get started.
    + Create a github account, and fork the most current officially released repo of the open book
    + Install `git` if you haven't (just use the command 'git' on your local terminal, and the terminal will tell you what to do next)
    + In a local folder that is devoted to your various git projects, do the following with a terminal:
        + `git clone [the URL address of the most current officially released repo]`
        + `cd Loss-Data-Analytics`
    + Then follow the document [here](https://gist.github.com/Chaser324/ce0505fbed06b947d962) until the 'submit' step [here](https://gist.github.com/Chaser324/ce0505fbed06b947d962#submitting). After you submit your pull request, relax and someone will take care of your request.
    + You need to work with your own forked repo and do whatever you want before pulling request.
    + If you choose to build the book, the following R packages will be required and can be installed by running:
      ```{r}
      install.packages(c("doBy", "ggplot2", "VGAM", "MASS", "actuar", "alabama", "epitools", "pander", "Deducer", "psych", "copula", "GB2", "statmod", "numDeriv"))
      ```
    + Use the following steps to knit your local books to check if you are satisfied with whatever you have edited/added.
        + With the terminal and in your Loss-Data-Analytics folder, do `git checkout [your local branch for development]` and follow the aforementioned [document](https://gist.github.com/Chaser324/ce0505fbed06b947d962) if you haven't done so.
        + `install.packages("bookdown")` in RStudio
        + Open the file `Loss-Data-Analytics.Rproj` in RStudio
        + Open the file `index.Rmd` in Rstudio
        + Click the button `Build Book` on the `Build` tab of RStudio
    + If you are not ready to make contributions directly by pulling request, you can simply initialize an issue report by clicking [here](https://github.com/OpenActTexts/Loss-Data-Analytics/issues/new). Then relax, and someone will take care of it from there.

3. Get yourself started, and it might be much easier than what you have thought. Enjoy gitting!


## Making Your Changes Public

The next step is to upload your changes to this repository in GitHub and so you will need to learn about GitHub. We recommend the site
[Happy Git and GitHub for the useR](http://happygitwithr.com/).

## Word Files

You may have some notes written in *Microsoft Word* that you wish to convert to the *R markdown* format that we are using. We have a bit of experience in this process - see our overview in the file *ConvertingWordFiles*. 
