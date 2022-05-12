# def findZigZagSequence(a, n):
#     a.sort()
#     mid = int(((n + 1) / 2) - 1)
#     a[mid], a[n - 1] = a[n - 1] ,a[mid]

#     st = mid + 1
#     ed = n - 2

#     while(st <= ed):
#         a[st], a[ed] = a[ed], a[st]

#         st = st + 1
#         ed = ed - 1

#     for i in range(n):
#         if i == n - 1:
#             print(a[i])
#         else:
#             print(a[i], end= ' ')
#     return

def findZigZagSequence(a, n):
    a.sort()
    mid = int(((n + 1)/2)-1)
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return

def findZigZagSequence2(a, n):
    a.sort()
    mid = int((n + 1)/2)
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 1
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed + 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return

if __name__ == "__main__":


    # testArr = [2,3,5,1,4]
    testArr = [1,2,3,4,5,6,7]
    length = len(testArr)

    # findZigZagSequence2(testArr, length)
    findZigZagSequence(testArr, length)