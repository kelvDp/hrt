def ceaserCipher(s, k):
    encrypted_string = ''
    for c in s:
        if (ord(c) >= 65 and ord(c) <= 90):
            shifted_char = (ord(c) + k - 65) % 26
            encrypted_string += chr(shifted_char + 65)
        elif (ord(c) >= 97 and ord(c) <= 122):
            shifted_char = (ord(c) + k - 97) % 26
            encrypted_string += chr(shifted_char + 97)
        else:
            encrypted_string += c

    print(encrypted_string)     
    return encrypted_string

# print(ceaserCipher('middle-Outz', 2))
ceaserCipher('middle-Outz', 2)