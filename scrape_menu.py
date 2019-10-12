"""	Julie Yeung and Maria Kim
	This data-scraping component was made to compliment the 
	Native React JS component that we had used to make 
	an app prototype. 

	This code takes the menu from Tufts's Carmichael Dining Hall
	and turns each line from the menu into an indexable list object.

	Can adjust the "Pancake" value below to any food to "search"
	for the desired food item in a primitive way. 

"""

from bs4 import BeautifulSoup
import requests

# Source: https://towardsdatascience.com/how-to-web-scrape-with-python-in-4-minutes-bc49186a8460
# Corey Shafer's tutorials are great: https://www.youtube.com/watch?v=Uh2ebFW8OYM
# Storing file contents as list, line by line:  
# # https://qiita.com/visualskyrim/items/1922429a07ca5f974467

source = requests.get('http://menus.tufts.edu/foodpro/shortmenu.asp?sName=TUFTS+DINING&locationNum=09&locationName=Carmichael+Dining+Center&naFlag=1').text

soup = BeautifulSoup(source, 'lxml').text
fileName = 'menu.txt'
		
lines = [line.rstrip('\n') for line in open(fileName)]
for i in lines:
	if("Pancake" in i):
		print(i)

