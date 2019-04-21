# serieAgenerator
![](https://img.shields.io/github/languages/code-size/eltarsilence/serieAgenerator.svg) 
![](https://img.shields.io/badge/language-JavaScript-yellow.svg) 
![](https://img.shields.io/badge/idea-Numberphile_video-green.svg) 
![](https://img.shields.io/badge/weakness-to_be_fixed-critical.svg)
 
A simulation of a bunch of new Serie A football leagues, seeing then the final score table and analyzing data.

------------

### Requirements
###### Those are included in the ` index.html ` file.
| Resource |  URL |
| ------------ | ------------ |
|  Sorting Algorithms  | https://cdn.rawgit.com/peterkhayes/multisort/master/multisort.js   |
| Random JS  |  (not implemented yet)   |

### How the algorithm works
Given an array of teams and them *strength value*, the system will compute each match result, according to a probability distribution as follows:

We define a *triplet* as:

| Prob(team1 wins)  | Prob(draw)  | Prob(team2 wins)  |
| ------------ | ------------ | ------------ |
|*% Amount*  | *% Amount* | *% Amount*  | 

###### Given `y = abs(strength1 - strength2)`

###### Designed probability distribution (scaling function)
| y Value  | Situation  | Triplet of % | 
| ------------ | ------------ | ------------ |
| 0 > y > 10  | Balanced match  |  40, 20, 40  |
|  10 > y > 20  | Almost balanced match  | 55, 20, 25 |
|  20 > y > 30 |  Quite balanced match | 62, 16, 22 |
| 30 > y > 40   | Quite spaced teams match | 75, 15, 10 |
| 40 > y > 50 |  Spaced teams match | 80, 13, 7 |
| y > 50 | Very spaced teams match | 86, 12, 2 |

Correcting then the triplet using when necessary `triplet.reverse()` to assign to the best team the better probability of victory.

The goal generation is randomly chosen between 0 and 3, with the chance of 5% of getting a random value between 0 and 6.

For each match, the system calculates score differences, how many wins, how many loses, and updates the points of the team.

Once the match generation is finished, a final score high quality-sorted vector is outputted.

### Weaknesses
Obviously there is a possibility to reiterate many SerieAs, but the standard Math.random() generation is poor, letting win always the same team or so.

### Screenshots
![Screenshot](https://i.gyazo.com/6777ba2f7dd3988af2311db4cb439d49.png)
![Screenshot](https://i.gyazo.com/f7df4ef6d62570ec5c93e756c8a99188.png)
![Screenshot](https://i.gyazo.com/7ec314d54ae05e1dbd007c27cfdb5fe9.png)

