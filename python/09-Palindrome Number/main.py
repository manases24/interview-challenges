class Solution:
    def isPalindrome(self, x: int) -> bool:
        start_i = 0
        end_i = len(str(x)) - 1
        while start_i < end_i:
            if x[start_i] == x[end_i]:
                start_i+=1
                end_i-=1
            else: 
                return False 
        return True


        


  