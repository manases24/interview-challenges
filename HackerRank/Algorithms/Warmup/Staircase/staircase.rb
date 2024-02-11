# Staircase detail
# This is a staircase of size n = 4

   #
  ##
 ###
####

# Write a program that prints a staircase of size n

def staircase(n)
  (1..n).each do |i|
    spaces = " " * (n-i)
    hashtags = "#" * i
    puts spaces + hashtags
  end

end

staircase(5)
