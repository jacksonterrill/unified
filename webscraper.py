from selenium import webdriver

collegeData = open("CollegeData.txt","w")

PATH = "C:/Users/Jackson Terrill/Google Drive (21jacksonterrill@lindberghschools.ws)/CS Solutions/IA Problem/chromedriver.exe"


# (School Name, US News URL, Google URL)
collegeList = [
("Princeton University","https://www.usnews.com/best-colleges/princeton-university-2627","https://www.google.com/search?q=princeton","https://www.collegedata.com/college-search/princeton-university/admission","https://datausa.io/profile/university/princeton-university"),
("Harvard University","https://www.usnews.com/best-colleges/harvard-university-2155","https://www.google.com/search?q=harvard","https://www.collegedata.com/college-search/harvard-college/admission","https://datausa.io/profile/university/harvard-university"),
("Columbia University","https://www.usnews.com/best-colleges/columbia-university-2707","https://www.google.com/search?q=columbia+university","https://www.collegedata.com/college-search/columbia-university/admission","https://datausa.io/profile/university/columbia-university-in-the-city-of-new-york"),
("Massachusetts Institute of Technology","https://www.usnews.com/best-colleges/massachusetts-institute-of-technology-2178","https://www.google.com/search?q=mit","https://www.collegedata.com/college-search/massachusetts-institute-of-technology/admission","https://datausa.io/profile/university/massachusetts-institute-of-technology"),
("Yale University","https://www.usnews.com/best-colleges/yale-university-1426","https://www.google.com/search?q=yale","https://www.collegedata.com/college-search/yale-university/admission","https://datausa.io/profile/university/yale-university"),
("Stanford University","https://www.usnews.com/best-colleges/stanford-university-1305","https://www.google.com/search?q=stanford","https://www.collegedata.com/college-search/stanford-university/admission","https://datausa.io/profile/university/stanford-university"),
("University of Chicago","https://www.usnews.com/best-colleges/university-of-chicago-1774","https://www.google.com/search?q=university+of+chicago","https://www.collegedata.com/college-search/university-of-chicago/admission","https://datausa.io/profile/university/university-of-chicago"),
("University of Pennsylvania","https://www.usnews.com/best-colleges/university-of-pennsylvania-3378","https://www.google.com/search?q=university+of+pennsylvania","https://www.collegedata.com/college-search/university-of-pennsylvania/admission","https://datausa.io/profile/university/university-of-pennsylvania"),
("California Institute of Technology","https://www.usnews.com/best-colleges/california-institute-of-technology-1131","https://www.google.com/search?q=caltech","https://www.collegedata.com/college-search/california-institute-of-technology/admission","https://datausa.io/profile/university/california-institute-of-technology"),
("Johns Hopkins University","https://www.usnews.com/best-colleges/jhu-2077","https://www.google.com/search?q=jhu","https://www.collegedata.com/college-search/johns-hopkins-university/admission","https://datausa.io/profile/university/johns-hopkins-university"),
("Northwestern University","https://www.usnews.com/best-colleges/northwestern-university-1739","https://www.google.com/search?q=northwestern+university","https://www.collegedata.com/college-search/northwestern-university/admission","https://datausa.io/profile/university/northwestern-university"),
("Duke University","https://www.usnews.com/best-colleges/duke-university-2920","https://www.google.com/search?q=duke+university","https://www.collegedata.com/college-search/duke-university/admission","https://datausa.io/profile/university/duke-university"),
("Dartmouth College","https://www.usnews.com/best-colleges/dartmouth-college-2573","https://www.google.com/search?q=dartmouth+college","https://www.collegedata.com/college-search/dartmouth-college/admission","https://datausa.io/profile/university/dartmouth-college"),
("Brown University","https://www.usnews.com/best-colleges/brown-university-3401","https://www.google.com/search?q=brown+university","https://www.collegedata.com/college-search/brown-university/admission","https://datausa.io/profile/university/brown-university"),
("Vanderbilt University","https://www.usnews.com/best-colleges/vanderbilt-3535","https://www.google.com/search?q=vanderbilt","https://www.collegedata.com/college-search/vanderbilt-university/admission","https://datausa.io/profile/university/vanderbilt-university"),
("Rice University","https://www.usnews.com/best-colleges/rice-3604","https://www.google.com/search?q=rice+university","https://www.collegedata.com/college-search/rice-university/admission","https://datausa.io/profile/university/rice-university"),
("Washington University in Saint Louis","https://www.usnews.com/best-colleges/washington-university-in-st-louis-2520","https://www.google.com/search?q=washington+university","https://www.collegedata.com/college-search/washington-university-in-st-louis/admission","https://datausa.io/profile/university/washington-university-in-st-louis"),
("Cornell University","https://www.usnews.com/best-colleges/cornell-university-2711","https://www.google.com/search?q=cornell","https://www.collegedata.com/college-search/cornell-university/admission","https://datausa.io/profile/university/cornell-university"),
("University of Notre Dame","https://www.usnews.com/best-colleges/university-of-notre-dame-1840","https://www.google.com/search?q=university+of+notre+dame","https://www.collegedata.com/college-search/university-of-notre-dame/admission","https://datausa.io/profile/university/university-of-notre-dame"),
("University of California - Los Angeles","https://www.usnews.com/best-colleges/university-of-california-los-angeles-1315","https://www.google.com/search?q=ucla","https://www.collegedata.com/college-search/university-of-california-los-angeles/admission","https://datausa.io/profile/university/university-of-california-los-angeles")
]

def addSchool(i):
		line = ""
		driver = webdriver.Chrome(PATH)

		schoolName = i[0]

		driver.get(i[1])
		try: 
			ranking = driver.find_element_by_xpath('//*[@id="app"]/div/div[4]/div[3]/div/div/div/div[2]/div[1]/div[2]/p[3]/span/span[1]').text
		except:
			ranking = "N/A"

		driver.get(i[2])
		try:
			fullCost = driver.find_element_by_xpath('//*[@id="kp-wp-tab-overview"]/div[1]/div/div/div/div/div[6]/div/div[1]/div[2]/div[1]/div[2]').text
			avgCost = driver.find_element_by_xpath('//*[@id="kp-wp-tab-overview"]/div[1]/div/div/div/div/div[6]/div/div[1]/div[2]/div[2]/div[2]').text
		except:
			fullCost = "N/A"
			avgCost = "N/A"

		driver.get(i[3])
		try:
			applicants = driver.find_element_by_xpath('//*[@id="app-container"]/div/div/div[2]/div[1]/div/div[4]/div[2]/div[3]/div/div[1]/div/div[2]').text
			applicantsSplit = applicants.split()
			admitted = driver.find_element_by_xpath('//*[@id="app-container"]/div/div/div[2]/div[1]/div/div[4]/div[2]/div[3]/div/div[2]/div/div[2]').text
			admittedSplit = admitted.split()
			numStudents = applicantsSplit[2] + ', ' + admittedSplit[3] + ', ' + admittedSplit[0]
			acceptRate = applicantsSplit[0]
		except:
			numStudents = "N/A"
			acceptRate = "N/A"

		try:
			satMath = driver.find_element_by_xpath('//*[@id="app-container"]/div/div/div[2]/div[1]/div/div[4]/div[2]/div[3]/div/div[6]/div/div[1]').text
			satMathSplit = satMath.split()
			satEng = driver.find_element_by_xpath('//*[@id="app-container"]/div/div/div[2]/div[1]/div/div[4]/div[2]/div[3]/div/div[7]/div/div[1]').text
			satEngSplit = satEng.split()
			sat = str(int(satMathSplit[4][:3]) + int(satEngSplit[4][:3])) + ', ' + str(int(satMathSplit[2]) + int(satEngSplit[2])) + ', ' + str(int(satMathSplit[4][4:]) + int(satEngSplit[4][4:]))
		except:
			sat = "N/A"

		try:
			actRaw = driver.find_element_by_xpath('//*[@id="app-container"]/div/div/div[2]/div[1]/div/div[4]/div[2]/div[3]/div/div[9]/div/div[1]').text
			actSplit = actRaw.split()
			act = actSplit[2][:2] + ', ' + actSplit[0] + ', ' + actSplit[2][3:]
		except:
			act = "N/A"

		try:
			male = driver.find_element_by_xpath('//*[@id="app-container"]/div/div/div[2]/div[1]/div/div[4]/div[2]/div[3]/div/div[2]/div/div[5]/div[2]/div').text
			female = driver.find_element_by_xpath('//*[@id="app-container"]/div/div/div[2]/div[1]/div/div[4]/div[2]/div[3]/div/div[2]/div/div[4]/div[2]/div[1]').text
			maleSplit = male.split()
			femaleSplit = female.split()
			gender = str(int((float(maleSplit[0].replace(',',''))/float(admittedSplit[0].replace(',','')))*100)) + '% / ' + str(int((float(femaleSplit[0].replace(',',''))/float(admittedSplit[0].replace(',','')))*100)) + '%'
		except:
			gender = "N/A"

		driver.get(i[4])
		try:
			gradRate = driver.find_element_by_xpath('//*[@id="Splash"]/div[5]/div/div[6]/div[2]').text
		except:
			gradRate = "N/A"
		driver.quit()
		
		driver = webdriver.Chrome(PATH)
		driver.get(i[1] + "/academics")
		try:
			facultyRatio = driver.find_element_by_xpath('//*[@id="app"]/div/div[4]/div[3]/div/div/div/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr[1]/div/a[2]').text
		except:
			gradRate = "N/A"
		driver.quit()

		line = schoolName + "|" + ranking + "|" + fullCost + "|" + avgCost + "|" + acceptRate + "|" + numStudents + "|" + sat + "|" + act + "|" + gender + "|" + gradRate + "|" + facultyRatio + "|"
		return line

for i in collegeList:
	collegeData.write(addSchool(i)+'\n')
	print(i[0] + ' added')
print("Web Scrape Complete")
collegeData.close()
