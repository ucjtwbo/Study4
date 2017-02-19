setwd("~/htdocs/Study4/")

errors <- read.csv( 'errors.csv' )
results <- read.csv( 'master.csv' )


results$IAC = factor(results$IAC, levels = c("low", "high"))
results$ParticipantID = factor(rep(results$ParticipantID)) 


errors$IAC = factor(errors$IAC, levels = c("low", "high"))
errors$ParticipantID = factor(rep(errors$ParticipantID)) 

a <- results$TimeTaken[results$IAC == 'high' & results$EventType == 'visit']
b <-results$TimeTaken[results$IAC == 'low' & results$EventType == 'visit']

a <- errors$TimeTaken[errors$IAC == 'low']
b <- errors$TimeTaken[errors$IAC == 'high'] 
t.test(a,b, paired=TRUE)


visitData <- subset (results, results$EventType == "visit")

lowVisit <- visitData$TimeTaken[visitData$IAC == 'low']
highVisit <- visitData$TimeTaken[visitData$IAC == 'high']

mean(lowVisit, na.rm=TRUE)
mean(highVisit, na.rm=TRUE)
