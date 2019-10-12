from bs4 import BeautifulSoup
import requests 
import array as arr

# Source: https://towardsdatascience.com/how-to-web-scrape-with-python-in-4-minutes-bc49186a8460

source = requests.get('http://menus.tufts.edu/foodpro/shortmenu.asp?sName=TUFTS+DINING&locationNum=09&locationName=Carmichael+Dining+Center&naFlag=1').text

soup = BeautifulSoup(source, 'lxml').text
fileName = 'menu.txt'

#write scraped data into text file
# with open (fileName,'w+') as f: 
	# f.write(soup)
	# for line in f:
		# https://qiita.com/visualskyrim/items/1922429a07ca5f974467
lines = [line.rstrip('\n') for line in open(fileName)]
for i in lines:
	if("Pizza" in i):
		# print(lines.index('Strawberry'))
		print(i)

# print(lines)

# print(lines[388])

