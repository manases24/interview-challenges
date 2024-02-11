# Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
# Print the decimal value of each fraction on a new line with 6 places after the decimal.
# Example
# arr = [1,1,0,-1,-1]

# There are n=5 elements, two positive, two negative and one zero.
# Their ratios are 2/5=0.400000, 2/5=0.400000 and 1/5=0.200000. Results are printed as:

# 0.400000
# 0.400000
# 0.200000

def plusMinus(arr)
    arr_size = arr.length.to_f
    pos_ratio = arr.count { |i| i > 0 } / arr_size
    neg_ratio = arr.count { |i| i < 0 } / arr_size
    zero_ratio = arr.count { |i| i == 0 } / arr_size

    puts "%0.6f" % pos_ratio
    puts "%0.6f" % neg_ratio
    puts "%0.6f" % zero_ratio
end

plus_minus([1, 1, 0, -1, -1])
