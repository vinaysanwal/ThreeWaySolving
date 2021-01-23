# class Solution(object):
#     def convert(s, numRows):
#         return s[::numRows * 2 - 2] + ''.join([l + s[numRows * 2 - i - 2::numRows * 2 - 2][k] if k < len(s[numRows * 2 - i - 2::numRows * 2 - 2]) else l for i in range(1, numRows-1) for k, l in enumerate(s[i::numRows * 2 - 2])]) + s[numRows - 1::numRows * 2 - 2] if numRows > 1 else s


#Second
# class Solution(object):
#     def convert(s, numRows):
#         if numRows == 1:
#             return s

#         ret = ""
#         ls = len(s)

#         curRow = 0
#         while curRow < numRows:
#             for i in range(curRow, ls, 2 * numRows - 2):
#                 ret += s[i]
#                 if curRow > 0 and curRow < numRows - 1 and i + 2 * (numRows - curRow) - 2 < ls:
#                     ret += s[i + 2 * (numRows - curRow) - 2]

#             curRow += 1
    
#         return ret


#Third Solution
class Solution(object):
    def convert(s, numRows):
        idx = [i for i in range(numRows)]+[i for i in range(-2,-1*numRows,-1)] 
        l, strs = len(idx), ['' for _ in range(numRows)]
        for i,c in enumerate(s):
            strs[idx[i%l]] += c
        return ''.join(strs)

    s = "PAYPALISHIRING"
    numRows = 5
    y = convert( s,numRows)
    print (y)