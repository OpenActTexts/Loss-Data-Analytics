
# Open Actuarial Textbooks Project Goal
The goal is to have the actuarial community author our textbooks in a collaborative fashion. *GitHub* provides a natural development environment to achieve this goal. See the [Open Actuarial Textbooks Project Site](https://OpenActTexts.github.io) for more information about this project.

## Loss Data Analytics

### Book Description
*Loss Data Analytics* will be an interactive, online, freely available text.
* The online version will contain many interactive objects (quizzes, computer demonstrations, interactive graphs, video, and the like) to promote deeper learning.
* A subset of the book will be available for offline reading in pdf and EPUB formats.
* The online text will be available in multiple languages to promote access to a worldwide audience.

To see our progress, a draft of the book is available at
* [Online Version](https://OpenActTexts.github.io/Loss-Data-Analytics/index.html)
* [pdf version](https://github.com/OpenActTexts/Loss-Data-Analytics/blob/master/Offline/LossDataAnalytics.pdf)
* [EPUB version](https://github.com/OpenActTexts/Loss-Data-Analytics/blob/master/Offline/LossDataAnalytics.epub)

Source code is available at our [GitHub site](https://github.com/OpenActTexts/Loss-Data-Analytics).

Prospective contributors should check out our [Style Guide](https://OpenActTexts.github.io/StyleGuideLDA/index.html)

### How to contribute
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
