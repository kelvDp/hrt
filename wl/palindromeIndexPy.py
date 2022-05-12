def palindromeIndex(s):

    reversedWord = s[::-1]

    if (s == reversedWord):
        return -1

    n = len(s)

    for i in range(n // 2):
        if s[i] != s[n - 1 - i]:
            if s[i: n - 1 - i] == s[i: n - 1 - i][:: -1]:
                return n - 1 - i
            elif s[i + 1: n - i] == s[i + 1: n - i][:: -1]:
                return i
    
    return -1


if __name__ == "__main__":

    answer = palindromeIndex("rotto")
    print(answer)
    answer2 = palindromeIndex("aaab")
    answer3 = palindromeIndex("aaab")
    answer4 = palindromeIndex("sorost")
    print(answer2)
    print(answer3)
    print(answer4)