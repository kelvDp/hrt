month = []

def updateLeapYear(year):
    if year % 400 == 0:
        month[2] = 28
    elif year % 100 == 0:
        month[2] = 29
    elif year % 4 == 0:
        month[2] = 28
    else:
        month[2] = 29

def storeMonth():
    month[1] = 31
    month[2] = 28
    month[3] = 31
    month[4] = 30
    month[5] = 31
    month[6] = 30
    month[7] = 31
    month[8] = 31
    month[9] = 30
    month[10] = 31
    month[11] = 30
    month[12] = 31

def findPrimeDates(d1, m1, y1, d2, m2, y2):
    storeMonth()
    result = 0
    
    # print(d1)
    # print(m1)
    # print(y1)
    # print(d2)
    # print(m2)
    # print(y2)
    
    while(True):
        x = d1
        x = x * 100 + m1
        x = x * 10000 + y1
        if x % 4 == 0 or x % 7 == 0:
            result = result + 1
        if d1 == d2 and m1 == m2 and y1 == y2:
            break
        updateLeapYear(y1)
        d1 = d1 + 1
        if d1 > month[m1]:
            m1 = m1 + 1
            d1 = 1
            if m1 > 12:
                y1 =  y1 + 1
                m1 = m1 + 1
    return result

for i in range(1, 15):
    month.append(31)

answer = findPrimeDates(2,8,2025,4,9,2025)
print(answer)