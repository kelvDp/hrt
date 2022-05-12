def maxMin(k, arr):
    arr.sort()
    k -= 1
    
    # print(arr[:k])

    # return max(arr[:k]) - min(arr[:k])
    answer = min(arr[i+k] - arr[i] for i in range(len(arr)-k))
    return answer

answer = maxMin(3, [1,2,3,9,5,6])

print(answer)